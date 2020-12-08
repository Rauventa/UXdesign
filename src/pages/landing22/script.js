
$(document).ready(function() {
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
    // $(".set > a").on("click", function(e) {
    //     e.preventDefault();
   
    //     if ($(this).hasClass("active")) {
    //         $(this).removeClass("active");
    //         $(this)
    //         .siblings(".content")
    //         .slideUp(300);
    //         $(".set > a i")
    //         .removeClass("fa-minus")
    //         .addClass("fa-plus");
    //     } else {
    //         $(".set > a").removeClass("active");
    //         $(this).addClass("active");
    //         $(".content").slideUp(300);
    //         $(this)
    //         .siblings(".content")
    //         .slideDown(200);
    //     }
    // });
	$('.set > a').on('click', f_acc);

 
    function f_acc(e){
        e.preventDefault();
        //скрываем все кроме того, что должны открыть
        $('.content').not($(this).next()).slideUp(200);
        // открываем или скрываем блок под заголовком, по которому кликнули
            $(this).next().slideToggle(200);
    }
});