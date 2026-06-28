import React, { useState } from 'react';
import RichText from './RichText.jsx';

function Exam({ questions }) {
  const [step, setStep] = useState('setup'); // 'setup', 'active', 'result'
  const [selectedDeck, setSelectedDeck] = useState('all');
  const [examQuestions, setExamQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});

  // Benzersiz ana desteleri listele
  const largeDecks = [...new Set(questions.map(q => q.largeDeck).filter(Boolean))].sort();

  const startExam = () => {
    const pool = selectedDeck === 'all' 
      ? questions 
      : questions.filter(q => q.largeDeck === selectedDeck);
      
    if (pool.length === 0) return alert('Bu destede sınav oluşturulacak soru yok.');
    
    // Rastgele en fazla 20 soru seç
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    setExamQuestions(shuffled.slice(0, 20));
    setCurrentIndex(0);
    setUserAnswers({});
    setStep('active');
  };

  const handleAnswer = (letter) => {
    setUserAnswers(prev => ({
      ...prev,
      [examQuestions[currentIndex].id]: letter
    }));
  };

  const finishExam = () => {
    if (window.confirm('Sınavı bitirmek istediğine emin misin?')) {
      setStep('result');
    }
  };

  const calculateScore = () => {
    let correct = 0;
    let wrong = 0;
    examQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correct) correct++;
      else if (userAnswers[q.id]) wrong++;
    });
    return { correct, wrong, empty: examQuestions.length - (correct + wrong) };
  };

  if (step === 'setup') {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#0f172a', marginBottom: '15px' }}>Deneme Sınavı</h1>
        <p style={{ color: '#64748b', marginBottom: '30px' }}>
          Seçtiğin desteden rastgele 20 soru ile bilgini test et.
        </p>
        
        <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: '#334155' }}>
            Hangi desteden sınav olmak istersin?
          </label>
          <select 
            value={selectedDeck} 
            onChange={(e) => setSelectedDeck(e.target.value)}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', marginBottom: '20px', fontSize: '15px' }}
          >
            <option value="all">Karma Sınav (Tüm Desteler)</option>
            {largeDecks.map(deck => <option key={deck} value={deck}>{deck}</option>)}
          </select>
          
          <button 
            onClick={startExam}
            style={{ width: '100%', padding: '14px', backgroundColor: '#0284c7', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', transition: 'background-color 0.2s' }}
          >
            Sınavı Başlat
          </button>
        </div>
      </div>
    );
  }

  if (step === 'active') {
    const currentQ = examQuestions[currentIndex];
    const selectedLetter = userAnswers[currentQ.id];

    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: '#0f172a', margin: 0 }}>Sınav Modu</h2>
          <span style={{ backgroundColor: '#f1f5f9', padding: '6px 12px', borderRadius: '20px', color: '#475569', fontWeight: '600', fontSize: '14px' }}>
            {currentIndex + 1} / {examQuestions.length}
          </span>
        </div>

        {/* Etkileşimli Kart Yapısı */}
        <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
          <div style={{ marginBottom: '25px', color: '#1e293b', fontSize: '18px', fontWeight: '500', lineHeight: '1.6' }}>
            <RichText text={currentQ.question} />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['A', 'B', 'C', 'D', 'E'].map(letter => {
              const isSelected = selectedLetter === letter;
              return (
                <button 
                  key={letter}
                  onClick={() => handleAnswer(letter)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '15px', padding: '16px',
                    textAlign: 'left', borderRadius: '10px', fontSize: '16px',
                    backgroundColor: isSelected ? '#f0f9ff' : '#fff',
                    border: `2px solid ${isSelected ? '#0ea5e9' : '#e2e8f0'}`,
                    color: isSelected ? '#0369a1' : '#334155',
                    cursor: 'pointer', transition: 'all 0.2s ease'
                  }}
                >
                  <span style={{ backgroundColor: isSelected ? '#0ea5e9' : '#f1f5f9', color: isSelected ? '#fff' : '#64748b', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', fontWeight: 'bold' }}>
                    {letter}
                  </span>
                  <span style={{ flex: 1 }}><RichText text={currentQ.options[letter]} /></span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigasyon */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '25px' }}>
          <button 
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            style={{ padding: '12px 24px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: '#fff', color: '#475569', cursor: currentIndex === 0 ? 'not-allowed' : 'pointer', fontWeight: '600' }}
          >
            Önceki
          </button>
          
          {currentIndex === examQuestions.length - 1 ? (
            <button 
              onClick={finishExam}
              style={{ padding: '12px 24px', borderRadius: '8px', border: 'none', backgroundColor: '#10b981', color: '#fff', cursor: 'pointer', fontWeight: '600' }}
            >
              Sınavı Bitir
            </button>
          ) : (
            <button 
              onClick={() => setCurrentIndex(prev => Math.min(examQuestions.length - 1, prev + 1))}
              style={{ padding: '12px 24px', borderRadius: '8px', border: 'none', backgroundColor: '#0f172a', color: '#fff', cursor: 'pointer', fontWeight: '600' }}
            >
              Sonraki
            </button>
          )}
        </div>
      </div>
    );
  }

  if (step === 'result') {
    const { correct, wrong, empty } = calculateScore();
    const score = correct * 5; // Her soru 5 puan üzerinden

    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#0f172a', marginBottom: '10px' }}>Sınav Sonucu</h1>
        <p style={{ color: '#64748b', fontSize: '18px', marginBottom: '40px' }}>
          Puanın: <strong style={{ color: '#0284c7', fontSize: '24px' }}>{score}</strong> / {examQuestions.length * 5}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '40px' }}>
          <div style={{ backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
            <h2 style={{ color: '#166534', margin: '0 0 5px 0' }}>{correct}</h2>
            <p style={{ margin: 0, color: '#15803d', fontSize: '14px', fontWeight: '500' }}>Doğru</p>
          </div>
          <div style={{ backgroundColor: '#fef2f2', padding: '20px', borderRadius: '12px', border: '1px solid #fecaca' }}>
            <h2 style={{ color: '#991b1b', margin: '0 0 5px 0' }}>{wrong}</h2>
            <p style={{ margin: 0, color: '#b91c1c', fontSize: '14px', fontWeight: '500' }}>Yanlış</p>
          </div>
          <div style={{ backgroundColor: '#f1f5f9', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h2 style={{ color: '#475569', margin: '0 0 5px 0' }}>{empty}</h2>
            <p style={{ margin: 0, color: '#64748b', fontSize: '14px', fontWeight: '500' }}>Boş</p>
          </div>
        </div>

        <button 
          onClick={() => setStep('setup')}
          style={{ padding: '14px 28px', backgroundColor: '#0284c7', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}
        >
          Yeni Sınav Başlat
        </button>
      </div>
    );
  }

  return null;
}

export default Exam;