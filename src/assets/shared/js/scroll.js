const dnaHomeLogo = document.querySelector("main .dna-home-logo");

document.addEventListener("scroll", () => {
  dnaHomeLogo.setAttribute(
    "style",
    "margin-right: 30vw; margin-top: -30vh; transition-duration: 3000ms; transition-timing-function: ease-out"
  );
});
