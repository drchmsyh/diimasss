// navbar.js
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle'); // Hamburger icon
  const navLinks = document.getElementById('nav-links'); // Navbar links

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active'); // Toggle 'active' class to show/hide the navbar
      console.log('Menu toggled!');
    });
  } else {
    console.warn('Menu toggle or nav-links element not found!');
  }
});
