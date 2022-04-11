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

function calc() {
    messages = document.querySelector("#messages")
    ctr = document.querySelector(".ctr")
    convers = document.querySelector(".convers")
    msprice = document.querySelector(".price-click")
    isBD = document.querySelector("#checkbox1")
    isAD = document.querySelector("#checkbox2")
    request = document.querySelector(".request")
    requestPrice = document.querySelector(".request-price")
    // isAD.checked
    if (isBD.checked && !isAD.checked) {
        msprice.value = 3
    }
    if (isAD.checked && !isBD.checked) {
        msprice.value = 2.5
    }
    if (isBD.checked && isAD.checked) {
        msprice.value = 3.5
    }

    request.innerHTML = Math.round(Number("0." + String(ctr.value)) * Number("0." + String(convers.value)) * messages.value)
    requestPrice.innerHTML = Math.round((messages.value * msprice.value) / request.innerHTML)
}


let syncRange = document.querySelector(".messages_range"),
    syncMessages = document.querySelector(".messages")

let calcInputs = document.querySelectorAll(".js-calc input").forEach(i => {
    i.oninput = function () {
        if (i.classList.contains("messages")) {
            syncRange.value = syncMessages.value / 1000
            console.log("12344");
        }
        if (i.classList.contains("messages_range")) {
            syncMessages.value = syncRange.value * 1000
            console.log("12344");
        }
        calc()

    };
})
