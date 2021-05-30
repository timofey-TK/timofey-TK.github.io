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