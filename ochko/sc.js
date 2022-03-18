// tabs

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function (el) {
    el.addEventListener("click", openTabs);
});


function openTabs(el) {
    var btnTarget = el.currentTarget;
    var contentId = btnTarget.dataset.content;
    tabContent.forEach(function (el) {
        el.classList.remove("active");
        el.classList.remove("animate__animated");
        el.classList.remove("animate__zoomInUp");
    });
    tabLinks.forEach(function (el) {
        el.classList.remove("active");
    });
    document.querySelector("#" + contentId).classList.add("active");
    document.querySelector("#" + contentId).classList.add("animate__animated", "animate__zoomInUp");

    btnTarget.classList.add("active");
}
