const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");
const buttons = document.querySelectorAll("button");
const menu = document.querySelector(".nav-menu");
const logo = document.querySelector(".dna-logo");
const modalMenuNav = document.querySelectorAll(".menu-modal ul li");

let initialHeight = "30px";
let initialWidth = "30px";
let initialBg = "";

modalMenuNav.forEach(item => {
  item.addEventListener("mouseover", () => {
    initialHeight = "60px";
    initialWidth = "60px";
    initialBg = "background: rgba(255,255,255,0.6)";
  });
  item.addEventListener("mouseout", () => {
    initialHeight = "30px";
    initialWidth = "30px";
    initialBg = "";
  });
});

// Adding Event Listener for all buttons of a page
buttons.forEach(item => {
  item.addEventListener("mouseover", () => {
    initialHeight = "60px";
    initialWidth = "60px";
    initialBg = "background: rgba(255,255,255,0.6)";
  });
  item.addEventListener("mouseout", () => {
    initialHeight = "30px";
    initialWidth = "30px";
    initialBg = "";
  });
});

menu.addEventListener("mouseover", () => {
  initialHeight = "60px";
  initialWidth = "60px";
  initialBg = "background: rgba(255,255,255,0.6)";
});
menu.addEventListener("mouseout", () => {
  initialHeight = "30px";
  initialWidth = "30px";
  initialBg = "";
});

logo.addEventListener("mouseover", () => {
  initialHeight = "60px";
  initialWidth = "60px";
  initialBg = "background: rgba(255,255,255,0.6)";
});
logo.addEventListener("mouseout", () => {
  initialHeight = "30px";
  initialWidth = "30px";
  initialBg = "";
});

document.addEventListener("mousemove", event => {
  cursor.setAttribute(
    "style",
    `top: ${event.pageY - 3}px; left: ${event.pageX - 3}px`
  );
  const w = cursor2.getBoundingClientRect().width;
  const h = cursor2.getBoundingClientRect().height;
  cursor2.setAttribute(
    "style",
    `top: ${event.pageY - h / 2}px; left: ${event.pageX -
      w / 2}px; height: ${initialHeight}; width: ${initialWidth}; ${initialBg}`
  );
});
