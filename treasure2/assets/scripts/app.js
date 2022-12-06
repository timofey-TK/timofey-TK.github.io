
const html = document.querySelector("html");
const menu = document.querySelector(".menu")
const burger = document.querySelector(".burger")
burger.addEventListener("click", function (e) {
    e.stopPropagation()
    menu.classList.toggle("is-active")
    burger.classList.toggle("is-active")
    html.classList.toggle("fixed")
});

const openBtn = document.querySelectorAll("[data-open-modal]")
const modal = document.querySelectorAll(".js-modal")
const closeBtn = document.querySelectorAll(".js-modal-close")
const formBtn = document.querySelectorAll(".js-modal-form-btn")
const overlay = document.querySelector(".js-modals-overlay")

closeBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        modal.forEach(function (modal) {
            modal.classList.remove("is-active")
        })
        overlay.classList.remove("is-active")
    });
})
openBtn.forEach(function (btn) {
    var modal = btn.getAttribute("data-open-modal")
    document.querySelector(modal).classList.add("is-active")
    overlay.classList.add("is-active")
})


overlay.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal-overlay")) {
        overlay.classList.remove("is-active")
    }
})

const fadeOut = (el, timeout) => {
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;

    setTimeout(() => {
        el.style.display = 'none';
    }, timeout);
};
const fadeIn = (el, timeout, display) => {
    el.style.opacity = 0;
    el.style.display = display || 'block';
    el.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
        el.style.opacity = 1;
    }, 10);
};
var cookies = localStorage.getItem("story")
const cookiesModal = document.querySelector(".js-cookie")
if (cookies == null) {
    fadeIn(cookiesModal, 1000, "block")
}
document.querySelector(".js-cookie-close").addEventListener("click", function () {
    fadeOut(cookiesModal, 500)
})
document.querySelector(".js-cookie-add").addEventListener("click", function () {
    localStorage.setItem("story", "true")
    fadeOut(cookiesModal, 500)
})

const games = document.querySelectorAll(".js-games"),
    loginModal = document.querySelector('[data-modal="login"]'),
    skipBtn = document.querySelector(
        '[data-modal="login"] .js-button-skip-label'
    )
var skip = localStorage.getItem("skip");
games.forEach(function (game) {

    if (!Boolean(skip)) {
        game.addEventListener("click", function (gameItem) {
            gameItem.preventDefault()
            loginModal.classList.add("is-active")
            overlay.classList.add("is-active")
            e();
        })
    }
})
skipBtn.addEventListener("click", function () {
    localStorage.setItem("skip", true),
        document.location.reload();
});

const filterBtn = document.querySelectorAll(".js-filter-btn"),
    filterArea = document.querySelector(".js-filter-area")
if (filterBtn && filterArea) {
    var filterAreaGrid = new Isotope(filterArea, {
        itemSelector: ".js-filter-item",
    });
    filterBtn.forEach(function (btn) {
        btn.addEventListener("click", function () {
            filterBtn.forEach(function (btn) {
                btn.classList.remove("is-checked");
            })
            btn.classList.add("is-checked");
            var dataFilter = btn.getAttribute("data-filter");
            filterAreaGrid.arrange({
                filter: function (itemElem) {
                    if (dataFilter == "*") {
                        return 1
                    }
                    else if ((dataFilter == ".new")) {
                        return itemElem.classList.contains("new")
                    }
                    else if ((dataFilter == ".free")) {
                        return itemElem.classList.contains("free")
                    }
                }
            });
        });
    });
}
