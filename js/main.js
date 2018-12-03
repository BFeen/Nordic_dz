// Функции открытия-закрытия PopUp окна
$('#pop-open').click(function() {
    $('.popup').toggle(true);
});
$('.guess__close').click(function() {
    $('.popup').toggle(false);
})

// Функция открытия ответа на вопрос FAQ
$('.faq__item').click(function() {
    $(this).find('.faq__answer').slideToggle(500);
});

// Функция отображения текста в Trips
$('.trips__item').click(function () {
    $(this).find('p').slideToggle(300);
});

// Обработка кликов по ссылкам в навигации
$('nav a').click(function() {
    $('html, body').animate({
        scrollTop : $($(this).attr('href')).offset().top
    }, 500);
});

// Кнопка вверх
$('.arrow-up').click(function() {
    $('html, body').animate({
        scrollTop : $('#top').offset().top
    }, 500);
});