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
  const phone = String(data.get('phone') || '').replace(/[^0-9]/g, '');
  if (phone.length < 10 || phone.length > 13) {
    alert('Please enter a valid contact number (10–13 digits).');
    document.querySelector('#phone')?.focus();
    return;
  }
  const params = new URLSearchParams(window.location.search);
  const campaign = params.get('utm_campaign');
  const source = params.get('utm_source');
  const attribution = source === 'google' && campaign === 'gbp_booking' ? 'Google Business Profile appointment link' : source === 'google' ? 'Google organic website visit' : 'Website appointment form';
  const message = `Hello Newlife Dental Clinic, I would like to request an appointment.\n\nName: ${data.get('name')}\nMobile: ${phone}\nTreatment / concern: ${data.get('treatment')}\nMessage: ${data.get('message') || '—'}\nSource: ${attribution}\nPlease confirm available appointment slots. I understand this is an enquiry, not a confirmed booking.`;
  window.location.assign(`https://wa.me/918793297147?text=${encodeURIComponent(message)}`);
});
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
