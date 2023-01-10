const mobileMenu = document.querySelector('.mobile-menu');
const mobileHelp = document.querySelector('.mobile-help-center');

mobileMenu.addEventListener('click', function (e) {
  mobileMenu.classList.toggle('active');
  mobileHelp.classList.toggle('hidden');
});
