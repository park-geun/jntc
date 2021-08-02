
//진행중 alert
function ingAlert(){
    alert('준비 중입니다.');
}

///공지사항 다음탭 이동 스크립트
function goNoticeView() {
    $('#footer_notice_list').modal('hide');
    $('#footer_notice_view').modal('show');
    setTimeout(function(){
        $('body').addClass('modal-open');
    },1000)
}
function backNoticeView(){
    $('#footer_notice_list').modal('show');
    $('#footer_notice_view').modal('hide');
}  

$(document).ready(function () {

     ///사업소개 강화글래스 hover
     $('#cover-glass .swiper-slide').hover(function () {
        var idx = $(this).index() + 1;
        var glassImg = $('#glass_img_' + idx);
        console.log(idx);
        $(this).children().children().addClass('active');
        glassImg.attr('style', 'background-image:url(../../resources/images/intro-phone-' + idx + '.jpg)');

    }, function () {
        var idx = $(this).index() + 1;
        var glassImg = $('#glass_img_' + idx);

        $(this).children().children().removeClass('active');
        glassImg.attr('style', ' background-image:url(../../resources/images/intro-glass-' + idx + '.jpg)');

    })
   
    $('.reinforce .glass-list').hover(function () {
        var idx = $(this).index() + 1;
        var glassImg = $('#glass_img_' + idx);
        console.log(idx);
        $(this).addClass('active');
        glassImg.attr('style', 'background-image:url(../../resources/images/phone-' + idx + '.jpg)');

    }, function () {
        var idx = $(this).index() + 1;
        var glassImg = $('#glass_img_' + idx);

        $(this).removeClass('active');
        glassImg.attr('style', ' background-image:url(../../resources/images/product-' + idx + '.jpg)');

    })

    //top scroll btn
    $('.top-scroll').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
   
 
})

$(".section-move").click(function() {
    var idx = $(this).index()+1;
    console.log(idx);
    $('html, body').animate({
        scrollTop: $('#section-'+idx).offset().top-60
    }, 500);
    closeMoblieBtn();
});

//스크롤 액션
$(document).scroll(function(){
    var scrollTop = $(this).scrollTop();

    if(scrollTop <= 100){
        $('.top-scroll').removeClass('active');
    }else{
        $('.top-scroll').addClass('active');
    }
})
//테이블 cursor
$('.table-wrap').bind("touchstart",function(){
    $('.cursor-ic').hide();
});   
//계열사 소개 토글
function openSubsidiaryMap(idx){
    $('#map-'+idx).toggleClass('active');
    $('.btn-'+idx).toggleClass('active');
}
// 모바일 사이트맵 오픈
function openMobileMenu() {
    $('.all_menu_mobile_wrap').css({
        'right': '0',
    });
    $('body').css({'overflow':'hidden'});
    $('.only_mo').hide();
    $('.only_mo_close').show();
}
// 모바일 사이트맵 닫기
function closeMoblieBtn() {
    $('body').css({'overflow':'inherit'});
    $('.only_mo_close').hide();
    $('.only_mo').show();
    $('.all_menu_mobile_wrap').css({
        'right': '-1200px',
    });
}

