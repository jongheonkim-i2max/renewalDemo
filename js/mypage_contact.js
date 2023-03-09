//수정버튼 클릭시
$(document).on("click", ".mypage__faq--ul .modify-button", function(){
    if($(this).parents('.mypage__faq--li').hasClass('checking')){//답변이 완료되지 않았다면
        var thisParents = $(this).parents(".answer__self");
        var thisSubject = thisParents.find('h5').text();
        var thisText = thisParents.find('span.text').text();
        var textareaText = thisParents.find('textarea').attr('data-text');

        
        if($(this).hasClass('modify')){//버튼이 확인이라면
            if(thisParents.find('textarea').val().trim() == ''){ //값을 수정할 때 textarea 빈값 체크
                alert('문의사항을 입력해주세요.');
                thisParents.find('textarea').val('').focus();
                return false;
                
            }
            
            $(this).parents('.mypage__faq--li').removeClass('modify');
            $(this).removeClass('modify').text('수정');
            thisParents.find('textarea').attr('readonly',true);
            
            thisParents.find('h5').text(thisSubject);
            thisParents.find('span.text').text(textareaText);
        }else{//버튼이 수정이라면
            $(this).parents('.mypage__faq--li').addClass('modify');
            $(this).addClass('modify').text('완료');

            thisParents.find('textarea').val(thisText);
            thisParents.find('textarea').attr('readonly',false).focus();
        }
    }else{//답변이 완료 됐을 때
        alert('답변이 완료된 사항은 수정이 불가능 합니다.');
        return false;
    }
});

//실시간으로 textarea값 변경을 감지
$(document).on("keyup", ".mypage__faq--ul textarea", function(){
    var thisVal = $(this).val();
    $(this).attr('data-text', thisVal);
});

//개별 삭제
$(document).on("click", ".mypage__faq--ul .delete-button", function(){
    $(this).parents(".mypage__faq--li").remove();
    
    var faqLengthCheck = $(".mypage__faq--ul li").length;
    $('.mypage_contact__title b').text(faqLengthCheck);
    if(faqLengthCheck == 0){
        $(".mypage_contact_list").remove();
    }
})