//상단 작은 썸네일 슬라이드
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

//상단 큰 썸네일 슬라이드
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

//추천상품 슬라이드
var recommandSwiper = null;
var attentionSwiper = null;

function initSwiper() {
    if (window.innerWidth <= 1230) {
        recommandSwiper = new Swiper('.pc_body .recommand-slider .items-wrap', {
            observer: true, 
            observeParents: true,
            slidesPerView: 3,
            freeMode:true,
            spaceBetween: 15,
            speed: 1000,
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

        attentionSwiper = new Swiper('.pc_body .attention-slider .items-wrap', {
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
        recommandSwiper.destroy();
        attentionSwiper.destroy();
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

//qty count
let optionQty = $('.option-qty').attr('data-value');
let optionQtyValue = $('.option-qty').val();

function priceChange() {
    let optionPrice = $('.total-price .price').data('selprice');
    let multiplyPrice = Number(optionQty) * Math.floor(optionPrice * 100) / 100;
    $('.total-price .price').text(multiplyPrice.toLocaleString('en-US'));
}
priceChange();

function lengthCheck() {
    if (optionQty < 10) {
        optionQtyValue = '0' + optionQty;
    } else {
        optionQtyValue = optionQty;
    }

    $('.option-qty').val(optionQtyValue);
    $('.option-qty').attr('data-value', optionQty);
    $('.total-count .count').text(optionQty);
}

$(document).on("click", ".price-buttons button", function () {

    if ($(this).hasClass('decrease')) {
        if (optionQty == 1) {
            alert("최소 개수는 1개입니다.");
            return false;
        }
        optionQty--;
        optionQtyValue--;
        lengthCheck();
        priceChange();
    } else {
        optionQty++;
        optionQtyValue++;
        lengthCheck();
        priceChange();
    }
});

//상품상세정보 탭 구현
$(".detail-contents__tab li").on("click", function(){
    if(!$(this).hasClass("active")){
        var thisIndex = $(this).index();
        $(".detail-contents__tab li").removeClass("active");
        $(".detail-contents__cont li").removeClass("active");
        $(this).addClass("active")
        $(".detail-contents__cont li:nth-child("+(thisIndex+1)+")").addClass("active")
    }
});