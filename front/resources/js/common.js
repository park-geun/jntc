window.onload = function () {
  
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
        //전체메뉴 2뎁스 펼치기
        $('.mobile_menu .bottom .left > li').click(function () {
            var index = $(this).index();
            console.log('asd');
            $('.mobile_menu .bottom .left > li').removeClass('on');
            $(this).addClass('on');
            $('.mobile_menu .bottom .right > li').removeClass('on').eq(index).addClass('on');
        });
        //전체메뉴 3뎁스 펼치기
        $('.mobile_menu .bottom .right > li > span').click(function () {
            var depth_height = $(this).next().find('ul').height();

            if ($(this).hasClass('on') === true) {
                $(this).removeClass('on');
                $(this).next().css({
                    'height': '0'
                });
            } else {
                $(this).addClass('on');
                $(this).next().css({
                    'height': depth_height
                });
            }
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

function openMobileMenu() {
    $('.mobile_menu').css({
        'right': '0'
    });
}

function closeMoblieBtn() {
    $('.mobile_menu').css({
        'right': '-100%'
    });
}

///공지사항 다음탭 이동 스크립트
function goNoticeView() {
    $('#footer_notice_list').modal('hide');
    $('#footer_notice_view').modal('show');

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
        speed: 400,
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
            delay: 3000,
        }
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
        console.log(idx);
        $(this).children().children().addClass('active');
        glassImg.attr('style', 'background-image:url(../../resources/images/intro-phone-' + idx + '.jpg)');

    }, function () {
        var idx = $(this).index() + 1;
        var glassImg = $('#glass_img_' + idx);

        $(this).children().children().removeClass('active');
        glassImg.attr('style', ' background-image:url(../../resources/images/intro-glass-' + idx + '.jpg)');

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
        glassImg.attr('style', 'background-image:url(../../resources/images/phone-' + idx + '.jpg)');

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

})
//계열사 소개 토글
function openSubsidiaryMap(idx){
    $('#map-'+idx).toggleClass('active');
    $('.btn-'+idx).toggleClass('active');
}
function openSearch() {
    $('.search-bar').show();
    $('.sitemaps').hide();
    $('.gnb').hide();
}

function openSiteMap() {
    $('.sitemaps').show();
    $('.search-bar').hide();
    $('.gnb').hide();
}

function closeBtn() {
    $('.sitemaps').hide();
    $('.search-bar.main-search').hide();
    $('.gnb').hide();
}

function toggleBtn() {
    $('.toggle-wrap').toggleClass('active');
}
