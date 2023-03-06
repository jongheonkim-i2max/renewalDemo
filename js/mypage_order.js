//주문조회 상단 탭
$('.mypage-order__tab > li').on('click', function(){
    if(!$(this).hasClass('active')){
        $('.mypage-order__tab > li').removeClass('active');
        $(this).addClass('active');
        $('.mypage-order__content-wrap > .mypage-order__content').removeClass('active');
        $('.mypage-order__content-wrap > .mypage-order__content:nth-child('+($(this).index()+1)+')').addClass('active');
    }
});

//데이터 피커 설정
jQuery(function($){
    $.datepicker.regional["ko"] = {
        closeText: "닫기",
        prevText: "이전달",
        nextText: "다음달",
        currentText: "오늘",
        monthNames: ["1월(JAN)","2월(FEB)","3월(MAR)","4월(APR)","5월(MAY)","6월(JUN)", "7월(JUL)","8월(AUG)","9월(SEP)","10월(OCT)","11월(NOV)","12월(DEC)"],
        monthNamesShort: ["1월","2월","3월","4월","5월","6월", "7월","8월","9월","10월","11월","12월"],
        dayNames: ["일","월","화","수","목","금","토"],
        dayNamesShort: ["일","월","화","수","목","금","토"],
        dayNamesMin: ["일","월","화","수","목","금","토"],
        weekHeader: "Wk",
        dateFormat: "yymmdd",
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: ""
    };
	$.datepicker.setDefaults($.datepicker.regional["ko"]);
});

//데이터피커 체크인 선택시 체크아웃은 전에 날짜 선택 못함
$("#date_in, #date_out").datepicker({
    //dateFormat: "mm월 d일 (DD)",
    dateFormat:"yy.mm.dd",
    changeMonth: true,
    changeYear: true,
    showButtonPanel: true,
    yearRange: "c-1:c+10",
    maxDate: "0",		
});

$("#date_in").datepicker("option", "onClose", function ( selectedDate ) {
    $("#date_out").datepicker( "option", "minDate", selectedDate );
});

$("#date_out").datepicker("option", "minDate", $("#check_in").val());
$("#date_out").datepicker("option", "onClose", function ( selectedDate ) {
    $("#date_in").datepicker( "option", "maxDate", selectedDate );
});

//주문취소 팝업 열기, 닫기
popOpen('.withdrawPop', '.withdrawPop_bg', '.withdrawPop_open');
popClose('.withdrawPop', '.withdrawPop_bg', '.withdrawPop_close, .withdrawPop_bg');

//라벨 및 셀렉트 값 변경시
function changeCheck(el){
    var elIndex = 0;
    var elValue = $(el).val();

    if($(el).hasClass('custom-select')){
        elIndex = $(el).parent().index();
        $(el).parents('.mypage-order__choose').find('.mypage-order__choose--radio input').prop('checked', false);
        $(el).parents('.mypage-order__choose').find('.mypage-order__choose--radio input[value="'+elValue+'"]').prop('checked', true);
    }else{
        $(el).parents('.mypage-order__choose').find('select').val(''+elValue+'').prop('selected', true);
    }
}

$(document).on('change', '.mypage-order__choose--radio input', function(){
    changeCheck(this);
});

$(document).on('change', '.mypage-order__choose--select select', function(){
    changeCheck(this);
});