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

//아이디(이메일) 및 비밀번호 유효성 검사
function resetPW(){    

    var checkPW = "input[id='reset_password']";
    var checkPWConfirm = "input[id='reset_password_confirm']";

    
    if($(checkPW).val().trim() == ''){
        errorMessage(checkPW, "비밀번호를 입력해주세요.");
        $(checkPW).addClass('is-invalid').focus();
        return false;
    }else if(!passwordCheck($(checkPW).val().trim())){
        errorMessage(checkPW, "영+숫자 10자이상 입력해주세요.");
        $(checkPW).addClass('is-invalid').focus();
        return false;
    }else{
        $(checkPW).removeClass('is-invalid');
    }

    if($(checkPWConfirm).val().trim() == ''){
        errorMessage(checkPWConfirm, "비밀번호 확인을 입력해주세요.");
        $(checkPWConfirm).addClass('is-invalid').focus();
        return false;
    }else if($(checkPWConfirm).val() != $(checkPW).val()){
        errorMessage(checkPWConfirm, "비밀번호가 상이합니다. 올바르게 입력해주세요.");
        $(checkPWConfirm).addClass('is-invalid').focus();
        return false;
    }else{
        $(checkPWConfirm).removeClass('is-invalid');
    }
}