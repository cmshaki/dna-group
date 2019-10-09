const evolve = document.getElementById("evolve");
const form = document.querySelector("form");
let clickCounter = 0;

evolve.addEventListener("click", () => {
  if (clickCounter < 1) {
    clickCounter++;
    form.setAttribute("style", "visibility: visible; opacity: 1");
  } else {
    clickCounter--;
    form.setAttribute("style", "hidden: visible; opacity: 0");
  }
});
