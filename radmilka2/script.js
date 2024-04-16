const categoriesArray = categories.map(category => [category.id.toString(), category.name]);
categoriesArray.unshift(["-1", "Все жанры"])
const select = new ItcCustomSelect('#select', {
    name: 'category', // значение атрибута name у кнопки
    targetValue: "-1",
    options: categoriesArray,
    onSelected(select, option) {
        generateBooks()
    }
});
console.log();
// Генерация товаров


const bookGrid = document.querySelector(".item-grid");
const searchInput = document.querySelector(".search")
searchInput.addEventListener("input", (e) => {
    generateBooks(searchInput.value.toLowerCase())
})
function BookComponent(book) {
    return `<div class="item" data-id="${book.id}" data-genre="${book.genre}">
                <img src="${book.coverURL}"
                    alt="book" class="book-image">
                <p class="book-name">${book.title}</p>
                <p class="book-author">${book.author}</p>
                <div class="item-footer">
                    <button class="add-to-cart-btn btn" onclick="addToCart(${book.id})">В корзину</button>
                    <p class="price">${book.price}₽</p>
                </div>
            </div>`
}

function generateBooks(search) {
    let bookHtml = ``;
    books.forEach((book) => {
        console.log(select.value);
        if (select.value != "-1" && search != "") {
            if (select.value == book.genre && book.title.includes(search)) {
                bookHtml += BookComponent(book)
            }
        }
        else if (select.value != "-1") {
            if (select.value == book.genre) {
                bookHtml += BookComponent(book)
            }
        }
        else if (search != "") {
            if (book.title.toLowerCase().includes(search)) {
                bookHtml += BookComponent(book)
            }
        }
        else {
            bookHtml += BookComponent(book)
        }
    })
    bookGrid.innerHTML = bookHtml;
}
generateBooks("")
// Корзина
var cart = {}
function addToCart(id) {
    if (cart[id]) {
        cart[id] += 1;
    }
    else {
        cart[id] = 1
    }
    console.log(cart);
    reloadCart()
}
function deleteFromCart(id) {
    if (cart[id] >= 2) {
        cart[id] -= 1;
    }
    else {
        delete cart[id];
    }
    console.log(cart);
    reloadCart()
}

const cartEl = document.querySelector(".cart")
const cartModal = document.querySelector(".cart-modal")
const cartNot = cartEl.querySelector(".not")
const cartGridItem = document.querySelector(".cart-item-grid")
const isEmptyText = cartModal.querySelector(".empty")
const modalHeader = cartModal.querySelector(".modal-header")
const modalFooter = cartModal.querySelector(".modal-footer")
const sumText = cartModal.querySelector(".sum")
const closeBtn = document.querySelector(".close-btn")

closeBtn.addEventListener("click", (e) => {
    cartModal.classList.toggle("open")
})
cartEl.addEventListener("click", (e) => {
    cartModal.classList.toggle("open")
})

function getBookById(id) {
    return books.find(book => book.id == id);
}
function reloadCart() {
    const countBooks = Object.values(cart).reduce((accumulator, value) => accumulator + value, 0);
    let sum = 0;
    if (countBooks != 0) {
        isEmptyText.style.display = "none";
        cartNot.style.display = "flex";
        modalHeader.style.display = "flex";
        modalFooter.style.display = "flex";
        cartNot.innerHTML = countBooks
        let bookHtml = ``;
        for (key in cart) {
            let book = getBookById(key)
            sum += book.price * cart[key];
            bookHtml += ` <div class="book">
                    <img src="${book.coverURL}"
                        alt="cover" style="grid-area: cover;">
                    <p class="cart-book-name" style="grid-area: name;">${book.title}</p>
                    <p class="cart-book-author" style="grid-area: author;">${book.author}</p>
                    <p class="cart-price" style="grid-area: price;">${book.price}₽</p>
                    <button class="cart-delete-btn btn" style="grid-area: delete;" onclick="deleteFromCart(${book.id})">
                        <box-icon name="trash" color="#3a3f58"></box-icon>
                    </button>
                    <p class="cart-count" style="grid-area: count;">${cart[key]}шт</p>
                </div>`
        }
        cartGridItem.innerHTML = bookHtml
        sumText.innerHTML = `Итого: ${sum}₽`
    }
    else {
        cartNot.style.display = "none";
        isEmptyText.style.display = "block";
        cartGridItem.innerHTML = ""
        modalHeader.style.display = "none";
        modalFooter.style.display = "none";
    }

}
