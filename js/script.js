let hamburger = document.querySelector('.hamburger');
let NavCurtuan = document.querySelector('.nav__curtuan');
hamburger.onclick = function(){
    hamburger.classList.toggle('hamburger_active');
    NavCurtuan.classList.toggle('nav__curtuan_show');
}