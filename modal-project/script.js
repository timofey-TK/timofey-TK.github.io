const modal = document.querySelector(".modal"),
    helper = document.querySelector(".helper")

const height = document.documentElement.clientHeight

let pos1 = 0, pos2 = 0, coordY = 0, speed = 0, percent = 0

function openModal() {
    document.body.classList.add("modal-open")
    modal.classList.add("trs")
    modal.classList.add("medium")
    modal.style.top = (height * 36 / 100) + "px";
}


function handleStart(ev) {
    modal.classList.remove("trs")
    ev.preventDefault();
    touch = ev.changedTouches[0];
    coordY = Number(modal.style.top.replace("px", ""))
    pos1 = touch.clientY
}
function handleMove(ev) {
    ev.preventDefault();
    touch = ev.changedTouches[0];
    speed = parseInt((pos2 / pos1) * 1000)
    pos2 = touch.clientY - pos1
    pos1 = touch.clientY
    coordY += pos2
    modal.style.top = coordY + "px"
}

function handleEnd(ev) {
    modal.classList.remove("closed")
    modal.classList.remove("opened")
    modal.classList.remove("medium")
    pos1 = 0
    pos2 = 0
    ev.preventDefault();
    modal.classList.add("trs")
    touch = ev.changedTouches[0];
    percent = (coordY * 100 / height)
    if (percent >= 60 || (speed >= 40 && speed >= 0 && percent >= 0)) {
        modal.style.top = height + "px";
        modal.classList.add("closed")
    }
    else if ((percent <= 16) || (speed <= -40 && speed <= 0 && percent >= 0)) {
        modal.style.top = 0 + "px"
        modal.classList.add("opened")
    }
    else if (percent >= 16 && percent <= 60) {
        modal.classList.add("medium")
        modal.style.top = height * 36 / 100 + "px";
    }
}

function handleCancel(ev) {
    ev.preventDefault();
    touches = ev.changedTouches;
}


helper.addEventListener("touchstart", handleStart, false);
helper.addEventListener("touchend", handleEnd, false);
helper.addEventListener("touchcancel", handleCancel, false);
helper.addEventListener("touchmove", handleMove, false);
