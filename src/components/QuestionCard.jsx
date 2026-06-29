import React, { useState, useEffect } from 'react';
import RichText from './RichText.jsx';

function QuestionCard({ 
  question, currentIndex, totalQuestions, selectedAnswer, 
  onAnswer, onNext, onPrev, isAdmin, onSaveQuestion, allQuestions 
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...question });

  const uniqueLargeDecks = allQuestions ? [...new Set(allQuestions.map(q => q.largeDeck).filter(Boolean))].sort() : [];
  const uniqueSmallDecks = allQuestions ? [...new Set(allQuestions
    .filter(q => !formData.largeDeck || q.largeDeck === formData.largeDeck)
    .map(q => q.smallDeck).filter(Boolean))].sort() : [];

  useEffect(() => {
    setFormData({ ...question });
  }, [question, isEditing]);

  const handleSave = () => {
    if (!isAdmin) return alert('Bu işlem için yetkiniz yok.');
    const cleanedData = {
      ...formData,
      tags: typeof formData.tags === 'string' 
        ? formData.tags.split(',').map(t => t.trim()).filter(Boolean) 
        : (formData.tags || [])
    };
    onSaveQuestion(cleanedData);
    setIsEditing(false);
  };

  const getDifficultyColor = (diff) => {
    switch(diff?.toLowerCase()) {
      case 'kolay': return { bg: '#dcfce7', text: '#166534', border: '#bbf7d0' };
      case 'orta': return { bg: '#fef3c7', text: '#92400e', border: '#fde68a' };
      case 'zor': return { bg: '#fee2e2', text: '#991b1b', border: '#fecaca' };
      default: return { bg: '#f1f5f9', text: '#475569', border: '#e2e8f0' };
    }
  };

  if (isEditing && isAdmin) {
    return (
      <div style={{ marginTop: '20px', padding: '30px', border: '1px solid #e2e8f0', borderTop: '4px solid #8b5cf6', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        <h3 style={{ marginTop: 0, color: '#1e293b', marginBottom: '20px' }}>🔧 Soru Kartını Düzenle</h3>
        <p style={{fontSize: '12px', color: '#64748b', marginBottom: '15px'}}>* Mini ders notu ve gelişmiş meta veriler sadece JSON içe aktarımı ile güncellenebilir. Temel alanları buradan düzenleyebilirsiniz.</p>
        
        <datalist id="large-decks-list">{uniqueLargeDecks.map(deck => <option key={deck} value={deck} />)}</datalist>
        <datalist id="small-decks-list">{uniqueSmallDecks.map(deck => <option key={deck} value={deck} />)}</datalist>

        <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
          <div style={{ flex: 1 }}><label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '5px' }}>Ana Deste</label><input list="large-decks-list" type="text" value={formData.largeDeck || ''} onChange={(e) => setFormData({...formData, largeDeck: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }} /></div>
          <div style={{ flex: 1 }}><label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '5px' }}>Alt Deste</label><input list="small-decks-list" type="text" value={formData.smallDeck || ''} onChange={(e) => setFormData({...formData, smallDeck: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }} /></div>
        </div>

        <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '150px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '5px' }}>Zorluk</label>
            <select value={formData.difficulty || ''} onChange={(e) => setFormData({...formData, difficulty: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
              <option value="">Seçiniz...</option><option value="Kolay">Kolay</option><option value="Orta">Orta</option><option value="Zor">Zor</option>
            </select>
          </div>
          <div style={{ flex: 1, minWidth: '150px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '5px' }}>Bloom Taksonomisi</label>
            <select value={formData.bloom || ''} onChange={(e) => setFormData({...formData, bloom: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
              <option value="">Seçiniz...</option><option value="Hatırlama">Hatırlama</option><option value="Anlama">Anlama</option><option value="Uygulama">Uygulama</option><option value="Analiz">Analiz</option><option value="Değerlendirme">Değerlendirme</option><option value="Oluşturma">Oluşturma</option>
            </select>
          </div>
        </div>

        <div style={{ marginBottom: '15px' }}><label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '5px' }}>Soru Metni</label><textarea value={formData.question || ''} onChange={(e) => setFormData({...formData, question: e.target.value})} style={{ width: '100%', height: '100px', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box', fontFamily: 'inherit', lineHeight: '1.5' }} /></div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px' }}>
          <label style={{ fontSize: '13px', fontWeight: '600', color: '#475569' }}>Seçenekler</label>
          {['A', 'B', 'C', 'D', 'E'].map(letter => (
            <div key={letter} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button type="button" onClick={() => setFormData({...formData, correct: letter})} style={{ padding: '10px', width: '40px', borderRadius: '6px', border: '1px solid #cbd5e1', backgroundColor: formData.correct === letter ? '#10b981' : '#f1f5f9', color: formData.correct === letter ? '#fff' : '#475569', fontWeight: 'bold', cursor: 'pointer' }}>{letter}</button>
              <input type="text" value={formData.options?.[letter] || ''} onChange={(e) => setFormData({...formData, options: { ...formData.options, [letter]: e.target.value }})} style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '25px' }}>
          <button onClick={handleSave} style={{ padding: '12px 24px', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>💾 Kaydet</button>
          <button onClick={() => setIsEditing(false)} style={{ padding: '12px 24px', backgroundColor: '#94a3b8', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>İptal</button>
        </div>
      </div>
    );
  }

  const diffColors = getDifficultyColor(question.difficulty);

  return (
    <div>
      <div style={{ marginTop: '20px', padding: '30px', border: '1px solid #e2e8f0', borderTop: '4px solid #0ea5e9', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        
        {/* ÜST BİLGİ ALANI (GELİŞMİŞ ROZETLER) */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <span style={{ fontSize: '14px', color: '#64748b' }}>Soru: <strong>{currentIndex + 1} / {totalQuestions}</strong></span>
              {isAdmin && <button onClick={() => setIsEditing(true)} style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', padding: '6px 12px', borderRadius: '6px', color: '#0ea5e9', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px' }}>✎ Düzenle</button>}
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ backgroundColor: '#f1f5f9', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', color: '#475569', fontWeight: '600', border: '1px solid #e2e8f0' }}>
                📁 {question.largeDeck} › {question.smallDeck}
              </span>
              
              {question.difficulty && (
                <span style={{ backgroundColor: diffColors.bg, color: diffColors.text, border: `1px solid ${diffColors.border}`, padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '600' }} title={`Zorluk Skoru: ${question.difficultyScore || '-'}/100`}>
                  🎯 {question.difficulty}
                </span>
              )}
              
              {question.bloom && (
                <span style={{ backgroundColor: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '600' }}>
                  🧠 {question.bloom}
                </span>
              )}

              {question.questionType && (
                <span style={{ backgroundColor: '#fdf4ff', color: '#a21caf', border: '1px solid #fae8ff', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '600' }}>
                  🏷️ {question.questionType}
                </span>
              )}

              {question.estimatedTimeSeconds && (
                <span style={{ backgroundColor: '#fff7ed', color: '#c2410c', border: '1px solid #ffedd5', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '600' }}>
                  ⏱️ {question.estimatedTimeSeconds} sn
                </span>
              )}
            </div>

            {question.learningOutcome && (
              <div style={{ fontSize: '12px', color: '#0f766e', backgroundColor: '#f0fdfa', padding: '8px 12px', borderRadius: '6px', borderLeft: '3px solid #14b8a6' }}>
                <strong>Kazanım:</strong> {question.learningOutcome}
              </div>
            )}
          </div>
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

      {/* CEVAP VE MİNİ DERS NOTU ALANI */}
      {selectedAnswer && (
        <div style={{ marginTop: '25px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          {/* Sonuç Bildirimi */}
          <div style={{ padding: '16px 20px', borderRadius: '10px', backgroundColor: selectedAnswer === question.correct ? '#ecfdf5' : '#fef2f2', border: `1px solid ${selectedAnswer === question.correct ? '#a7f3d0' : '#fecaca'}`, display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ fontSize: '24px' }}>{selectedAnswer === question.correct ? '✅' : '❌'}</div>
            <div>
              <h4 style={{ margin: '0 0 5px 0', color: selectedAnswer === question.correct ? '#065f46' : '#991b1b', fontSize: '16px' }}>{selectedAnswer === question.correct ? 'Tebrikler, Doğru Cevap!' : 'Maalesef Yanlış Cevap'}</h4>
              <p style={{ margin: 0, fontSize: '14px', color: selectedAnswer === question.correct ? '#047857' : '#b91c1c' }}><strong>Doğru Şık:</strong> {question.correct}) <RichText text={question.options?.[question.correct]} /></p>
            </div>
          </div>

          {/* Standart Explanation (Geriye Dönük Uyumluluk) */}
          {question.explanation && !question.lesson && (
            <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderLeft: '5px solid #2563eb' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#1d4ed8', fontSize: '14px', textTransform: 'uppercase' }}>📖 Çözümleme</h4>
              <div style={{ fontSize: '15px', lineHeight: '1.7', color: '#334155' }}><RichText text={question.explanation} /></div>
            </div>
          )}

          {/* YENİ NESİL MİNİ DERS NOTU (LESSON OBJECT) */}
          {question.lesson && (
            <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              
              <div style={{ backgroundColor: '#1e293b', padding: '15px 20px', color: '#fff', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '20px' }}>🎓</span>
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600', letterSpacing: '0.5px' }}>Mini Ders Notu</h3>
              </div>

              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {question.lesson.summary && (
                   <div><h4 style={{ margin: '0 0 8px 0', color: '#0f172a', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '5px' }}><span>📌</span> Özet</h4><p style={{ margin: 0, fontSize: '14px', color: '#334155', lineHeight: '1.6' }}>{question.lesson.summary}</p></div>
                )}
                
                {question.lesson.deepExplanation && (
                   <div style={{ backgroundColor: '#f8fafc', padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0' }}><h4 style={{ margin: '0 0 8px 0', color: '#0369a1', fontSize: '15px' }}>🔍 Detaylı Analiz</h4><div style={{ margin: 0, fontSize: '14px', color: '#334155', lineHeight: '1.6' }}><RichText text={question.lesson.deepExplanation} /></div></div>
                )}

                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  {question.lesson.tip && (
                    <div style={{ flex: 1, minWidth: '250px', backgroundColor: '#fffbeb', padding: '15px', borderRadius: '8px', border: '1px solid #fef3c7' }}><h4 style={{ margin: '0 0 8px 0', color: '#b45309', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '5px' }}><span>💡</span> İpucu</h4><p style={{ margin: 0, fontSize: '13px', color: '#78350f', lineHeight: '1.5' }}>{question.lesson.tip}</p></div>
                  )}
                  {question.lesson.commonMistake && (
                    <div style={{ flex: 1, minWidth: '250px', backgroundColor: '#fef2f2', padding: '15px', borderRadius: '8px', border: '1px solid #fee2e2' }}><h4 style={{ margin: '0 0 8px 0', color: '#b91c1c', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '5px' }}><span>⚠️</span> Sık Yapılan Hata</h4><p style={{ margin: 0, fontSize: '13px', color: '#7f1d1d', lineHeight: '1.5' }}>{question.lesson.commonMistake}</p></div>
                  )}
                </div>

                {question.lesson.codeExample && (
                   <div><h4 style={{ margin: '0 0 8px 0', color: '#0f172a', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '5px' }}><span>💻</span> Kod Örneği</h4>
                   <pre style={{ backgroundColor: '#0f172a', color: '#e2e8f0', padding: '15px', borderRadius: '8px', fontSize: '13px', overflowX: 'auto', margin: 0, fontFamily: 'monospace', lineHeight: '1.5' }}>{question.lesson.codeExample}</pre></div>
                )}
              </div>
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