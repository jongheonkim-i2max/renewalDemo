function popOpen(pop,pop_bg,pop_open){
    $(document).on('click', pop_open, function(){
        $(pop).addClass('active');
        $(pop_bg).addClass('active');
        overflow('hidden');
    });
}

function popClose(pop,pop_bg,pop_close){
    $(document).on('click', pop_close, function(){
        $(pop).removeClass('active');
        $(pop_bg).removeClass('active');
        overflow('visible');
    });
}