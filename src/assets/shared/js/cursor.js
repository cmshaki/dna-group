const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");
const buttons = document.querySelectorAll("button");
const menu = document.querySelector(".nav-menu");
const logo = document.querySelector(".dna-logo");
const modalMenuNav = document.querySelectorAll(".menu-modal ul li");
const pageHeads = document.querySelectorAll("main h1");
const formInputs = document.querySelectorAll("form input");
const homeLogo = document.querySelector("main svg.dna-home-logo");

let initialHeight = "30px";
let initialWidth = "30px";
let initialBg = "";
let timer;
const runUniqueCursor = () => {
  if (window.innerWidth > 991) {
    modalMenuNav.forEach(item => {
      item.addEventListener("mouseover", () => {
        initialHeight = "60px";
        initialWidth = "60px";
        initialBg = "background: rgba(255,255,255,0.6)";
      });
      item.addEventListener("mouseout", () => {
        initialHeight = "30px";
        initialWidth = "30px";
        initialBg = "";
      });
    });

    // Adding Event Listener for all buttons of a page
    buttons.forEach(item => {
      item.addEventListener("mouseover", () => {
        initialHeight = "60px";
        initialWidth = "60px";
        initialBg = "background: rgba(255,255,255,0.6)";
      });
      item.addEventListener("mouseout", () => {
        initialHeight = "30px";
        initialWidth = "30px";
        initialBg = "";
      });
    });

    menu.addEventListener("mouseover", () => {
      initialHeight = "60px";
      initialWidth = "60px";
      initialBg = "background: rgba(255,255,255,0.6)";
    });

    menu.addEventListener("mouseout", () => {
      initialHeight = "30px";
      initialWidth = "30px";
      initialBg = "";
    });

    if (logo) {
      logo.addEventListener("mouseover", () => {
        initialHeight = "60px";
        initialWidth = "60px";
        initialBg = "background: rgba(255,255,255,0.6)";
      });
      logo.addEventListener("mouseout", () => {
        initialHeight = "30px";
        initialWidth = "30px";
        initialBg = "";
      });
    }

    if (homeLogo) {
      homeLogo.addEventListener("mouseover", () => {
        initialHeight = "60px";
        initialWidth = "60px";
        initialBg = "background: rgba(255,255,255,0.6)";
      });
      homeLogo.addEventListener("mouseout", () => {
        initialHeight = "30px";
        initialWidth = "30px";
        initialBg = "";
      });
    }

    if (pageHeads) {
      pageHeads.forEach(item => {
        item.addEventListener("mouseover", () => {
          initialHeight = "60px";
          initialWidth = "60px";
          initialBg = "background: rgba(255,255,255,0.6)";
        });
        item.addEventListener("mouseout", () => {
          initialHeight = "30px";
          initialWidth = "30px";
          initialBg = "";
        });
      });
    }

    if (formInputs) {
      formInputs.forEach(item => {
        item.addEventListener("mouseover", () => {
          initialHeight = "60px";
          initialWidth = "60px";
          initialBg = "background: rgba(255,255,255,0.6)";
        });
        item.addEventListener("mouseout", () => {
          initialHeight = "30px";
          initialWidth = "30px";
          initialBg = "";
        });
      });
    }

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
          w /
            2}px; height: ${initialHeight}; width: ${initialWidth}; ${initialBg}`
      );
    });
  }
};
runUniqueCursor();

window.addEventListener("resize", () => {
  if (timer) {
    window.clearTimeout(timer);
  }
  timer = window.setTimeout(runUniqueCursor, 200);
});
