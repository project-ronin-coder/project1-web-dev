const menu = document.querySelector("#navbar-logo-icon");
const navbar = document.querySelector(".navbar-main");

menu.onclick = () => {
  menu.classList.toggle("fa-xmark");
  navbar.classList.toggle("open");
};
