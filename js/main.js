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