import "./assets/home/scss/home.scss";
import "./assets/shared/js/cursor";
import "./assets/shared/js/menu";

// Imports video to be used
import "./assets/shared/video/DNA_Home_Compressed.mp4";

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("video").play();
  window.setTimeout(() => {
    document.querySelector("video").pause();
  }, 14000);
});
