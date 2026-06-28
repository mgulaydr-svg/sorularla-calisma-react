import React, { useState, useEffect } from 'react';
import RichText from './RichText.jsx';

function QuestionCard({ 
  question, currentIndex, totalQuestions, selectedAnswer, 
  onAnswer, onNext, onPrev, isAdmin, onSaveQuestion, allQuestions 
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...question });

  // TÜM Ana Desteler
  const uniqueLargeDecks = allQuestions ? [...new Set(allQuestions.map(q => q.largeDeck).filter(Boolean))].sort() : [];
  
  // AKILLI FİLTRE: Sadece yazılan/seçilen Ana Deste'ye ait Alt Desteleri getirir
  const uniqueSmallDecks = allQuestions ? [...new Set(allQuestions
    .filter(q => !formData.largeDeck || q.largeDeck === formData.largeDeck)
    .map(q => q.smallDeck).filter(Boolean))].sort() : [];

  useEffect(() => {
    setFormData({ ...question });
  }, [question, isEditing]);

  const handleSave = () => {
    if (!isAdmin) return alert('Bu işlem için yetkiniz yok.');
    onSaveQuestion(formData);
    setIsEditing(false);
  };

  if (isEditing && isAdmin) {
    return (
      <div style={{ marginTop: '20px', padding: '30px', border: '1px solid #e2e8f0', borderTop: '4px solid #8b5cf6', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        <h3 style={{ marginTop: 0, color: '#1e293b', marginBottom: '20px' }}>🔧 Soru Kartını Düzenle</h3>
        
        <datalist id="large-decks-list">
          {uniqueLargeDecks.map(deck => <option key={deck} value={deck} />)}
        </datalist>
        <datalist id="small-decks-list">
          {uniqueSmallDecks.map(deck => <option key={deck} value={deck} />)}
        </datalist>

        <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '5px' }}>Ana Deste</label>
            <input 
              list="large-decks-list" 
              type="text" value={formData.largeDeck || ''} onChange={(e) => setFormData({...formData, largeDeck: e.target.value})} 
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} 
              placeholder="Yeni yaz veya listeden seç..."
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '5px' }}>Alt Deste</label>
            <input 
              list="small-decks-list" 
              type="text" value={formData.smallDeck || ''} onChange={(e) => setFormData({...formData, smallDeck: e.target.value})} 
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} 
              placeholder="Yeni yaz veya listeden seç..."
            />
          </div>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '5px' }}>Soru Metni</label>
          <textarea value={formData.question || ''} onChange={(e) => setFormData({...formData, question: e.target.value})} style={{ width: '100%', height: '100px', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box', fontFamily: 'inherit', lineHeight: '1.5' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px' }}>
          <label style={{ fontSize: '13px', fontWeight: '600', color: '#475569' }}>Seçenekler</label>
          {['A', 'B', 'C', 'D', 'E'].map(letter => (
            <div key={letter} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button 
                type="button" onClick={() => setFormData({...formData, correct: letter})}
                style={{ padding: '10px', width: '40px', borderRadius: '6px', border: '1px solid #cbd5e1', backgroundColor: formData.correct === letter ? '#10b981' : '#f1f5f9', color: formData.correct === letter ? '#fff' : '#475569', fontWeight: 'bold', cursor: 'pointer' }}
              >
                {letter}
              </button>
              <input type="text" value={formData.options?.[letter] || ''} onChange={(e) => setFormData({...formData, options: { ...formData.options, [letter]: e.target.value }})} style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
            </div>
          ))}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '5px' }}>Açıklama / Çözüm Notu</label>
          <textarea value={formData.explanation || ''} onChange={(e) => setFormData({...formData, explanation: e.target.value})} style={{ width: '100%', height: '100px', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box', fontFamily: 'inherit', lineHeight: '1.5' }} />
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={handleSave} style={{ padding: '12px 24px', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>💾 Kaydet</button>
          <button onClick={() => setIsEditing(false)} style={{ padding: '12px 24px', backgroundColor: '#94a3b8', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>İptal</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginTop: '20px', padding: '30px', border: '1px solid #e2e8f0', borderTop: '4px solid #0ea5e9', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <span style={{ fontSize: '14px', color: '#64748b' }}>Soru: <strong>{currentIndex + 1} / {totalQuestions}</strong></span>
          <span style={{ backgroundColor: '#f1f5f9', padding: '4px 12px', borderRadius: '20px', fontSize: '13px', color: '#475569', fontWeight: '500' }}>
            {question.largeDeck} › {question.smallDeck}
          </span>
          {isAdmin && (
            <button onClick={() => setIsEditing(true)} style={{ backgroundColor: 'transparent', border: 'none', color: '#0ea5e9', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '14px' }}>✎ Kartı Düzenle</button>
          )}
        </div>

        <div style={{ fontSize: '18px', color: '#0f172a', fontWeight: '500', lineHeight: '1.6', marginBottom: '25px' }}>
          <RichText text={question.question} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {['A', 'B', 'C', 'D', 'E'].map((letter) => {
            const optionText = question.options?.[letter];
            if (!optionText) return null;
            const isCorrect = letter === question.correct;
            const isSelected = letter === selectedAnswer;

            let btnStyle = { display: 'flex', alignItems: 'center', gap: '15px', padding: '16px', textAlign: 'left', borderRadius: '10px', fontSize: '16px', backgroundColor: '#fff', border: '1px solid #e2e8f0', color: '#334155', cursor: selectedAnswer ? 'default' : 'pointer', transition: 'all 0.2s ease' };
            if (selectedAnswer) {
              if (isCorrect) { btnStyle.backgroundColor = '#d1fae5'; btnStyle.borderColor = '#10b981'; btnStyle.color = '#065f46'; } 
              else if (isSelected) { btnStyle.backgroundColor = '#fee2e2'; btnStyle.borderColor = '#ef4444'; btnStyle.color = '#991b1b'; }
            }

            return (
              <button key={letter} disabled={!!selectedAnswer} onClick={() => onAnswer(letter)} style={btnStyle}>
                <span style={{ backgroundColor: selectedAnswer ? (isCorrect ? '#10b981' : isSelected ? '#ef4444' : '#f1f5f9') : '#f1f5f9', color: selectedAnswer ? (isCorrect || isSelected ? '#fff' : '#64748b') : '#64748b', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', fontWeight: 'bold' }}>{letter}</span>
                <span style={{ flex: 1 }}><RichText text={optionText} /></span>
              </button>
            );
          })}
        </div>
      </div>

      {selectedAnswer && (
        <div style={{ marginTop: '25px' }}>
          <div style={{ padding: '16px 20px', borderRadius: '10px', backgroundColor: selectedAnswer === question.correct ? '#ecfdf5' : '#fef2f2', border: `1px solid ${selectedAnswer === question.correct ? '#a7f3d0' : '#fecaca'}`, display: 'flex', alignItems: 'center', gap: '15px', marginBottom: question.explanation ? '15px' : '0' }}>
            <div style={{ fontSize: '24px' }}>{selectedAnswer === question.correct ? '✅' : '❌'}</div>
            <div>
              <h4 style={{ margin: '0 0 5px 0', color: selectedAnswer === question.correct ? '#065f46' : '#991b1b', fontSize: '16px' }}>{selectedAnswer === question.correct ? 'Tebrikler, Doğru Cevap!' : 'Maalesef Yanlış Cevap'}</h4>
              <p style={{ margin: 0, fontSize: '14px', color: selectedAnswer === question.correct ? '#047857' : '#b91c1c' }}><strong>Doğru Şık:</strong> {question.correct}) <RichText text={question.options?.[question.correct]} /></p>
            </div>
          </div>
          {question.explanation && (
            <div style={{ padding: '25px', borderRadius: '10px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderLeft: '5px solid #2563eb', color: '#1e293b', boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', borderBottom: '1px solid #dbeafe', paddingBottom: '10px' }}><span style={{ fontSize: '18px' }}>📖</span><h4 style={{ margin: 0, color: '#1d4ed8', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Akademik Çözümleme</h4></div>
              <div style={{ fontSize: '15px', lineHeight: '1.7', color: '#334155' }}><RichText text={question.explanation} /></div>
            </div>
          )}
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '25px' }}>
        <button onClick={onPrev} disabled={currentIndex === 0} style={{ padding: '12px 24px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: '#fff', color: '#475569', cursor: currentIndex === 0 ? 'not-allowed' : 'pointer', fontWeight: '600' }}>⬅ Önceki Soru</button>
        <button onClick={onNext} disabled={currentIndex === totalQuestions - 1} style={{ padding: '12px 24px', borderRadius: '8px', border: 'none', backgroundColor: '#0f172a', color: '#fff', cursor: currentIndex === totalQuestions - 1 ? 'not-allowed' : 'pointer', fontWeight: '600' }}>Sonraki Soru ➡</button>
      </div>
    </div>
  );
}

export default QuestionCard;