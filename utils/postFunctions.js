export function getUniqueId({ title, date, readTime }) {
  const firstLetterWord = title.match(/\b(\w)/g).join('');

  const id = firstLetterWord + date + readTime;
  return id;
}
