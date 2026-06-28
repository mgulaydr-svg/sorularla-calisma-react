import React from 'react';

function Stats({ questions = [], progress = {} }) {
  // 1. Genel İstatistikleri Hesapla
  const totalQuestions = questions.length;
  const answeredIds = Object.keys(progress);
  const learnedCount = Object.values(progress).filter(p => p.learned).length;

  // 2. Deste Bazlı (Konu) Analiz Hesaplaması
  const deckStats = {};

  questions.forEach(q => {
    const deckName = q.largeDeck || 'Diğer';
    
    if (!deckStats[deckName]) {
      deckStats[deckName] = { total: 0, learned: 0, correct: 0, wrong: 0 };
    }
    
    deckStats[deckName].total += 1;
    
    const p = progress[q.id];
    if (p) {
      if (p.learned) deckStats[deckName].learned += 1;
      deckStats[deckName].correct += (p.correct || 0);
      deckStats[deckName].wrong += (p.wrong || 0);
    }
  });

  // Desteleri öğrenilme oranına göre sırala (En az öğrenilenler, yani zayıf noktalar en üstte görünsün)
  const sortedDecks = Object.entries(deckStats).sort((a, b) => {
    const aRatio = a[1].total > 0 ? a[1].learned / a[1].total : 0;
    const bRatio = b[1].total > 0 ? b[1].learned / b[1].total : 0;
    return aRatio - bRatio;
  });

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#1e293b', marginBottom: '20px' }}>Performans Analizi</h1>
      
      {/* Genel Özet Kartları */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '30px' }}>
        <div style={cardStyle}>
          <h3 style={{ fontSize: '24px', margin: '0 0 5px 0', color: '#334155' }}>{totalQuestions}</h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>Havuzdaki Soru</p>
        </div>
        <div style={cardStyle}>
          <h3 style={{ fontSize: '24px', margin: '0 0 5px 0', color: '#0369a1' }}>{answeredIds.length}</h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>Etkileşime Girilen</p>
        </div>
        <div style={{ ...cardStyle, backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }}>
          <h3 style={{ fontSize: '24px', margin: '0 0 5px 0', color: '#166534' }}>{learnedCount}</h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#166534' }}>Tam Öğrenilen</p>
        </div>
      </div>

      {/* Deste Bazlı Detaylı Tablo */}
      <h3 style={{ color: '#334155', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
        Konu Bazlı Gelişim (Zayıf Noktalar)
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
        {sortedDecks.map(([deckName, stats]) => {
          const progressPercent = stats.total > 0 ? Math.round((stats.learned / stats.total) * 100) : 0;
          const totalAnswers = stats.correct + stats.wrong;
          const accuracy = totalAnswers > 0 ? Math.round((stats.correct / totalAnswers) * 100) : 0;

          return (
            <div key={deckName} style={{ padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#fff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <strong style={{ fontSize: '16px', color: '#0f172a' }}>{deckName}</strong>
                <span style={{ fontSize: '14px', color: '#64748b', fontWeight: '500' }}>
                  {stats.learned} / {stats.total} Öğrenildi
                </span>
              </div>
              
              {/* İlerleme Çubuğu */}
              <div style={{ width: '100%', backgroundColor: '#f1f5f9', height: '10px', borderRadius: '5px', overflow: 'hidden', marginBottom: '10px' }}>
                <div style={{ 
                  height: '100%', 
                  backgroundColor: progressPercent > 75 ? '#22c55e' : progressPercent > 40 ? '#eab308' : '#ef4444', 
                  width: `${progressPercent}%`,
                  transition: 'width 0.5s ease'
                }}></div>
              </div>

              {/* Alt İstatistikler */}
              <div style={{ display: 'flex', gap: '15px', fontSize: '13px' }}>
                <span style={{ color: '#166534', backgroundColor: '#dcfce7', padding: '2px 6px', borderRadius: '4px' }}>
                  Doğru: {stats.correct}
                </span>
                <span style={{ color: '#991b1b', backgroundColor: '#fee2e2', padding: '2px 6px', borderRadius: '4px' }}>
                  Yanlış: {stats.wrong}
                </span>
                <span style={{ color: '#475569', padding: '2px 0' }}>
                  İsabet Oranı: %{accuracy}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const cardStyle = {
  padding: '20px',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  textAlign: 'center',
  backgroundColor: '#f8fafc',
  boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
};

export default Stats;