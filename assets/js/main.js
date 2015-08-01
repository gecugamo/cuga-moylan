(function($) {
  'use strict';

    // Smooth Scroll https://css-tricks.com/snippets/jquery/smooth-scrolling/
    function smoothScroll() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
                || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                       scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    }


    function getDataWidth() {
        $('.strength-level').each(function(){
            var $this = $(this);
            var width = $this.data('width');
            $this.css('width', width + '%');
        });
    }

    function formValueCheck() {
        $('input, textarea').on('focus', function() {
            $(this).addClass('filled');
        });

        $('input, textarea').on('focusout', function() {
            var $this = $(this);
            if (!$this.val()) {
                $this.removeClass('filled');
            }
        });
    }
    
    smoothScroll();
    getDataWidth();
    formValueCheck();
}(jQuery));