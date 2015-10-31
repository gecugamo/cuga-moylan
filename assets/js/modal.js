(function IIFE($) {                                                             // IIFE to avoid global namespace pollution

    "use strict";                                                               // Enable strict mode// Project modal

    $("body").on("click", ".project", function(e) {
            e.preventDefault();

            var $this = $(this);
            var $target = $($this.attr("href"));
            var modalContent = $target.html();

            $(".modal__overlay").append(modalContent).show();
    });

    $("body").on("click", ".modal__close", function(e) {
        e.preventDefault();

        $(".modal__overlay").empty().hide();
    });

    // Close modal on esc or space
    $(document).on("keyup", function(e) {
            if (e.keyCode == 27 || e.keyCode == 32) {
                $(".modal__overlay").empty().hide();
            }
    });

})(jQuery);
