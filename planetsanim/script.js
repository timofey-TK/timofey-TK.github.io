var sun = document.querySelector("#Expert");
var products_planet = document.querySelector("#products");
var systems_planet = document.querySelector("#systems");
var solutions_planet = document.querySelector("#solutions");
var solutions_list = document.querySelector(".solutions_list");
var header_list = document.querySelectorAll(".heafer-list__link");
var accent1 = document.querySelector(".accent1");
var box = document.querySelector(".box");
var hl = document.querySelector(".header_list");
function toogle_List() {
  header_list.forEach((el) => {
    el.classList.toggle("invisible");
  });
}
function stopStars() {
  var stars = document.querySelector("#solutions").querySelectorAll(".star");
  stars.forEach((el) => {
    el.classList.toggle("active");
  });
}

sun.addEventListener("click", (e) => {
  box.classList.toggle("paused");
  sun.classList.toggle("active");
  sun.querySelector(".pop-up").classList.toggle("invisible");
  stopStars();
  accent1.classList.toggle("invisible");
  products_planet.classList.toggle("hiden");
  systems_planet.classList.toggle("hiden");
  solutions_planet.classList.toggle("hiden");
  toogle_List();
});

solutions_planet.addEventListener("click", (e) => {
  hl.classList.toggle("hiden");
  box.classList.toggle("paused");
  solutions_planet.querySelector(".planet").classList.toggle("active");
  stopStars();
  solutions_list.classList.toggle("invisible");
  accent1.classList.toggle("invisible");
  products_planet.classList.toggle("hiden");
  systems_planet.classList.toggle("hiden");
  sun.classList.toggle("hiden");
  toogle_List();
});
// .addEventListener("click", (e) => { })

systems_planet.addEventListener("click", (e) => {
  box.classList.toggle("paused");
  systems_planet.querySelectorAll(".hiden-planet").forEach((el) => {
    el.classList.toggle("invisible");
  });
  systems_planet.classList.toggle("active");
  stopStars();
  accent1.classList.toggle("invisible");
  products_planet.classList.toggle("hiden");
  sun.classList.toggle("hiden");
  solutions_planet.classList.toggle("hiden");
  toogle_List();
});

products_planet.addEventListener("click", (e) => {
  box.classList.toggle("paused");
  products_planet.querySelectorAll(".hiden-planet").forEach((el) => {
    el.classList.toggle("invisible");
  });
  products_planet.classList.toggle("active");
  stopStars();
  systems_planet.classList.toggle("hiden");
  accent1.classList.toggle("invisible");

  sun.classList.toggle("hiden");
  solutions_planet.classList.toggle("hiden");
  toogle_List();
});
