VANTA.NET({
  el: "#hero",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x00ffe7,
  backgroundColor: 0x0a0a0a,
  points: 12.0,
  maxDistance: 25.0,
  spacing: 15.0
});
document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelectorAll(".nav-link");

  menuToggle.addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      document.querySelector(".nav-links").classList.remove("active");
    });
  });
});