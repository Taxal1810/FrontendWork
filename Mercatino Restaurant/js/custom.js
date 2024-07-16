document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".about_slider", {
        slidesPerView: 1,
        spaceBetween: 30, // Add space between slides if needed
        keyboard: {
            enabled: true,
        },
        navigation: {
            nextEl: ".next_btn",
            prevEl: ".prev_btn",
        },
    });
});
