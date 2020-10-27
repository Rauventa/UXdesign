$(window).scroll(function() {
    if ($(this).scrollTop() > 500){
        $('.sticky-header').addClass("sticky-header-show");
    }
    else{
        $('.sticky-header').removeClass("sticky-header-show");
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 500){
        $('.header-mobile').addClass("header-mobile--sticky");
    }
    else{
        $('.header-mobile').removeClass("header-mobile--sticky");
    }
});