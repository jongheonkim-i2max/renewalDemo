

//전체 선택 클릭 시
$(document).on("change", ".cart-product__totalCheck input[id='cart_product__allCheck']", function(e){
    if($(this).is(":checked")){
        $(".cart-product__list .custom-checkbox input").prop("checked", true);
    }else{
        $(".cart-product__list .custom-checkbox input").prop("checked", false);
    }        
});

//개별 선택 클릭 시 전체선택에 활성화 여부
$(document).on("change", ".cart-product__list .custom-checkbox input", function(){
    var allLength = $(this).parents(".cart-product__list").find(".custom-checkbox input").length;
    var activeLength = $(this).parents(".cart-product__list").find(".custom-checkbox input:checked").length;

    if(allLength == activeLength){
        $(".cart-product__totalCheck input[id='cart_product__allCheck']").prop("checked", true);
    }else{
        $(".cart-product__totalCheck input[id='cart_product__allCheck']").prop("checked", false);
    }
});

//아이템 선택삭제를 위한 개별 체크
function itemCheck(){
    if(!$(".cart-product__list .custom-checkbox input").is(":checked")){
        alert("장바구니에서 삭제할 아이템을 하나 이상 선택해주세요.");
        return false;
    }
    
    $(".cart-product__list .custom-checkbox input").each(function(index){
        if($(this).is(":checked")){
            $(this).parents('li.cart-product__item').remove();
        }
        itemLenthCheck();
    });
}

//아이템 전체 갯수 체크하여 0개일 때 비활성화
function itemLenthCheck(){
    var itemLength = $(".cart-product__list > li").length;
    var productTotalLength = $('.cart-product__totalLength');
    var init_productPrice = $('.common-price__cont .common-price__price');
    var init_totalPrice = $('.common-price__total h5');
    var init_button = $('.common-price__cost button');
    if(itemLength == 0){
        $(".cart.checkCommon").addClass("no_list");
        productTotalLength = productTotalLength.text("0");
        init_productPrice = init_productPrice.text("0 원");
        init_totalPrice = init_totalPrice.text("0 원");
        init_button.attr("disabled", true);
    }else{
        $(".cart.checkCommon").removeClass("no_list");
    }
}
itemLenthCheck();

//아이템 개별삭제를 위한 스크립트
$(document).on("click", ".cart-product__btn .deleteBtn", function(){
    if($(this).parents('.common-product__info').find('.custom-checkbox input').is(':checked')){
        $(this).parents('li.cart-product__item').remove();
    }else{
        alert("좌측 체크박스에 선택해주세요.");
    }
    itemLenthCheck();
});

//선택 삭제 클릭 시 
$(document).on("click", ".choose_delete", function(){
    itemCheck();
});

function cartTotalLengthCheck(){

};