// 숫자만 입력할 수 있도록
$(document).on("keyup", ".only_num", function() { 
    $(this).val($(this).val().replace(/[^0-9]/g,""));
});

// 전화번호 자동 하이픈
$(document).on("keyup", ".only_tel", function() { 
    $(this).val( $(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})/,"$1-$2-$3").replace("--", "-") ); 
});

//받는분 정보 채우기
function shippingCheck(obj){
    if($(obj)[0].nodeName.toLowerCase() == 'select'){
        obj = '.common-shipping select option:selected';
    }

    $("input.shipping_name").val($(obj).attr('data-name'));
    $("input.shipping_tel").val($(obj).attr('data-tel'));
    $("input.shipping_addr1").val($(obj).attr('data-addr1'));
    $("input.shipping_addr2").val($(obj).attr('data-addr2'));
    $("input.shipping_addr3").val($(obj).attr('data-addr3'));
    $("input.shipping_addr4").val($(obj).attr('data-addr4'));

    if($(obj)[0].nodeName.toLowerCase() == 'input' && $(obj).val() != 'select'){
        $("select[id='shipping_list']").attr('disabled', true);
    }
    
}

//받는분 정보 라디오 선택 값이 변경될 때
$(document).on("change", ".custom-radio input", function(){
    if($(this).val() == 'new'){
        $("input.shipping_name").focus();
    }else if($(this).val() == 'select'){
        $("select[id='shipping_list']").attr('disabled', false);
    }
    shippingCheck(this);
});

//받는분 정보 셀렉트 선택 값이 변경될 때
$(document).on("change", ".common-shipping select", function(){
    shippingCheck(this);
});

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

//전화번호 체크
function tel_check(tel){
    var regex=/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
    return (tel != "" && tel != "undefined" && regex.test(tel)); 
}

//결제하기 클릭시 유효성 검사
$(document).on("click", ".common-price__payment button", function(){
    if($("input.shipping_name").val().trim() == ""){
        alert("받으시는 분 성함을 입력해주세요.");
        $("input.shipping_name").focus();
        return false;
    }

    if($("input.shipping_tel").val().trim() == ""){
        alert("전화번호를 입력해주세요.");
        $("input.shipping_tel").focus();
        return false;
    }else if ( !tel_check($("input.shipping_tel").val().trim()) ) { 
        alert("전화번호가 잘못되었습니다."); 
        $("input.shipping_tel").focus();
        return false; 
    }

    if($("input.shipping_addr1").val().trim() == ""){
        alert("우편번호를 입력해주세요.");
        $("input.shipping_addr1").focus();
        return false;
    }else if($("input.shipping_addr1").val().trim().length != 5){
        alert("우편번호가 잘못되었습니다.");
        $("input.shipping_addr1").focus();
        return false;
    }

    if($("input.shipping_addr2").val().trim() == ""){
        alert("주소를 입력해주세요.");
        $("input.shipping_addr2").focus();
        return false;
    }

    if($("input.shipping_addr3").val().trim() == ""){
        alert("상세주소를 입력해주세요.");
        $("input.shipping_addr3").focus();
        return false;
    }

    if(!$("input.agree").is(":checked")){
        alert("결제 금액 이용약관에 동의해주세요.");
        return false;
    }

    if($("select.payment_method").val().trim() == ""){
        alert("결제수단을 선택해주세요.");
        return false;
    }

    $(location).attr("href", "../pages/orderConfirm.html");
});