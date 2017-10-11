

$(function() {


    $(window).scroll(function () {
        var st = $(this).scrollTop(),
            slowTxt = 20,
            slowBg = 120; // чем больше, тем медленнее
        $('.content-mainwin').css({
            "transform" : "translate(0%, " + st/slowTxt + "%",
            "opacity" : 1-st/400
        });
        $('.parallax-main .img-paralax').css({
            "transform" : "translate(0%, -" + st/slowBg + "%"
        });

    });

    $('input[type="tel"]').mask("+7 (999) 999-9999");
    // ===== Scroll to Top ====
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });


    $('#my-menu').html($('.main-menu').html());
    var  socials = $("#my-menu").data();
    $("#my-menu").mmenu({
        "extensions": [
            "effect-menu-slide"
        ],
        "offCanvas": {
            "position": "bottom"
        },
        "navbar": {
            "title": ""
        }
    });

    //Если меню выезжает снизу, расчитываем размер шапки и выкатываем меню до неё
    $(".mm-menu.mm-offcanvas.mm-bottom").css('height', $(window).height() - $('.header-top').height());
    var api = $("#my-menu").data( "mmenu" );
    //   Hook into methods
    api.bind( "open:finish", function() {
        $("#menu-btn").addClass('is-active');
        $(".mm-menu.mm-offcanvas.mm-bottom").css('height', $(window).height() - $('.header-top').height());
    });
    api.bind( "close:finish", function( $panel ) {
        $("#menu-btn").removeClass('is-active');
    });

    $('.content-mainwin').css('padding-top', $('.head-line').height());
    $('#my-header').css('height', $('.menu-cont-slick').height());
    $( window ).resize(function() {
        $('#my-header').css('height', $('.menu-cont-slick').height());
    });
});
