import React, { useState } from 'react';
import RichText from './RichText.jsx';

function QuestionCard({ question, currentIndex, totalQuestions, selectedAnswer, onAnswer, onNext, onPrev }) {
  const [isEditing, setIsEditing] = useState(false);

  // Düzenleme modu aktifse form göster
  if (isEditing) {
    return (
      <div style={{ padding: '20px', backgroundColor: '#fff', border: '2px solid #0ea5e9', borderRadius: '12px' }}>
        <h3>Soruyu Düzenle</h3>
        <textarea defaultValue={question.question} style={{ width: '100%', height: '80px', marginBottom: '10px' }} />
        <button onClick={() => setIsEditing(false)} style={{ backgroundColor: '#0ea5e9', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '6px' }}>Kaydet</button>
      </div>
    );
  }

  // Normal görünüm
  return (
    <div style={{ marginTop: '20px', padding: '30px', border: '1px solid #e2e8f0', borderTop: '4px solid #0ea5e9', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        <span>Soru: <strong>{currentIndex + 1} / {totalQuestions}</strong></span>
        <button onClick={() => setIsEditing(true)} style={{ fontSize: '12px', cursor: 'pointer' }}>✎ Düzenle</button>
      </div>
      
      <h3 style={{ marginBottom: '20px', display: 'flex', gap: '6px' }}>
        <span>{question.sourceNo}.</span>
        <RichText text={question.question} />
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {['A', 'B', 'C', 'D', 'E'].map((letter) => {
          const optionText = question.options[letter];
          let buttonStyle = { padding: '14px', textAlign: 'left', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: '#fff', cursor: 'pointer', display: 'flex', gap: '12px' };
          
          if (selectedAnswer) {
            if (letter === question.correct) {
              buttonStyle.backgroundColor = '#d4edda';
              buttonStyle.borderColor = '#c3e6cb';
            } else if (letter === selectedAnswer) {
              buttonStyle.backgroundColor = '#f8d7da';
              buttonStyle.borderColor = '#f5c6cb';
            }
          }

          return (
            <button key={letter} style={buttonStyle} disabled={!!selectedAnswer} onClick={() => onAnswer(letter)}>
              <strong>{letter}</strong>
              <span>{optionText || '—'}</span>
            </button>
          );
        })}
      </div>
      
      {/* ... Geri Bildirim ve Açıklama Alanı (Aynı kalacak) ... */}
    </div>
  );
}

export default QuestionCard;