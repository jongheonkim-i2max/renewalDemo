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

