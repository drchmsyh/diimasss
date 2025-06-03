document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Memuat navbar dari file navbar.html
    const response = await fetch("/navbar/navbar.html");
    const html = await response.text();
    const placeholder = document.getElementById("navbar-placeholder");

    if (placeholder) {
      placeholder.innerHTML = html;

      // Setelah navbar ter-render, inisialisasi perilaku navbar
      initNavbarBehavior();
    }
  } catch (err) {
    console.error("Gagal memuat navbar:", err);
  }
});

// Inisialisasi perilaku navbar setelah navbar dimuat
function initNavbarBehavior() {
  // === HIGHLIGHT ACTIVE LINK ===
  const currentPath = window.location.pathname;
  const links = document.querySelectorAll(".navbar-menu a");

  // Menandai link aktif sesuai dengan halaman yang sedang dibuka
  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || currentPath.endsWith(href)) {
      link.classList.add("active");
    }
  });

  // === HAMBURGER MENU TOGGLE ===
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  // Pastikan elemen-elemen ini ada sebelum menambahkan event listener
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  } else {
    console.error("Hamburger atau navLinks tidak ditemukan.");
  }
}
