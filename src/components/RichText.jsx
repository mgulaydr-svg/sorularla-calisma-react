import React from 'react';

function RichText({ text }) {
  if (!text) return null;

  // 1. ADIM: PDF Hecelme Hatasını Çöz (Örn: "Halk sağ-\nlığı" -> "Halk sağlığı")
  let processedText = text.replace(/-\n/g, '');

  // Blok vurguları (``` ile ayrılmış kısımlar) ayıklama
  const parts = processedText.split('```');
  
  return (
    <>
      {parts.map((part, index) => {
        // ÇİFT İNDEKSLER: NORMAL METİN
        if (index % 2 === 0) {
          
          // 2. ADIM: Çift satır atlamaları (\n\n) paragraf olarak böl
          const paragraphs = part.split(/\n\s*\n/); 

          return (
            <span key={index}>
              {paragraphs.map((paragraph, pIndex) => {
                
                // 3. ADIM: PDF'in cümle ortasına attığı tekli alt satır (\n) kesilmelerini boşluğa çevir
                const cleanParagraph = paragraph.replace(/\n/g, ' ');
                
                // Mavi Akademik Vurguları (`) işle
                const inlineParts = cleanParagraph.split('`');
                return (
                  <React.Fragment key={pIndex}>
                    {inlineParts.map((inlinePart, i) => {
                      if (i % 2 === 0) {
                        return <span key={i}>{inlinePart}</span>;
                      } else {
                        return (
                          <strong key={i} style={{ color: '#1d4ed8', fontWeight: '700', backgroundColor: 'transparent' }}>
                            {inlinePart}
                          </strong>
                        );
                      }
                    })}
                    {/* Paragraflar arası gerçek boşlukları koru */}
                    {pIndex < paragraphs.length - 1 && <><br /><br /></>}
                  </React.Fragment>
                );
              })}
            </span>
          );
        } else {
          // TEK İNDEKSLER: AKADEMİK ALINTI / KOD KUTUSU 
          // (Buranın içindeki satır atlamalarına dokunulmaz, orijinal kalır)
          return (
            <div key={index} style={{
              margin: '15px 0', padding: '15px 20px', backgroundColor: '#f8fafc',
              borderLeft: '4px solid #94a3b8', color: '#334155', fontStyle: 'italic',
              fontSize: '15px', lineHeight: '1.6', borderRadius: '0 8px 8px 0',
              boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
            }}>
              {part.split('\n').map((line, j, arr) => (
                <React.Fragment key={j}>
                  {line}
                  {j < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          );
        }
      })}
    </>
  );
}

export default RichText;