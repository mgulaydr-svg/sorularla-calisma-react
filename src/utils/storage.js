export const KEYS = {
  bank: 'sorularlaCalisma.bank.v2',
  progress: 'sorularlaCalisma.progress.v2',
  customDecks: 'sorularlaCalisma.customDecks.v2',
  dailyLimit: 'sorularlaCalisma.dailyLimit.v2',
  dailySeed: 'sorularlaCalisma.dailySeed.v2',
  lastUserEmail: 'sorularlaCalisma.lastUserEmail.v2'
};

export function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.warn('Okuma hatası:', key, error);
    return fallback;
  }
}

export function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

export function downloadJson(filename, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
