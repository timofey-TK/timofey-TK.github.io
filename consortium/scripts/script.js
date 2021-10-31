
function showMore(el) {
    $(el).animate({
        maxHeight: "100%",
        paddingBottom: "50px"
    })
    $(el).addClass("openned")
    $(el + " .mobile-more").hide()
}
function ValidPhone(isInModal = false) {
    if (isInModal) {
        var myPhone = document.getElementById('modal-tel-hiden'),
            message = document.getElementById('modal-message'),
            input = document.getElementById('modal-tel'),
            form = document.forms.modalForm
    }
    else {
        var myPhone = document.getElementById('tel-hiden'),
            message = document.getElementById('message'),
            input = document.getElementById('tel'),
            form = document.forms.mainForm,
            checkbox = document.querySelector(".checkbox-field")
        checkboxinp = document.querySelector("#checkbox")

    }
    var re = /^\d[\d\(\)\ -]{4,14}\d$/;
    var valid = re.test(myPhone.value);
    if (!valid || !checkboxinp.checked) {
        if (!valid) {
            output = 'Неправильно заполнено поле';
            message.innerHTML = output;
            input.classList.add("error")
        }
        if (!checkboxinp.checked) {
            checkbox.classList.add("animate__animated")
        }
    }
    else {
        form.submit()
        form.reset()
        setTimeout(() => { openModal("thx") }, 300);
        checkbox.classList.remove("animate__animated")
        message.innerHTML = "";
        input.classList.remove("error")
    }
    return valid
}
document.addEventListener('DOMContentLoaded', function () {
    // Аккардеон
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 15 + "px";
            }
        });
    }
    $(".acc-open").click()
    // owlcarousel 1
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

    // owlcarousel 2
    $(".whatwedo__slider").owlCarousel(
        {
            items: 1,
            nav: true,
            dots: false,
            navText: ['<div class="arrow prev-arrow"><img src="media/icons/slider-arrow.svg" alt="arrow"/></div>', '<div class="arrow next-arrow"><img src="media/icons/slider-arrow.svg" alt="arrow"/></div>']
        }
    );

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
}); // end ready
