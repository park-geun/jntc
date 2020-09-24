$(document).ready(function () {

    var mySwiper = new Swiper('.swiper-container', {
        speed: 400,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // loop: true,
        // autoplay:{
        //     delay:500,
        // }
    });

    $('nav').hover(function () {
        $('.gnb').show();

    }, function () {

    })
    //gnb 삭제
    $('.gnb').on('mouseleave', function(){
        $(this).hide();
    })
    ///글래스 hover
    $('.glass-list').hover(function(){
        var idx = $(this).index()+1;
        var glassImg = $('#glass_img_'+idx);

        $(this).addClass('active');
        glassImg.attr('src','../../resources/images/phone-'+idx+'.png');
        
    },function(){
        var idx = $(this).index()+1;
        var glassImg = $('#glass_img_'+idx);

        $(this).removeClass('active');
        glassImg.attr('src','../../resources/images/product-'+idx+'.png');

    })
    

    
})




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
    $('.search-bar').hide();
    $('.gnb').hide();
}