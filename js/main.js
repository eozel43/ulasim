const now = new Date();
const formattedDate = new Intl.DateTimeFormat('tr-TR', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
}).format(now);

const machineReadableDate = [
  now.getFullYear(),
  String(now.getMonth() + 1).padStart(2, '0'),
  String(now.getDate()).padStart(2, '0')
].join('-');

document.querySelectorAll('#current-date, #current-date-mobile').forEach((element) => {
  element.textContent = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  element.setAttribute('datetime', machineReadableDate);
});
