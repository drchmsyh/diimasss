document.addEventListener("DOMContentLoaded", function () {
  /* =============================
     DARK MODE TOGGLE
  ============================= */
  function setupDarkMode() {
    const toggle = document.getElementById("toggleMode");
    if (!toggle) return;

    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");
      toggle.textContent = isDark ? "🌙" : "🌞";
    });
  }

  /* =============================
     HIGHLIGHT ACTIVE LINK
  ============================= */
  function highlightActiveLink() {
    const links = document.querySelectorAll(".nav-links a");
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    links.forEach(link => {
      const href = link.getAttribute("href").split("/").pop();
      if (href === currentPage) {
        link.classList.add("active");
      }
    });
  }

  /* =============================
     TYPING EFFECT
  ============================= */
  function typingEffect() {
    const typingEl = document.getElementById("typing");
    if (!typingEl) return;

    const text = "Desainer Grafis";
    let i = 0;
    let isDeleting = false;
    const speed = 100;
    const pause = 1500;

    function typeLoop() {
      if (!isDeleting && i <= text.length) {
        typingEl.innerHTML = text.substring(0, i) + '<span class="cursor">|</span>';
        i++;
        setTimeout(typeLoop, speed);
      } else if (isDeleting && i >= 0) {
        typingEl.innerHTML = text.substring(0, i) + '<span class="cursor">|</span>';
        i--;
        setTimeout(typeLoop, speed / 2);
      } else {
        isDeleting = !isDeleting;
        setTimeout(typeLoop, pause);
      }
    }

    typeLoop();
  }

  // Jalankan semua fungsi saat halaman siap
  setupDarkMode();
  highlightActiveLink();
  typingEffect();
});
