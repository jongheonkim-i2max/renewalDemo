//위시상품 슬라이드
var wishSwiper = null;

function initSwiper() {
    if (window.innerWidth <= 1230) {
        wishSwiper = new Swiper('.pc_body .wish-slider .items-wrap', {
            observer: true, 
            observeParents: true,
            slidesPerView: 3,
            spaceBetween: 15,
            speed: 1000,
            freeMode:true,
            allowTouchMove:true,
            loop: false,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                350:{
                    slidesPerView:2,
                    spaceBetween:15,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween:15,                            
                },
                991:{
                    slidesPerView: 3,
                    spaceBetween:30,
                },
                1200:{
                    slidesPerView: 4,
                    spaceBetween:30, 
                }
            }
        });
    } else {
        wishSwiper.destroy();
    }
}
var timer;
window.addEventListener('resize', function () {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(initSwiper, 200);
});
$(document).ready(function(){
    initSwiper();
});