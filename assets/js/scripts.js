jQuery(function($) {
    $('.toggle_title').click(function() {
        $(this).toggleClass('selected');
        $(this).next().slideToggle();
    });
});
 


$(document).ready(function(){
    $(".experiance_carousel").owlCarousel({
        loop:true, 
        nav:true,
        dots:false,
        navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
        items:1 
    });
    $(".client_reviews").owlCarousel({
        loop:true, 
        nav:false,
        dots:false, 
        margin: 20,
        items:3,
        responsive : { 
            0 : { 
                items:1,
            }, 
            576 : { 
                items:1,
            }, 
            768 : { 
                items:3,
            }
        }
    });

    $(document).on('click','.mobile_bars', function(){
        $('.mobile_menu').slideToggle();
    })
});
  