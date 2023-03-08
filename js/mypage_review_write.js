//평점주기 스크립트
$(document).on("change", ".review_write__star input", function(){
    $(this).parent().prevAll().find("input").prop("checked", true);
    $(this).parent().nextAll().find("input").prop("checked", false);
});

//이미지 등록하기
function readURL(el) {
    var ext = el.files[0].name.split('.').pop().toLowerCase();
    if(ext == "jpg" || ext == "png" || ext == "jpeg" || ext == "gif" || ext == "svg"){
        
    }else{
        $(el).val("");
        alert(ext+" 파일은 업로드 하실 수 없습니다.");
        return false;
    }
    
    
    if (el.files && el.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $(el).parent().addClass("active");
            $(el).next().find("span.img img").attr("src", e.target.result);
        }
        reader.readAsDataURL(el.files[0]);
    }
}

$(document).on("change", ".review_write__file input", function(){
    readURL(this);
});

//파일초기화
$(document).on('click', '.review_write__file .delete_btn', function(){
    var agent = navigator.userAgent.toLowerCase();
    if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf('msie') != -1) ) {
        $(this).parent().find('input').removeClass('active').replaceWith($(this).parent().find('input').clone(true));
        $(this).parent().find('img').attr('src', '');
    }else{
        $(this).parent().removeClass('active').find('input').val('');
        $(this).parent().find('img').attr('src', '');
    }
});