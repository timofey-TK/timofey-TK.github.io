# Памятка 
## Моё портфолио
* https://timofey-tk.github.io/Digital%20Crafters/
* https://timofey-tk.github.io/Dreams/
* https://timofey-tk.github.io/Smart/
* https://timofey-tk.github.io/reclamaagent/
* https://timofey-tk.github.io/planetsanim/
---
## Строки кода
#### Изменение активного класса у навигационных ссылок при скролле
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
  
#### Плавный для якорных ссылок

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

#### Css container

```css
section {
  padding: 0 calc(50% - 590px);
}
````
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
---
[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

