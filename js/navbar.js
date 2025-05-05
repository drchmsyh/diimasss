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
