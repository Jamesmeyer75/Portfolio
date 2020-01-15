$(document).ready(function () {
    $(".header").hide().fadeIn(500);
    $("contact-me-box").hide().fadeIn(1000);
});

// link to other pages
$(".about-me").on("click", function () {
    $("contact-me-box").hide();
    window.location.href = "../index.html";
});

$(".port-text").on("click", function () {
    $("contact-me-box").hide();
    window.location.href = "./portfolio.html";
});