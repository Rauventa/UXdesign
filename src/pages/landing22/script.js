


window.onload = function() {
    if (screen.width > 768) {
        $("nav").on("click","a", function (e) {
            // исключаем стандартную реакцию браузера
            e.preventDefault();
            // получем идентификатор блока из атрибута href
            var id  = $(this).attr('href'),
            
            // находим высоту, на которой расположен блок
                top = $(id).offset().top - 140;
            
            
            // анимируем переход к блоку, время: 800 мс
            $('body,html').animate({scrollTop: top}, 800);
        });
        jQuery(window).scroll(function(){
            var $sections = $('.section');
        $sections.each(function(i,el){
            var top  = $(el).offset().top - 200;
            var bottom = top +$(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if( scroll > top && scroll < bottom){
                $('a.js-active').removeClass('js-active');
                $('a[href="#'+id+'"]').addClass('js-active');
            }
        })
        });
    } else {
        $("nav").on("click","a", function (event) {
            // исключаем стандартную реакцию браузера
            event.preventDefault();
            // получем идентификатор блока из атрибута href
            var id  = $(this).attr('href'),
            // находим высоту, на которой расположен блок
                top = $(id).offset().top - 50;
            // анимируем переход к блоку, время: 800 мс
            $('body,html').animate({scrollTop: top}, 800);
            });
        jQuery(window).scroll(function(){
            var $sections = $('.section');
            $sections.each(function(i,el){
            var top  = $(el).offset().top- 0;
            var bottom = top +$(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if( scroll > top && scroll < bottom){
                $('a.js-active').removeClass('js-active');
                $('a[href="#'+id+'"]').addClass('js-active');
            }
        })
        });
    }
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
    $("a.scrollTo").on("click", function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 130
        }, 800);
    });
    $("a.scrollToBurger").on("click", function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60
        }, 600);
    });
    // $("")
    var acc = document.getElementsByClassName("accordion");
    var i;
    var panels = document.querySelectorAll('.content');
    panels[0].style.maxHeight = panels[0].scrollHeight + "px";
    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(e) {
        e.preventDefault();

        this.classList.toggle("active");
        var panel = this.nextElementSibling;

        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panels.forEach((item) => item.style.maxHeight = null);
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
    }
    let extraHeight = $('.extra').css('height');
    function ExtraHeight() {
        $('.extra').css('height', 0);
        $('.extra').css('min-height', 0);
        $('.extra').css('visibility', 'hidden');
        $('.extra').css('opacity', '0');
    }
    if ($('.js-ticket').hasClass('js-selected')) {
        console.log('done');
    } else {
        ExtraHeight();
    }


    $('.js-ticket').on('click', function(e) {
        e.preventDefault();

        if(!$(this).hasClass('js-selected')) {
            $('.js-ticket').removeClass('js-selected');
            $(this).addClass('js-selected');

        } else if ($(this).hasClass('js-selected')) {
            $('.js-ticket').removeClass('js-selected');
            $(this).removeClass('js-selected');
        }
        let tickets = document.querySelectorAll('.js-ticket');
        if($('.js-ticket').hasClass('js-selected')) {
            var id  = $(this).attr('href'),
            top = $(id).offset().top - 140;
            $('body,html').animate({scrollTop: top}, 800);
            $('.extra').css('height', extraHeight);
            $('.extra').css('min-height', null);
            $('.extra').css('visibility', 'visible');
            $('.extra').css('opacity', '1');
        } else {
            $('.extra').css('height', 0);
            $('.extra').css('min-height', 0);
            $('.extra').css('visibility', 'hidden');
            $('.extra').css('opacity', '0');
        }
    });
    if($('.js-ticket').hasClass('js-selected')) {
        var id  = $(this).attr('href'),
        top = $(id).offset().top - 140;
        $('body,html').animate({scrollTop: top}, 800);
        $('.extra').css('height', extraHeight);
        $('.extra').css('min-height', null);
        $('.extra').css('visibility', 'visible');
        $('.extra').css('opacity', '1');
    } else {
        $('.extra').css('height', 0);
        $('.extra').css('min-height', 0);
        $('.extra').css('visibility', 'hidden');
        $('.extra').css('opacity', '0');
    }
    $('.js-tickets-tabHeader').click(function() {
        var id = $(this).attr('data-tab'),
            content = $('.js-tickets-tabContent[data-tab="'+ id +'"]');
        
        $('.js-tickets-tabHeader.js-active').removeClass('js-active');
        $(this).addClass('js-active');
        
        $('.js-tickets-tabContent.js-active').removeClass('js-active');
        content.addClass('js-active');
    });

}

// form 
let formCheck = document.querySelector('#exampleCheck1');
let formBtn = document.querySelector('#formBtn');
formCheck.addEventListener('click', () => {
    if(formCheck.checked) {
        formBtn.disabled = false;
    } else {
        formBtn.disabled = true;
    }
})

