// Слайдер на странице товара
var productSwiperThumbs = new Swiper(".product-section__thumb-swiper", {
    direction: 'horizontal',
    spaceBetween: 15,
    slidesPerView: 3,
    watchSlidesProgress: true,
    breakpoints: {
        480: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        650: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        980: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1350: {
            direction: 'vertical',
            slidesPerView: 4,
            spaceBetween: 10,
        }
    }
});
var productSwiper = new Swiper(".product-section__swiper", {
    spaceBetween: 10,
    slidesPerView: 1,
    thumbs: {
        swiper: productSwiperThumbs
    }
});

// Лайтбокс для товаров слайдера
const lightbox = GLightbox({
    draggable: false,
    touchNavigation: false,
    skin: "without-nav-btns"
});

var similarProductsSwiper = new Swiper(".similar-products__swiper", {
    spaceBetween: 10,
    slidesPerView: 1,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },

        1350: {
            slidesPerView: 3,
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

// Вызовов модального окна
var element = document.querySelector('.similar-products__swiper'),
    flag = false

var Visible = function (target) {
    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top &&
        targetPosition.top < windowPosition.bottom &&
        targetPosition.right > windowPosition.left &&
        targetPosition.left < windowPosition.right) {
        if (!flag) {
            showDialog(document.querySelector("#get-discount-ozon-modal"))
            flag = true
        }
    } else {
    };
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {
    Visible(element);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible(element);
// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {
    Visible(element);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible(element);
