var smallSwiper = new Swiper(".small-image", {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 4,
    touchRatio:0,
    watchSlidesProgress: true,
    loopedSlides: 4,
    draggable:false,
    breakpoints: {
        350: {
            spaceBetween: 10,
        },
        480:{
            spaceBetween: 10,
        },
        768:{
            spaceBetween: 15,
        }
    },
});
var bigSwiper = new Swiper(".big-image", {
    loop: true,
    spaceBetween: 15,
    navigation: {
        nextEl: ".product-image .swiper-button-next",
        prevEl: ".product-image .swiper-button-prev",
    },
    thumbs: {
        swiper: smallSwiper,
    },
});
