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

    if (hamburger && navLinks) {
      const toggleMenu = () => {
        navLinks.classList.toggle("active");

        // Scroll ke bawah agar menu terlihat di bawah navbar
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
