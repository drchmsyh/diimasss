// navbar.js

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("/navbar/navbar.html");
    const html = await response.text();
    const placeholder = document.getElementById("navbar-placeholder");

    if (placeholder) {
      placeholder.innerHTML = html;

      // Tunggu elemen navbar ter-render sebelum jalankan fungsi
      initNavbarBehavior();
    }
  } catch (err) {
    console.error("Gagal memuat navbar:", err);
  }
});

function initNavbarBehavior() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const logo = document.querySelector(".navbar-logo");
  const toggleMode = document.querySelector(".toggle-mode");
  const body = document.body;
  const main = document.querySelector("main");

  // === MENU TOGGLE ===
  function toggleMenu() {
    const isActive = navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
    body.classList.toggle("menu-open");

    if (isActive) {
      if (logo) logo.textContent = "Menu";
      if (toggleMode) toggleMode.style.display = "none";
      if (main) main.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      if (logo) logo.textContent = "diimasss();";
      if (toggleMode) toggleMode.style.display = "block";
    }
  }

  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
    hamburger.addEventListener("keypress", (e) => {
      if (e.key === "Enter") toggleMenu();
    });
  }

  // === DARK MODE TOGGLE ===
  const toggleBtn = document.getElementById("toggleMode");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark");
      localStorage.setItem("dark-mode", body.classList.contains("dark"));
    });
  }

  // === LOAD SAVED THEME ===
  const dark = localStorage.getItem("dark-mode");
  if (dark === "true") body.classList.add("dark");

  // === HIGHLIGHT ACTIVE LINK ===
  const currentPath = window.location.pathname;
  const links = document.querySelectorAll(".navbar-menu a");

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || currentPath.endsWith(href)) {
      link.classList.add("active");
    }
  });
}
