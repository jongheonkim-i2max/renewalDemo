//모바일에서 리뷰 펼처보기 클릭 시
$(document).on('click', '.my-item .more-btn', function(){
    if($(this).hasClass('active')){
        $(this).find('.more-btn__text').text('리뷰 접어보기');
        $(this).removeClass('active');
        $(this).parent().prev().removeClass('active');
    }else{
        $(this).find('.more-btn__text').text('리뷰 펼처보기');
        $(this).addClass('active');
        $(this).parent().prev().addClass('active');
    }
});

//리뷰에서 이미지 클릭 시 팝업 열기, 닫기
popOpen('.reviewPhotoPop', '.reviewPhotoPop_bg', '.reviewPhotoPop_open');
popClose('.reviewPhotoPop', '.reviewPhotoPop_bg', '.reviewPhotoPop_close, .reviewPhotoPop_bg');

photoSwiper = new Swiper('.photo-slider', {
    observer: true, 
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 15,
    speed: 1000,
    loop:true,
    autoHeight : true,
    /*
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    */
    autoplay:false,
    pagination : {
		el : '.reviewPhotoPop_content .swiper-pagination',
		clickable : true, 
	},
    navigation: {
        nextEl: ".reviewPhotoPop_content .swiper-button-next",
        prevEl: ".reviewPhotoPop_content .swiper-button-prev",
    },
});

//작성한 리뷰에서 이미지 클릭 시 해당하는 링크 가져오기
function imgCheck(el){
    var slidesArray = [];
    var liIndex = $(el).parent().index();
    var liCheck = $(el).parents('.my-item__review--img').find('li');
    for(var i=0; i < liCheck.length; i++){
        var imgSrc = liCheck.eq(i).find('img').attr('src');
        var slidess = '<div class="swiper-slide"><img src="'+imgSrc+'" alt="포토리뷰 이미지'+(i+1)+'"></div>';
        slidesArray.push(slidess);
    }
    photoSwiper.removeAllSlides();
    photoSwiper.appendSlide(slidesArray);
    photoSwiper.slideToLoop(liIndex,0);
}

$(document).on('click', '.reviewPhotoPop_open', function(){
    imgCheck(this);
});