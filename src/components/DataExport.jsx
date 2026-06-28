import React, { useState } from 'react';
import { KEYS, writeJson } from '../utils/storage.js';

function DataExport({ questions, setQuestions }) {
  const [importText, setImportText] = useState('');
  const [selectedIds, setSelectedIds] = useState([]); // Toplu seçim için
  const [bulkLargeDeck, setBulkLargeDeck] = useState(''); // Yeni atanacak Ana Deste
  const [bulkSmallDeck, setBulkSmallDeck] = useState(''); // Yeni atanacak Alt Deste
  const [editingId, setEditingId] = useState(null); // Tablo içi düzenleme için
  const [editFormData, setEditFormData] = useState({});
  // Benzersiz desteleri çıkartıyoruz
  const uniqueLargeDecks = [...new Set(questions.map(q => q.largeDeck).filter(Boolean))].sort();
  const uniqueSmallDecks = [...new Set(questions.map(q => q.smallDeck).filter(Boolean))].sort();

  // 1. YAPAY ZEKA JSON İÇE AKTARMA
  const handleImport = () => {
    try {
      const parsed = JSON.parse(importText);
      const newQuestions = Array.isArray(parsed) ? parsed : [parsed];
      
      const updatedPool = [...questions, ...newQuestions];
      setQuestions(updatedPool);
      writeJson(KEYS.bank, updatedPool);
      setImportText('');
      alert(`${newQuestions.length} soru başarıyla havuza eklendi!`);
    } catch (e) {
      alert("Hata! Geçerli bir JSON formatı girmediniz. Lütfen AI çıktısını kontrol edin.");
    }
  };

  // 2. TOPLU SEÇİM İŞLEMLERİ
  const toggleSelectAll = () => {
    if (selectedIds.length === questions.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(questions.map(q => q.id));
    }
  };

  const toggleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(itemId => itemId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // 3. TOPLU DESTE DEĞİŞTİRME
  const applyBulkEdit = () => {
    if (selectedIds.length === 0) return alert('Lütfen değiştirmek istediğiniz soruları seçin.');
    if (!bulkLargeDeck && !bulkSmallDeck) return alert('Lütfen yeni bir Ana Deste veya Alt Deste adı girin.');

    if (window.confirm(`${selectedIds.length} sorunun destesini değiştirmek istediğinize emin misiniz?`)) {
      const updatedPool = questions.map(q => {
        if (selectedIds.includes(q.id)) {
          return {
            ...q,
            largeDeck: bulkLargeDeck || q.largeDeck,
            smallDeck: bulkSmallDeck || q.smallDeck
          };
        }
        return q;
      });

      setQuestions(updatedPool);
      writeJson(KEYS.bank, updatedPool);
      setSelectedIds([]);
      setBulkLargeDeck('');
      setBulkSmallDeck('');
      alert('Toplu deste değiştirme işlemi başarıyla tamamlandı!');
    }
  };

  // 4. TEKİL HIZLI DÜZENLEME (Tablo İçi)
  const startEditing = (question) => {
    setEditingId(question.id);
    setEditFormData({ ...question });
  };

  const saveInlineEdit = () => {
    const updatedPool = questions.map(q => q.id === editingId ? editFormData : q);
    setQuestions(updatedPool);
    writeJson(KEYS.bank, updatedPool);
    setEditingId(null);
  };

  // Tablo silme işlemi
  const deleteQuestion = (id) => {
    if(window.confirm('Bu soruyu silmek istediğinize emin misiniz?')) {
       const updatedPool = questions.filter(q => q.id !== id);
       setQuestions(updatedPool);
       writeJson(KEYS.bank, updatedPool);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <datalist id="bulk-large-decks">
        {uniqueLargeDecks.map(deck => <option key={deck} value={deck} />)}
      </datalist>
      <datalist id="bulk-small-decks">
        {uniqueSmallDecks.map(deck => <option key={deck} value={deck} />)}
      </datalist>
      {/* ÜST PANEL: İÇE AKTARMA */}
      <div style={{ padding: '25px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
        <h3 style={{ marginTop: 0, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>📥</span> AI ile JSON İçe Aktar
        </h3>
        <p style={{ fontSize: '13px', color: '#64748b' }}>Yapay zekadan (ChatGPT/Gemini) aldığınız JSON çıktısını buraya yapıştırın.</p>
        <textarea 
          value={importText} 
          onChange={(e) => setImportText(e.target.value)} 
          placeholder="[ { 'largeDeck': '...', 'question': '...' } ]"
          style={{ width: '100%', height: '120px', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', marginBottom: '15px', fontFamily: 'monospace' }}
        />
        <button onClick={handleImport} style={{ padding: '12px 20px', backgroundColor: '#8b5cf6', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>
          Havuza Ekle
        </button>
      </div>

      {/* ORTA PANEL: TOPLU DESTE DÜZENLEME */}
      {selectedIds.length > 0 && (
        <div style={{ padding: '20px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
          <strong style={{ color: '#166534' }}>{selectedIds.length} Soru Seçildi</strong>
          
          <input 
            list="bulk-large-decks" /* İŞTE BURAYA EKLENDİ */
            type="text" placeholder="Yeni Ana Deste Adı..." 
            value={bulkLargeDeck} onChange={(e) => setBulkLargeDeck(e.target.value)} 
            style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', flex: 1, minWidth: '150px' }}
          />
          
          <input 
            list="bulk-small-decks" /* İŞTE BURAYA EKLENDİ */
            type="text" placeholder="Yeni Alt Deste Adı..." 
            value={bulkSmallDeck} onChange={(e) => setBulkSmallDeck(e.target.value)} 
            style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', flex: 1, minWidth: '150px' }}
          />
          
          <button onClick={applyBulkEdit} style={{ padding: '8px 16px', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>
            Toplu Taşı / Düzenle
          </button>
        </div>
      )}

      {/* ALT PANEL: TÜM SORULAR LİSTESİ VE TABLO */}
      <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ padding: '15px 20px', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, fontSize: '16px', color: '#1e293b' }}>Soru Havuzu ({questions.length} Soru)</h3>
        </div>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: '#f1f5f9', color: '#475569', borderBottom: '2px solid #e2e8f0' }}>
                <th style={{ padding: '12px 15px', width: '40px' }}>
                  <input type="checkbox" checked={selectedIds.length === questions.length && questions.length > 0} onChange={toggleSelectAll} />
                </th>
                <th style={{ padding: '12px 15px' }}>Desteler</th>
                <th style={{ padding: '12px 15px', width: '40%' }}>Soru Önizleme</th>
                <th style={{ padding: '12px 15px', textAlign: 'center' }}>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((q) => (
                <tr key={q.id} style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: selectedIds.includes(q.id) ? '#f0f9ff' : '#fff' }}>
                  
                  {/* SEÇİM KUTUSU */}
                  <td style={{ padding: '12px 15px' }}>
                    <input type="checkbox" checked={selectedIds.includes(q.id)} onChange={() => toggleSelect(q.id)} />
                  </td>

                  {/* DESTE BİLGİLERİ (veya Düzenleme Modu) */}
                  <td style={{ padding: '12px 15px' }}>
                    {editingId === q.id ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <input type="text" value={editFormData.largeDeck} onChange={e => setEditFormData({...editFormData, largeDeck: e.target.value})} style={{ padding: '5px' }} />
                        <input type="text" value={editFormData.smallDeck} onChange={e => setEditFormData({...editFormData, smallDeck: e.target.value})} style={{ padding: '5px' }} />
                      </div>
                    ) : (
                      <div>
                        <span style={{ fontWeight: '600', color: '#0369a1', display: 'block' }}>{q.largeDeck}</span>
                        <span style={{ color: '#64748b', fontSize: '12px' }}>{q.smallDeck}</span>
                      </div>
                    )}
                  </td>

                  {/* SORU ÖNİZLEME (veya Düzenleme Modu) */}
                  <td style={{ padding: '12px 15px' }}>
                    {editingId === q.id ? (
                      <textarea value={editFormData.question} onChange={e => setEditFormData({...editFormData, question: e.target.value})} style={{ width: '100%', height: '50px', padding: '5px' }} />
                    ) : (
                      <div style={{ color: '#334155', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {q.question}
                      </div>
                    )}
                  </td>

                  {/* İŞLEM BUTONLARI */}
                  <td style={{ padding: '12px 15px', textAlign: 'center', whiteSpace: 'nowrap' }}>
                    {editingId === q.id ? (
                      <div style={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
                        <button onClick={saveInlineEdit} style={{ backgroundColor: '#10b981', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>✓</button>
                        <button onClick={() => setEditingId(null)} style={{ backgroundColor: '#64748b', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>✕</button>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
                        <button onClick={() => startEditing(q)} style={{ background: 'none', border: '1px solid #cbd5e1', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', color: '#0ea5e9' }}>✎</button>
                        <button onClick={() => deleteQuestion(q.id)} style={{ background: 'none', border: '1px solid #fecaca', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', color: '#ef4444' }}>🗑</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default DataExport;