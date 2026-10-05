const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('#site-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}
document.querySelectorAll('details').forEach(item => item.addEventListener('toggle', () => {
  if (item.open) document.querySelectorAll('details').forEach(other => { if (other !== item) other.open = false; });
}));
const form = document.querySelector('#appointment-form');
if (form) form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = `Hello Newlife Dental Clinic, I would like to request an appointment.\n\nName: ${data.get('name')}\nMobile: ${data.get('phone')}\nTreatment / concern: ${data.get('treatment')}\nMessage: ${data.get('message') || '—'}`;
  window.open(`https://wa.me/918793297147?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
