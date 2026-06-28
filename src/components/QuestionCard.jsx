import React from 'react';
import RichText from './RichText.jsx';

function QuestionCard({ 
  question, 
  currentIndex, 
  totalQuestions, 
  selectedAnswer, 
  onAnswer, 
  onNext, 
  onPrev 
}) {
  return (
    <div style={{ 
      marginTop: '20px', 
      padding: '30px', 
      border: '1px solid #e2e8f0', 
      borderTop: '4px solid #0ea5e9', // Kartlar için renkli üst çizgi
      borderRadius: '12px', 
      backgroundColor: '#fff', 
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' 
    }}>
      {/* Kart Üst Bilgisi */}
      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: '14px', marginBottom: '15px' }}>
        <span>Soru: <strong>{currentIndex + 1} / {totalQuestions}</strong></span>
        <span style={{ backgroundColor: '#e2e8f0', padding: '2px 8px', borderRadius: '20px', fontSize: '12px' }}>
          {question.largeDeck} › {question.smallDeck}
        </span>
      </div>
      
      {/* Soru Metni */}
      <h3 style={{ marginBottom: '20px', lineHeight: '1.6', color: '#1a202c', fontWeight: '600', display: 'flex', gap: '6px' }}>
        <span>{question.sourceNo}.</span>
        <RichText text={question.question} />
      </h3>
      
      {/* Seçenekler Listesi */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {['A', 'B', 'C', 'D', 'E'].map((letter) => {
          const optionText = question.options[letter];
          
          // Varsayılan buton stili
          let buttonStyle = {
            padding: '14px',
            textAlign: 'left',
            borderRadius: '8px',
            border: '1px solid #cbd5e1',
            backgroundColor: '#fff',
            cursor: 'pointer',
            fontSize: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            transition: 'all 0.2s'
          };

          // Kullanıcı cevap verdiğinde devreye girecek renklendirme mantığı
          if (selectedAnswer) {
            if (letter === question.correct) {
              // Doğru seçenek her zaman yeşil olur
              buttonStyle.backgroundColor = '#d4edda';
              buttonStyle.borderColor = '#c3e6cb';
              buttonStyle.color = '#155724';
            } else if (letter === selectedAnswer) {
              // Kullanıcı yanlış bildiyse seçtiği şık kırmızı olur
              buttonStyle.backgroundColor = '#f8d7da';
              buttonStyle.borderColor = '#f5c6cb';
              buttonStyle.color = '#721c24';
            }
          }

          return (
            <button 
              key={letter} 
              style={buttonStyle}
              disabled={!!selectedAnswer} // Cevap verildikten sonra butonları kilitle
              onClick={() => onAnswer(letter)}
            >
              <strong style={{ backgroundColor: '#f1f5f9', padding: '3px 8px', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                {letter}
              </strong>
              <span>{optionText || '—'}</span>
            </button>
          );
        })}
      </div>

      {/* Geri Bildirim ve Açıklama Alanı */}
      {selectedAnswer && (
        <div style={{ 
          marginTop: '20px', 
          padding: '15px', 
          borderRadius: '8px', 
          backgroundColor: selectedAnswer === question.correct ? '#e2f0d9' : '#fce4d6',
          borderLeft: `5px solid ${selectedAnswer === question.correct ? '#70ad47' : '#ed7d31'}`,
          color: '#333' 
        }}>
          <h4 style={{ margin: '0 0 5px 0' }}>
            {selectedAnswer === question.correct ? '🎉 Doğru Cevap!' : '📋 Yanlış Cevap!'}
          </h4>
          <p style={{ margin: 0, fontSize: '14px' }}>
            <strong>Doğru Şık:</strong> {question.correct}) {question.options[question.correct]}
          </p>
          {question.explanation && (
            <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid rgba(0,0,0,0.1)', fontSize: '14px', color: '#4a5568', lineHeight: '1.5' }}>
              <strong>Açıklama:</strong>
              <div style={{ marginTop: '5px' }}>
                <RichText text={question.explanation} />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Navigasyon Butonları (Geri / İleri) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button 
          onClick={onPrev} 
          disabled={currentIndex === 0} 
          style={{ padding: '10px 20px', borderRadius: '6px', border: '1px solid #cbd5e1', backgroundColor: '#fff', cursor: currentIndex === 0 ? 'not-allowed' : 'pointer', fontWeight: '500' }}
        >
          ← Geri
        </button>
        <button 
          onClick={onNext} 
          disabled={currentIndex === totalQuestions - 1} 
          style={{ padding: '10px 20px', borderRadius: '6px', border: '1px solid #cbd5e1', backgroundColor: '#fff', cursor: currentIndex === totalQuestions - 1 ? 'not-allowed' : 'pointer', fontWeight: '500' }}
        >
          İleri →
        </button>
      </div>
    </div>
  );
}

export default QuestionCard;