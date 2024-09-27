var categoriesArray = categories;
categoriesArray.unshift(["-1", "Все жанры"])
console.log(categoriesArray);
const category = new URLSearchParams(window.location.search).get('cat');
const select = new ItcCustomSelect("#select", {
    name: "category", // значение атрибута name у кнопки
    targetValue: category ? category : "-1",
    options: categoriesArray,
    onSelected(select, option) {
        generateBooks("");
    },
});
// Новые товары в корзине
const not = document.querySelector(".not");
let counter = 0;
function addToCart() {
    not.style.display = "flex"
    not.innerHTML = ++counter;
}

// Генерация товаров в каталоге
const bookGrid = document.querySelector(".item-grid");
const searchInput = document.querySelector(".search")
searchInput.addEventListener("input", (e) => {
    generateBooks(searchInput.value.toLowerCase())
})
function BookComponent(book) {
    return `<div class="item" data-id="${book.id}" data-genre="${book.genre}">
                <a href="item.html?id=${book.id}">
                    <img data-src="${book.coverURL}"
                    src="${book.coverURL}"
                        alt="book"
                        class="book-image"
                        data-second-src="${book.coverURL2}" onmouseover="hover(this);" onmouseout="unhover(this);">
                </a>
                <p class="book-name">${book.title}</p>
                <p class="book-author">${book.author}</p>
                <div class="item-footer">
                    <button class="add-to-cart-btn btn" onclick="addToCart()">В корзину</button>
                    <p class="price">${book.price}₽</p>
                </div>
            </div>`
}
function generateBooks(search) {
    let bookHtml = ``;
    books.forEach((book) => {
        if (select.value != "-1" && search != "") {
            if (select.value == book.genre && book.title.toLowerCase().includes(search)) {
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

function hover(img) {
    const src = img.getAttribute("data-second-src");
    img.setAttribute('src', src)
}
function unhover(img) {
    const src = img.getAttribute("data-src");
    img.setAttribute('src', src)
}
