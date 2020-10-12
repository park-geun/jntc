$(document).ready(function () {

    $('.include-header').load('../layout/header.html');
    $('.include-footer').load('../layout/footer.html');


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
        autoplay:{
            delay:3000,
        }
    });

    $('.play-btn').on("click",function(){
        if( $(this).hasClass('active') ){ 
            console.log('2');
            $(this).removeClass('active');
            mySwiper.autoplay.start();
            
        }else{
            $(this).addClass('active');
            mySwiper.autoplay.stop();
            console.log('1');
        }

    })


   



    ///글래스 hover
    $('.glass-list').hover(function(){
        var idx = $(this).index()+1;
        var glassImg = $('#glass_img_'+idx);

        $(this).addClass('active');
        glassImg.attr('style','background-image:url(../../resources/images/phone-'+idx+'.png)');
        
    },function(){
        var idx = $(this).index()+1;
        var glassImg = $('#glass_img_'+idx);

        $(this).removeClass('active');
        glassImg.attr('style',' background-image:url(../../resources/images/product-'+idx+'.png)');

    })


    $('.glass-list.camera').hover(function(){
        var idx = $(this).index()+1;
        var glassImg = $('#glass_img_'+idx);

        $(this).addClass('active');
        glassImg.attr('style','background-image:url(../../resources/images/phone-'+idx+'.png)');
        
    },function(){
        var idx = $(this).index()+1;
        var glassImg = $('#glass_img_'+idx);

        $(this).removeClass('active');
        glassImg.attr('style','background-image:url(../../resources/images/window-glass-'+idx+'.jpg)');

    })


  
    $( '.top-scroll' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
        return false;
    } );
    
   $('.form-control').click(function(){
        
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

function toggleBtn(){
    $('.toggle-wrap').toggleClass('active');
}