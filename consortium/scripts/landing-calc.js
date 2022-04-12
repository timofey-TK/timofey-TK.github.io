function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

let messages = document.querySelector(".messages"),
    ctr = document.querySelector(".ctr"),
    convers = document.querySelector(".convers"),
    msprice = 2,
    fullprice = document.querySelector(".price-click"),
    isBD = document.querySelector("#checkbox1"),
    isAD = document.querySelector("#checkbox2"),
    request = document.querySelector(".request"),
    requestPrice = document.querySelector(".request-price"),
    messagesMobile = document.querySelector(".messages-mobile")
function calc() {
    messagesMobile.innerHTML = messages.value
    // isAD.checked
    if (isBD.checked && !isAD.checked) {
        msprice = 3
    }
    if (isAD.checked && !isBD.checked) {
        msprice = 2.5
    }
    if (isBD.checked && isAD.checked) {
        msprice = 3.5
    }
    if (!isBD.checked && !isAD.checked) {
        msprice = 2
    }

    request.innerHTML = Math.round((ctr.value/100) * (convers.value / 100) * messages.value)
    fullprice.value = (messages.value * msprice)
    requestPrice.innerHTML = Math.round((messages.value * msprice) / Number(request.innerHTML))
}


let syncRange = document.querySelector(".messages_range"),
    syncMessages = document.querySelector(".messages")

let calcInputs = document.querySelectorAll(".js-calc input").forEach(i => {
    i.oninput = function () {
        if (i.classList.contains("messages")) {
            syncRange.value = syncMessages.value / 1000
        }
        if (i.classList.contains("messages_range")) {
            syncMessages.value = syncRange.value * 1000
        }
        calc()

    };
})
