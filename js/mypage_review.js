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