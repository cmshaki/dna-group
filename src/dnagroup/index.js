import "../assets/dnagroup/scss/dnagroup.scss";
import "../assets/shared/js/cursor";
import "../assets/shared/js/menu";

// Imports video to be used
import "../assets/shared/video/DNAgroup_Compressed.mp4";

const overlay = document.querySelector(".overlay");

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("video").play();

  window.setTimeout(() => {
    overlay.setAttribute("style", "background: rgba(0,0,0, 0.5)");
  }, 1500);

  window.setTimeout(() => {
    document.querySelector("video").pause();
  }, 14000);
});
