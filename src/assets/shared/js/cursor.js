const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", e => {
  cursor.setAttribute("style", `top: ${e.pageY - 3}px; left: ${e.pageX - 3}px`);
  cursor2.setAttribute(
    "style",
    `top: ${e.pageY - 15}px; left: ${e.pageX - 15}px`
  );
});
