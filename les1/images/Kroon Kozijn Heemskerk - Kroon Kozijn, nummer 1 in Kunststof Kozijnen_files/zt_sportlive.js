
jQuery(document).ready(function($){
    // $(function(){
    //   var $ppc = $('.progress-pie-chart'),
    //     percent = parseInt($ppc.data('percent')),
    //     deg = 360*percent/100;
    //   if (percent > 50) {
    //     $ppc.addClass('gt-50');
    //   }
    //   $('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
      
    // });

    $('.progress-pie-chart').each(function(){
        var $ppc = $(this);
        percent = parseInt($ppc.data('percent')),
        deg = 360*percent/100;
          if (percent > 50) {
            $ppc.addClass('gt-50');
          }
          $(this).find('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
    })
    

    jQuery('#zo2-position-38 .search-icon').click(function(){
          jQuery('.search .search-inner').fadeIn('300');
          jQuery('#zo2-position-38 .search .search-inner .inputbox').focus().css("color","#fff");

    });
    jQuery('#zo2-position-38 .search-close').click(function(){
          jQuery('.search .search-inner').fadeOut('300');
    });

    jQuery('.zt-the-club-features .panel-heading').eq(0).addClass('active');
    jQuery('.zt-the-club-features .panel-heading').click(function(){
        if(jQuery(this).hasClass('active')){
            jQuery(this).removeClass('active');
        }
        else{
            jQuery('.zt-the-club-features .panel-heading').removeClass('active');
            jQuery(this).toggleClass('active');
        }
    });

    jQuery('#myCarousel').carousel() ;
    jQuery('#myCarousel').bind('slide', function(e){ //This event is fired when the carousel has completed its slide transition.
        var index = jQuery('#myCarousel .item').index(jQuery('#myCarousel .carousel-inner .active')); // find the index of current slide
        jQuery('.carousel-indicators .active').removeClass('active'); // reset the navigation
        jQuery('.carousel-nav').eq(index).addClass('active'); // update the navigation
    });
    jQuery('.carousel-nav').bind('click', function(e){
        jQuery('.carousel-indicators .active').removeClass('active'); // reset the navigation
        var index = jQuery('.carousel-nav').index(this); // find the clicked slide navigation
        jQuery('#myCarousel').carousel(index); // navigate to the selected slider
        jQuery(this).addClass('active'); // mark selected to the clicked navigation
    });



    jQuery("#gototop").click(function(){
        jQuery("body, html").animate({scrollTop: 0}); return false;
    });
    var scrollDiv = document.createElement("div");
            jQuery(window).scroll(function () {
                if (jQuery(this).scrollTop() != 0) {
                    jQuery("#gototop").fadeIn();
                } else {
                    jQuery("#gototop").fadeOut();
                }
            });

            jQuery('.mega_features').parent().addClass('featuresWrap');    

    jQuery('.faq_block .panel-heading').eq(0).addClass('active');
        jQuery('.faq_block .panel-heading').click(function(){
            if(jQuery(this).hasClass('active')){
                jQuery(this).removeClass('active');
            }
            else{
                jQuery('.faq_block .panel-heading').removeClass('active');
                jQuery(this).toggleClass('active');
            }
        });








}(jQuery));

jQuery(document).ready(function(){
    wow = new WOW({
          boxClass:     'wow',
          animateClass: 'animated',
          offset:       100
        });
     });   


