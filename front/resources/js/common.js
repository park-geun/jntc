
window.onload = function () {

    //모바일 사이트맵
    $('.dep1 .d1 > a').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('active');
        $(".dep1 .d1 > a").not(this).next().slideUp(300);
    })
    $('.dep2 .d2 > a').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('active');
        $(".dep2 .d2 > a").not(this).next().slideUp(300);
    })


    
    $('nav>ul>li').hover(function () {
        var idx = $(this).index() + 1;
        console.log(idx);
        $('#gnb-' + idx).show(); //nav hover gnb open
        $('#gnb-' + idx).siblings().hide();
        $('.gnb').show();
        $('#nav-' + idx).addClass('active'); //nav text hover
        $('#nav-' + idx).siblings().removeClass('active');
        
    }, function () {})
   
    //gnb 삭제
    $('.gnb').on('mouseleave', function () {
        $(this).hide();
    })

    $(function () {
        $('.tab-title li').click(function () {
            var i = $(this).index();

            $('.tab-title li').removeClass('active');
            $(this).addClass('active');
            $('.tab-content > div').removeClass('active').eq(i).addClass('active');
        });
        //toggle_list
        $('.toggle_list .list .title').click(function () {

            if ($(this).parents('.list').hasClass('on') === true) {
                $(this).parents('.list').removeClass('on');
            } else {
                $(this).parents('.list').addClass('on');
            }
        });


        
    });
    //검색창 포커스
    $('.form-control').focus(function(){
        $('.input-group-text').addClass('active');
        console.log('focus');
    })
    $('.form-control').blur(function(){
        $('.input-group-text').removeClass('active');
        console.log('focus');
    })
    
  
  

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

//family site open/close
function openFamilySite() {
    $('.famliy-site').show();
    console.log('open')
}

function closeFamilySite() {
    $('.famliy-site').hide();
}
$(document).ready(function () {
    $('.include-header').load('../layout/header.html');
    $('.include-footer').load('../layout/footer.html');
    $('.include-aside').load('../layout/aside.html');

    var mySwiper = new Swiper('#swiper-container', {
        speed: 700,
        effect:"fade",
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        autoplay: {
            delay: 5000,
        },
    });
    //main slider play stop btn
    $('.play-btn').on("click", function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            mySwiper.autoplay.start();

        } else {
            $(this).addClass('active');
            mySwiper.autoplay.stop();
        }

    })
     ///사업소개 강화글래스 hover
     $('#cover-glass .swiper-slide').hover(function () {
        var idx = $(this).index() + 1;
        var glassImg = $('#glass_img_' + idx);
        var phoneImg = $('#phone_img_' + idx);
        phoneImg.show();
        glassImg.hide();

    }, function () {
        var idx = $(this).index() + 1;
        var glassImg = $('#glass_img_' + idx);
        var phoneImg = $('#phone_img_' + idx);
        phoneImg.hide();
        glassImg.show();
    })
    ///사업소개 커넥터 hover
    // $('.swiper-slide').hover(function () {
    //     var idx = $(this).index() + 1;
    //     var glassImg = $('#glass_img_' + idx);
    //     console.log(idx);
    //     $(this).children().children().addClass('active');
    //     glassImg.attr('style', 'background-image:url(../../resources/images/years-phone-' + idx + '.png)');

    // }, function () {
    //     var idx = $(this).index() + 1;
    //     var glassImg = $('#glass_img_' + idx);

    //     $(this).children().children().removeClass('active');
    //     glassImg.attr('style', ' background-image:url(../../resources/images/intro-glass-' + idx + '.jpg)');

    // })

    ///제품 -> 글래스 hover
   
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

    
    //제품 -> 카메라 윈도우
    $('.glass-list.camera').hover(function () {
        var idx = $(this).index() + 1;
        var glassImg = $('#glass_img_' + idx);

        $(this).addClass('active');
        glassImg.attr('style', 'background-image:url(../../resources/images/window-phone-' + idx + '.jpg)');

    }, function () {
        var idx = $(this).index() + 1;
        var glassImg = $('#glass_img_' + idx);

        $(this).removeClass('active');
        glassImg.attr('style', 'background-image:url(../../resources/images/window-glass-' + idx + '.jpg)');

    })

    //top scroll btn
    $('.top-scroll').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    //커넥터 hide
    $('.lb-nav').click(function(){
        $('.lightboxOverlay').hide();
        $('.lightbox').hide();
        $('body.lb-disable-scrolling').css({'overflow':'auto'});
    })
    //테이블 cursor
    $('.table-wrap').bind("touchstart",function(){
        $('.cursor-ic').hide();
    });   
    
    $('.swiper-socket').click(function(){
        var lightImg = $('.lightbox');
        
        if( lightImg.show() ){
            console.log(';asd');
        }

    })
   
 
})

//스크롤 액션
$(document).scroll(function(){
    var scrollTop = $(this).scrollTop();

    if(scrollTop <= 100){
        $('.top-scroll').removeClass('active');
    }else{
        console.log('asssd');
        $('.top-scroll').addClass('active');
    }
})


//계열사 소개 토글
function openSubsidiaryMap(idx){
    $('#map-'+idx).toggleClass('active');
    $('.btn-'+idx).toggleClass('active');
}
function openSearch() {
    $('.search-bar').show();
    $('.gnb').hide();
}

function openSiteMap() {
    $('.sitemaps').show();
    $('.search-bar').hide();
    $('.gnb').hide();
}

function closeBtn() {
    $('.search-bar.main-search').hide();
    $('.gnb').hide();
}

function toggleBtn() {
    $('.toggle-wrap').toggleClass('active');
}
