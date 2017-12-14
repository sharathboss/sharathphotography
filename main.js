(function ($) {
"use strict";

    $(window).on('scroll',function() {
        var scroll= $(window).scrolltop();
        if(scroll<10) {
        $("#sticky-header").removeclass("sticky");
    }else{
        $("#sticky-header").addclass("sticky");
    }
});


$('.slider-active').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

})(jQuery);