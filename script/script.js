$(window).scroll(function() {
    
    if ($(window).scrollTop() > 60) {
        $('#logo').css('display', 'inherit');
        $('.header nav').addClass('nav-scroll');
        $('nav li a').addClass('nav-scroll-menu');
    } else {
        $('nav #logo').hide();
        $('.header nav').removeClass('nav-scroll');
        $('nav li a').removeClass('nav-scroll-menu');
    }
});