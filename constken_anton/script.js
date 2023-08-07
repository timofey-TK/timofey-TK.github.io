
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
var clientSplide = new Splide('.clients-splide', {
    speed: 600,
}).mount();
var achievementsSplide = new Splide('.achievements-splide', {
    perPage: 4,
    gap: "30px",
    pagination: false,
    speed: 600,
    perMove: 1,
    breakpoints: {
        1600: {
            perPage: 3,
        },
        767: {
            gap: "10px",
            arrows: false,
            perPage: 2,
            pagination: true,
        },
    }
}).mount();




function getMaxHeight(element) {
    let maxHeight = 0;
    const children = element.children;

    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        maxHeight = Math.max(maxHeight, child.offsetHeight);
    }
    return maxHeight;
}

const filterBtns = document.querySelectorAll(".filter")
const list = document.querySelector('.proects__list');
const sizer = list.querySelector('.card')
let options
if (window.matchMedia("(max-width: 767px)").matches) {
    options = {
        itemSelector: '.card',
        layoutMode: 'horiz',
    }
}
else {
    options = {
        itemSelector: '.card',
        masonry: {
            columnWidth: ".card",
        }
    }
}
var iso = new Isotope(list, options);


window.onload = () => {
    iso.arrange();
    if (window.matchMedia("(max-width: 767px)").matches) {

        document.querySelector(".proects .list-wrapper").style.height = getMaxHeight(list) + 30 + "px"
    }

}

let filterbuff = []
function filterList(btn) {
    filterType = btn.getAttribute("data-groups-type")
    isActive = btn.classList.contains("active")

    if (filterType == "all" && !isActive) {
        filterBtns.forEach(el => {
            el.classList.remove("active")
        })
        filterbuff = []

    }
    else if (isActive) {
        filterbuff = filterbuff.filter((i) => i != filterType)
        btn.classList.remove("active")
    }
    else {
        filterbuff.push(filterType)
        btn.classList.add("active")
    }

    if (filterbuff.length == 0) {
        iso.arrange({
            filter: function (itemElem) {
                return true;
            }
        });
    }
    else {
        iso.arrange({
            filter: function (itemElem) {
                var atr = itemElem.getAttribute("data-groups")
                return filterbuff.includes(atr);
            }
        });
    }
}

const lightbox = GLightbox({});
