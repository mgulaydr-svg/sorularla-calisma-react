import React from 'react';

// Eski projendeki tanımasını istediğin özel kelimeler listesi
const CODE_WORDS = [
  'pubspec.yaml', 'AndroidManifest.xml', 'dependencies', 'dependency_overrides',
  'RouteSettings', 'rootBundle', 'AssetBundle', 'SharedPreferences',
  'FutureBuilder', 'StreamBuilder', 'WidgetTester', 'pumpWidget',
  'jsonDecode', 'jsonEncode', 'initializeApp', 'Firebase.initializeApp',
  'getApplicationDocumentsDirectory', 'getTemporaryDirectory', 'notifyListeners',
  'setState', 'StatelessWidget', 'StatefulWidget', 'MaterialApp', 'Scaffold',
  'Navigator', 'RouterDelegate', 'RouteInformationParser', 'SliverAppBar',
  'SliverList', 'CustomScrollView', 'TweenSequence', 'AnimatedContainer',
  'GridView', 'ListView', 'Container', 'Column', 'Row', 'Consumer',
  'ChangeNotifier', 'Object', 'List', 'Map', 'Set', 'isolate', 'mixin',
  'with', 'extends', 'implements'
];

function normalizeSoftBreaks(text = '') {
  return String(text)
    .replace(/\r\n/g, '\n')
    .replace(/\s*\n\s*/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function looksLikeCodeLine(line = '') {
  const s = line.trim();
  if (!s) return false;
  if (/^(import|class|void|final|var|const|return|await|if|else|for|while|dependencies:|dependency_overrides:|flutter\s|android:)/.test(s)) return true;
  if (/^(MaterialApp|Scaffold|Column|Row|Container|GridView|ListView|Consumer|FutureBuilder|StreamBuilder|Navigator|CustomScrollView|SliverAppBar)\s*\(/.test(s)) return true;
  if (/^[}\])];]+$/.test(s)) return true;
  if (/[;{}]/.test(s)) return true;
  if (/=>|\.\.\.\?|\^\d|--[a-z-]+/.test(s)) return true;
  if (/^[A-Za-z_][\w<>?]*\s+[A-Za-z_][\w]*\s*=/.test(s)) return true;
  if (/^[A-Za-z_][\w.]*\([^)]*\)/.test(s)) return true;
  if (/^<[^>]+>$/.test(s)) return true;
  return false;
}

// Cümle içindeki ters tırnakları veya özel kelimeleri inline-code formatına sokar
function inlineCodeify(escapedText) {
  let html = escapedText;
  const sorted = [...CODE_WORDS].sort((a, b) => b.length - a.length);

  for (const word of sorted) {
    const pattern = new RegExp(`(^|[^\\w>])(${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(?![\\w<])`, 'g');
    html = html.replace(pattern, `$1<code class="inline-code" style="background-color: #f1f5f9; color: #db2777; padding: 2px 6px; border-radius: 4px; font-family: monospace; font-size: 0.9em; border: 1px solid #e2e8f0;">$2</code>`);
  }

  // `kod` biçimindeki ters tırnakları yakala
  html = html.replace(/`([^`]+)`/g, '<code class="inline-code" style="background-color: #f1f5f9; color: #db2777; padding: 2px 6px; border-radius: 4px; font-family: monospace; font-size: 0.9em; border: 1px solid #e2e8f0;">$1</code>');
  return html;
}

function RichText({ text }) {
  if (!text) return null;

  const lines = text.replace(/\r\n/g, '\n').split('\n');
  const elements = [];
  let currentCodeBlock = [];
  let currentProseBlock = [];

  // Düz metin bloğunu ekrana basar
  const flushProse = () => {
    if (currentProseBlock.length > 0) {
      const proseText = normalizeSoftBreaks(currentProseBlock.join(' '));
      if (proseText) {
        elements.push(
          <span 
            key={`prose-${elements.length}`} 
            dangerouslySetInnerHTML={{ __html: inlineCodeify(proseText) + ' ' }} 
          />
        );
      }
      currentProseBlock = [];
    }
  };

  // Büyük kod bloğunu (pre) ekrana basar
  const flushCode = () => {
    if (currentCodeBlock.length > 0) {
      elements.push(
        <pre 
          key={`code-${elements.length}`} 
          style={{
            backgroundColor: '#f8fafc', // Esti Biraz tarzı çok açık gri/mavi arka plan
            color: '#334155', // Koyu gri metin rengi
            padding: '16px',
            borderRadius: '12px', // Daha yuvarlak köşeler
            fontFamily: "'Fira Code', 'Courier New', monospace",
            fontSize: '14px',
            overflowX: 'auto',
            margin: '15px 0',
            lineHeight: '1.6',
            border: '1px solid #e2e8f0', // Yumuşak bir sınır çizgisi
            boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.02)' // Hafif iç gölge
          }}
        >
          <code>{currentCodeBlock.join('\n')}</code>
        </pre>
      );
      currentCodeBlock = [];
    }
  };

  // Satır satır tarayıp kod mu düz metin mi ayırıyoruz
  for (const line of lines) {
    if (looksLikeCodeLine(line)) {
      flushProse();
      currentCodeBlock.push(line);
    } else {
      flushCode();
      currentProseBlock.push(line);
    }
  }
  flushCode();
  flushProse();

  return <div style={{ style: 'normal' }}>{elements}</div>;
}

export default RichText;