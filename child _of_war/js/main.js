$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<span><i class="fas fa-chevron-left"></i></span>',
            '<span><i class="fas fa-chevron-right"></i></span>'],
        items: 1,
        center: true,
        dots: true,
        margin: 0,
        smartSpeed: 800,
        
        autoplayHoverPause: true,
    });
    var $page = $('html, body');
    $('a[href*="#"]').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
    $('.parallax-window').parallax({});

    var $hamburger = $(".hamburger");
    var $menu = $('.top-nav');
    var $text = $('.header-text');
    var $body = $('html')
    var $icon = $('.icon')
    var link = $('.tlink')
    $hamburger.on("click", function (e) {
        $hamburger.toggleClass("is-active");
        // Do something else, like open/close menu
        $menu.toggleClass("active-menu");
        $text.toggleClass("none");
        $icon.toggleClass("none");
        $body.toggleClass("overflow");
    });
    link.on("click", function (e) {
        $hamburger.removeClass("is-active");
        $menu.removeClass("active-menu");
        $text.removeClass("none");
        $icon.removeClass("none");
        $body.removeClass("overflow");
        console.log('chf,jnfkj');
    });
});