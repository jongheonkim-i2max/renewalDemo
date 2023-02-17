var submenu_index = $('.plp-menu__sub ul li.active').index();
var $subMenu = $('.plp-menu__sub .container');
$subMenu.sly({
	horizontal: 1,
	itemNav: 'centered',
	smart: 1,
	activateOn: 'click',
	mouseDragging: 1,
	touchDragging: 1,
	releaseSwing: 1,
	startAt: submenu_index,
	scrollBy: 0,
	speed: 300,
	elasticBounds: 1,
	easing: 'easeOutExpo',
	dragHandle: 1,
	dynamicHandle: 1,
	clickBar: 1,
});

$(window).on("load resize", debounce(function(event){
    var windowWidth = $(window).width();
	if(windowWidth > 1230){
		$('.plp-menu__sub .sub-menu').addClass('no_sly');
	}else{
		$('.plp-menu__sub .sub-menu').removeClass('no_sly');
		$subMenu.sly('reload');
	}
}, 100));