window.addEventListener('load', function() {
    document.body.style.overflow = 'visible';

    document.getElementById("nav").addEventListener("click", function() {
        var pageContent = document.getElementById("barba-wrapper");
        var menuContent = document.getElementById("menu-content");
        var ovelay_contact = document.getElementById("overlay");


        if (pageContent.style.display == "none") {
            document.getElementById("menu_name").innerHTML = "Menu";
            pageContent.style.display = "block";
            menuContent.style.display = "none";
            document.body.style.overflow = 'visible';

        } else {
            document.getElementById("menu_name").innerHTML = "Back";
            pageContent.style.display = "none";
            menuContent.style.display = "block";
            document.body.style.overflow = 'hidden';
            window.scrollTo(0, 0);
        }
    });

}, false);

$(document).ready(function() {
    // document.getElementById("check_buss").checked = true;
    // console.log(document.getElementById("check_buss").checked == false);

    $("#check_buss").change(function() {
        if (document.getElementById("check_buss").checked) {
            document.getElementById("phonenum_buss").style.display = "inline";
        } else {
            document.getElementById("phonenum_buss").style.display = "none";
        }
    });

    $("#check_tech").change(function() {
        if (document.getElementById("check_tech").checked == true) {
            document.getElementById("phonenum_tech").style.display = "inline";
        } else {
            document.getElementById("phonenum_tech").style.display = "none";
        }
    });
});

// var parallax_img_val = document.querySelector("#parallax_img");

// function setTranslate(xPos, yPos, el) {
//     el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
// }

// window.addEventListener("load", scrollLoop, false);

// var xScrollPosition;
// var yScrollPosition;

// function scrollLoop() {
//     xScrollPosition = window.scrollX;
//     yScrollPosition = window.scrollY;

//     setTranslate(0, yScrollPosition * -0.2, parallax_img_val);

//     requestAnimationFrame(scrollLoop);
// }