const trigger = document.querySelector('.hint__trigger'),
close = document.querySelector('.hint__trigger_close');
trigger.addEventListener('mouseenter', () => {
document.querySelector('.hint__body').classList.add('active');
});
close.addEventListener('click', () => {
document.querySelector('.hint__body').classList.remove('active');
});
document.querySelector('.hint__body').addEventListener('mouseleave', () => {
document.querySelector('.hint__body').classList.remove('active');
});