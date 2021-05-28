// Get the navbar
const sections = document.querySelectorAll(".scroll")
console.log(sections)

window.onscroll = function () {
  sections.forEach((el, i) => {
    var top = el.offsetTop - 100;
    var bottom = top + el.offsetHeight;
    var scroll = window.pageYOffset
    var id = el.getAttribute("id")
    if (scroll > top && scroll < bottom) {
      document.querySelector(".nav__link a.active").classList.remove('active')
      var href = "#" + id
      document.querySelector('a[href = "' + href + '"').classList.add('active')
    }
  })
};

// Плавный скролл через навигационные ссылки
const smoothLinks = document.querySelectorAll('.nav__link a');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

// Меню для мобилок
const links = document.querySelectorAll('.nav__link a')
const hamburger = document.querySelector(".hamburger")
const navBar = document.querySelector(".nav-bar")
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  navBar.classList.toggle("opened");
});
links.forEach((el) => {
  el.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    navBar.classList.toggle("opened");
  })
})

// Инициализация wow.js
new WOW().init();



