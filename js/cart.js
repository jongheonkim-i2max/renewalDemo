

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

//상단 선택 삭제 클릭 시 
$(document).on("click", ".choose_delete", function(){
    itemCheck();
});

//옵션변경 버튼 클릭 시
$(document).on("click", ".cart-product__option-change button", function(){
    if($(this).parents(".cart-product__option-li").hasClass("active")){
        $(this).parents(".cart-product__option-li").removeClass("active");
        $(this).parents(".cart-product__option-li").find("select").attr("disabled", true);
    }else{
        $(this).parents(".cart-product__option-li").addClass("active");
        $(this).parents(".cart-product__option-li").find("select").attr("disabled", false);
    }
});

//옵션에서 수량변경 스크립트
var optionArray = [];
$('.cart-product__option-li').each(function(index){
    optionArray.push($(this).find('.option-qty').data('value'));    
    $(this).on("click", ".cart-product__option-value button", function(){
        if($(this).hasClass('decrease')){//감소 클릭 시
            if(optionArray[index] > 1){
                optionArray[index]--;
            }else{
                alert('상품옵션의 최소갯수는 1개 입니다.');
                return false;
            }
        }else{//증가 클릭 시
            optionArray[index]++;            
        }

        if(optionArray[index] < 10 ){
             //1~9 사이일 때 시안과 동일하게 0을 붙여 줌
            $(this).parent().find('input').val('0'+optionArray[index]);
        }else{
            $(this).parent().find('input').val(optionArray[index]);
        }
        $(this).parent().find('input').attr('data-value', optionArray[index]);

        optionCheck(this);
        totalCheck(this);
    });
});

//옵션에서 개별 옵션 삭제
$(document).on("click", ".common-product__option-delete button", function(){
    var personalOptionLength = $(this).parents(".cart-product__option").find(".cart-product__option-li").length;
    if(personalOptionLength > 1){
        $(this).parents('.cart-product__option-li').remove();
    }else{
        alert("1개 이하의 옵션을 삭제할 수 없습니다.");
        return false;
    }
    
    //옵션에서 개별 삭제는 완벽하지 않은 기능
    optionCheck(this);
    totalCheck(this);
});

function optionCheck(obj){
    var lengthCheck = $(obj).parents('.cart-product__option').find('.cart-product__option-li');
    var optionPersonalArray = [];
    var pricePersonalArray = [];
    for(var i =0; i < lengthCheck.length; i++ ){
        var optionValue = Number($(obj).parents('.cart-product__option').find('.cart-product__option-li').eq(i).find('.option-qty').attr('data-value'));
        var priceValue = Number($(obj).parents('.cart-product__option').find('.cart-product__option-li').eq(i).find('.common-product__option-price').attr('data-price'));

        optionPersonalArray.push(optionValue);
        pricePersonalArray.push(priceValue * optionValue);
    }
    var optionResult = optionPersonalArray.reduce(function add(sum, currValue){
        return sum + currValue;
    }, 0);

    var priceResult = pricePersonalArray.reduce(function add(sum2, currValue2){
        return sum2 + currValue2;
    }, 0);

    $(obj).parents('.cart-product__item').find('.option-totalLength').text(optionResult).attr('data-length', optionResult);
    $(obj).parents('.cart-product__item').find('.option-totalPrice').text(priceResult.toLocaleString('en-US')).attr('data-totalPrice', priceResult);
}

function totalCheck(obj){
    var totalLengthCheck = $(obj).parents('.cart-product__list').find('.cart-product__item');
    var totalOptionArray = [];
    var totalPricelArray = [];

    for(var i =0; i < totalLengthCheck.length; i++ ){
        var totalOptionValue = Number($(obj).parents('.cart-product__list').find('.cart-product__item').eq(i).find('.option-totalLength').attr('data-length'));
        var totalPriceValue= Number($(obj).parents('.cart-product__list').find('.cart-product__item').eq(i).find('.option-totalPrice').attr('data-totalPrice'));

        totalOptionArray.push(totalOptionValue);
        totalPricelArray.push(totalPriceValue);
    }

    var totalOptionResult = totalOptionArray.reduce(function add(sum, currValue){
        return sum + currValue;
    }, 0);

    var totalPriceResult = totalPricelArray.reduce(function add(sum2, currValue2){
        return sum2 + currValue2;
    }, 0);
    $('.cart-product__totalLength').text(totalOptionResult);        
    $('.common-price__total h5').text(totalPriceResult.toLocaleString('en-US')+"원").attr('data-totalPriceSum', totalPriceResult);
}

$(".common-price__cost button").on("click", function(){
    if($('.cart-product__item .cart-product__option-li').hasClass('active')){
        alert("옵션을 적용해주세요.");
        return false;
    }
    
    $(location).attr("href", "../pages/checkout.html");
});