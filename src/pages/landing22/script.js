const $header = $('.sticky__header');
$(document).on('scroll', function () {
    var position = $(document).scrollTop(),
        block_position = $('#scroll-to-header').offset().top; // расположение блока, от которого и зависит фиксированность хэдера
    if (position > block_position - 50) { // если позиция скролла страницы больше, то ставим фикс
        $header.addClass('js-active');
    } else {
        $header.removeClass('js-active');
    }
});