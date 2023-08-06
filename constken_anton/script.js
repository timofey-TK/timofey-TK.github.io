document.addEventListener('DOMContentLoaded', function () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const hamburger = document.querySelector(".hamburger"),
        header = document.querySelector(".header__wrapper"),
        nav = document.querySelector(".nav"),
        body = document.querySelector("body")

    hamburger.addEventListener("click", (e) => {
        hamburger.classList.toggle("is-active")
        header.classList.toggle("is-active")
        nav.classList.toggle("is-active")
        body.classList.toggle("unscrollable")
    })
    nav.addEventListener("click", (e) => {
        hamburger.classList.remove("is-active")
        header.classList.remove("is-active")
        nav.classList.remove("is-active")
        body.classList.remove("unscrollable")
    })
    var splide = new Splide('.splide', {
        arrowPath: 'M42.7443 43.875C40.6808 45.0167 40.6808 47.9833 42.7443 49.125L51.5476 53.9958C53.5471 55.1021 56 53.656 56 51.3708L56 41.6292C56 39.344 53.5471 37.8979 51.5476 39.0042L42.7443 43.875Z',
    });
    splide.mount();
});
