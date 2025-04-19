document.addEventListener("DOMContentLoaded", function () {
    // Muat navbar eksternal
    fetch("navbar/navbar.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar-placeholder").innerHTML = data;
        setupDarkMode(); // jalankan fungsi toggle mode setelah navbar dimuat
        highlightActiveLink(); // opsional: buat link aktif di navbar
      });
  
    // Fungsi dark mode
    function setupDarkMode() {
      const toggle = document.getElementById("toggleMode");
      if (!toggle) return;
  
      toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        toggle.textContent = document.body.classList.contains("dark") ? "🌙" : "🌞";
      });
    }
  
    // Fungsi untuk memberi class "active" ke link yang sesuai di navbar
    function highlightActiveLink() {
      const links = document.querySelectorAll(".nav-links a");
      const currentPage = window.location.pathname.split("/").pop();
  
      links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active");
        }
      });
    }
  
    // Fungsi typing effect
    const text = "Desainer Grafis";
    let i = 0;
    let isDeleting = false;
    const speed = 100;
    const pause = 1500;
    const typingEl = document.getElementById("typing");
  
    function typeLoop() {
      if (!isDeleting && i <= text.length) {
        typingEl.innerHTML = text.substring(0, i);
        i++;
        setTimeout(typeLoop, speed);
      } else if (isDeleting && i >= 0) {
        typingEl.innerHTML = text.substring(0, i);
        i--;
        setTimeout(typeLoop, speed / 2);
      } else {
        isDeleting = !isDeleting;
        setTimeout(typeLoop, pause);
      }
    }
  
    // Jalankan typing effect saat halaman dimuat
    typeLoop();
  });
  