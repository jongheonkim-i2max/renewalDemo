document.addEventListener('DOMContentLoaded', function(){
    /*aos start*/
    AOS.init({
        duration: 800,
        once:true,
    });

    $('.slider__banner').addClass('ani');
});

/*main top banner*/
var mainBannerSwiper = new Swiper('.slider__banner .swiper-container', {
    slidesPerView: 3,
    spaceBetween:60,
    loop: true,
    observer: true, 
    observeParents: true,
    speed:1000,
    autoplay: {
        delay : 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        480: {
            slidesPerView: 1,  
            spaceBetween: 15,
        },
        991: {
            slidesPerView: 2, 
            spaceBetween: 30,
        },
    },
});

/*keyword typing*/
document.addEventListener('DOMContentLoaded', () => {
    new TypeIt('.keyword__ranking--subject') 
    .pause(1000)
    .delete(4, { delay: 1000 })
    .type(' ranking')
    .go();
});

/*keyword img banner*/
var mainBannerSwiper = new Swiper('.img__banner .swiper-container', {
    slidesPerView: 1,
    spaceBetween:15,
    loop: true,
    observer: true, 
    observeParents: true,
    speed:1000,
    autoplay: {
        delay : 5000,
        disableOnInteraction: false,
    },
});

/*multi slider*/
var sliders = [];
$(".multi__slider .swiper-container").each(function (index){
    var $this = $(this);
    $this.addClass('swiper-container-' + index);

    var slider_swiper = new Swiper('.swiper-container-' + index, {
        slidesPerView: 5,
        observer: true, 
        observeParents: true,
        spaceBetween: 60,
        speed: 1000,
        allowTouchMove:true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween:15,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween:30,
            },
            1650:{
                slidesperView:4,
                spaceBetween:30,
            }
        }
    });
    $('.multi__slider .tab-content--menu-li').eq(index).attr('data-index', index);
    sliders.push(slider_swiper);
});

/*first tab menu*/
$('.multi__slider .tab-menu--li').on('click', function(e){
    e.preventDefault();
    if(!$(this).hasClass('active')){
        var index = $(this).index();
        console.log(index);
        $('.multi__slider .tab-menu--li').removeClass('active');
        $(this).addClass('active');
        $('.multi__slider .tab-content-wrap > div').hide();
        $('.multi__slider .tab-content-wrap > div').eq(index).show();
    }
});

/*second tab menu*/
$('.multi__slider .tab-content .tab-content--menu-li').on('click', function(e){
    e.preventDefault();
    var data_index = $(this).attr('data-index');
    if( !$(this).hasClass('active')){
        $(this).parents('.tab-content').find('.tab-content--menu-li').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.tab-content').find('.tab-content--slider > div').hide();
        $('.multi__slider .tab-content--slider > div.swiper-container-'+data_index+'').show();
        for (var i=0; i < sliders.length; i++ ){
            sliders[i].slideTo(0,0);
        }
    }
});

/*two slider large*/
var mainBannerSwiper = new Swiper('.large__slider .swiper-container', {
    slidesPerView: 1,
    spaceBetween:15,
    loop: true,
    observer: true, 
    observeParents: true,
    speed:1000,
    autoplay: {
        delay : 5000,
        disableOnInteraction: false,
    },
});

/*two slider small*/
var mainBannerSwiper = new Swiper('.small__slider .swiper-container', {
    slidesPerView: 3,
    spaceBetween:45,
    loop: true,
    observer: true, 
    observeParents: true,
    speed:1000,
    autoplay: {
        delay : 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween:15,
        },
    }
});

/*gift slider*/
var mainBannerSwiper = new Swiper('.gift__slider .swiper-container', {
    slidesPerView: 5,
    observer: true, 
    observeParents: true,
    spaceBetween: 60,
    speed: 1000,
    allowTouchMove:true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween:15,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween:30,
        },
        1650:{
            slidesperView:4,
            spaceBetween:30,
        }
    }
});