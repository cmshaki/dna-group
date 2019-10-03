const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");
const buttons = document.getElementsByTagName("button");

document.addEventListener("mousemove", e => {
  cursor.setAttribute("style", `top: ${e.pageY - 3}px; left: ${e.pageX - 3}px`);
  cursor2.setAttribute(
    "style",
    `top: ${e.pageY - 15}px; left: ${e.pageX - 15}px`
  );
});
buttons.forEach(item => {
  item.addEventListener("mouseover", e => {
    cursor2.setAttribute(
      "style",
      `top: ${e.pageY - 25}px; left: ${e.pageX -
        25}px; width: 50px !important; height: 50px !important`
    );
  });
});
