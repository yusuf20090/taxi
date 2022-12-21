let hamburger = document.querySelector('.hamburger');
let NavCurtuan = document.querySelector('.nav__curtuan');
hamburger.onclick = function () {
    hamburger.classList.toggle('hamburger_active');
    NavCurtuan.classList.toggle('nav__curtuan_show');
}

const swiper = new Swiper('.ways__list', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    slidesPerView: 2.5,
    spaceBetween: 16,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2.5,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3.5,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4.5,
        },
        768: {
            slidesPerView: 5.5,
        },
        900: {
            slidesPerView: 6.5,
        }

    }
});
