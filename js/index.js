document.addEventListener("DOMContentLoaded", function(){
    /*aos start*/
    AOS.init();
});

/*main top banner*/
var mainBannerSwiper = new Swiper('.slider__banner .swiper-container', {
    slidesPerView: 3,
    spaceBetween:60,
    loop: true,
    observer: true, 
    observeParents: true,
    //loopedSlides: 1,
    speed:1000,
    autoplay:false,
    /*
    autoplay: {
        delay : 3000,
        disableOnInteraction: false,
    },
    */
    breakpoints: {
        360: {
            slidesPerView: 1,
            spaceBetween:15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween:40,
        },
        992: {
            slidesPerView: 3,
            spaceBetween:40
        },
        1200:{
            spaceBetween:40
        },
        1201:{
            spaceBetween:60
        }
    },
});