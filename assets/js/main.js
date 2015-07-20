(function($) {
  'use strict';

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

    $('.strength-level').each(function(){
        var $this = $(this);
        var width = $this.data('width');
        $this.css('width', width + '%');
    });

}(jQuery));