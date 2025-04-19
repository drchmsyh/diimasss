// js/navbar.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("/navbar/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    })
    .catch(error => {
      console.error("Gagal memuat navbar:", error);
    });
});
