(function IIFE($) {                                                             // IIFE to avoid global namespace pollution

    'use strict';                                                               // Enable strict mode

    $('[data-scroll]').on('click', function(e) {                                // Pass the id of the desination as the value of the href attribute
        e.preventDefault();

        var $target = $($(this).attr('data-scroll'));
        var destination = $target.offset().top;

        $('html, body').animate({
            scrollTop: destination + 'px'
        }, 300);
    });

})(jQuery);
