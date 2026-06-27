import React from 'react';
import { KEYS, readJson, writeJson, downloadJson } from '../utils/storage.js';

function DataExport({ questions }) {
  
  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        // Veriyi localStorage'a yaz
        writeJson(KEYS.bank, imported);
        alert('Veriler başarıyla yüklendi! Lütfen sayfayı yenile.');
        window.location.reload();
      } catch (err) {
        alert('JSON dosyası geçersiz!');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '500px' }}>
      <div style={{ padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
        <h3>Dosya İçe Aktar</h3>
        <input type="file" accept=".json" onChange={handleImport} style={{ marginTop: '10px' }} />
        <p style={{ fontSize: '12px', color: '#64748b', marginTop: '10px' }}>
          Eski projenden dışa aktardığın JSON dosyasını seç.
        </p>
      </div>

      <div style={{ padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
        <h3>Verileri Yedekle</h3>
        <button 
          onClick={() => downloadJson('sorularim.json', questions)}
          style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: '6px' }}
        >
          Soruları İndir
        </button>
      </div>
    </div>
  );
}

export default DataExport;