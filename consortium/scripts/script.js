
document.addEventListener('DOMContentLoaded', function () {
    // owlcarousel
    $(".partner_results__carousel").owlCarousel(
        {
            items: 1,
            nav: true,
            dots: false,
            navText: ['<div class="arrow prev-arrow"><img src="media/icons/slider-arrow.svg" alt="arrow"/></div>', '<div class="arrow next-arrow"><img src="media/icons/slider-arrow.svg" alt="arrow"/></div>']
        }
    );
}); // end ready
