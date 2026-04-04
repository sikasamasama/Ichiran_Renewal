const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const navWarp = document.getElementById('nav-warp');
const overlay = document.getElementById('nav-overlay');

function toggleMenu() {
  const isOpen = navWarp.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  overlay.classList.toggle('open', isOpen);
}

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);