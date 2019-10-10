import "../assets/faq/scss/faq.scss";
import "../assets/shared/js/cursor";
import "../assets/shared/js/menu";

// Imports video to be used
import "../assets/shared/video/FAQ_Compressed.mp4";

const overlay = document.querySelector(".overlay");

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("video").playbackRate = 1.5;
  document.querySelector("video").play();
  window.setTimeout(() => {
    overlay.setAttribute("style", "background: rgba(0,0,0, 0.5)");
  }, 1500);
  window.setTimeout(() => {
    document.querySelector("video").playbackRate = 1;
  }, 4000);
  window.setTimeout(() => {
    document.querySelector("video").pause();
  }, 5000);
});
