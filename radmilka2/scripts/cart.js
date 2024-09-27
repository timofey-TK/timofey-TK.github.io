const textInputs = document.querySelectorAll(".cart-count input");

textInputs.forEach(el => {
    el.addEventListener("input", (event) => {
        if (el.value == "") {
            el.value = 0;
        }
        else if (el.value.charAt(0) == "0") {
            el.value = el.value.substr(1)
        }
        if (parseInt(el.value) > 999) {
            el.value = el.value.substr(0, 3)
            return
        }

        el.style.width = 0;
        el.style.width = el.scrollWidth + "px";

        changeSum(1);
    })
})

const booksCart = document.querySelectorAll(".book")
const totalSum = document.querySelector(".sum")
const prevSum = document.querySelector(".prev-sum")
let s = 0;
function changeSum(sale) {
    s = 0
    booksCart.forEach(book => {
        const price = parseInt(book.querySelector(".cart-price").innerHTML.slice(0, -1))
        const count = parseInt(book.querySelector(".cart-count input").value)
        s += price * count
    })
    if (sale != 1) {
        prevSum.innerHTML = `Скидка: ${100 - sale * 100}%. Старая цена: <span class="lined">${s}₽</span>`
    }
    totalSum.innerHTML = "Итого: " + s * sale + "₽"
}
changeSum(1)

function promocode() {
    if (document.querySelector(".promocode input").value != "") {
        changeSum(0.9)
    }
}


function pay() {
    Swal.fire({
        confirmButtonColor: "#ee6a59",
        title: "Введите свои контакты",
        html: `
    <input id="swal-input1" class="swal2-input" placeholder="Имя">
    <input id="swal-input2" class="swal2-input" placeholder="Телефон" maxlength="11" type="tel" >
  `,
        color: "#3a3f58",
        background: "#ece6cd",
        confirmButtonText: "Выбрать способ доставки",
    }).then((result) => {

        if (result.isConfirmed) {
            Swal.fire({
                confirmButtonColor: "#ee6a59",
                title: "Введите способ доставки",
                input: "select",
                inputOptions: {

                    1: "Курьером",
                    2: "Самовывоз из магазина",
                    3: "Самовывоз из пункта выдачи",
                    4: "Почтой"
                },
                inputPlaceholder: "Способ доставки",
                color: "#3a3f58",
                background: "#ece6cd",
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        confirmButtonColor: "#ee6a59",
                        title: "Введите способ оплаты",
                        input: "select",
                        inputOptions: {

                            1: "Картой",
                            2: "СБП",
                            3: "Криптовалютой",
                        },
                        inputPlaceholder: "Способ оплаты",
                        color: "#3a3f58",
                        background: "#ece6cd",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                confirmButtonColor: "#ee6a59",
                                title: "Спасибо за покупку",
                                color: "#3a3f58",
                                background: "#ece6cd",
                            });
                        }
                    });
                }
            });
        }
    });

}
