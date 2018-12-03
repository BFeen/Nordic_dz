// Функции открытия-закрытия PopUp окна
$('#pop-open').click(function() {
    $('.popup').toggle(true);
});
$('.guess__close').click(function() {
    $('.popup').toggle(false);
})

// Функция открытия ответа на вопрос FAQ
$('.faq__item').click(function() {
    $('.faq__answer').slideToggle(500);
});