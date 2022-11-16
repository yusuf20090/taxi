const swiper = new Swiper('.galery__swiper', {
    effect: 'cards',
    slidesPerView: 2.5,
    spaceBetween: 20,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 16
        },
     
    }
});
