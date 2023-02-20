class HvrSlider {
    constructor(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => {
            if (el.querySelectorAll('img').length > 1) {
                const hvr = document.createElement('div');
                hvr.classList.add('hvr');

                const hvrImages = document.createElement('div');
                hvrImages.classList.add('hvr__images');
                hvr.appendChild(hvrImages);

                const hvrSectors = document.createElement('div');
                hvrSectors.classList.add('hvr__sectors');
                hvrImages.appendChild(hvrSectors);

                const hvrDots = document.createElement('div');
                hvrDots.classList.add('hvr__dots');
                hvr.appendChild(hvrDots);

                el.parentNode.insertBefore(hvr, el);
                hvrImages.prepend(el);

                const hvrImagesArray = hvr.querySelectorAll('img');
                hvrImagesArray.forEach(() => {
                    hvrSectors.insertAdjacentHTML('afterbegin', '<div class="hvr__sector"></div>');
                    hvrDots.insertAdjacentHTML('afterbegin', '<div class="hvr__dot"></div>');
                });
                hvrDots.firstChild.classList.add('hvr__dot--active');
                const setActiveEl = function (targetEl) {
                    const index = [...hvrSectors.children].indexOf(targetEl);
                    hvrImagesArray.forEach((img, idx) => {
                        if (index == idx) {
                            img.style.display = 'block';
                        } else {
                            img.style.display = 'none';
                        }
                    });
                    hvr.querySelectorAll('.hvr__dot').forEach((dot, idx) => {
                        if (index == idx) {
                            dot.classList.add('hvr__dot--active');
                        } else {
                            dot.classList.remove('hvr__dot--active');
                        }
                    });
                };
                hvrSectors.addEventListener('mouseover', function (e) {
                    if (e.target.matches('.hvr__sector')) {
                        setActiveEl(e.target);
                    }
                });
                hvrSectors.addEventListener('touchmove', function (e) {
                    const position = e.changedTouches[0];
                    const target = document.elementFromPoint(position.clientX, position.clientY);
                    if (target.matches('.hvr__sector')) {
                        setActiveEl(target);
                    }
                });
            }
        });
    }
}
function uploadImage(file) {
    if (!file || !file.type.match(/image.*/)) return;
    var preview = document.createElement("img")
    preview.src = URL.createObjectURL(file);
    preview.classList.add("loading")
    document.querySelector("#output").appendChild(preview)
    var fd = new FormData();
    fd.append("image", file);
    axios
        .post("https://api.imageban.ru/v1", fd, {
            headers: { Authorization: "TOKEN 0pD198Co5rXWGmFGxOTL" },
        })
        .then(function (res) {
            preview.classList.add("load");
            preview.setAttribute('data-name', res.data.data.img_name)
            preview.setAttribute('data-link', res.data.data.link)
            console.log(res);
        })
        .catch(function (error) {
            console.log(error);
            preview.classList.add("error");
        })
        .finally(function () {
            preview.classList.remove("loading");
        });
}

function createProductCard(el, cards) {
    var product = document.createElement("div"), photos
    product.classList.add("product-card")
    for (i in el) {
        if (i == "name" || i == "price" || i == "description" || i == "date") {
            var child = document.createElement("p")
            child.innerHTML = el[i]
            product.appendChild(child)
        }
    }
    photos = document.createElement("div")
    photos.classList.add("images")
    for (i of el.photos.split(",")) {
        var img = document.createElement("img")
        img.src = i
        photos.appendChild(img)
    }
    product.appendChild(photos)
    cards.appendChild(product)
}
document.addEventListener("DOMContentLoaded", () => {
    var productCount, cards = document.querySelector(".cards")
    axios.get("https://sheetdb.io/api/v1/bljyn6ey32c99/count").then(function (response) {
        productCount = response.data.rows
    }).catch(function (error) {
        console.log(error);
        alert("Перезагрузите страницу, не удается получить товары")
    })
    axios.get("https://sheetdb.io/api/v1/bljyn6ey32c99").then(function (response) {
        for (el of response.data) {
            createProductCard(el, cards)
        }
        new HvrSlider('.images');
    }).catch(function (error) {
        console.log(error);
        alert("Перезагрузите страницу, не удается получить товары")
    })
});
