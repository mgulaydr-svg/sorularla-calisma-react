import { useState, useEffect } from 'react';
import { QUESTIONS } from './utils/questions.js';
import { KEYS, readJson, writeJson } from './utils/storage.js';
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

  // Filtreler
  const [largeDeckFilter, setLargeDeckFilter] = useState('all');
  const [smallDeckFilter, setSmallDeckFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Gelişmiş Yetki Katmanı (Gerçekte Firebase Auth ile bağlanacak)
  const [isAdmin, setIsAdmin] = useState(false); 

  useEffect(() => {
    const savedQuestions = readJson(KEYS.bank, null);
    const savedProgress = readJson(KEYS.progress, {});

    if (savedQuestions && savedQuestions.length > 0) {
      setQuestions(savedQuestions);
    } else {
      setQuestions(QUESTIONS);
    }
    setProgress(savedProgress);
  }, []);

  // Soruları Kaydetme ve Güncelleme Mekanizması (Admin Özel)
  const handleSaveQuestion = (updatedQuestion) => {
    const updatedPool = questions.map(q => q.id === updatedQuestion.id ? updatedQuestion : q);
    setQuestions(updatedPool);
    writeJson(KEYS.bank, updatedPool); // LocalStorage Güncellemesi
  };

  const filteredQuestions = questions.filter(q => {
    if (largeDeckFilter !== 'all' && q.largeDeck !== largeDeckFilter) return false;
    if (smallDeckFilter !== 'all' && q.smallDeck !== smallDeckFilter) return false;
    
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const textToSearch = `${q.question || ''} ${q.explanation || ''} ${q.tags ? q.tags.join(' ') : ''}`.toLowerCase();
      if (!textToSearch.includes(query)) return false;
    }
    return true;
  });

  useEffect(() => {
    setCurrentIndex(0);
  }, [largeDeckFilter, smallDeckFilter, searchQuery]);

  const handleAnswer = (letter) => {
    const currentQuestion = filteredQuestions[currentIndex];
    if (!currentQuestion) return;

    setSessionAnswers(prev => ({ ...prev, [currentQuestion.id]: letter }));

    const isCorrect = letter === currentQuestion.correct;
    setProgress(prevProgress => {
      const qProgress = prevProgress[currentQuestion.id] || { correct: 0, wrong: 0, learned: false };
      const newStats = {
        ...qProgress,
        correct: isCorrect ? qProgress.correct + 1 : qProgress.correct,
        wrong: !isCorrect ? qProgress.wrong + 1 : qProgress.wrong
      };
      newStats.learned = (newStats.correct - newStats.wrong) >= 3;
      const updatedProgress = { ...prevProgress, [currentQuestion.id]: newStats };
      writeJson(KEYS.progress, updatedProgress);
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
    <div style={{ 
      backgroundColor: '#f8fafc', 
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
      textAlign: 'left' /* İŞTE METİNLERİ NİZAMİ ŞEKİLDE SOLA YASLAYACAK SİHİRLİ KOD */
    }}>
      
      {/* HEADER */}
      <header style={{ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '20px 40px', backgroundColor: '#0284c7', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' 
      }}>
        
        {/* LOGO VE BAŞLIK ALANI */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          
          {/* Logo Görseli: src içindeki linki kendi logonun URL'si ile değiştirebilirsin */}
          <div style={{ 
            backgroundColor: '#fff', width: '45px', height: '45px', borderRadius: '10px', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)', overflow: 'hidden'
          }}>
            <img 
              src="/logo.png" /* Public klasöründeki dosyayı doğrudan ismiyle çeker */
              alt="Platform Logosu" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            />
          </div>

          <h1 style={{ margin: 0, fontSize: '22px', fontWeight: '700', color: '#ffffff' }}>
            Sorularla Çalışma Platformu
          </h1>
        </div>

        <div style={{ display: 'flex', gap: '25px', fontSize: '14px', alignItems: 'center', color: '#e0f2fe' }}>
          <span>📅 {currentDate}</span>
          <span>👥 Canlı Ziyaretçi: 1</span>
          <button 
            onClick={() => { setIsAdmin(!isAdmin); alert(isAdmin ? 'Yönetici çıkışı yapıldı.' : 'Yönetici girişi simüle edildi! Düzenleme yetkileri açıldı.'); }}
            style={{ padding: '8px 16px', backgroundColor: isAdmin ? '#b91c1c' : '#0369a1', border: '1px solid #38bdf8', borderRadius: '6px', color: '#fff', fontWeight: '600', cursor: 'pointer' }}
          >
            {isAdmin ? '🔒 Güvenli Çıkış' : '🔑 Yönetici Girişi'}
          </button>
        </div>
      </header>

      {/* NAVİGASYON */}
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

      {/* ANA PANEL */}
      <main style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        {currentMode === 'study' && (
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            {/* Filtre Paneli */}
            <div style={{ display: 'flex', gap: '15px', marginBottom: '25px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ flex: 1 }}><label style={{ display: 'block', fontSize: '12px', color: '#64748b', marginBottom: '5px', fontWeight: '600' }}>Metin / Etiket Ara</label><input type="text" placeholder="Kelime ara..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} /></div>
              <div style={{ flex: 1 }}><label style={{ display: 'block', fontSize: '12px', color: '#64748b', marginBottom: '5px', fontWeight: '600' }}>Ana Deste</label><select value={largeDeckFilter} onChange={(e) => { setLargeDeckFilter(e.target.value); setSmallDeckFilter('all'); }} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}><option value="all">Tümü</option>{largeDecks.map(deck => <option key={deck} value={deck}>{deck}</option>)}</select></div>
              <div style={{ flex: 1 }}><label style={{ display: 'block', fontSize: '12px', color: '#64748b', marginBottom: '5px', fontWeight: '600' }}>Alt Deste</label><select value={smallDeckFilter} onChange={(e) => setSmallDeckFilter(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}><option value="all">Tümü</option>{availableSmallDecks.map(deck => <option key={deck} value={deck}>{deck}</option>)}</select></div>
            </div>

            {filteredQuestions.length > 0 ? (
              <QuestionCard question={currentQuestion} currentIndex={currentIndex} totalQuestions={filteredQuestions.length} selectedAnswer={currentSelectedAnswer} onAnswer={handleAnswer} onNext={handleNext} onPrev={handlePrev} isAdmin={isAdmin} onSaveQuestion={handleSaveQuestion} />
            ) : (
              <div style={{ padding: '20px', backgroundColor: '#fef2f2', color: '#991b1b', borderRadius: '8px' }}>Seçilen kriterlere uygun soru bulunamadı.</div>
            )}
          </div>
        )}

        {currentMode === 'stats' && <Stats questions={questions} progress={progress} />}
        {currentMode === 'exam' && <Exam questions={questions} />}
        
        {currentMode === 'data' && isAdmin && (
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <DataExport questions={questions} />
            
            {/* YAPAY ZEKA PROMPT KILAVUZ ALANI */}
            <div style={{ padding: '25px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderTop: '4px solid #8b5cf6', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              <h3 style={{ marginTop: 0, color: '#4c1d95' }}>🤖 Sihirli AI Soru Dönüştürücü Promptu</h3>
              <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.5' }}>
                Eğitim dökümanlarını, notlarını veya test sorularını sisteme tek seferde kusursuz yüklemek için aşağıdaki promptu kopyalayıp <strong>Gemini, ChatGPT veya Claude</strong>'a yapıştırabilirsin. Çıkan sonucu yukarıdaki içe aktarma alanına yüklemen yeterlidir.
              </p>
              <pre style={{ backgroundColor: '#f8fafc', padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '13px', color: '#334155', whiteSpace: 'pre-wrap', fontFamily: 'monospace', lineHeight: '1.6' }}>
{`Aşağıdaki eğitim notlarını/metni çoktan seçmeli soru kartlarına dönüştür. Lütfen çıktıyı SADECE kod blokları olmadan, ham ve geçerli bir JSON dizisi (array) formatında üret. Her soru objesi tam olarak şu yapıda olmalıdır:

[
  {
    "id": "benzersiz_bir_string_veya_timestamp",
    "largeDeck": "Ana Konu Başlığı (Örn: Flutter)",
    "smallDeck": "Alt Konu Başlığı (Örn: Widgetlar)",
    "question": "Soru metni... Kod kullanacaksan satır atlamaları için \\n kullan.",
    "options": { 
      "A": "A seçeneği metni", 
      "B": "B seçeneği metni", 
      "C": "C seçeneği metni", 
      "D": "D seçeneği metni", 
      "E": "E seçeneği metni" 
    },
    "correct": "A",
    "explanation": "Doğru cevabın neden o şık olduğuna dair detaylı analiz..."
  }
]

Metin Notları:
[Ders Notunu Veya Ham Soruları Buraya Yapıştır]`}
              </pre>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;