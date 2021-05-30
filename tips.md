# Строки кода
### Изменение активного класса у навигационных ссылок при скролле
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
  
### Плавный скролл через навигационные ссылки

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
---
# Библиотеки
1. скролл библиотека - https://locomotivemtl/locomotive-scroll
2. Эффекты на текст - https://blotter.js.org/#/materials/LiquidDistortMaterial
3. Слайдер - https://swiperjs.com/
4. Анимация на скролл - https://wowjs.uk/
5. Библиотека анимаций - https://animate.style/ 
6. Библиотека для анимации - https://animejs.com/
7. Кастомные гамбургеры - https://codepen.io/ainalem/pen/GeMqdP
8. Разделить текст на символы - http://letterizejs.com/'
9. Просмотр изображений (lightbox) - https://github.com/biati-digital/glightbox
---
[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
