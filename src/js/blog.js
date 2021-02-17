if (screen.width >= 768) {
    $(".blog_txt").text(function(i, text) {
        if (text.length >= 800) {
            text = text.substring(0, 800);
            var lastIndex = text.lastIndexOf(" ");   
            text = text.substring(0, lastIndex) + '...'; 
        }
        $(this).text(text);
    });
} else if (screen.width < 769 && screen.width > 400) {
    $(".blog_txt").text(function(i, text) {
        if (text.length >= 450) {
            text = text.substring(0, 450);
            var lastIndex = text.lastIndexOf(" ");   
            text = text.substring(0, lastIndex) + '...'; 
        }
        $(this).text(text);
    });
} else {
    $(".blog_txt").text(function(i, text) {
        if (text.length >= 150) {
            text = text.substring(0, 150);
            var lastIndex = text.lastIndexOf(" ");   
            text = text.substring(0, lastIndex) + '...'; 
        }
        $(this).text(text);
    });
}
$('.article__rate_list_item').on('mouseenter', function() {
    let index = $(this).index();
    let elems = document.querySelectorAll('.article__rate_list_item');
    elems.forEach((elem, i) => {
        if (i > index) {
            return false
        } else {
            elem.classList.add('hov');
        }
    });
});
$('.article__rate_list_item').on('click', function() {
    let index = $(this).index();
    let elems = document.querySelectorAll('.article__rate_list_item');
    elems.forEach((elem, i) => {
        if (i > index) {
            elem.classList.remove('hovMain');
        } else {
            elem.classList.add('hovMain');
        }
    });
});
$('.article__rate_list_item').on('mouseleave', function() {
    $('.article__rate_list_item').removeClass('hov');
});
if (screen.width > 768) {
    var element = $(".blog__report");
var height_el = element.offset().top;
var element_stop = $(".articles_cards");
var height_el_stop = element_stop.offset().top;
var mRight = $('.article__wrapper').css('margin-right');


$(window).on('scroll', function() {
    if($(window).scrollTop() > height_el_stop - element.outerHeight() - 0) {
        
        element.css({
            // "height": height_el,
            // "top": '',
            // "bottom": 0,
            // "right": 0,
        }).removeClass("fixed").addClass("absolute");
        element.css('right', 0);
    
    } else {

        if($(window).scrollTop() > height_el) {
            
            element.addClass("fixed").removeClass("absolute").attr("style", "");
            element.css('right', mRight);
        } else {
            
            element.removeClass("fixed absolute").attr("style", "");
            element.css('right', 0);
        }
        
    }

});

}