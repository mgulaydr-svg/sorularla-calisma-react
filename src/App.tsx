import { useState, useEffect } from 'react';
import { QUESTIONS } from './utils/questions.js';
import { KEYS, readJson, writeJson } from './utils/storage.js';
import { auth, signInWithEmailAndPassword, signOut, onAuthStateChanged, db, collection, getDocs, doc, setDoc, writeBatch, deleteDoc } from './cloud.js';
import QuestionCard from './components/QuestionCard.jsx';
import Stats from './components/Stats.jsx';
import DataExport from './components/DataExport.jsx';
import Exam from './components/Exam.jsx';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [progress, setProgress] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionAnswers, setSessionAnswers] = useState({});
  const [currentMode, setCurrentMode] = useState('study');

  const [largeDeckFilter, setLargeDeckFilter] = useState('all');
  const [smallDeckFilter, setSmallDeckFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); 

  // 1. FIREBASE: UYGULAMA AÇILDIĞINDA SORULARI BULUTTAN ÇEK
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'questions'));
        if (!snapshot.empty) {
          const cloudData = snapshot.docs.map(d => d.data());
          setQuestions(cloudData);
        } else {
          setQuestions(QUESTIONS); // Bulut boşsa varsayılanı yükle
        }
      } catch (error) {
        console.error("Bulut bağlantı hatası, yerel veriler yükleniyor:", error);
        setQuestions(readJson(KEYS.bank, QUESTIONS));
      }
    };
    
    fetchQuestions();
    setProgress(readJson(KEYS.progress, {}));
  }, []);

  // 2. FIREBASE: YÖNETİCİ KONTROLÜ
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email === 'mgulaydr@gmail.com') setIsAdmin(true);
      else setIsAdmin(false);
    });
    return () => unsubscribe();
  }, []);

  const handleAdminLogin = () => {
    if (isAdmin) {
      signOut(auth).then(() => alert('Güvenli çıkış yapıldı.'));
    } else {
      const email = prompt("Yönetici E-posta Adresi:");
      if (!email) return;
      const password = prompt("Şifre:");
      if (!password) return;
      signInWithEmailAndPassword(auth, email, password)
        .then(() => alert('Yönetici girişi başarılı! Bulut yetkileri açıldı.'))
        .catch(error => alert('Giriş başarısız: ' + error.message));
    }
  };

  // 3. FIREBASE: TEK SORU GÜNCELLEME (QuestionCard'dan gelir)
  const handleSaveQuestion = async (updatedQuestion) => {
    const updatedPool = questions.map(q => q.id === updatedQuestion.id ? updatedQuestion : q);
    setQuestions(updatedPool);
    if (isAdmin) {
      try { await setDoc(doc(db, 'questions', updatedQuestion.id.toString()), updatedQuestion); } 
      catch (error) { console.error("Buluta kaydedilemedi", error); }
    }
  };

  // 4. FIREBASE: TOPLU GÜNCELLEME (DataExport'tan gelir)
  const handleSyncPool = async (newPool) => {
    setQuestions(newPool);
    if (isAdmin) {
      try {
        const batch = writeBatch(db);
        newPool.forEach(q => batch.set(doc(db, 'questions', q.id.toString()), q));
        await batch.commit();
        alert("Tüm değişiklikler başarıyla buluta eşitlendi!");
      } catch (error) { alert("Bulut eşitleme hatası: " + error.message); }
    }
  };

  // 5. FIREBASE: SORU SİLME (DataExport'tan gelir)
  const handleDeleteQuestion = async (id) => {
    const updatedPool = questions.filter(q => q.id !== id);
    setQuestions(updatedPool);
    if (isAdmin) {
      try { await deleteDoc(doc(db, 'questions', id.toString())); } 
      catch (error) { console.error("Buluttan silinemedi", error); }
    }
  };

  const filteredQuestions = questions.filter(q => {
    if (largeDeckFilter !== 'all' && q.largeDeck !== largeDeckFilter) return false;
    if (smallDeckFilter !== 'all' && q.smallDeck !== smallDeckFilter) return false;
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const textToSearch = `${q.question || ''} ${q.explanation || ''}`.toLowerCase();
      if (!textToSearch.includes(query)) return false;
    }
    return true;
  });

  useEffect(() => { setCurrentIndex(0); }, [largeDeckFilter, smallDeckFilter, searchQuery]);

  const handleAnswer = (letter) => {
    const currentQuestion = filteredQuestions[currentIndex];
    if (!currentQuestion) return;
    setSessionAnswers(prev => ({ ...prev, [currentQuestion.id]: letter }));
    const isCorrect = letter === currentQuestion.correct;
    setProgress(prevProgress => {
      const qProgress = prevProgress[currentQuestion.id] || { correct: 0, wrong: 0, learned: false };
      const newStats = { ...qProgress, correct: isCorrect ? qProgress.correct + 1 : qProgress.correct, wrong: !isCorrect ? qProgress.wrong + 1 : qProgress.wrong };
      newStats.learned = (newStats.correct - newStats.wrong) >= 3;
      const updatedProgress = { ...prevProgress, [currentQuestion.id]: newStats };
      writeJson(KEYS.progress, updatedProgress); // Öğrenci gelişimi yerelde kalıyor
      return updatedProgress;
    });
  };

  const handleNext = () => { if (currentIndex < filteredQuestions.length - 1) setCurrentIndex(prev => prev + 1); };
  const handlePrev = () => { if (currentIndex > 0) setCurrentIndex(prev => prev - 1); };

  if (questions.length === 0) return <div style={{ padding: '20px' }}>Yükleniyor...</div>;

  const currentQuestion = filteredQuestions[currentIndex];
  const currentSelectedAnswer = currentQuestion ? (sessionAnswers[currentQuestion.id] || null) : null;
  const currentDate = new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });

  const navItems = [
    { id: 'study', title: 'Soru Çalışması', desc: 'Kartlarla pratik yap', color: '#0ea5e9' },
    { id: 'exam', title: 'Deneme Sınavı', desc: 'Kendini test et', color: '#10b981' },
    { id: 'stats', title: 'İstatistikler', desc: 'Gelişimini izle', color: '#f59e0b' },
    { id: 'data', title: 'Veri Yönetimi', desc: 'AI ile Soru Üret ve İçe Aktar', color: '#8b5cf6', adminOnly: true }
  ];

  const largeDecks = [...new Set(questions.map(q => q.largeDeck).filter(Boolean))].sort();
  const availableSmallDecks = [...new Set(questions.filter(q => largeDeckFilter === 'all' || q.largeDeck === largeDeckFilter).map(q => q.smallDeck).filter(Boolean))].sort();

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', textAlign: 'left' }}>
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '20px 40px', 
        backgroundColor: '#0284c7', 
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' 
      }}>
        {/* LOGO VE BAŞLIK ALANI */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ 
            backgroundColor: '#fff', 
            width: '60px',  /* Logoyu büyüttük */
            height: '60px', /* Logoyu büyüttük */
            borderRadius: '12px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.2)', 
            overflow: 'hidden',
            padding: '4px'
          }}>
            <img 
              src="/logo.jpg" /* Uzantıyı .jpg yaptık */
              alt="Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            />
          </div>
          <h1 style={{ margin: 0, fontSize: '26px', fontWeight: '700', color: '#ffffff' }}>
            Sorularla Çalışma Platformu
          </h1>
        </div>

        <div style={{ display: 'flex', gap: '25px', fontSize: '14px', alignItems: 'center', color: '#e0f2fe' }}>
          <span>📅 {currentDate}</span>
          <button 
            onClick={handleAdminLogin} 
            style={{ 
              padding: '10px 20px', 
              backgroundColor: isAdmin ? '#b91c1c' : '#0369a1', 
              border: '1px solid #38bdf8', 
              borderRadius: '6px', 
              color: '#fff', 
              fontWeight: '600', 
              cursor: 'pointer' 
            }}
          >
            {isAdmin ? '🔒 Güvenli Çıkış' : '🔑 Yönetici Girişi'}
          </button>
        </div>
      </header>

      <nav style={{ backgroundColor: '#fff', padding: '10px 40px', borderBottom: '1px solid #e2e8f0', display: 'flex', gap: '15px' }}>
        {navItems.map(item => {
          if (item.adminOnly && !isAdmin) return null;
          const isActive = currentMode === item.id;
          return (
            <button key={item.id} onClick={() => setCurrentMode(item.id)} style={{ flex: 1, textAlign: 'left', padding: '12px 20px', backgroundColor: isActive ? '#f8fafc' : '#fff', border: '1px solid #e2e8f0', borderTop: `4px solid ${item.color}`, borderRadius: '8px', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '15px', fontWeight: '800', color: isActive ? item.color : '#1e293b', marginBottom: '4px' }}>{item.title}</span>
              <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>{item.desc}</span>
            </button>
          );
        })}
      </nav>

      <main style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        {currentMode === 'study' && (
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '25px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ flex: 1 }}><label style={{ display: 'block', fontSize: '12px', color: '#64748b', marginBottom: '5px', fontWeight: '600' }}>Arama</label><input type="text" placeholder="Kelime ara..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} /></div>
              <div style={{ flex: 1 }}><label style={{ display: 'block', fontSize: '12px', color: '#64748b', marginBottom: '5px', fontWeight: '600' }}>Ana Deste</label><select value={largeDeckFilter} onChange={(e) => { setLargeDeckFilter(e.target.value); setSmallDeckFilter('all'); }} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}><option value="all">Tümü</option>{largeDecks.map(deck => <option key={deck} value={deck}>{deck}</option>)}</select></div>
              <div style={{ flex: 1 }}><label style={{ display: 'block', fontSize: '12px', color: '#64748b', marginBottom: '5px', fontWeight: '600' }}>Alt Deste</label><select value={smallDeckFilter} onChange={(e) => setSmallDeckFilter(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}><option value="all">Tümü</option>{availableSmallDecks.map(deck => <option key={deck} value={deck}>{deck}</option>)}</select></div>
            </div>

            {filteredQuestions.length > 0 ? (
              <QuestionCard question={currentQuestion} currentIndex={currentIndex} totalQuestions={filteredQuestions.length} selectedAnswer={currentSelectedAnswer} onAnswer={handleAnswer} onNext={handleNext} onPrev={handlePrev} isAdmin={isAdmin} onSaveQuestion={handleSaveQuestion} allQuestions={questions} />
            ) : (
              <div style={{ padding: '20px', backgroundColor: '#fef2f2', color: '#991b1b', borderRadius: '8px' }}>Soru bulunamadı.</div>
            )}
          </div>
        )}

        {currentMode === 'stats' && <Stats questions={questions} progress={progress} />}
        {currentMode === 'exam' && <Exam questions={questions} />}
        
        {/* DATA EXPORT: Bulut senkronizasyon fonksiyonları prop olarak gönderiliyor */}
        {currentMode === 'data' && isAdmin && (
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <DataExport questions={questions} onSyncPool={handleSyncPool} onDeleteQuestion={handleDeleteQuestion} />
          </div>
        )}
      </main>

      {/* EKOSİSTEM KARTLARI */}
      <section style={{ padding: '60px 40px', backgroundColor: '#ffffff' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', color: '#1e293b' }}>Esti Biraz Ekosistemi</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px', maxWidth: '1000px', margin: '0 auto' }}>
          
          {[
            { title: 'Eğitim Portalı', link: 'https://egitim-portali-drsk.vercel.app/', img: '/egitim-portali.jpg' },
            { title: 'Esti Biraz', link: 'https://mgulaydr-svg.github.io/esti-biraz/', img: '/logo.png' },
            { title: 'Akıllı Kartlar', link: 'https://mgulaydr-svg.github.io/akilli-kartlar/', img: '/akilli-kartlar.png' }
          ].map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ padding: '20px', border: '1px solid #e2e8f0', borderRadius: '12px', textAlign: 'center', transition: 'transform 0.2s', cursor: 'pointer' }} 
                   onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} 
                   onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <img src={item.img} alt={item.title} style={{ width: '120px', height: '120px', objectFit: 'contain', marginBottom: '15px' }} />
                <h3 style={{ margin: 0, fontSize: '18px', color: '#0284c7' }}>{item.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ 
        padding: '50px 40px 30px 40px', 
        backgroundColor: '#0284c7', // Header ile aynı renk
        color: '#ffffff', 
        textAlign: 'center', 
        borderTop: '4px solid #0369a1' 
      }}>
        
        {/* SLOGAN */}
        <h3 style={{ 
          margin: '0 0 30px 0', 
          fontSize: '22px', 
          fontWeight: '500', 
          fontStyle: 'italic', 
          color: '#e0f2fe', 
          letterSpacing: '0.5px' 
        }}>
          "Bilgiyi tasarlıyor, eğitimi dijitalle buluşturuyoruz."
        </h3>

        {/* SOSYAL MEDYA İKONLARI */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '30px' }}>
          
          {/* X (Twitter) */}
          <a href="#" style={{ color: '#fff', transition: 'transform 0.2s', display: 'inline-block' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} title="X (Twitter)">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>

          {/* Threads (@ İkonu ile temsil) */}
          <a href="#" style={{ color: '#fff', transition: 'transform 0.2s', display: 'inline-block' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} title="Threads">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
          </a>

          {/* Instagram */}
          <a href="#" style={{ color: '#fff', transition: 'transform 0.2s', display: 'inline-block' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} title="Instagram">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>

          {/* YouTube */}
          <a href="#" style={{ color: '#fff', transition: 'transform 0.2s', display: 'inline-block' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} title="YouTube">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
          </a>

          {/* WhatsApp */}
          <a href="#" style={{ color: '#fff', transition: 'transform 0.2s', display: 'inline-block' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} title="WhatsApp">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </a>

        </div>

        {/* COPYRIGHT */}
        <div style={{ borderTop: '1px solid #38bdf8', paddingTop: '20px' }}>
          <p style={{ fontSize: '14px', color: '#bae6fd', margin: 0 }}>
            © {new Date().getFullYear()} Esti Biraz Ekosistemi. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;