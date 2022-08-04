// Логика мобильного меню
let hamburger = document.querySelector("button.hamburger "),
    navMenu = document.querySelector(".navigation")

hamburger.addEventListener("click", function (e) {
    hamburger.classList.toggle("is-active")
    navMenu.classList.toggle("opened")
    document.body.classList.toggle('unscrollable')
})
// Слайдер на главном экране
const mainSectionSwiper = new Swiper('.main-section__swiper', {
    spaceBetween: 0,
    allowTouchMove: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        980: {
            allowTouchMove: false

        }
    }
});

// Теги
let tags = document.querySelectorAll(".tags-list .tag")
tags.forEach(function (tag) {
    tag.addEventListener("click", function (e) {
        tag.classList.toggle("chosen")
    })
})

// Рейтинг товаров
let ratings = document.querySelectorAll(".product-about-rating")
ratings.forEach(function (ratingField) {
    var rating = ratingField.getAttribute("data-rating")
    for (let i = 0; i < 5 - rating; i++) {
        let star = document.createElement('span')
        star.classList.add("star")
        star.innerHTML = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.549 0.926956C6.849 0.00595603 8.152 0.00595603 8.451 0.926956L9.521 4.21896C9.58638 4.41944 9.71345 4.59414 9.88408 4.71806C10.0547 4.84199 10.2601 4.9088 10.471 4.90896H13.933C14.902 4.90896 15.304 6.14896 14.521 6.71896L11.721 8.75296C11.55 8.87699 11.4227 9.05197 11.3573 9.25281C11.2919 9.45365 11.2918 9.67004 11.357 9.87096L12.427 13.163C12.727 14.084 11.672 14.851 10.887 14.281L8.087 12.247C7.91621 12.123 7.71056 12.0562 7.49951 12.0562C7.28845 12.0562 7.0828 12.123 6.912 12.247L4.112 14.281C3.328 14.851 2.274 14.084 2.573 13.163L3.643 9.87096C3.70818 9.67004 3.70806 9.45365 3.64267 9.25281C3.57728 9.05197 3.44997 8.87699 3.279 8.75296L0.480005 6.71996C-0.302995 6.14996 0.100005 4.90996 1.068 4.90996H4.529C4.74005 4.91001 4.94571 4.84329 5.11653 4.71935C5.28735 4.59541 5.41458 4.42061 5.48 4.21996L6.55 0.927956L6.549 0.926956Z" fill="#000" fill-opacity="0.4"/></svg>`;
        ratingField.appendChild(star)
    }
    for (let i = 0; i < rating; i++) {
        let star = document.createElement('span')
        star.classList.add("star")
        star.innerHTML = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.549 0.926956C6.849 0.00595603 8.152 0.00595603 8.451 0.926956L9.521 4.21896C9.58638 4.41944 9.71345 4.59414 9.88408 4.71806C10.0547 4.84199 10.2601 4.9088 10.471 4.90896H13.933C14.902 4.90896 15.304 6.14896 14.521 6.71896L11.721 8.75296C11.55 8.87699 11.4227 9.05197 11.3573 9.25281C11.2919 9.45365 11.2918 9.67004 11.357 9.87096L12.427 13.163C12.727 14.084 11.672 14.851 10.887 14.281L8.087 12.247C7.91621 12.123 7.71056 12.0562 7.49951 12.0562C7.28845 12.0562 7.0828 12.123 6.912 12.247L4.112 14.281C3.328 14.851 2.274 14.084 2.573 13.163L3.643 9.87096C3.70818 9.67004 3.70806 9.45365 3.64267 9.25281C3.57728 9.05197 3.44997 8.87699 3.279 8.75296L0.480005 6.71996C-0.302995 6.14996 0.100005 4.90996 1.068 4.90996H4.529C4.74005 4.91001 4.94571 4.84329 5.11653 4.71935C5.28735 4.59541 5.41458 4.42061 5.48 4.21996L6.55 0.927956L6.549 0.926956Z" fill="#FFA049"/></svg>`;
        ratingField.appendChild(star)
    }

})

// Слайдер с отзывами
const feadbackSwiper = new Swiper('.feedback__swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    idesPerView: 2,
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
