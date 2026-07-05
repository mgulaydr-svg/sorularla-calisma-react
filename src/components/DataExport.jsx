import React, { useState } from 'react';

function DataExport({ questions, onSyncPool, onDeleteQuestion, onBulkDelete }) {
  const [importText, setImportText] = useState('');
  const [selectedIds, setSelectedIds] = useState([]);
  const [bulkLargeDeck, setBulkLargeDeck] = useState('');
  const [bulkSmallDeck, setBulkSmallDeck] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const uniqueLargeDecks = [...new Set(questions.map(q => q.largeDeck).filter(Boolean))].sort();
  const bulkFilteredSmallDecks = [...new Set(questions.filter(q => !bulkLargeDeck || q.largeDeck === bulkLargeDeck).map(q => q.smallDeck).filter(Boolean))].sort();
  const inlineFilteredSmallDecks = [...new Set(questions.filter(q => !editFormData.largeDeck || q.largeDeck === editFormData.largeDeck).map(q => q.smallDeck).filter(Boolean))].sort();

  // 🚀 v2.0 IMPORT MANTIĞI: İster Array gelsin, ister { root: { questions: [...] } } gelsin tanır.
  const handleImport = () => {
    try {
      const parsed = JSON.parse(importText);
      let newQuestions = [];
      
      if (Array.isArray(parsed)) {
        newQuestions = parsed; // Gelen saf bir liste ise
      } else if (parsed && parsed.root && parsed.root.questions && Array.isArray(parsed.root.questions)) {
        newQuestions = parsed.root.questions; // Gelen v2.0 root sarmalı ise
      } else if (parsed && parsed.questions && Array.isArray(parsed.questions)) {
        newQuestions = parsed.questions; // Sadece questions sarmalı ise
      } else {
        newQuestions = [parsed]; // Tek bir obje ise
      }

      if (newQuestions.length === 0) return alert("JSON içinde aktarılabilir bir soru (questions) bulunamadı.");

      onSyncPool([...questions, ...newQuestions]); // BULUTA GÖNDER
      setImportText('');
    } catch (e) { alert("Geçerli bir JSON formatı girmediniz. Lütfen sözdizimi hatası olmadığını kontrol edin."); }
  };

  const exportToJson = () => {
    if (questions.length === 0) return alert("Dışa aktarılacak soru bulunamadı.");
    const dataStr = JSON.stringify({
      schemaVersion: "quiz-platform-2.1",
      root: { questions: questions }
    }, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    const date = new Date().toISOString().split('T')[0];
    link.download = `esti-biraz-sorular-v2.1-${date}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const toggleSelectAll = () => setSelectedIds(selectedIds.length === questions.length ? [] : questions.map(q => q.id));
  const toggleSelect = (id) => setSelectedIds(selectedIds.includes(id) ? selectedIds.filter(itemId => itemId !== id) : [...selectedIds, id]);

  const applyBulkEdit = () => {
    if (selectedIds.length === 0 || (!bulkLargeDeck && !bulkSmallDeck)) return alert('Eksik bilgi girdiniz.');
    if (window.confirm(`${selectedIds.length} sorunun destesini bulutta güncelliyorum. Onaylıyor musun?`)) {
      const updatedPool = questions.map(q => selectedIds.includes(q.id) ? { ...q, largeDeck: bulkLargeDeck || q.largeDeck, smallDeck: bulkSmallDeck || q.smallDeck } : q);
      onSyncPool(updatedPool);
      setSelectedIds([]); setBulkLargeDeck(''); setBulkSmallDeck('');
    }
  };

  const applyBulkDelete = () => {
    if (selectedIds.length === 0) return;
    if (window.confirm(`DİKKAT! Seçilen ${selectedIds.length} soruyu kalıcı olarak silmek istediğine emin misin?`)) {
      onBulkDelete(selectedIds);
      setSelectedIds([]);
    }
  };

  const startEditing = (question) => { setEditingId(question.id); setEditFormData({ ...question }); };

  const saveInlineEdit = () => {
    const updatedPool = questions.map(q => q.id === editingId ? editFormData : q);
    onSyncPool(updatedPool);
    setEditingId(null);
  };

  const deleteQuestion = (id) => {
    if(window.confirm('Bu soruyu veritabanından kalıcı olarak silmek istediğine emin misin?')) {
       onDeleteQuestion(id);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <datalist id="bulk-large-decks">{uniqueLargeDecks.map(d => <option key={d} value={d} />)}</datalist>
      <datalist id="bulk-small-decks">{bulkFilteredSmallDecks.map(d => <option key={d} value={d} />)}</datalist>
      <datalist id="inline-large-decks">{uniqueLargeDecks.map(d => <option key={d} value={d} />)}</datalist>
      <datalist id="inline-small-decks">{inlineFilteredSmallDecks.map(d => <option key={d} value={d} />)}</datalist>

      {/* AI PROMPT KILAVUZU (v2.1) */}
      <div style={{ padding: '25px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderTop: '4px solid #8b5cf6', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
        <h3 style={{ marginTop: 0, color: '#4c1d95' }}>🤖 Eğitim Platformu JSON Üretme Promptu (v2.1)</h3>
        <pre style={{ backgroundColor: '#f8fafc', padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '12px', color: '#334155', whiteSpace: 'pre-wrap', fontFamily: 'monospace', lineHeight: '1.5', maxHeight: '300px', overflowY: 'auto' }}>
{`Sen deneyimli bir Flutter/Dart eğitmeni, ölçme-değerlendirme uzmanı ve eğitim teknolojileri içerik geliştiricisisin.

Görevin, verilen ham soru havuzunu kaynaklara dayalı, öğrenciye gerçekten öğreten ve eğitim platformunda doğrudan kullanılabilecek JSON formatına dönüştürmektir.

ÇIKTI KURALLARI
- Sadece geçerli JSON üret.
- Markdown, kod bloğu veya JSON dışı açıklama yazma.
- Çıktı tek bir JSON nesnesi olmalıdır.
- Ana yapı şu alanları içermelidir: schemaVersion, course, stats, references, questions.

SORU NESNESİ ŞEMASI
Her soru şu alanları içermelidir:
{
  "id": "",
  "largeDeck": "",
  "smallDeck": "",
  "difficulty": "Kolay|Orta|Zor",
  "difficultyScore": 1,
  "bloom": "Hatırlama|Anlama|Uygulama|Analiz|Değerlendirme",
  "importance": 1,
  "examFrequency": "Low|Medium|High",
  "tags": [],
  "question": "",
  "options": {"A": "", "B": "", "C": "", "D": "", "E": ""},
  "correct": "A",
  "explanation": "",
  "lesson": {
    "summary": "",
    "deepExplanation": "",
    "codeExample": "",
    "cheatSheet": [],
    "relatedTopics": [],
    "prerequisites": [],
    "nextTopics": []
  },
  "source": {},
  "reviewStatus": "platform_ready",
  "schemaVersion": "quiz-platform-2.1"
}

ÜRETİLMEYECEK ALANLAR
Aşağıdaki alanları üretme:
- questionType
- learningOutcome
- estimatedTimeSeconds
- wrongOptionAnalysis
- tip
- commonMistake

SORU METNİ KURALLARI
- Soru kodla çözülebiliyorsa gerekli kod mutlaka question alanında yer almalıdır.
- “Yukarıdaki kod”, “verilen kod”, “aşağıdaki kod”, “bu getter”, “bu if koşulu” deniyorsa ama kod yoksa, soruyu cevaplanabilir kılacak en küçük ve doğru kod bloğunu ekle.
- Kod satır sonlarını \\n ile koru.
- Kod sorusunu kavramsal soruya dönüştürme; kodun çalışma mantığını koru.

AÇIKLAMA KURALLARI
- explanation ve lesson.deepExplanation aynı öğretici metni taşıyabilir.
- Bu metin doğru cevabı “Doğru cevap X” diye tekrar etmemelidir.
- Açıklama yalnızca soruda geçen konuyu anlatmalıdır; başka konuya atlamamalıdır.
- Genel/geçiştirici kalıplar kullanma: “Bu kavramı anlamak gerekir”, “seçenekleri değerlendirirken...” gibi öğretmeyen cümleler yazma.
- Öğrenci konuyu yeni öğreniyormuş gibi açıkla.
- Kod varsa kodun nasıl çalıştığını adım adım ama kısa anlat.
- Ortalama 90-180 kelime arası olmalı.
- summary, deepExplanation alanının 1-2 cümlelik çok kısa özeti olmalıdır.
- codeExample, soruyla doğrudan ilişkili olmalıdır. İlgisiz örnek verme. Kod gerektirmeyen mobil ekosistem sorularında codeExample boş bırakılabilir.

KAYNAK KULLANIMI
- Verilen ders notları, kitaplar veya PDF kaynakları açıklama üretiminde temel alınmalıdır.
- Kaynaktaki kavramı uzun alıntılamadan, öğrencinin anlayacağı Türkçe ders notu gibi özetle.
- Soru hangi konudaysa sadece o konuyla ilgili kaynak bilgisini kullan.
- Örneğin:
  - final/const/late/null safety için Dart değişkenleri ve null-aware operatörleri bölümlerini kullan.
  - function/closure/parameter için Dart functions, optional/named parameters ve lexical scope bölümlerini kullan.
  - class/constructor/getter/mixin/interface için Dart OOP, constructor, getter/setter, mixin bölümlerini kullan.
  - widget/layout/state/routing için Flutter widget tree, Row/Column, State, setState, Navigator ve Route bölümlerini kullan.
  - Future/Stream/FutureBuilder/StreamBuilder için async Dart ve Flutter async UI bölümlerini kullan.
  - pubspec/assets/package/plugin için pubspec, dependencies, AssetBundle ve Flutter packages bölümlerini kullan.
  - test/mockito/expect/widget tester için unit test, widget test, finder/matcher bölümlerini kullan.

KALİTE KONTROL
JSON üretmeden önce kontrol et:
- Tüm sorularda A-E seçenekleri var mı?
- correct alanı A-E harflerinden biri mi?
- Kod gerektiren sorularda soru metninde kod var mı?
- explanation soruyla aynı konudan mı bahsediyor?
- deepExplanation içinde doğru cevap tekrarı var mı? Varsa kaldır.
- Genel/geçiştirici açıklama kalmış mı? Varsa yeniden yaz.
- Kaldırılması istenen alanlar tamamen silinmiş mi?
- codeExample soruyla ilişkili mi? Değilse düzelt veya boş bırak.

[EĞİTİM NOTLARINI / HAM SORULARI BURAYA YAPIŞTIR]`}
        </pre>
      </div>

      <div style={{ padding: '25px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
        <h3 style={{ marginTop: 0 }}>📥 JSON İçe Aktar ve Buluta Gönder</h3>
        <textarea value={importText} onChange={(e) => setImportText(e.target.value)} style={{ width: '100%', height: '100px', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', marginBottom: '15px' }} placeholder="v2.0 JSON verisini buraya yapıştırın..." />
        <button onClick={handleImport} style={{ padding: '12px 20px', backgroundColor: '#8b5cf6', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Havuza Ekle</button>
      </div>

      {selectedIds.length > 0 && (
        <div style={{ padding: '20px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
          <strong style={{ color: '#166534' }}>{selectedIds.length} Soru Seçildi</strong>
          <input list="bulk-large-decks" placeholder="Yeni Ana Deste..." value={bulkLargeDeck} onChange={(e) => setBulkLargeDeck(e.target.value)} style={{ padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1', flex: 1, minWidth: '130px' }} />
          <input list="bulk-small-decks" placeholder="Yeni Alt Deste..." value={bulkSmallDeck} onChange={(e) => setBulkSmallDeck(e.target.value)} style={{ padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1', flex: 1, minWidth: '130px' }} />
          <button onClick={applyBulkEdit} style={{ padding: '8px 16px', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Toplu Taşı</button>
          <button onClick={applyBulkDelete} style={{ padding: '8px 16px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', marginLeft: 'auto' }}>🗑 Seçilenleri Sil</button>
        </div>
      )}

      <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ padding: '15px 20px', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, fontSize: '16px' }}>Soru Havuzu ({questions.length} Soru)</h3>
          <button onClick={exportToJson} style={{ padding: '8px 16px', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>📤</span> Yedekle (JSON v2.0)
          </button>
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