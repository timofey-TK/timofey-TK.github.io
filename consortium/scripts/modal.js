
const overlay = document.querySelector('.js-overlay-modal');
function openModal(modalId, IsMobile = false) {
    if (document.querySelector('.active-modal')) {
        closeActiveModal()
    }
    var modalElem
    if (IsMobile) {
        modalElem = document.querySelector('.only-mobile-modal[data-modal="' + modalId + '"]')
    }
    else {
        modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]')
    }
    modalElem.classList.add('active-modal');
    overlay.classList.add('active-modal');
}
function closeActiveModal() {
    document.querySelector('.active-modal').classList.remove('active-modal');
    overlay.classList.remove('active-modal');
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
    overlay.addEventListener('click', function () {
        closeActiveModal()
    });

}); // end ready
