$(function () {
    function filter(x) {
        return x.toString().replace(/[^\.\-0-9]/gim, '');
    }


    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    //$('.onlyDigits').inputmask({alias: 'numeric',
    //allowMinus: false,
    // digits: 2,

    // max: 999999999.99});

    $('.js-calc input').on('change', function () {
        $(this).val($(this).val().toString().replace(/\,/g, '.'));

        $(this).val(filter($(this).val()));
        $(this).val(numberWithCommas($(this).val()));






        var rekB = parseFloat($('.rek-b').val().replace(/\s/g, '')); //рекламный бюджет
        var rekShow = $('.rek-show'); //показы рекламы
        var transit = $('.transit'); //переходы на сайт
        var priceClick = parseFloat($('.price-click').val().replace(/\s/g, '')); //цена клика
        var ctr = parseFloat($('.ctr').val().replace(/\s/g, '')); //CTR
        var convers = parseFloat($('.convers').val().replace(/\s/g, '')); //конверсия сайта
        var request = $('.request'); //колчество заявок
        var requestPrice = $('.request-price'); //стоимость заявки



        var transitNum = Math.trunc(rekB / priceClick);
        transit.text(transitNum.toLocaleString('ru'));

        var rekShowNum = Math.trunc(transitNum * 100 / ctr);
        rekShow.text(rekShowNum.toLocaleString('ru'));

        var requestNum = Math.trunc(transitNum * convers / 100);
        request.text(requestNum.toLocaleString('ru'));

        var requestPriceNum = rekB / requestNum;
        requestPriceNum = requestPriceNum.toFixed(2)
        requestPrice.text(requestPriceNum.toLocaleString('ru'));
    });



    $('.js-calc input').trigger('change');
});
