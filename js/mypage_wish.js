//장바구니 추가시 옵션 있을 때 팝업
popOpen('.cartSelectPop', '.cartSelectPop_bg', '.cartSelectPop_open');
popClose('.cartSelectPop', '.cartSelectPop_bg', '.cartSelectPop_close, .cartSelectPop_bg');

//장바구니 추가시 옵션보다 수량을 먼저 선택 방지
function optionChooseCheck(el){
    if($(el).val() == ''){
        $(el).next().attr('disabled', true);
        $(el).next().val('').prop('selected', true);
    }else{
        $(el).next().attr('disabled', false);
    }
}

optionChooseCheck('select[name="option_choose"]');

$(document).on('change', 'select[name="option_choose"]', function(){
    optionChooseCheck(this);
});


//장바구니 추가시 옵션 없을 때 팝업
popOpen('.cartAddPop', '.cartAddPop_bg', '.cartAddPop_open');
popClose('.cartAddPop', '.cartAddPop_bg', '.cartAddPop_close, .cartAddPop_bg');

//장바구니에서 체크 삭제
$(document).on("click", ".mypage_wish__button a", function(){
    if($(this).hasClass('select_delete')){//선택 삭제
        selectCheck();
    }else if($(this).hasClass('all_delete')){// 전체 삭제
        allDeleteCheck();
    }
});

//배송지 선택 삭제 체크
var wishLength = 0;
function selectCheck(){
    if(!$(".product__item .custom-checkbox input").is(":checked")){
        alert("삭제할 상품을 선택해주세요.");
        return false;
    }
    
    $(".product__item .custom-checkbox input").each(function(index){
        if($(this).is(":checked")){
            $(this).parents('.items').remove();
            wishLength = $('.product__item .items').length;
            $('.mypage_wish__title .length b').text(wishLength);
        }
    });
}

//배송지 선택 삭제 체크
function allDeleteCheck(){
    var allDeleteConfirm = confirm('정말 전체삭제를 하시겠습니까?');
    if(allDeleteConfirm){
        $('.product__item').remove();
        $('.mypage_wish__title .length b').text('0');
    }
}