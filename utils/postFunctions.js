export function getUniqueId({ title, date, readTime }) {
  const firstLetterWord = title.match(/\b(\w)/g).join('');

  const id = firstLetterWord + date + readTime;
  return id;
}

export function formatDate(date) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return formattedDate;
}
