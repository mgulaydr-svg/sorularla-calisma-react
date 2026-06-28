import React from 'react';

function RichText({ text }) {
  if (!text) return null;

  // 1. Blok vurguları (``` ile ayrılmış kısımlar) ayıklama
  const parts = text.split('```');
  
  return (
    <>
      {parts.map((part, index) => {
        // Çift indeksler normal metin, tek indeksler vurgulanacak bloklardır
        if (index % 2 === 0) {
          
          // Normal metnin içindeki tekli (`) vurguları "satır içi kod" yerine "Mavi Akademik Vurgu" yapıyoruz
          const inlineParts = part.split('`');
          return (
            <span key={index}>
              {inlineParts.map((inlinePart, i) => {
                if (i % 2 === 0) {
                  // Metnin içindeki satır atlamalarını (<br>) algıla
                  return (
                    <span key={i}>
                      {inlinePart.split('\n').map((line, j, arr) => (
                        <React.Fragment key={j}>
                          {line}
                          {j < arr.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </span>
                  );
                } else {
                  // Eski pembe/gri satır içi kod yerine: Şık, kalın ve mavi vurgu
                  return (
                    <strong key={i} style={{ 
                      color: '#1d4ed8', 
                      fontWeight: '700',
                      backgroundColor: 'transparent'
                    }}>
                      {inlinePart}
                    </strong>
                  );
                }
              })}
            </span>
          );
        } else {
          // Eski dev gri kod kutusu yerine: Akademik Alıntı/Not Kutusu
          return (
            <div key={index} style={{
              margin: '15px 0',
              padding: '15px 20px',
              backgroundColor: '#f8fafc',
              borderLeft: '4px solid #94a3b8', // Sol akademik çizgi
              color: '#334155',
              fontStyle: 'italic', // Akademik alıntı havası
              fontSize: '15px',
              lineHeight: '1.6',
              borderRadius: '0 8px 8px 0',
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