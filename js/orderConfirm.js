//상품 펼처보기 클릭
$(document).on("click", ".common-product .more-btn", function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).find('.more-btn__text').text('상품 펼처보기');
        $(".common-product .common-product__list > li:not(:first-child)").removeClass("active");
    }else{
        $(this).addClass("active");
        $(this).find('.more-btn__text').text('상품 접어보기');
        $(".common-product .common-product__list > li:not(:first-child)").addClass("active");
    }
});