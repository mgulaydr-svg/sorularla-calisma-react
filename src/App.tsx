import { useState, useEffect } from 'react';
import { QUESTIONS } from './utils/questions.js';
import { KEYS, readJson, writeJson } from './utils/storage.js';
import QuestionCard from './components/QuestionCard.jsx';
import Sidebar from './components/Sidebar.jsx';
import DataExport from './components/DataExport.jsx';
import Stats from './components/Stats.jsx';
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
    if (largeDeckFilter !== 'all' && q.largeDeck !== largeDeckFilter) return false;
    if (smallDeckFilter !== 'all' && q.smallDeck !== smallDeckFilter) return false;
    return true;
  });

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

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', backgroundColor: '#fff' }}>
      
      <Sidebar 
        questions={questions} 
        currentMode={currentMode} 
        setMode={setCurrentMode}
        largeDeckFilter={largeDeckFilter}
        setLargeDeckFilter={setLargeDeckFilter}
        smallDeckFilter={smallDeckFilter}
        setSmallDeckFilter={setSmallDeckFilter}
      />

      <main style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        {currentMode === 'study' && (
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ color: '#1e293b', marginBottom: '5px' }}>Soru Çalışması</h1>
            <p style={{ color: '#64748b', marginBottom: '20px' }}>
              Filtrelenen Soru Sayısı: <strong>{filteredQuestions.length}</strong>
            </p>
            
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
                Bu destede henüz soru bulunmuyor. Lütfen sol taraftan farklı bir deste seç.
              </div>
            )}
          </div>
        )}

        {currentMode === 'stats' && (
          <Stats questions={questions} progress={progress} />
        )}

        {currentMode === 'data' && (
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1>Veri Yönetimi</h1>
            <DataExport questions={questions} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;