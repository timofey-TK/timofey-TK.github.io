

function createTicker() {
    const tickerWrap = document.createElement('div');
    tickerWrap.className = 'ticker-wrap';

    const ticker = document.createElement('div');
    ticker.className = 'ticker';

    const tickerMove = document.createElement('div');
    tickerMove.className = 'ticker-move';

    const svgString = `
    <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.4167 21.718L0.5 18.4834L3.84028 7.94787L15.2153 12.5687L14.5833 0H25.4167L24.7847 12.5687L36.1597 7.94787L39.5 18.4834L27.5833 21.718L35.7083 32.6232L26.8611 39L20 27.5403L13.1389 39L4.29167 32.6232L12.4167 21.718Z" fill="white"/>
    </svg>
`;

    const phrases = [
        'Увеличьте эффективность маркетинга',
        'за 12 недель',
    ];

    // Создаем элементы ticker-item
    function createTickerItems() {
        let items = '';
        phrases.forEach(phrase => {
            items += `<span class="ticker-item">${phrase} ${svgString}</span>`;
        });
        return items;
    }

    // Дублируем контент для создания непрерывного потока
    let TikerItems = createTickerItems()
    ticker.innerHTML = TikerItems + TikerItems + TikerItems + TikerItems + TikerItems;

    tickerWrap.appendChild(ticker);
    document.querySelector(".header").appendChild(tickerWrap);

    // Функция для обновления анимации
    function updateTickerAnimation() {
        const tickerWidth = ticker.offsetWidth / 2;
        const duration = tickerWidth / 30; // 50 пикселей в секунду
        ticker.style.animationDuration = `${duration}s`;
    }

    // Обновляем анимацию при загрузке и изменении размера окна
    updateTickerAnimation();
    window.addEventListener('resize', updateTickerAnimation);
}

document.addEventListener('DOMContentLoaded', () => {
    // Создание бегущей строчки
    createTicker();
    // Создание эфекта печати
    var typed = new Typed('#typed', {
        strings: ['Сделайте ваш маркетинг <br class="mobile-only"> максимально эффективным', 'Сделайте ваш маркетинг <br class="mobile-only"> максимально крутым', 'Сделайте ваш маркетинг <br class="mobile-only"> лучшим'],
        smartBackspace: true,
        loop: true,
        backDelay: 2000,
        typeSpeed: 20,
        backSpeed: 30,
    });

    // Инициализируем ScrollMagic Controller
    var controller = new ScrollMagic.Controller();

    // Получаем все элементы с классом .step
    var steps = document.querySelectorAll('.step');

    // Проходим по каждому элементу .step
    steps.forEach(function (step, index) {
        var number = step.querySelector('.num');

        // Создаем анимацию для заливки
        new ScrollMagic.Scene({
            triggerElement: step,  // Триггер для начала анимации
            triggerHook: 0.7,      // Точка срабатывания (80% от высоты экрана)
            duration: '25%'       // Длительность анимации - 100% высоты элемента
        })
            .on("progress", function (event) {
                // Меняем положение синей заливки в зависимости от прогресса скролла
                var progress = event.progress;  // Значение от 0 до 1
                number.style.setProperty('--progress', progress * 100 + '%');
                number.style.setProperty('--progress-shadow', progress * 100 + 'px');
            })
            .addTo(controller);  // Добавляем сцену в контроллер
    });

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 10,
        centeredSlides: true,
        initialSlide: 1,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1300: {
                initialSlide: 0,
                slidesPerView: 3,
                centeredSlides: false,
            },
            768: {
                initialSlide: 0,
                centeredSlides: false,
                slidesPerView: 2,
                spaceBetween: 20
            }
        }

    });
});
