$(".nav-item.nav-link").click(function () {
    $('html,body').animate({
            scrollTop: $($(this).data('scroll-to')).offset().top
        },
        'slow');
});
