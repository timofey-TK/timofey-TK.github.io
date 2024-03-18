
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector('.menu');
    const burger = document.querySelector('.hamburger'),
        body = document.body,
        html = document.querySelector("html");

    burger.addEventListener('click', () => {
        menu.classList.toggle('is-active');
        burger.classList.toggle('is-active');
        body.classList.toggle('no-scroll');
        html.classList.toggle('no-scroll');
    });


    const smoothLinks = document.querySelectorAll('.smooth-scroll');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            menu.classList.remove('is-active');
            burger.classList.remove('is-active');
            body.classList.remove('no-scroll');
            html.classList.remove('no-scroll');
            const id = smoothLink.getAttribute('href');
            console.log(id);
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
            });
        });
    };


    const swiperEl_events = document.querySelector('.events swiper-container');
    if (swiperEl_events) {

        const swiperParams_events = {
            breakpoints: {
                0: {
                    slidesOffsetBefore: 20,
                    slidesPerView: "auto"
                },
                992: {
                    slidesPerView: 4
                },
                1200: {
                    slidesOffsetBefore: 0,
                    slidesPerView: 4
                },
            }
        };
        Object.assign(swiperEl_events, swiperParams_events);
        swiperEl_events.initialize();
    }

    const swiperGallery = document.querySelector(".gallery swiper-container")
    swiperGallery.addEventListener('swiperslidechange', (event) => {
        galleryPlayers[swiperGallery.swiper.previousIndex].pause();
    });

    const swiperEl_reviews = document.querySelector('.reviews swiper-container');
    const swiperParams_reviews = {
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
        }
    };
    Object.assign(swiperEl_reviews, swiperParams_reviews);
    swiperEl_reviews.initialize();
    swiperEl_reviews.addEventListener('swiperslidechange', (event) => {
        reviewsPlayers[swiperEl_reviews.swiper.previousIndex].pause();
    });
    swiperEl_reviews.addEventListener('click', (event) => {
        const className = event.target.classList[0];
        if (className == "swiper-slide-next") {
            swiperEl_reviews.swiper.slideNext()
        }
        else if (className == "swiper-slide-prev") {
            swiperEl_reviews.swiper.slidePrev()
        }
    });

    const galleryPlayers = Plyr.setup('.gallery-player', {
        controls: ['play-large', 'play', 'progress', 'fullscreen'],
    });

    const player = new Plyr('#about-player', {
        controls: ['play-large', 'play', 'progress', 'fullscreen'],
    });

    const reviewsPlayers = Plyr.setup('.reviews-player', {
        controls: ['play-large', 'play', 'progress', 'fullscreen'],
    });

    const lightbox = GLightbox({ keyboardNavigation: true, touchNavigation: true });
    lightbox.on('open', () => {
        swiperGallery.swiper.disable()
    });
    lightbox.on('close', () => {
        swiperGallery.swiper.enable()
    });

    // Обработка телефонного инпута
    var phoneInputs = document.querySelectorAll('input[data-tel-input]');
    var getInputNumbersValue = function (input) {
        // Return stripped input value — just numbers
        return input.value.replace(/\D/g, '');
    }

    var onPhonePaste = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            var pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
                // formatting will be in onPhoneInput handler
                input.value = inputNumbersValue;
                return;
            }
        }
    }

    var onPhoneInput = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                input.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }
    var onPhoneKeyDown = function (e) {
        // Clear input after remove last symbol
        var inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
        }
    }
    for (var phoneInput of phoneInputs) {
        phoneInput.addEventListener('keydown', onPhoneKeyDown);
        phoneInput.addEventListener('input', onPhoneInput, false);
        phoneInput.addEventListener('paste', onPhonePaste, false);
    }
})
