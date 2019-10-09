let timer;
let currentScrollPosition;
const dnaHomeLogo = document.querySelector("main .dna-home-logo");

window.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, window.innerHeight / 2);
  currentScrollPosition = window.scrollY;
});

const scrollHandler = () => {
  dnaHomeLogo.setAttribute("style", "fill: red");
  // Down Scroll
  if (window.scrollY > currentScrollPosition) {
    window.scrollTo(0, window.innerHeight / 2);
    currentScrollPosition = window.scrollY;
  }
  // Up Scroll
  if (window.scrollY < currentScrollPosition) {
    window.scrollTo(0, window.innerHeight / 2);
    currentScrollPosition = window.scrollY;
  }
};

window.addEventListener("scroll", () => {
  if (timer) {
    window.clearTimeout(timer);
  }
  timer = window.setTimeout(scrollHandler, 200);
});
