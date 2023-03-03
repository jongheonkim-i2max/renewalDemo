//추후 삭제해야합니다.
$(document).one("focus", "input", function(){
    alert('아이디(이메일)와 비밀번호(영문+숫자로만 10자 이상)를 입력 후 \n엔터 혹은 로그인 버튼 클릭하면 마이페이지로 접근 가능합니다.');
});


//이메일 체크
function emailCheck( email ) { 
    var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/; 
    return (email != "" && email != "undefined" && regex.test(email)); 
}

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
function checkLogin(){    
    var checkID = "input[id='login_email']";
    var checkPW = "input[id='login_password']";

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