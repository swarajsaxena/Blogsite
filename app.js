const menuBtn = document.querySelector(".menu-btn");
const navContainer = document.querySelector(".nav-container");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    navContainer.classList.add("nav-open");
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    navContainer.classList.remove("nav-open");
  }
});
