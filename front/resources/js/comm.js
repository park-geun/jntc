$(function(){
    $('.tab-title li').click(function(){
        var i = $(this).index();

        $('.tab-title li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content > div').removeClass('active').eq(i).addClass('active');
    });
    //전체메뉴 2뎁스 펼치기
	$('.mobile_menu .bottom .left > li').click(function(){
		var index = $(this).index();

		$('.mobile_menu .bottom .left > li').removeClass('on');
		$(this).addClass('on');
		$('.mobile_menu .bottom .right > li').removeClass('on').eq(index).addClass('on');
	});
	//전체메뉴 3뎁스 펼치기
	$('.mobile_menu .bottom .right > li > span').click(function(){
		var depth_height = $(this).next().find('ul').height();

		if($(this).hasClass('on') === true){
			$(this).removeClass('on');
			$(this).next().css({'height':'0'});
		}else{
			$(this).addClass('on');
			$(this).next().css({'height':depth_height});
		}
    });
    //toggle_list
	$('.toggle_list .list .title').click(function(){

		if($(this).parents('.list').hasClass('on') === true){
			$(this).parents('.list').removeClass('on');
		}else{
			$(this).parents('.list').addClass('on');
		}
	});
});

function openMobileMenu() {
    $('.mobile_menu').css({'right':'0'});
}

function closeMoblieBtn() {
    $('.mobile_menu').css({'right':'-100%'});
}