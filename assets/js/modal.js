(function IIFE($) {                                                             // IIFE to avoid global namespace pollution

    'use strict';                                                               // Enable strict mode// Project modal

    $('body').on('click', '.project', function(e) {
            e.preventDefault();
            modal.open($(this));
    });

    $('body').on('click', '.modal__close, .modal__overlay', function(e) {
        e.preventDefault();
        modal.close();
    });

    // Close modal on esc or space
    $(document).on('keyup', function(e) {
        if (e.keyCode == 27 || e.keyCode == 32) {
            modal.close();
        }
    });

    var modal = {
        open: function($this) {
            $.get('ajax/' + $this.attr('href') + '.php', function( data ) {
                $('.modal__overlay').append( data ).show();
            });
        },
        close: function() {
            $('.modal__overlay').hide().empty();
        }
    };

})(jQuery);
