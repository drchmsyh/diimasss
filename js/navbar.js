document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch("/navbar/navbar.html");
    const data = await response.text();
    const placeholder = document.getElementById("navbar-placeholder");

    if (placeholder) {
      placeholder.innerHTML = data;
      setupHamburgerToggle();
      setActiveNavLink();
    }
  } catch (error) {
    console.error("Gagal memuat navbar:", error);
  }

  function setupHamburgerToggle() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const mainContent = document.querySelector("main");
    const body = document.body;

    if (hamburger && navLinks) {
      const toggleMenu = () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active"); // Animasi silang
        body.classList.toggle("menu-open");

        if (navLinks.classList.contains("active") && mainContent) {
          mainContent.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      hamburger.addEventListener("click", toggleMenu);
      hamburger.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          toggleMenu();
        }
      });
    }
  }

  function setActiveNavLink() {
    const links = document.querySelectorAll(".navbar-menu a");
    const currentPath = window.location.pathname;

    links.forEach(link => {
      const href = link.getAttribute("href");
      if (href === currentPath || currentPath.endsWith(href)) {
        link.classList.add("active");
      }
    });
  }
});
