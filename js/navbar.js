document.addEventListener("DOMContentLoaded", function () {
  fetch("/navbar/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      // Setelah navbar dimuat
      setupHamburgerToggle();
      setupDarkModeToggle();
      setActiveNavLink();

      // Cek preferensi user sebelumnya (jika ada)
      applyStoredTheme();
    })
    .catch(error => {
      console.error("Gagal memuat navbar:", error);
    });

  function setupHamburgerToggle() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });

      hamburger.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          navLinks.classList.toggle("active");
        }
      });
    }
  }

  function setupDarkModeToggle() {
    const toggleBtn = document.getElementById("dark-mode-toggle");

    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-mode");

        // Update tampilan dan simpan preferensi
        toggleBtn.textContent = isDark ? "☀️" : "🌙";
        updateColors(isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
      });
    }
  }

  function applyStoredTheme() {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";

    if (isDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    const toggleBtn = document.getElementById("dark-mode-toggle");
    if (toggleBtn) {
      toggleBtn.textContent = isDark ? "☀️" : "🌙";
    }

    updateColors(isDark);
  }

  function updateColors(isDark) {
    // Ubah warna background dan teks seluruh halaman
    document.body.style.backgroundColor = isDark ? "#111" : "#fff";
    document.body.style.color = isDark ? "#fff" : "#111";

    // Ubah elemen lain seperti navbar, footer, dll
    const navbar = document.querySelector(".navbar");
    const footer = document.querySelector("footer");

    if (navbar) navbar.style.backgroundColor = isDark ? "#222" : "#111";
    if (footer) footer.style.backgroundColor = isDark ? "#222" : "#f1f1f1";

    // Bisa ditambah bagian lain sesuai kebutuhan
  }

  function setActiveNavLink() {
    const links = document.querySelectorAll(".nav-links a");
    const currentPath = window.location.pathname;

    links.forEach(link => {
      const href = link.getAttribute("href");
      if (href === currentPath || currentPath.endsWith(href)) {
        link.classList.add("active");
      }
    });
  }
});
