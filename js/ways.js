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
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});
let massageButton = document.querySelector('.massage');//değişken içine girmiş düğme
let massageLinks = document.querySelector('.massage__links');//değişken içine girmiş linkli div
let massageLinksClouse = massageLinks.querySelector('span');//değişken içine girmiş kapatma tuşu olan span
massageButton.onclick = function(e){//butona tıkladığında oluşan
    let target = e.target;//değişgenin içine girmiş (span,div,buton)
    if(target.tagName ==='BUTTON'){//eğer butona basarsan
        massageLinks.classList.toggle('massage__links_active');//birşeyi açıp kapatma şarteli
    }
    if(target.tagName ==='SPAN'){// eğer bastığımız şey span ise
        massageLinks.classList.remove('massage__links_active');//div in silip kaybolması
    }
}
