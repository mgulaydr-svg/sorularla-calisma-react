import React, { useState, useEffect } from 'react';
import RichText from './RichText.jsx';

function QuestionCard({ 
  question, 
  currentIndex, 
  totalQuestions, 
  selectedAnswer, 
  onAnswer, 
  onNext, 
  onPrev, 
  isAdmin, 
  onSaveQuestion 
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...question });

  // Kritik Düzeltme: Soru kartı değiştikçe veya düzenleme moduna geçildikçe verileri senkronize et
  useEffect(() => {
    setFormData({ ...question });
  }, [question, isEditing]);

  const handleSave = () => {
    if (!isAdmin) return alert('Bu işlem için yetkiniz yok.');
    onSaveQuestion(formData); // Değişikliği App.jsx'e bildir
    setIsEditing(false);
  };

  // 1. DÜZENLEME MODU (SADECE YÖNETİCİ GÖREBİLİR)
  if (isEditing && isAdmin) {
    return (
      <div style={{ marginTop: '20px', padding: '30px', border: '1px solid #e2e8f0', borderTop: '4px solid #8b5cf6', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        <h3 style={{ marginTop: 0, color: '#1e293b', marginBottom: '20px' }}>🔧 Soru Kartını Düzenle (Yönetici Girişi)</h3>
        
        <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '5px' }}>Ana Deste</label>
            <input type="text" value={formData.largeDeck || ''} onChange={(e) => setFormData({...formData, largeDeck: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '5px' }}>Alt Deste</label>
            <input type="text" value={formData.smallDeck || ''} onChange={(e) => setFormData({...formData, smallDeck: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} />
          </div>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '5px' }}>Soru Metni</label>
          <textarea value={formData.question || ''} onChange={(e) => setFormData({...formData, question: e.target.value})} style={{ width: '100%', height: '100px', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box', fontFamily: 'inherit', lineHeight: '1.5' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px' }}>
          <label style={{ fontSize: '13px', fontWeight: '600', color: '#475569' }}>Seçenekler (Doğru seçeneği yeşile boyamak için harfine tıkla)</label>
          {['A', 'B', 'C', 'D', 'E'].map(letter => (
            <div key={letter} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button 
                type="button"
                onClick={() => setFormData({...formData, correct: letter})}
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
          <button onClick={handleSave} style={{ padding: '12px 24px', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>💾 Değişiklikleri Kaydet</button>
          <button onClick={() => setIsEditing(false)} style={{ padding: '12px 24px', backgroundColor: '#94a3b8', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>İptal</button>
        </div>
      </div>
    );
  }

  // 2. NORMAL ÇALIŞMA GÖRÜNÜMÜ
  return (
    <div>
      <div style={{ marginTop: '20px', padding: '30px', border: '1px solid #e2e8f0', borderTop: '4px solid #0ea5e9', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        
        {/* Üst Bilgi Çubuğu */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <span style={{ fontSize: '14px', color: '#64748b' }}>Soru: <strong>{currentIndex + 1} / {totalQuestions}</strong></span>
          <span style={{ backgroundColor: '#f1f5f9', padding: '4px 12px', borderRadius: '20px', fontSize: '13px', color: '#475569', fontWeight: '500' }}>
            {question.largeDeck} › {question.smallDeck}
          </span>
          {isAdmin && (
            <button onClick={() => setIsEditing(true)} style={{ backgroundColor: 'transparent', border: 'none', color: '#0ea5e9', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '14px' }}>
              ✎ Kartı Düzenle
            </button>
          )}
        </div>

        {/* Soru İçeriği */}
        <div style={{ fontSize: '18px', color: '#0f172a', fontWeight: '500', lineHeight: '1.6', marginBottom: '25px' }}>
          <RichText text={question.question} />
        </div>

        {/* Şıklar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {['A', 'B', 'C', 'D', 'E'].map((letter) => {
            const optionText = question.options?.[letter];
            if (!optionText) return null;

            const isCorrect = letter === question.correct;
            const isSelected = letter === selectedAnswer;

            let btnStyle = {
              display: 'flex', alignItems: 'center', gap: '15px', padding: '16px',
              textAlign: 'left', borderRadius: '10px', fontSize: '16px',
              backgroundColor: '#fff', border: '1px solid #e2e8f0', color: '#334155',
              cursor: selectedAnswer ? 'default' : 'pointer', transition: 'all 0.2s ease'
            };

            // Renklendirme Filtresi (Geri Getirildi)
            if (selectedAnswer) {
              if (isCorrect) {
                btnStyle.backgroundColor = '#d1fae5'; // Yumuşak Yeşil
                btnStyle.borderColor = '#10b981';
                btnStyle.color = '#065f46';
              } else if (isSelected) {
                btnStyle.backgroundColor = '#fee2e2'; // Yumuşak Kırmızı
                btnStyle.borderColor = '#ef4444';
                btnStyle.color = '#991b1b';
              }
            }

            return (
              <button key={letter} disabled={!!selectedAnswer} onClick={() => onAnswer(letter)} style={btnStyle}>
                <span style={{ 
                  backgroundColor: selectedAnswer ? (isCorrect ? '#10b981' : isSelected ? '#ef4444' : '#f1f5f9') : '#f1f5f9',
                  color: selectedAnswer ? (isCorrect || isSelected ? '#fff' : '#64748b') : '#64748b',
                  width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', fontWeight: 'bold'
                }}>
                  {letter}
                </span>
                <span style={{ flex: 1 }}><RichText text={optionText} /></span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Geri Bildirim ve Çözüm Açıklaması (Geri Getirildi) */}
      {selectedAnswer && (
        <div style={{ marginTop: '20px', padding: '25px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderLeft: `5px solid ${selectedAnswer === question.correct ? '#10b981' : '#f59e0b'}`, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
          <h4 style={{ margin: '0 0 10px 0', color: selectedAnswer === question.correct ? '#166534' : '#9a3412', fontSize: '16px', fontWeight: '700' }}>
            {selectedAnswer === question.correct ? '🎉 Doğru Cevap!' : '📋 Yanlış Cevap!'}
          </h4>
          <p style={{ margin: '0 0 15px 0', fontSize: '15px', color: '#334155' }}>
            <strong>Doğru Şık:</strong> {question.correct}) <RichText text={question.options?.[question.correct]} />
          </p>
          {question.explanation && (
            <div style={{ paddingTop: '15px', borderTop: '1px solid #e2e8f0', fontSize: '15px', color: '#475569', lineHeight: '1.6' }}>
              <strong style={{ display: 'block', marginBottom: '8px', color: '#1e293b' }}>Çözüm Çözümleme Notu:</strong>
              <RichText text={question.explanation} />
            </div>
          )}
        </div>
      )}

      {/* Soru Navigasyon Çubuğu */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '25px' }}>
        <button onClick={onPrev} disabled={currentIndex === 0} style={{ padding: '12px 24px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: '#fff', color: '#475569', cursor: currentIndex === 0 ? 'not-allowed' : 'pointer', fontWeight: '600', transition: 'all 0.2s' }}>⬅ Önceki Soru</button>
        <button onClick={onNext} disabled={currentIndex === totalQuestions - 1} style={{ padding: '12px 24px', borderRadius: '8px', border: 'none', backgroundColor: '#0f172a', color: '#fff', cursor: currentIndex === totalQuestions - 1 ? 'not-allowed' : 'pointer', fontWeight: '600', transition: 'all 0.2s' }}>Sonraki Soru ➡</button>
      </div>
    </div>
  );
}

export default QuestionCard;