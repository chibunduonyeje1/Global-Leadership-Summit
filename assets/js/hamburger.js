const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const closebar = document.querySelector('.closebar');

hamburger.addEventListener('click', () => {
  navbar.style.display = 'flex';
});

closebar.addEventListener('click', () => {
  navbar.style.display = 'none';
});

const desktopMedia = window.matchMedia('(min-width: 768px)');
desktopMedia.addEventListener('change', (change) => {
  if (change.matches) {
    navbar.style.display = 'flex';
  }
});

const mobileMedia = window.matchMedia('(max-width: 768px)');
mobileMedia.addEventListener('change', (change) => {
  if (change.matches) {
    navbar.style.display = 'none';
  }
});