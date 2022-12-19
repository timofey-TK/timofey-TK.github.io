function openModal(modalId) {
    if (document.querySelector('.active-modal')) {
        closeActiveModal()
    }
    var modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]')
    modalElem.classList.add('active-modal');
    document.body.classList.add("unscrollable")
}
function closeActiveModal() {
    document.querySelector('.active-modal').classList.remove('active-modal');
    document.body.classList.remove("unscrollable")
    if (document.querySelector('.active-modal')) {
        closeActiveModal()
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('keyup', function (e) {
        if (e.code == "Escape") {
            closeActiveModal()
        };
    }, false);

}); // end ready
