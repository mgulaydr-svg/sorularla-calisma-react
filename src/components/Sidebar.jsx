import React from 'react';

function Sidebar({ 
  questions, currentMode, setMode, 
  largeDeckFilter, setLargeDeckFilter, 
  smallDeckFilter, setSmallDeckFilter,
  searchQuery, setSearchQuery // Yeni eklenen proplar
}) {
  // Benzersiz ana desteleri bul (Örn: Flutter, Halk Sağlığı)
  const largeDecks = [...new Set(questions.map(q => q.largeDeck).filter(Boolean))].sort();
  
  // Seçili ana desteye ait alt desteleri bul
  const availableSmallDecks = [...new Set(
    questions
      .filter(q => largeDeckFilter === 'all' || q.largeDeck === largeDeckFilter)
      .map(q => q.smallDeck)
      .filter(Boolean)
  )].sort();

  const buttonStyle = (modeName) => ({
    padding: '12px 15px',
    textAlign: 'left',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: currentMode === modeName ? '#e0f2fe' : 'transparent',
    color: currentMode === modeName ? '#0369a1' : '#475569',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '15px',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  });

  return (
    <aside style={{ width: '280px', backgroundColor: '#f8fafc', borderRight: '1px solid #e2e8f0', padding: '20px', height: '100vh', position: 'sticky', top: 0, boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
      
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '20px', margin: '0 0 5px 0', color: '#0f172a' }}>📚 Sorularla Çalışma</h2>
        <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>
          Havuzdaki Soru: <strong>{questions.length}</strong>
        </p>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '30px' }}>
        <button style={buttonStyle('study')} onClick={() => setMode('study')}>
          <span>📝</span> Soru Çalışması
        </button>
        <button style={buttonStyle('stats')} onClick={() => setMode('stats')}>
          <span>📊</span> İstatistikler
        </button>
        <button style={buttonStyle('data')} onClick={() => setMode('data')}>
          <span>⚙️</span> Veri Yönetimi
        </button>
        <button style={buttonStyle('exam')} onClick={() => setMode('exam')}>
          <span>🎓</span> Sınav Modu
        </button>
      </nav>

      {/* Deste Filtreleme Alanı - Sadece Study modunda aktif */}
      {currentMode === 'study' && (
        <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '14px', margin: '0 0 10px 0', color: '#334155' }}>🎯 Deste Seçimi</h3>
          
          {/* YENİ EKLENEN ARAMA KUTUSU BURAYA GELDİ */}
          <label style={{ display: 'block', fontSize: '12px', color: '#64748b', marginBottom: '5px' }}>Kelime veya Etiket Ara</label>
          <input 
            type="text" 
            placeholder="Örn: widget, enfeksiyon..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
          />

          <label style={{ display: 'block', fontSize: '12px', color: '#64748b', marginBottom: '5px' }}>Ana Deste</label>
          <select 
            value={largeDeckFilter} 
            onChange={(e) => {
              setLargeDeckFilter(e.target.value);
              setSmallDeckFilter('all'); // Ana deste değişince alt desteyi sıfırla
            }}
            style={{ width: '100%', padding: '8px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
          >
            <option value="all">Tümü</option>
            {largeDecks.map(deck => <option key={deck} value={deck}>{deck}</option>)}
          </select>

          <label style={{ display: 'block', fontSize: '12px', color: '#64748b', marginBottom: '5px' }}>Alt Deste</label>
          <select 
            value={smallDeckFilter} 
            onChange={(e) => setSmallDeckFilter(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
          >
            <option value="all">Tümü</option>
            {availableSmallDecks.map(deck => <option key={deck} value={deck}>{deck}</option>)}
          </select>
        </div>
      )}

    </aside>
  );
}

export default Sidebar;