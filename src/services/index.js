import "../assets/services/scss/services.scss";
import "../assets/shared/js/cursor";
import "../assets/shared/js/menu";

// Imports video to be used
import "../assets/shared/video/Services_Compressed.mp4";

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("video").playbackRate = 1.5;
  document.querySelector("video").play();
  window.setTimeout(() => {
    document.querySelector("video").playbackRate = 1;
  }, 7000);
  window.setTimeout(() => {
    document.querySelector("video").pause();
  }, 11000);
});
