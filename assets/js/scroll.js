(function IIFE($) {                                                             // IIFE to avoid global namespace pollution

    'use strict';                                                               // Enable strict mode

    $('.layout__scroll').on('click', function(e) {                                // Pass the id of the desination as the value of the href attribute
        e.preventDefault();

        var $target = $($(this).attr('href'));
        var $destination = $target.offset().top;

        $('body').animate({
            scrollTop: $destination + 'px'
        }, 300);
    });

})(jQuery);
