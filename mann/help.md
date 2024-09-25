Хорошо! Давай реализуем это с использованием библиотеки **ScrollMagic**, которая идеально подходит для создания анимаций, завязанных на скролл. Мы сделаем так, чтобы синяя заливка прогрессировала вместе с прокруткой страницы. Для этого нам нужно:

1. Подключить **ScrollMagic**.
2. Создать отдельные триггеры для каждого элемента.
3. Связать прогресс скролла с прогрессом анимации заливки.

### Шаги:

#### 1. Подключаем ScrollMagic

Сначала подключим библиотеку **ScrollMagic**. Если она еще не подключена, можно добавить ее в проект через CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
```

#### 2. HTML структура

Оставим HTML такой же, как в предыдущем примере:

```html
<div class="step">
  <div class="number">
    <span>1</span>
  </div>
  <div class="text">
    <h3>Делаем формулу успеха вашего бизнеса</h3>
  </div>
</div>
<div class="step">
  <div class="number">
    <span>2</span>
  </div>
  <div class="text">
    <h3>Создаем/проверяем позиционирование</h3>
  </div>
</div>
<!-- Повторить для других шагов -->
```

#### 3. CSS для заливки

Здесь добавляем анимацию заливки для каждого элемента. Мы используем псевдоэлемент `::before`, который будет заполняться в зависимости от прокрутки.

```css
.step {
  display: flex;
  margin-bottom: 50px;
}

.number {
  position: relative;
  font-size: 40px;
  width: 70px;
  height: 70px;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
}

.number::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00f; /* Синяя заливка */
  z-index: -1;
  transition: top 0.1s ease;
}

.text {
  margin-left: 20px;
  color: #fff;
}
```

#### 4. JavaScript с использованием ScrollMagic

Теперь создадим триггеры для каждого элемента с помощью **ScrollMagic**. Прогресс скролла будет соответствовать проценту заливки синего фона.

```html
<script>
  // Инициализируем ScrollMagic Controller
  var controller = new ScrollMagic.Controller();

  // Получаем все элементы с классом .step
  var steps = document.querySelectorAll('.step');

  // Проходим по каждому элементу .step
  steps.forEach(function(step, index) {
    var number = step.querySelector('.number');

    // Создаем анимацию для заливки
    new ScrollMagic.Scene({
      triggerElement: step,  // Триггер для начала анимации
      triggerHook: 0.8,      // Точка срабатывания (80% от высоты экрана)
      duration: '100%'       // Длительность анимации - 100% высоты элемента
    })
    .on("progress", function (event) {
      // Меняем положение синей заливки в зависимости от прогресса скролла
      var progress = event.progress;  // Значение от 0 до 1
      number.style.setProperty('--progress', progress * 100 + '%');
    })
    .addTo(controller);  // Добавляем сцену в контроллер
  });
</script>
```

#### 5. Обновляем CSS для работы с анимацией заливки

Теперь мы можем управлять заливкой через CSS-переменную `--progress`, которая будет задаваться динамически через JavaScript.

```css
.number::before {
  content: "";
  position: absolute;
  top: calc(100% - var(--progress, 0%));
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00f; /* Синяя заливка */
  z-index: -1;
  transition: top 0.1s ease;
}
```

#### Как это работает:

1. **HTML:** Каждый блок с шагом имеет элемент `.number`, который мы будем заливать синим цветом на основе скролла.
2. **CSS:** Синяя заливка управляется через значение `top`, которое изменяется с помощью CSS-переменной `--progress`. Чем больше значение `--progress`, тем выше сдвигается заливка.
3. **JavaScript:** Для каждого блока `.step` создается отдельная сцена в **ScrollMagic**. В зависимости от прогресса скролла, значение переменной `--progress` изменяется от 0% до 100%, тем самым создавая анимацию заливки.

#### 6. Итог

Теперь, когда пользователь скроллит страницу, синяя заливка на цифрах будет прогрессировать в зависимости от уровня прокрутки. Каждый блок `.step` будет иметь свою анимацию, и они будут срабатывать, когда соответствующий элемент окажется в зоне видимости (80% от высоты экрана).

#### Пример с библиотекой GSAP + ScrollMagic

Если хочешь использовать анимацию через GSAP для более плавной настройки, можно заменить часть кода так:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"></script>
```

А сам скрипт будет таким:

```javascript
steps.forEach(function(step, index) {
  var number = step.querySelector('.number');

  // Создаем анимацию через GSAP
  var tween = gsap.to(number, {
    "--progress": "100%", // Анимация заполняет заливку
    ease: "none"          // Без замедления в конце
  });

  // Создаем сцену ScrollMagic
  new ScrollMagic.Scene({
    triggerElement: step,
    triggerHook: 0.8,
    duration: '100%'
  })
  .setTween(tween)  // Привязываем GSAP-анимацию
  .addTo(controller);
});
```

Таким образом, анимация будет плавной и гибкой, а заливка будет заполняться по мере прокрутки страницы.
