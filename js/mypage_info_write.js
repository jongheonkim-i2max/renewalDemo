//이메일 체크
function emailCheck( email ) { 
    var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/; 
    return (email != "" && email != "undefined" && regex.test(email)); 
}

//전화번호 체크
function telCheck( tel ){
    var regex=/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
    return (tel != "" && tel != "undefined" && regex.test(tel)); 
}

//비밀번호 체크
function passwordCheck( password ) {
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,20}$/;
    return (password != "" && password != "undefined" && regex.test(password)); 
}

//에러메시지
function errorMessage( input, message ){    
    if($('body').hasClass('pc_body')){
        $(input).val('');
        $(input).attr('placeholder', message);
    }else{
        $(input).parent().find('.error_msg').text(message);
    }
}

// 전화번호 자동 하이픈
$(document).on("keyup", ".only_tel", function() { 
    $(this).val( $(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})/,"$1-$2-$3").replace("--", "-") ); 
});

//탈퇴하기 팝업
popOpen('.secessionPop', '.secessionPop_bg', '.secessionPop_open');
popClose('.secessionPop', '.secessionPop_bg', '.secessionPop_close, .secessionPop_bg');


//회원정보 수정 체크
function checkInfo(){    
    var checkName = "input[id='member_name']";
    var checkTel = "input[id='member_tel']";
    var checkID = "input[id='member_email']";
    var checkOriginPW = "input[id='member_origin_password']";
    var checkNewPW = "input[id='member_new_password']";
    var checkNewPWConfirm = "input[id='member_new_password_confirm']";

    if($(checkName).val().trim() == ''){
        errorMessage(checkName, "이름을 입력해주세요.");
        $(checkName).val('').addClass('is-invalid').focus();
        return false;
    }else{
        $(checkName).removeClass('is-invalid');
    }
    
    if($(checkTel).val().trim() == ""){
        errorMessage(checkTel, "전화번호를 입력해주세요.");
        $(checkTel).val('').addClass('is-invalid').focus();
        return false;
    }else if ( !telCheck($(checkTel).val().trim()) ) { 
        errorMessage(checkTel, "전화번호 형식이 올바르지 않습니다.");
        $(checkTel).val('').addClass('is-invalid').focus();
        return false; 
    }else{
        $(checkTel).removeClass('is-invalid');
    }
    
    if($(checkID).val().trim() == ''){
        errorMessage(checkID, "이메일을 주소를 입력해주세요.");
        $(checkID).val('').addClass('is-invalid').focus();
        return false;
    }else if( !emailCheck($(checkID).val().trim()) ) { 
        errorMessage(checkID, "이메일 형식이 올바르지 않습니다.");
        $(checkID).addClass('is-invalid').focus();
        return false; 
    }else{
        $(checkID).removeClass('is-invalid');
    }

    
    if($(checkOriginPW).val().trim() == ''){
        errorMessage(checkOriginPW, "현재 비밀번호를 입력해주세요.");
        $(checkOriginPW).addClass('is-invalid').focus();
        return false;
    }else if(!passwordCheck($(checkOriginPW).val().trim())){
        errorMessage(checkOriginPW, "영+숫자 10자이상 입력해주세요.");
        $(checkOriginPW).addClass('is-invalid').focus();
        return false;
    }else{
        $(checkOriginPW).removeClass('is-invalid');
    }

    if($(checkNewPW).val().trim() == ''){
        errorMessage(checkNewPW, "새 비밀번호를 입력해주세요.");
        $(checkNewPW).addClass('is-invalid').focus();
        return false;
    }else if(!passwordCheck($(checkNewPW).val().trim())){
        errorMessage(checkNewPW, "영+숫자 10자이상 입력해주세요.");
        $(checkNewPW).addClass('is-invalid').focus();
        return false;
    }else{
        $(checkNewPW).removeClass('is-invalid');
    }

    if($(checkNewPWConfirm).val().trim() == ''){
        errorMessage(checkNewPWConfirm, "새 비밀번호 확인을 입력해주세요.");
        $(checkNewPWConfirm).addClass('is-invalid').focus();
        return false;
    }else if($(checkNewPWConfirm).val() != $(checkNewPW).val()){
        errorMessage(checkNewPWConfirm, "비밀번호가 상이합니다. 올바르게 입력해주세요.");
        $(checkNewPWConfirm).addClass('is-invalid').focus();
        return false;
    }else{
        $(checkNewPWConfirm).removeClass('is-invalid');
    }
}