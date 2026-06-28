import React, { useState } from 'react';
import RichText from './RichText.jsx';

function QuestionCard({ question, currentIndex, totalQuestions, selectedAnswer, onAnswer, onNext, onPrev }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(question);

  const handleSave = () => {
    // Burada question verisini güncelleme mantığı gelecek
    console.log("Kaydedilen:", formData);
    setIsEditing(false);
  };

  // Düzenleme Modu
  if (isEditing) {
    return (
      <div style={{ padding: '25px', backgroundColor: '#fff', border: '2px solid #0ea5e9', borderRadius: '12px' }}>
        <h3 style={{ marginTop: 0 }}>Soru Düzenleme</h3>
        <label>Ana Deste:</label>
        <input value={formData.largeDeck} onChange={(e) => setFormData({...formData, largeDeck: e.target.value})} style={{ width: '100%', marginBottom: '10px' }} />
        <label>Soru:</label>
        <textarea value={formData.question} onChange={(e) => setFormData({...formData, question: e.target.value})} style={{ width: '100%', height: '60px', marginBottom: '10px' }} />
        <label>Açıklama:</label>
        <textarea value={formData.explanation} onChange={(e) => setFormData({...formData, explanation: e.target.value})} style={{ width: '100%', height: '80px', marginBottom: '10px' }} />
        
        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
          <button onClick={handleSave} style={{ backgroundColor: '#10b981', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '6px' }}>Kaydet</button>
          <button onClick={() => setIsEditing(false)} style={{ backgroundColor: '#64748b', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '6px' }}>İptal</button>
        </div>
      </div>
    );
  }

  // Normal Görünüm
  return (
    <div>
      <div style={{ marginTop: '20px', padding: '30px', border: '1px solid #e2e8f0', borderTop: '4px solid #0ea5e9', borderRadius: '12px', backgroundColor: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
          <span>Soru: <strong>{currentIndex + 1} / {totalQuestions}</strong></span>
          <button onClick={() => setIsEditing(true)} style={{ cursor: 'pointer', border: 'none', background: 'none', color: '#0ea5e9' }}>✎ Düzenle</button>
        </div>
        
        <h3><RichText text={question.question} /></h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {['A', 'B', 'C', 'D', 'E'].map((letter) => (
            <button key={letter} disabled={!!selectedAnswer} onClick={() => onAnswer(letter)} style={{ padding: '12px', textAlign: 'left', borderRadius: '8px', border: '1px solid #cbd5e1', cursor: selectedAnswer ? 'default' : 'pointer' }}>
              <strong>{letter}</strong> {question.options[letter]}
            </button>
          ))}
        </div>
      </div>

      {/* NAVİGASYON BUTONLARI (KARTIN DIŞINDA) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button onClick={onPrev} disabled={currentIndex === 0} style={{ padding: '10px 20px' }}>Önceki</button>
        <button onClick={onNext} disabled={currentIndex === totalQuestions - 1} style={{ padding: '10px 20px' }}>Sonraki</button>
      </div>
    </div>
  );
}

export default QuestionCard;