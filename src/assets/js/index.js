window.addEventListener('load', function() {
    document.getElementById("nav").addEventListener("click", function() {
        var pageContent = document.getElementById("page-content");
        var menuContent = document.getElementById("menu-content");

        if (pageContent.style.display == "none") {
            document.getElementById("menu_name").innerHTML = "Menu";
            pageContent.style.display = "block";
            menuContent.style.display = "none";
        } else {
            document.getElementById("menu_name").innerHTML = "Home";
            pageContent.style.display = "none";
            menuContent.style.display = "block";
        }
    });

}, false);

$(document).ready(function() {
    console.log("load");
    document.querySelector('canvas').style.display = "none";
    $("#email_input").focus(function() {
        document.querySelector('canvas').style.display = "none";
    });
    $("#email_input").blur(function() {
        document.querySelector('canvas').style.display = "none";
    });
});