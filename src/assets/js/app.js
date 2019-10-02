$(document).ready(function() {
    // document.getElementById("check_buss").checked = true;
    // console.log(document.getElementById("check_buss").checked == false);

    $("#logo_mark").click(function() {
        window.location.href = "index.html";
    });


});

$(document).on('click', '.menu-item-text4', function() {
    window.location.href = "contact.html";
});

$(document).on('click', '.menu-item-text1', function() {
    window.location.href = "index.html";
});


//scroll smooth control
// const body = document.querySelector('body');

// body.onscroll = screenScroll;

// function screenScroll() {
//     body.classList.add("is-scrolling");
// }