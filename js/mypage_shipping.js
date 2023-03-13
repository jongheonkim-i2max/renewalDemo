// 숫자만 입력할 수 있도록
$(document).on("keyup", ".only_num", function() { 
    $(this).val($(this).val().replace(/[^0-9]/g,""));
});

// 전화번호 자동 하이픈
$(document).on("keyup", ".only_tel", function() { 
    $(this).val( $(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})/,"$1-$2-$3").replace("--", "-") ); 
});

//전화번호 체크
function tel_check(tel){
    var regex=/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
    return (tel != "" && tel != "undefined" && regex.test(tel)); 
}

//체크박스 선택 시 on클래스 추가
$(document).on("change", ".mypage_shipping__cont .custom-checkbox input", function(){
    if($(this).is(":checked")){
        $(this).parents(".mypage_shipping__cont").addClass("on");
    }else{
        $(this).parents(".mypage_shipping__cont").removeClass("on");
    }
});

//상단 버튼 클릭시
$(document).on("click", ".mypage_shipping__button a", function(){
    if($(this).hasClass('selectDelete')){//선택 삭제
        selectCheck();
    }else if($(this).hasClass('allDelete')){// 전체 삭제
        allDeleteCheck();
    }
});

//배송지 선택 삭제 체크
var shippingLength = 0;
function selectCheck(){
    if(!$(".mypage_shipping__cont .custom-checkbox input").is(":checked")){
        alert("삭제할 배송지를 선택해주세요.");
        return false;
    }
    
    $(".mypage_shipping__cont .custom-checkbox input").each(function(index){
        if($(this).is(":checked")){
            $(this).parents('.mypage_shipping__cont').remove();
            shippingLength = $('.mypage_shipping__cont').length;

            $('.mypage_shipping__title .length b').text(shippingLength);
        }
    });
}

//배송지 선택 삭제 체크
function allDeleteCheck(){
    var allDeleteConfirm = confirm('정말 전체삭제를 하시겠습니까?');
    if(allDeleteConfirm){
        $('.mypage_shipping__cont').remove();
        $('.mypage_shipping__title .length b').text('0');
    }
}

//배송지 관리 팝업 열기, 닫기
popOpen('.shippingPop', '.shippingPop_bg', '.shippingPop_open');
popClose('.shippingPop', '.shippingPop_bg', '.shippingPop_close, .shippingPop_bg');

//배송지 관리 팝업에서 확인 클릭시 유효성 검사
$(document).on('click', '.shippingPop .pop_button button', function(){
    if($('input[id="shippingPop_title"]').val().trim() == ''){
        alert('배송지명을 입력해주세요.');
        $('input[id="shippingPop_title"]').focus();
        return false;
    }

    if($('input[id="shippingPop_name"]').val().trim() == ''){
        alert('받으시는 분의 성함을 입력해주세요.');
        $('input[id="shippingPop_name"]').focus();
        return false;
    }

    if($('input[id="shippingPop_tel"]').val().trim() == ''){
        alert('전화번호를 입력해주세요.');
        $('input[id="shippingPop_tel"]').focus();
        return false;
    }else if ( !tel_check($('input[id="shippingPop_tel"]').val().trim()) ) { 
        alert('전화번호를 올바르게 입력해주세요.'); 
        $('input[id="shippingPop_tel"]').focus();
        return false; 
    }

    if($('input[id="shipping_postcode"').val().trim() == ''){
        alert('우편번호를 입력해주세요.');
        $('input[type="button"].addr_button').trigger('click');
        return false;
    }else if($('input[id="shipping_postcode"').val().trim().length != 5){
        alert('우편번호를 올바르게 입력해주세요.');
        $('input[type="button"].addr_button').trigger('click');
        return false;
    }

    if($('input[id="shipping_address"]').val().trim() == ''){
        alert('주소를 입력해주세요.');
        $('input[type="button"].addr_button').trigger('click');
        return false;
    }

    if($('input[id="shipping_detailAddress"]').val().trim() == ''){
        alert('상세주소를 입력해주세요.');
        $('input[id="shipping_detailAddress"]').focus();
        return false;
    }

});