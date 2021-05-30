# Строки кода

### Классы ссылкам на скролл
  ```javascript
  const sections = document.querySelectorAll(".scroll")
  console.log(sections)

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
