const active = document.querySelector(".active-section");
const nonActive = document.querySelector(".non-active");
const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");
const breakpointButton = document.querySelector(".breakpoint-button");
const secondaryBtn = document.querySelector(".secondary-btn");
let isButtonVisible = false;

arrow1.addEventListener("click", () => {
  nonActive.style.display = "none";
  active.style.display = "flex";
});
arrow2.addEventListener("click", () => {
  active.style.display = "none";
  nonActive.style.display = "flex";
});

breakpointButton.addEventListener("click", () => {
  if (isButtonVisible) {
    secondaryBtn.style.display = "none";
  } else {
    secondaryBtn.style.display = "flex";
  }
  isButtonVisible = !isButtonVisible;
});
