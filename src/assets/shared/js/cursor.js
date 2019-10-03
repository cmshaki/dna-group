const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");
const buttons = document.querySelectorAll("button");

let initialHeight = "30px";
let initialWidth = "30px";

// Adding Event Listener for all buttons on a page
// This will make sure that
buttons.forEach(item => {
  item.addEventListener("mouseover", () => {
    initialHeight = "60px";
    initialWidth = "60px";
  });
  item.addEventListener("mouseout", () => {
    initialHeight = "30px";
    initialWidth = "30px";
  });
});

// The document mouse move
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
      w / 2}px; height: ${initialHeight}; width: ${initialWidth}`
  );
});
