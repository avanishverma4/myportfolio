// let indicator = document.querySelector(".content-container");
// let maxHeight = document.documentElement.scrollHeight - window.innerHeight;

// window.addEventListener("scroll", () => {
//   let scrollRatio = window.scrollY / maxHeight;
//   let angle = scrollRatio * 360;
//   indicator.style.background = `conic-gradient(#03a9f4 ${angle}deg, #e91e63 0deg)`;
// });

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
