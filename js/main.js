const now = new Date();
const formattedDate = new Intl.DateTimeFormat('tr-TR', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
}).format(now);

document.querySelectorAll('#current-date, #current-date-mobile').forEach((element) => {
  element.textContent = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
});
