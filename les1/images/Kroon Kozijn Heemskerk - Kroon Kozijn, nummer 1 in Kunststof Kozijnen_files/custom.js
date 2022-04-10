/* Here you can include your additional Javascript code */
jQuery(document).ready(function ($) {
    /* Track mailto: links as GA event */
    $('a[href^=mailto]').on('click', function (e) {
        var href = $(this).attr('href');
        var address = href.substr(7, href.length);
        //ga('send', 'event', 'link', 'email', address);

        var event_action = 'email';
        var event_category = 'link';
        var event_label = address;
        gtag('event', event_action, { 'event_category': event_category, 'event_label': event_label, 'send_to': 'main' });
    });


    $('.informatieaanvraag .floating-button').on('click', function () {
        $('.informatieaanvraag.met-button .infoaanvraag .formwrapper').slideDown();
        $('#zo2-sidebar .informatieaanvraag').addClass('visible');
        $('.informatieaanvraag .floating-button').css('opacity', 0);

        var offset = $('#zo2-sidebar .informatieaanvraag').offset().top
        var headerheight = $('#zo2-kk-top-nav-wrap').height() + 110;
        var loc = offset - headerheight;
        $('html, body').animate({scrollTop: loc}, 1000);
    });


    if ($('#zo2-sidebar').children().length == 2) {
        var firstchild = $('#zo2-sidebar').children()[0];
        if ($(firstchild).hasClass('informatieaanvraag')) {

            $('.informatieaanvraag.met-button .infoaanvraag .formwrapper').css('display', 'block');
            $('#zo2-sidebar .informatieaanvraag').addClass('visible');
            $('.informatieaanvraag .floating-button').css('display', 'none');

        }
    }


    if ($('body.kroon-kozijn-dealers').length == 1 && $(window).width() > 767) {

        $(".dealerkaart").parent().css({'position': 'relative'});
        $(".dealerkaart").css({'position': 'relative'});

        $(window).scroll(function () {
            var map_height = 500;
            var max_offset = 600;
            var headerHeight = 167;
            var extra = 0;
            var topOffset = $(window).scrollTop() - $(".dealerkaart").parent().offset().top + headerHeight + extra;
            topOffset = Math.round(topOffset);

            var bodywrap_height = $('#zo2-body-wrap').height();
            max_offset = bodywrap_height - map_height - headerHeight + 50;

            if (topOffset < 0) {
                topOffset = 0;
            } else if (topOffset > max_offset) {
                topOffset = max_offset;
            }

            $(".dealerkaart").stop().animate({'top': topOffset + "px"}, "slow");
        });

    }


    /* Logo bleef raar plakken aan prex/next buttons van Owl slider.
     * Onderstaande lijkt het op te lossen.
     */
    if ($('.owl-buttons').length > 0) {
        var slide = $('#zo2-slideshow .slides').first().find('img');

        var image = new Image();
        image.src = slide.attr('src');

        image.onload = function () {
            $('.owl-buttons').each(function () {
                var e = $(this);
                e.css('display', 'block');
                e.stop().animate({'opacity': 1}, "slow");
            });
        }

        $('.owl-buttons').each(function () {
            var e = $(this);
            e.css('display', 'none');
            e.css('opacity', 0);
        });

        window.setTimeout(function () {

            $('.owl-buttons').each(function () {
                var e = $(this);
                e.css('display', 'block');
                e.stop().animate({'opacity': 1}, "slow");
            });


        }, 3000);
    }


    // Is mobiel & komt vanaf een KK pagina
    if (($('#zo2-mobile-sub-header').is(':visible')) && (document.referrer.split('/')[2] == 'www.kroonkozijn.nl')) {


        window.setTimeout(function () {
            var scrollto = 0;

             if(window.location.href.split('/')[3] == 'informatie') {
                // op informatiepagina naar het formulier scrollen
                scrollto = $('#zo2-mobile-sub-header').offset().top - $('#zo2-kk-top-nav-wrap').height();
            } else if(window.location.href.split('/')[3] != '') {
                // op overige pagina's (maar niet home) naar de inhoud onder menu en/of formulier scrollen
                scrollto = $('#zo2-mobile-sub-header').offset().top + $('#zo2-mobile-sub-header').height() - $('#zo2-kk-top-nav-wrap').height();
            }

            $(window).scrollTop(scrollto);
        }, 150);
    }
});