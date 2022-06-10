$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        $('.header-top').addClass('fixed');
    } else {
        $('.header-top').removeClass('fixed');
    }
});

$(document).ready(function () { //плавный скролл
    $(".go_to").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top,
            header = $('.header-top').height();

        //анимируем переход на расстояние - top за 500 мс
        $('body,html').animate({scrollTop: top - header}, 500);
    });
});

$(window).on('load resize', function() {
    if ($(window).width() < 992) {
        $(".go_to").on("click", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            // event.preventDefault();
            //
            // //забираем идентификатор бока с атрибута href
            // var id = $(this).attr('href'),
            //
            //     //узнаем высоту от начала страницы до блока на который ссылается якорь
            //     top = $(id).offset().top,
            //     header = $('.header-top').height();
            //
            // //анимируем переход на расстояние - top за 500 мс
            // $('body,html').animate({scrollTop: top - header}, 500);

            $('.btn-burger').removeClass('click');
            $('.menu').fadeOut();
            $('.overlay').fadeOut();
            $('html, body').removeClass('no-scroll');
        });
    }
});
// slick active


$('.btn-burger').on('click', function () {
    $(this).toggleClass('click');
    $('.menu').fadeToggle();
    $('.overlay').fadeToggle();
    $('html, body').toggleClass('no-scroll');
});

$('.overlay').on('click', function () {
    $('.btn-burger').removeClass('click');
    $('.menu').fadeOut();
    $('.overlay').fadeOut();
    $('html, body').removeClass('no-scroll');
});


