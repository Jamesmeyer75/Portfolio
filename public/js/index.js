//simple fade function for the header and about me page
$(document).ready(function () {
    $(".header").hide().fadeIn(500);
    $(".about-me-box").hide().fadeIn(1000);
});

// links to swich to other pages

$(".port-text").on("click", function () {
    $(".about-me-box").hide();
    window.location.href = "../portfolio.html";
});

$(".contact").on("click", function () {
    $(".about-me-box").hide();
    window.location.href = "../contact.html";
});
