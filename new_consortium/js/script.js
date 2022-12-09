const convertImages = (query) => {
    const images = document.querySelectorAll(query);

    images.forEach(image => {
        fetch(image.src)
            .then(res => res.text())
            .then(data => {
                const parser = new DOMParser();
                const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');

                if (image.id) svg.id = image.id;
                if (image.className) svg.classList = image.classList;

                image.parentNode.replaceChild(svg, image);
            })
            .catch(error => console.error(error))
    });
}

document.addEventListener("DOMContentLoaded", () => {
    convertImages(".svg")

    var burger = document.querySelector(".burger"),
        menu = document.querySelector("nav"),
        cross = document.querySelector(".cross")
    burger.addEventListener("click", (e) => {
        menu.classList.add("opened")
    })
    cross.addEventListener("click", (e) => {
        menu.classList.remove("opened")
    })

    const smoothLinks = document.querySelectorAll('.smooth-link');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };

});
