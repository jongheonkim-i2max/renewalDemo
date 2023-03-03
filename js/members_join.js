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

//이메일 인증 코드 받기 클릭 시
$(document).on("click", ".email-confirm", function(){
    var checkID = "input[id='join_email']";
    var checkIDCode = "input[id='join_email_code']";
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
        $(this).text("이메일 인증 코드 확인");
        $(".common__content--input-code").addClass("active")
        $(checkIDCode).focus();
    }
});


//아이디(이메일) 및 비밀번호 유효성 검사
function checkJoin(){    
    var checkID = "input[id='join_email']";
    var checkIDCode = "input[id='join_email_code']";
    var checkPW = "input[id='join_password']";
    var checkPWConfirm = "input[id='join_password_confirm']";
    var checkName = "input[id='join_name']";
    var checkTel = "input[id='join_tel']";
    var checkTerms = "input[id='join_terms']";
    var checkPrivacy = "input[id='join_privacy']";

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

    if(!$(".common__content--input-code").hasClass("active")){
        alert("이메일 인증코드를 받아주세요.");
        return false;
    }

    if($(checkIDCode).val().trim() == ''){
        errorMessage(checkIDCode, "이메일 인증 코드를 입력해주세요.");
        $(checkIDCode).val('').addClass('is-invalid').focus();
        return false;
    }else{
        $(checkIDCode).removeClass('is-invalid');
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
        errorMessage(checkTel, "전화번호를 올바르게 입력해주세요.");
        $(checkTel).val('').addClass('is-invalid').focus();
        return false; 
    }else{
        $(checkTel).removeClass('is-invalid');
    }

    if(!$(checkTerms).is(":checked") && !$(checkPrivacy).is(":checked")){
        alert("이용약관 및 개인정보 수집에 동의해주세요.");
        return false;
    }else if(!$(checkTerms).is(":checked")){
        alert("이용약관에 동의해주세요.");
        return false;
    }else if(!$(checkPrivacy).is(":checked")){
        alert("개인정보 수집에 동의해주세요.");
        return false;
    }
}