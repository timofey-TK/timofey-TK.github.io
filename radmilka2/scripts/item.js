
const urlParams = new URLSearchParams(window.location.search)
const bookId = urlParams.get('id');
const book = books.find(book => book.id == bookId);

const title = document.querySelector(".name"),
    author = document.querySelector(".author"),
    desc = document.querySelector(".description"),
    price = document.querySelector(".price"),
    img = document.querySelector(".cover")

title.innerHTML = book.title
author.innerHTML += book.author
desc.innerHTML += book.description
price.innerHTML = book.price + "₽"
img.setAttribute("src", book.coverURL)
img.setAttribute("data-src", book.coverURL)
img.setAttribute("data-second-src", book.coverURL2)

function hover(img) {
    const src = img.getAttribute("data-second-src");
    img.setAttribute('src', src)
}
function unhover(img) {
    const src = img.getAttribute("data-src");
    img.setAttribute('src', src)
}

// Новые товары в корзине
const not = document.querySelector(".not");
let counter = 0;
function addToCart() {
    not.style.display = "flex"
    not.innerHTML = ++counter;
}
