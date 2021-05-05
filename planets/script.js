var sun = document.querySelector("#Expert");
var products_planet = document.querySelector("#products");
var systems_planet = document.querySelector("#systems");
var solutions_planet = document.querySelector("#solutions");
var header_list = document.querySelectorAll(".heafer-list__link");
var accent1 = document.querySelector(".accent1");

function toogle_List() {
  header_list.forEach((el) => {
    el.classList.toggle("invisible");
  });
}

sun.addEventListener("click", (e) => {
  sun.querySelector(".pop-up").classList.toggle("invisible");
  accent1.classList.toggle("invisible");
  products_planet.classList.toggle("hiden");
  systems_planet.classList.toggle("hiden");
  solutions_planet.classList.toggle("hiden");
  toogle_List();
});

// .addEventListener("click", (e) => { })
