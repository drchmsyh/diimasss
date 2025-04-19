document.addEventListener("DOMContentLoaded", function () {
  fetch("/navbar/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      // Setelah navbar dimuat, jalankan fungsi-fungsi berikut:
      setupHamburgerToggle();
      setActiveNavLink();
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

      // Aksesibilitas: toggle juga dengan Enter
      hamburger.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          navLinks.classList.toggle("active");
        }
      });
    }
  }

  function setActiveNavLink() {
    const links = document.querySelectorAll(".nav-links a");
    const currentPath = window.location.pathname;

    links.forEach(link => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      }
    });
  }
});
