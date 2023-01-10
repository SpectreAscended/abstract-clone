const mobileMenu = document.querySelector('.mobile-menu');
const mobileHelp = document.querySelector('.mobile-help-center');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  mobileHelp.classList.toggle('hidden');
});
