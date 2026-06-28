import React, { useState } from 'react';

function DataExport({ questions, onSyncPool, onDeleteQuestion }) {
  const [importText, setImportText] = useState('');
  const [selectedIds, setSelectedIds] = useState([]);
  const [bulkLargeDeck, setBulkLargeDeck] = useState('');
  const [bulkSmallDeck, setBulkSmallDeck] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const uniqueLargeDecks = [...new Set(questions.map(q => q.largeDeck).filter(Boolean))].sort();
  const bulkFilteredSmallDecks = [...new Set(questions.filter(q => !bulkLargeDeck || q.largeDeck === bulkLargeDeck).map(q => q.smallDeck).filter(Boolean))].sort();
  const inlineFilteredSmallDecks = [...new Set(questions.filter(q => !editFormData.largeDeck || q.largeDeck === editFormData.largeDeck).map(q => q.smallDeck).filter(Boolean))].sort();

  const handleImport = () => {
    try {
      const parsed = JSON.parse(importText);
      const newQuestions = Array.isArray(parsed) ? parsed : [parsed];
      onSyncPool([...questions, ...newQuestions]); // BULUTA GÖNDER
      setImportText('');
    } catch (e) { alert("Geçerli bir JSON formatı girmediniz."); }
  };

  const toggleSelectAll = () => setSelectedIds(selectedIds.length === questions.length ? [] : questions.map(q => q.id));
  const toggleSelect = (id) => setSelectedIds(selectedIds.includes(id) ? selectedIds.filter(itemId => itemId !== id) : [...selectedIds, id]);

  const applyBulkEdit = () => {
    if (selectedIds.length === 0 || (!bulkLargeDeck && !bulkSmallDeck)) return alert('Eksik bilgi girdiniz.');
    if (window.confirm(`${selectedIds.length} sorunun destesini bulutta güncelliyorum. Onaylıyor musun?`)) {
      const updatedPool = questions.map(q => selectedIds.includes(q.id) ? { ...q, largeDeck: bulkLargeDeck || q.largeDeck, smallDeck: bulkSmallDeck || q.smallDeck } : q);
      onSyncPool(updatedPool); // BULUTA GÖNDER
      setSelectedIds([]); setBulkLargeDeck(''); setBulkSmallDeck('');
    }
  };

  const startEditing = (question) => { setEditingId(question.id); setEditFormData({ ...question }); };

  const saveInlineEdit = () => {
    const updatedPool = questions.map(q => q.id === editingId ? editFormData : q);
    onSyncPool(updatedPool); // BULUTA GÖNDER
    setEditingId(null);
  };

  const deleteQuestion = (id) => {
    if(window.confirm('Bu soruyu veritabanından kalıcı olarak silmek istediğine emin misin?')) {
       onDeleteQuestion(id); // BULUTTAN SİL
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <datalist id="bulk-large-decks">{uniqueLargeDecks.map(d => <option key={d} value={d} />)}</datalist>
      <datalist id="bulk-small-decks">{bulkFilteredSmallDecks.map(d => <option key={d} value={d} />)}</datalist>
      <datalist id="inline-large-decks">{uniqueLargeDecks.map(d => <option key={d} value={d} />)}</datalist>
      <datalist id="inline-small-decks">{inlineFilteredSmallDecks.map(d => <option key={d} value={d} />)}</datalist>

      <div style={{ padding: '25px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
        <h3 style={{ marginTop: 0 }}>📥 AI ile JSON İçe Aktar</h3>
        <textarea value={importText} onChange={(e) => setImportText(e.target.value)} style={{ width: '100%', height: '100px', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', marginBottom: '15px' }} />
        <button onClick={handleImport} style={{ padding: '12px 20px', backgroundColor: '#8b5cf6', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Havuza Ekle</button>
      </div>

      {selectedIds.length > 0 && (
        <div style={{ padding: '20px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', display: 'flex', gap: '15px' }}>
          <strong>{selectedIds.length} Seçildi</strong>
          <input list="bulk-large-decks" placeholder="Yeni Ana Deste..." value={bulkLargeDeck} onChange={(e) => setBulkLargeDeck(e.target.value)} style={{ padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1', flex: 1 }} />
          <input list="bulk-small-decks" placeholder="Yeni Alt Deste..." value={bulkSmallDeck} onChange={(e) => setBulkSmallDeck(e.target.value)} style={{ padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1', flex: 1 }} />
          <button onClick={applyBulkEdit} style={{ padding: '8px 16px', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Toplu Taşı</button>
        </div>
      )}

      <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ padding: '15px 20px', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
          <h3 style={{ margin: 0, fontSize: '16px' }}>Soru Havuzu ({questions.length} Soru)</h3>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: '#f1f5f9', borderBottom: '2px solid #e2e8f0' }}>
                <th style={{ padding: '12px 15px' }}><input type="checkbox" checked={selectedIds.length === questions.length && questions.length > 0} onChange={toggleSelectAll} /></th>
                <th style={{ padding: '12px 15px' }}>Desteler</th>
                <th style={{ padding: '12px 15px', width: '40%' }}>Soru Önizleme</th>
                <th style={{ padding: '12px 15px', textAlign: 'center' }}>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((q) => (
                <tr key={q.id} style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: selectedIds.includes(q.id) ? '#f0f9ff' : '#fff' }}>
                  <td style={{ padding: '12px 15px' }}><input type="checkbox" checked={selectedIds.includes(q.id)} onChange={() => toggleSelect(q.id)} /></td>
                  <td style={{ padding: '12px 15px' }}>
                    {editingId === q.id ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <input list="inline-large-decks" type="text" value={editFormData.largeDeck} onChange={e => setEditFormData({...editFormData, largeDeck: e.target.value})} style={{ padding: '5px' }} />
                        <input list="inline-small-decks" type="text" value={editFormData.smallDeck} onChange={e => setEditFormData({...editFormData, smallDeck: e.target.value})} style={{ padding: '5px' }} />
                      </div>
                    ) : (
                      <div><span style={{ fontWeight: '600', color: '#0369a1', display: 'block' }}>{q.largeDeck}</span><span style={{ color: '#64748b', fontSize: '12px' }}>{q.smallDeck}</span></div>
                    )}
                  </td>
                  <td style={{ padding: '12px 15px' }}>
                    {editingId === q.id ? (
                      <textarea value={editFormData.question} onChange={e => setEditFormData({...editFormData, question: e.target.value})} style={{ width: '100%', height: '50px', padding: '5px' }} />
                    ) : (
                      <div style={{ color: '#334155', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{q.question}</div>
                    )}
                  </td>
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