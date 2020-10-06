// // initialize swiper
//
// let swiper = new Swiper('.swiper-container', {
//     slidesPerView: 3,
//     spaceBetween: 100,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });
//
// // scrolling
//
// $(window).scroll(function () {
//     if ($(this).scrollTop() > 500) {
//         $('.sticky-header').addClass("sticky-header-show");
//     } else {
//         $('.sticky-header').removeClass("sticky-header-show");
//     }
// });
//
// $(window).scroll(function () {
//     if ($(this).scrollTop() > 500) {
//         $('.header-mobile').addClass("header-mobile--sticky");
//     } else {
//         $('.header-mobile').removeClass("header-mobile--sticky");
//     }
// });
//
// // tooltips
//
// $(function () {
//     $('[data-toggle="tooltip"]').tooltip({
//         trigger: "hover",
//         delay: {show: 300, hide: 100}
//     })
// });
//
// //date counter
//
// dateFuture = new Date(2020, 8, 24, 23, 59, 59);
//
// function GetCount() {
//
//     dateNow = new Date();
//
//     amount = dateFuture.getTime() - dateNow.getTime();
//     delete dateNow;
//     if (amount < 0) {
//         document.getElementById('countbox').innerHTML = "Now!";
//     } else {
//
//         days = 0;
//         hours = 0;
//         mins = 0;
//         secs = 0;
//         out = "";
//
//         amount = Math.floor(amount / 1000);
//
//         days = Math.floor(amount / 86400);
//         amount = amount % 86400;
//
//         if (days === 1) {
//             out += days + " День"
//         } else if (days === 2 || days === 3 || days === 4) {
//             out += days + " Дня"
//         } else {
//             out += days + " Дней"
//         }
//         document.getElementById('countbox').innerHTML = out;
//
//         setTimeout("GetCount()", 1000);
//     }
// }
//
// window.onload = function () {
//     GetCount();
// };
//
// // landing gift section
//
// if (window.matchMedia("(max-width: 768px)").matches) {
//
//     setTimeout(function () {
//
//         const modal = document.querySelector('.landing__gift '),
//             modalClose = document.querySelector('.landing__gift_modal-close'),
//             modalCancelBtn = document.querySelector('.gift__btns-no'),
//             modalOverlay = document.querySelector('.landing__gift_overlay');
//
//         modal.classList.add('active');
//
//         modalOverlay.addEventListener('click', function (e) {
//             modal.classList.remove('active');
//         });
//
//         modalClose.addEventListener('click', function (e) {
//             e.preventDefault();
//             modal.classList.remove('active');
//         });
//         modalCancelBtn.addEventListener('click', function (e) {
//             e.preventDefault();
//             modal.classList.remove('active');
//         });
//
//     }, 30000);
// } else {
//     const ticketsTriggerModal = document.querySelector('.tickets__main'),
//         modal = document.querySelector('.landing__gift '),
//         modalOverlay = document.querySelector('.landing__gift_overlay'),
//         modalBody = document.querySelector('.landing__gift_modal'),
//         modalClose = document.querySelector('.landing__gift_modal-close'),
//         modalCancelBtn = document.querySelector('.gift__btns-no');
//     let triggerCheck = false;
//
//     ticketsTriggerModal.addEventListener('mouseenter', function (e) {
//
//         let target = e.target;
//         if (e.target === this && triggerCheck === false) {
//             this.addEventListener('mouseleave', () => {
//                 modal.classList.add('active');
//                 triggerCheck = true;
//             });
//         }
//     });
//     modalOverlay.addEventListener('click', function (e) {
//         if (e.target !== modalBody) {
//             modal.classList.remove('active');
//             triggerCheck = true;
//         }
//         if (triggerCheck === true) {
//             modal.classList.add('delete');
//         }
//     });
//     modalClose.addEventListener('click', function (e) {
//         e.preventDefault();
//         if (e.target === this) {
//             modal.classList.remove('active');
//             triggerCheck = true;
//         }
//         if (triggerCheck === true) {
//             modal.classList.add('delete');
//         }
//     });
//     modalCancelBtn.addEventListener('click', function (e) {
//         e.preventDefault();
//         if (e.target === this) {
//             modal.classList.remove('active');
//             triggerCheck = true;
//         }
//         if (triggerCheck === true) {
//             modal.classList.add('delete');
//         }
//     });
// }
//
// // show gift section
//
// const trigger = document.querySelector('.hint__trigger'),
//     close = document.querySelector('.hint__trigger_close');
// trigger.addEventListener('mouseenter', () => {
//     document.querySelector('.hint__body').classList.add('active');
// });
// close.addEventListener('click', () => {
//     document.querySelector('.hint__body').classList.remove('active');
// });
// document.querySelector('.hint__body').addEventListener('mouseleave', () => {
//     document.querySelector('.hint__body').classList.remove('active');
// });