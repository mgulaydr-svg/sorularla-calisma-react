import { useState, useEffect } from 'react';
import { QUESTIONS } from './utils/questions.js';
import { KEYS, readJson, writeJson } from './utils/storage.js';
import QuestionCard from './components/QuestionCard.jsx';
import DataExport from './components/DataExport.jsx';
import Stats from './components/Stats.jsx';
import Exam from './components/Exam.jsx';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [progress, setProgress] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionAnswers, setSessionAnswers] = useState({});
  const [currentMode, setCurrentMode] = useState('study');

  // Filtre State'leri
  const [largeDeckFilter, setLargeDeckFilter] = useState('all');
  const [smallDeckFilter, setSmallDeckFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState(''); // Yeni Arama State'i

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

  // Soruları filtrelere göre süz (State değiştiğinde otomatik çalışır)
  const filteredQuestions = questions.filter(q => {
    // 1. Deste Filtreleri
    if (largeDeckFilter !== 'all' && q.largeDeck !== largeDeckFilter) return false;
    if (smallDeckFilter !== 'all' && q.smallDeck !== smallDeckFilter) return false;
    
    // 2. Metin ve Etiket (Tag) Araması
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      // Sorunun metnini, açıklamasını ve etiketlerini birleştirip içinde arıyoruz
      const textToSearch = `
        ${q.question || ''} 
        ${q.explanation || ''} 
        ${q.tags ? q.tags.join(' ') : ''}
      `.toLowerCase();
      
      if (!textToSearch.includes(query)) return false;
    }
    
    return true;
  });

  // Arama veya deste değiştiğinde ilk soruya dön
  useEffect(() => {
    setCurrentIndex(0);
  }, [largeDeckFilter, smallDeckFilter, searchQuery]);

  // Filtre değiştiğinde ilk soruya dön
  useEffect(() => {
    setCurrentIndex(0);
  }, [largeDeckFilter, smallDeckFilter]);

  const handleAnswer = (letter) => {
    const currentQuestion = filteredQuestions[currentIndex];
    if (!currentQuestion) return;

    // 1. O anki oturum için ekrandaki seçimi kaydet (Butonları renklendirmek için)
    setSessionAnswers(prev => ({ ...prev, [currentQuestion.id]: letter }));

    // 2. Kalıcı ilerlemeyi (progress) güncelle ve LocalStorage'a yaz
    const isCorrect = letter === currentQuestion.correct;
    
    setProgress(prevProgress => {
      // Eski ilerleme kaydını al veya sıfırdan oluştur
      const qProgress = prevProgress[currentQuestion.id] || { correct: 0, wrong: 0, learned: false };
      
      const newStats = {
        ...qProgress,
        correct: isCorrect ? qProgress.correct + 1 : qProgress.correct,
        wrong: !isCorrect ? qProgress.wrong + 1 : qProgress.wrong
      };

      // Öğrenilme mantığı: Doğru sayısı yanlış sayısından 3 fazlaysa "Öğrenildi" kabul et
      newStats.learned = (newStats.correct - newStats.wrong) >= 3;

      // Tüm ilerleme objesini güncelle
      const updatedProgress = { ...prevProgress, [currentQuestion.id]: newStats };
      
      // storage.js içindeki fonksiyonumuzla tarayıcı hafızasına kaydet
      writeJson(KEYS.progress, updatedProgress);
      
      return updatedProgress;
    });
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  if (questions.length === 0) {
    return <div style={{ padding: '20px' }}>Veriler yükleniyor...</div>;
  }

  const currentQuestion = filteredQuestions[currentIndex];
  const currentSelectedAnswer = currentQuestion ? (sessionAnswers[currentQuestion.id] || null) : null;

  // === RETURN ÖNCESİ EKLENECEK YENİ DEĞİŞKENLER ===
  // (Bunları App bileşeninin içinde, return'den hemen önceye koy)
  const isAdmin = false; 
  const currentDate = new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });

  const navItems = [
    { id: 'study', title: 'Soru Çalışması', desc: 'Kartlarla pratik yap', color: '#0ea5e9' },
    { id: 'exam', title: 'Deneme Sınavı', desc: 'Kendini test et', color: '#10b981' },
    { id: 'stats', title: 'İstatistikler', desc: 'Gelişimini izle', color: '#f59e0b' },
    { id: 'data', title: 'Veri Yönetimi', desc: 'Soru Havuzu Ekle', color: '#8b5cf6', adminOnly: true }
  ];

  // Benzersiz desteleri dropdown için hazırlıyoruz (Sidebar'dan buraya taşıdık)
  const largeDecks = [...new Set(questions.map(q => q.largeDeck).filter(Boolean))].sort();
  const availableSmallDecks = [...new Set(
    questions.filter(q => largeDeckFilter === 'all' || q.largeDeck === largeDeckFilter).map(q => q.smallDeck).filter(Boolean)
  )].sort();

  // === YENİ RETURN BLOĞU ===
  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* 1. TEPE MENÜ (HEADER) */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 40px', backgroundColor: '#f1f5f9', borderBottom: '1px solid #e2e8f0' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '20px', color: '#0f172a', fontWeight: '700', letterSpacing: '-0.5px' }}>
            📚 Sorularla Çalışma
          </h1>
        </div>
        <div style={{ display: 'flex', gap: '25px', fontSize: '14px', color: '#475569', alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>📅 {currentDate}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>👥 Ziyaretçi: 1.245</span>
          
          <button style={{ padding: '8px 16px', backgroundColor: '#fff', border: '1px solid #cbd5e1', borderRadius: '6px', color: '#334155', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
            Yönetici Girişi
          </button>
        </div>
      </header>

      {/* 2. BEYAZ ALAN: AÇIKLAMALI VE RENKLİ NAVİGASYON */}
      <nav style={{ backgroundColor: '#fff', padding: '20px 40px', display: 'flex', gap: '20px', borderBottom: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)', overflowX: 'auto' }}>
        {navItems.map(item => {
          if (item.adminOnly && !isAdmin) return null;
          const isActive = currentMode === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setCurrentMode(item.id)}
              style={{
                flex: '1', minWidth: '200px', textAlign: 'left', padding: '15px 20px',
                backgroundColor: isActive ? '#f8fafc' : '#fff',
                border: '1px solid #e2e8f0', borderTop: `4px solid ${item.color}`,
                borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s ease',
                boxShadow: isActive ? '0 4px 6px -1px rgba(0,0,0,0.05)' : 'none',
                transform: isActive ? 'translateY(-2px)' : 'none'
              }}
            >
              <div style={{ fontSize: '16px', fontWeight: '700', color: isActive ? item.color : '#334155', marginBottom: '4px' }}>
                {item.title}
              </div>
              <div style={{ fontSize: '13px', color: '#64748b' }}>
                {item.desc}
              </div>
            </button>
          );
        })}
      </nav>

      {/* 3. ANA İÇERİK ALANI */}
      <main style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Soru Çalışması Modu */}
        {currentMode === 'study' && (
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            {/* Eski Sidebar Filtrelerini Buraya Yatay Olarak Taşıdık */}
            <div style={{ display: 'flex', gap: '15px', marginBottom: '25px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '12px', color: '#64748b', marginBottom: '5px', fontWeight: '600' }}>Kelime Ara</label>
                <input 
                  type="text" placeholder="Örn: widget..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '12px', color: '#64748b', marginBottom: '5px', fontWeight: '600' }}>Ana Deste</label>
                <select 
                  value={largeDeckFilter} onChange={(e) => { setLargeDeckFilter(e.target.value); setSmallDeckFilter('all'); }}
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                >
                  <option value="all">Tümü</option>
                  {largeDecks.map(deck => <option key={deck} value={deck}>{deck}</option>)}
                </select>
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '12px', color: '#64748b', marginBottom: '5px', fontWeight: '600' }}>Alt Deste</label>
                <select 
                  value={smallDeckFilter} onChange={(e) => setSmallDeckFilter(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                >
                  <option value="all">Tümü</option>
                  {availableSmallDecks.map(deck => <option key={deck} value={deck}>{deck}</option>)}
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ color: '#1e293b', margin: 0, fontSize: '20px' }}>Kart Pratiği</h2>
              <span style={{ color: '#64748b', fontSize: '14px', backgroundColor: '#f1f5f9', padding: '4px 10px', borderRadius: '20px' }}>
                Filtrelenen Soru: <strong>{filteredQuestions.length}</strong>
              </span>
            </div>
            
            {filteredQuestions.length > 0 ? (
              <QuestionCard 
                question={currentQuestion}
                currentIndex={currentIndex}
                totalQuestions={filteredQuestions.length}
                selectedAnswer={currentSelectedAnswer}
                onAnswer={handleAnswer}
                onNext={handleNext}
                onPrev={handlePrev}
              />
            ) : (
              <div style={{ padding: '20px', backgroundColor: '#fef2f2', color: '#991b1b', borderRadius: '8px', border: '1px solid #fecaca' }}>
                Bu filtrelere uygun soru bulunmuyor.
              </div>
            )}
          </div>
        )}

        {/* İstatistik Modu */}
        {currentMode === 'stats' && <Stats questions={questions} progress={progress} />}

        {/* Veri Yönetimi Modu */}
        {currentMode === 'data' && (
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <DataExport questions={questions} />
          </div>
        )}

        {/* Sınav Modu */}
        {currentMode === 'exam' && <Exam questions={questions} />}
        
      </main>
    </div>
  );
}

export default App;