// For roadtrip blog expand function
const expand_roadtrip = document.querySelector(".expand_roadtrip");
const roadtrip_desc = document.querySelector(".roadtrip-desc");

expand_roadtrip.addEventListener("click", () => {
  if (roadtrip_desc.classList.contains("desc-expanded")) {
    roadtrip_desc.classList.remove("desc-expanded");
    expand_roadtrip.innerHTML = "Expand"
  } else {
    roadtrip_desc.classList.add("desc-expanded");
    expand_roadtrip.innerHTML = "Colapse"
  }
});

// For digital blog expand function
const expand_digital = document.querySelector(".expand_digital");
const digital_desc = document.querySelector(".digital-desc");

expand_digital.addEventListener("click", () => {
  if (digital_desc.classList.contains("desc-expanded")) {
    digital_desc.classList.remove("desc-expanded");
    expand_digital.innerHTML = "Expand"
  } else {
    digital_desc.classList.add("desc-expanded");
    expand_digital.innerHTML = "Colapse"
  }
});

const menuBtn = document.querySelector(".menu-btn");
const navContainer = document.querySelector(".nav-container");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  // if (!menuOpen) {
  //   menuBtn.classList.add("open");
  //   menuOpen = true;
  //   navContainer.classList.add("nav-open");
  // } else {
  //   menuBtn.classList.remove("open");
  //   menuOpen = false;
  //   navContainer.classList.remove("nav-open");
  // }
  console.log("hello");
});
