
// Слайдер на главном экране
const mainSectionSwiper = new Swiper(".main-section__swiper", {
    spaceBetween: 0,
    allowTouchMove: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        980: {
            allowTouchMove: false,
        },
    },
});
