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
