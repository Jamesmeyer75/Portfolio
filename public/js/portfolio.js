$(document).ready(function () {
    $("#show-carousel").hide().fadeIn(1000);
});

// link to other pages
$(".about-me").on("click", function () {
    $("#show-carousel").hide();
    window.location.href = "../index.html";
});

$(".contact").on("click", function () {
    $("#show-carousel").hide();
    window.location.href = "./contact.html";
});