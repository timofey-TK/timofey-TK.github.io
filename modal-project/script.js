const modal = document.querySelector(".modal"),
    clientHeight = document.documentElement.clientHeight,
    modalContent = document.querySelector(".modal-content"),
    contentHeight = modalContent.offsetHeight
abs = Math.abs

let animation = null, opening = null, is_end = true, stopScrolling = true, flag = true
var hm = new Hammer(modal, {});
hm.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });
hm.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

let height = 0
hm.on('panstart', function (ev) {
    height = modal.offsetHeight
    if (is_end && (ev.deltaY > 0)) {
        stopScrolling = true;
    }
    try {
        animation.pause();
        opening.pause()
    } catch (error) {
    }
});
hm.on('panmove', function (ev) {
    console.log(ev);
    if ((height - ev.deltaY <= clientHeight) && (flag || stopScrolling)) {
        anime({
            targets: modal,
            height: (height - ev.deltaY),
            duration: 0
        });
    }
    else {
        stopScrolling = false;
    }
});

hm.on('panend', function (ev) {
    height = modal.offsetHeight
    let percent = height * 100 / clientHeight
    if (ev.velocityY >= 0.3 && percent <= 100) {
        anime({
            targets: modal,
            height: clientHeight * 0,
            easing: 'easeOutQuart',
            duration: 400
        });
    }
    else if (ev.velocityY <= -0.3 && percent <= 100) {
        opening = anime({
            targets: modal,
            height: clientHeight - 10
        });
    }
    else if ((percent >= 70 && percent <= 100)) {
        opening = anime({
            targets: modal,
            height: clientHeight - 10
        });
    }
    else if (percent <= 20) {
        anime({
            targets: modal,
            height: clientHeight * 0,
            easing: 'easeOutQuart',
            duration: 400
        });
    }
    else if (percent >= 20 && percent <= 70) {
        anime({
            targets: modal,
            height: clientHeight * 0.50
        });
    }
});


function openModal() {
    animation = anime({
        targets: modal,
        height: clientHeight * 0.5
    });
}



modalContent.addEventListener("touchmove", handleTouchMove, {
    passive: false
});

function handleTouchMove(e) {
    if (!stopScrolling) {
        return;
    }
    e.preventDefault();
}

function onTouchStart() {
    stopScrolling = true;
}

function onTouchEnd() {
    stopScrolling = false;
}

modalContent.addEventListener("scroll", (a) => {
    is_end = (a.target.scrollTop == 0)
    flag = a.cancelable
})
