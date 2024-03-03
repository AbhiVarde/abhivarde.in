export function readTime(words) {
  const trimString = words.trim();

  const wordsArray = trimString.split(/\s+/);
  const wordCount = wordsArray.length;

  const avgReadTime = 185;
  return `${(wordCount / avgReadTime).toFixed(0)} min`;
}
