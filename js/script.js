let hamburger = document.querySelector('.hamburger');
let NavCurtuan = document.querySelector('.nav__curtuan');
hamburger.onclick = function () {
    hamburger.classList.toggle('hamburger_active');
    NavCurtuan.classList.toggle('nav__curtuan_show');
}

const swiper = new Swiper('.ways__list', {
    slidesPerView: 2.5,
    spaceBetween: 20,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3.5,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4.5,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 5.5,
            spaceBetween: 40
        },
        900: {
            slidesPerView: 6.5,
            spaceBetween: 40
        }
        
    }
});
