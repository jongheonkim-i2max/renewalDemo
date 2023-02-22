// 숫자만 입력할 수 있도록
$(document).on("keyup", ".only_num", function() { 
    $(this).val($(this).val().replace(/[^0-9]/g,""));
});

// 전화번호 정규식
$(document).on("keyup", ".phone_number", function() { 
    $(this).val( $(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})/,"$1-$2-$3").replace("--", "-") ); 
});

$(document).on("change", ".custom-radio input",function(){
    if($(this).val() == 'same'){
        $("input[id='shipping_name']").val($(this).attr('data-name'));
        $("input[id='shipping_name']").val($(this).attr('data-name'));
        $("input[id='shipping_name']").val($(this).attr('data-name'));
        $("input[id='shipping_name']").val($(this).attr('data-name'));
        $("input[id='shipping_name']").val($(this).attr('data-name'));
        $("input[id='shipping_name']").val($(this).attr('data-name')); 
    }else if($(this).val() == 'new'){

    }else{

    }
});