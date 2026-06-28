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
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', backgroundColor: '#0284c7', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ backgroundColor: '#fff', width: '45px', height: '45px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
            <img src="/logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <h1 style={{ margin: 0, fontSize: '22px', fontWeight: '700', color: '#ffffff' }}>Sorularla Çalışma Platformu</h1>
        </div>
        <div style={{ display: 'flex', gap: '25px', fontSize: '14px', alignItems: 'center', color: '#e0f2fe' }}>
          <span>📅 {currentDate}</span>
          <button onClick={handleAdminLogin} style={{ padding: '8px 16px', backgroundColor: isAdmin ? '#b91c1c' : '#0369a1', border: '1px solid #38bdf8', borderRadius: '6px', color: '#fff', fontWeight: '600', cursor: 'pointer' }}>
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
    </div>
  );
}

export default App;