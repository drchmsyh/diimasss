// Sisipkan navbar.html ke halaman
document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      // Panggil ulang event seperti dark mode (karena button-nya dimuat belakangan)
      setupDarkMode();
    });
});

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

window.onload = () => {
  typeLoop();
  
  // Toggle mode tetap
  const toggleBtn = document.getElementById("toggleMode");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark") ? "🌙" : "🌞";
  });
};

