$(function(){
    $('.tab-title li').click(function(){
        var i = $(this).index();

        $('.tab-title li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content > div').removeClass('active').eq(i).addClass('active');
    });

});

function openMobileMenu() {
    $('.mobile_menu').css({'right':'0'});
}

function closeMoblieBtn() {
    $('.mobile_menu').hide();
}