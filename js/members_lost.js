//탭클릭시 전환
$(document).on("click", ".lost__tab--ul li", function(){
    if(!$(this).hasClass("active")){
        $(".lost__tab--ul li").removeClass("active");
        $(".lost__tab--content-wrap > div").removeClass("active");

        $(".lost__tab--content-wrap > div:nth-child("+($(this).index() + 1)+")").addClass("active");
        $(this).addClass("active");
    }
});


//전화번호 체크
function telCheck( tel ){
    var regex=/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
    return (tel != "" && tel != "undefined" && regex.test(tel)); 
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

//인증 코드 전송 클릭 시
var timer = null;
var isRunning = false;
$(document).on("click", ".code_send_id", function(){
    var nameID = "input[id='id_name']";
    var telID = "input[id='id_tel']";
    var codeID = "input[id='id_code']";
    if($(nameID).val().trim() == ''){
        errorMessage(nameID, "이름을 입력해주세요.");
        $(nameID).val('').addClass('is-invalid').focus();
        return false;
    }else{
        $(nameID).removeClass('is-invalid');
    }

    if($(telID).val().trim() == ''){
        errorMessage(telID, "전화번호를 입력해주세요.");
        $(telID).val('').addClass('is-invalid').focus();
        return false;
    }else if ( !telCheck($(telID).val().trim()) ) { 
        errorMessage(telID, "전화번호 형식이 올바르지 않습니다.");
        $(telID).val('').addClass('is-invalid').focus();
        return false; 
    }else{
        $(telID).removeClass('is-invalid');
    }
    $(".lost__form--code").addClass("active");
    $(codeID).removeClass('disabled').attr('disabled', false);
    $(codeID).focus();
    

    //시간 연장
    var time = $(".code-time .time");
    var leftSec = 30;
    if (isRunning){
        clearInterval(timer);
        time.html("00 : "+leftSec+"");
        startTimer(leftSec, time);
    }else{
        startTimer(leftSec, time);
    }

    function startTimer(count, time) {  
        var minutes, seconds;
        timer = setInterval(function () {
        minutes = parseInt(count / 60, 10);
        seconds = parseInt(count % 60, 10);
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        time.html(minutes + " : " + seconds);

        if (--count < 0) {
            clearInterval(timer);
            alert("인증 시간이 초과 되었습니다.");
            time.html("00 : 00");
            isRunning = false;
            $(codeID).removeClass('is-invalid').addClass('disabled').attr('disabled', true);
        }
        }, 1000);
        isRunning = true;
    }
});   

$(document).on("click", ".code_confirm", function(){
    var codeID = "input[id=id_code]";
    if($(codeID).hasClass('disabled')){
        alert("인증 코드 전송을 다시 클릭해주세요.");
        return false;
    }
    
    if($(codeID).val().trim() == ''){
        alert("인증코드를 입력해주세요.");
        $(codeID).val('').addClass('is-invalid').focus();
    }else{
        $(codeID).removeClass('is-invalid');
        $(this).parents(".lost__form--code").addClass("confirm");
        clearInterval(timer);
    }
});

//아이디(이메일) 유효성 검사
function findID(){    
    var nameID = "input[id='id_name']";
    var telID = "input[id='id_tel']";
    var codeID = "input[id=id_code]";

    if($(nameID).val().trim() == ''){
        errorMessage(nameID, "이름을 입력해주세요.");
        $(nameID).val('').addClass('is-invalid').focus();
        return false;
    }else{
        $(nameID).removeClass('is-invalid');
    }
    
    if($(telID).val().trim() == ""){
        errorMessage(telID, "전화번호를 입력해주세요.");
        $(telID).val('').addClass('is-invalid').focus();
        return false;
    }else if ( !telCheck($(telID).val().trim()) ) { 
        errorMessage(telID, "전화번호를 형식이 올바르지 않습니다.");
        $(telID).val('').addClass('is-invalid').focus();
        return false; 
    }else{
        $(telID).removeClass('is-invalid');
    }

    if(!$(".lost__form--code").hasClass("active")){
        alert("인증 코드 전송을 클릭해 주세요.");
        return false;
    }

    if($(codeID).val().trim() == ''){
        errorMessage(codeID, "인증코드 입력");
        $(codeID).val('').addClass('is-invalid').focus();
        return false;
    }else{
        $(codeID).removeClass('is-invalid');
    }
}