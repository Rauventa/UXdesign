const ticketsTriggerModal = document.querySelector('.tickets__main'),
modal  = document.querySelector('.landing__gift '),
modalOverlay = document.querySelector('.landing__gift_overlay'),
modalBody = document.querySelector('.landing__gift_modal'),
modalClose = document.querySelector('.landing__gift_modal-close'),
modalCancelBtn = document.querySelector('.gift__btns-no');

if (localStorage.gift !== 'null') {
localStorage.setItem('gift', 'active');
}

if (localStorage.gift === 'active') {
if (window.matchMedia("(max-width: 768px)").matches) {

    setTimeout(function(){

        modal.classList.add('active');

        modalOverlay.addEventListener('click', function(e) {
            modal.classList.remove('active');
        });

        modalClose.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.remove('active');

            localStorage.setItem('gift', null)
        });
        modalCancelBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.remove('active');

            localStorage.setItem('gift', null)
        });

    }, 30000);

    // localStorage.setItem('gift', null)
} else {
    let triggerCheck = false;

    ticketsTriggerModal.addEventListener('mouseenter', function(e) {

        let target = e.target;
        if (e.target == this && triggerCheck === false) {
            this.addEventListener('mouseleave', () => {
                modal.classList.add('active');
                triggerCheck = true;
            });
        }
    });
    modalOverlay.addEventListener('click', function(e) {
        if  (e.target != modalBody ) {
            modal.classList.remove('active');
            triggerCheck = true;
        }
        if (triggerCheck == true) {
            modal.classList.add('delete');
        }
    });
    modalClose.addEventListener('click', function(e) {
        e.preventDefault()
        if  (e.target == this ) {
            modal.classList.remove('active');
            triggerCheck = true;
        }
        if (triggerCheck == true) {
            modal.classList.add('delete');
        }

        localStorage.setItem('gift', null)
    });
    modalCancelBtn.addEventListener('click', function(e) {
        e.preventDefault()
        if  (e.target == this ) {
            modal.classList.remove('active');
            triggerCheck = true;
        }
        if (triggerCheck == true) {
            modal.classList.add('delete');
        }

        localStorage.setItem('gift', null)
    });

    // localStorage.setItem('gift', null)
}
} else {
modal.classList.remove('active');
}