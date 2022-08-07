
// Слайдер с отзывами
const feadbackSwiper = new Swiper('.feedback__swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    spaceBetween: 100,
    breakpoints: {
        650: {
            spaceBetween: -30,
        },
        980: {
            spaceBetween: -60,
        }
    }

});
