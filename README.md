# Памятка 
## Моё портфолио
* https://timofey-tk.github.io/Digital%20Crafters/
* https://timofey-tk.github.io/Dreams/
* https://timofey-tk.github.io/Smart/
* https://timofey-tk.github.io/reclamaagent/
* https://timofey-tk.github.io/planetsanim/
---
## Строки кода
#### Динамически меняющиеся размеры в зависимости от ширины экрана
```scss
@function calcFluidSize($f-min, $f-max, $w-min: 390, $w-max: 1600, $units: px) {
    $k: ($f-max - $f-min)/($w-max - $w-min);
    $b: $f-min - $k * $w-min;

    $b: $b + $units;

    @if $f-min < $f-max {
        @return calc(max(#{$f-min}#{$units}, min(#{$k} * 100vw + #{$b}, #{$f-max}#{$units})));
    } @else {
        @return calc(min(#{$f-min}#{$units}, max(#{$k} * 100vw + #{$b}, #{$f-max}#{$units})));
    }
}
```
#### Изменение активного класса у навигационных ссылок при скролле (jQuery http://jsfiddle.net/bonilka/p7sgwg4L/)
  ```javascript
  const sections = document.querySelectorAll("SECTIONS") 
  window.onscroll = function () {
    sections.forEach((el, i) => {
      var top = el.offsetTop - 100;
      var bottom = top + el.offsetHeight;
      var scroll = window.pageYOffset
      var id = el.getAttribute("id")
      if (scroll > top && scroll < bottom) {
        document.querySelector(".nav__link a.active").classList.remove('active')
        var href = "#" + id
        document.querySelector('a[href = "' + href + '"').classList.add('active')
      }
    })
  };
  ```
  
#### Плавный для якорных ссылок (jQuery https://realadmin.ru/coding/js-scroll.html)

```javascript
const smoothLinks = document.querySelectorAll('LINKS');
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
````
#### Замена всех img на svg

```javascript
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
});

````
#### Css container

```css
section {
  padding: 0 calc(50% - 590px);
}
````

#### Гугл форма
  ```html
<script type="text/javascript">var submitted=false;</script>
<iframe name="hidden_iframe" id="hidden_iframe"
style="display:none;" onload="if(submitted){
MyFunction()}"></iframe>
<form action="..." method="post"
target="hidden_iframe" onsubmit="submitted=true;">
  ```
---
## Библиотеки
1. Cкролл библиотека - https://github.com/locomotivemtl/locomotive-scroll
2. Эффекты на текст - https://blotter.js.org/
3. Слайдер - https://swiperjs.com/
4. Анимация на скролл - https://wowjs.uk/
5. Библиотека анимаций - https://animate.style/ 
6. Библиотека для анимации - https://animejs.com/
7. Кастомные гамбургеры - https://codepen.io/ainalem/pen/GeMqdP
8. Разделить текст на символы - http://letterizejs.com/
9. Просмотр изображений (lightbox) - https://github.com/biati-digital/glightbox
10. Маска для телефонного инпута https://github.com/alexey-goloburdin/phoneinput
11. Видеоплеер https://plyr.io/
12. Аккардионе но на jQuery https://accordion.js.org/
13. 3d бэкграунд https://www.vantajs.com/?effect=fog#
14. Кастом инпут с поиском на карте https://community.algolia.com/places/
15. Патерны на инпуты https://nosir.github.io/cleave.js/
16. Плитка как в пинтересте [https://masonry.desandro.com/](http://callmecavs.com/bricks.js/)
17. 3d модели в вебе https://spline.design/
18. darg&drop https://swapy.tahazsh.com/
---
[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

