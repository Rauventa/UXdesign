'use strict';

// Init tabs ---

function Tabs() {
    let bindAll = function() {
        let menuElements = document.querySelectorAll('[data-tab]');
        for(let i = 0; i < menuElements.length ; i++) {
            menuElements[i].addEventListener('click', change, false);
        }
    };

    let clear = function() {
        let menuElements = document.querySelectorAll('[data-tab]');
        for(let i = 0; i < menuElements.length ; i++) {
            menuElements[i].classList.remove('active');
            let id = menuElements[i].getAttribute('data-tab');
            document.getElementById(id).classList.remove('active');
        }
    };

    let change = function(e) {
        clear();
        e.target.classList.add('active');
        let id = e.currentTarget.getAttribute('data-tab');
        document.getElementById(id).classList.add('active');
    };

    bindAll();
}

let connectTabs = new Tabs();

// Scroller ---

const scrollToTopButton = document.getElementById('backTop');

const scrollFunc = () => {
    let y = window.scrollY;
    if (y > 0) {
        scrollToTopButton.className = "back-top show";
    } else {
        scrollToTopButton.className = "back-top hide";
    }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 10);
    }
};

scrollToTopButton.onclick = function(e) {
    e.preventDefault();
    scrollToTop();
};

$('.js-newProductTrigger').on('click', () => {
    $('.newProductModal').addClass('js-active');
    $('body').css('overflow', 'hidden');
    
});
$('.js-newProductModal-overlay').on('click', () => {
    $('.newProductModal').removeClass('js-active');
    $('body').css('overflow', '');
    
});
$('.js-newProductModal-close').on('click', () => {
    $('.newProductModal').removeClass('js-active');
    $('body').css('overflow', '');
    
});

//Days counter

// dateFuture = new Date(2020,9,14,23,59,59);
//
// function GetCount(){
//
//     dateNow = new Date();
//
//     amount = dateFuture.getTime() - dateNow.getTime();
//     delete dateNow;
//     if(amount < 0){
//         document.getElementById('countbox').innerHTML="Now!";
//     }
//     else{
//
//         days=0;hours=0;mins=0;secs=0;out="";
//
//         amount = Math.floor(amount/1000);
//
//         days=Math.floor(amount/86400);
//         amount=amount%86400;
//
//         if (days === 1) {
//             out+= days + " день"
//         } else if (days === 2 || days === 3 || days === 4) {
//             out+= days + " дня"
//         } else {
//             out += days +" дней"
//         }
//         document.getElementById('countbox').innerHTML=out;
//
//         setTimeout("GetCount()", 1000);
//     }
// }
//
// window.onload=function(){GetCount();}