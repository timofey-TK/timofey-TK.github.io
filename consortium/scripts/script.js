
document.addEventListener('DOMContentLoaded', function () {
    // owlcarousel
    $(".partner_results__carousel").owlCarousel(
        {
            items: 1,
            nav: true,
            dots: false,
            navText: ['<div class="arrow prev-arrow"><img src="media/icons/slider-arrow.svg" alt="arrow"/></div>', '<div class="arrow next-arrow"><img src="media/icons/slider-arrow.svg" alt="arrow"/></div>'],
            responsive: {
                // breakpoint from 0 up
                0: {
                    stagePadding: 0,
                    nav: false
                },
                290: {
                    stagePadding: 30,
                    nav: false
                },
                510: {
                    stagePadding: 50
                },
                595: {
                    stagePadding: 80
                },
                640: {
                    stagePadding: 100
                },
                // breakpoint from 768 up
                768: {
                    stagePadding: 0,
                    nav: true
                }
            }
        }
    );
}); // end ready
