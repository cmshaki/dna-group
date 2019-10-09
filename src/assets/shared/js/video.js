const videoPause = time => {
  window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("video").play();
    setTimeout(() => {
      document.querySelector("video").pause();
    }, time);
  });
};

export default videoPause;
