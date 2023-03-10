//비밀번호 체크
function passwordCheck( password ) {
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,20}$/;
    return (password != "" && password != "undefined" && regex.test(password)); 
}

function errorMessage( input, message ){    
    if($('body').hasClass('pc_body')){
        $(input).val('');
        $(input).attr('placeholder', message);
    }else{
        $(input).parent().find('.error_msg').text(message);
    }
}

//아이디(이메일) 및 비밀번호 유효성 검사
function checkPassword(){    
    var checkPW = "input[id='login_password']";
    
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
}