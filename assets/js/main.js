(function IIFE($) {                                                             // IIFE to avoid global namespace pollution

'use strict';                                                                   // Enable strict mode

    function addFormClass() {
        this.classList.add('filled');                                           // Add filled class
    }

    function checkFormValue() {
        if (!this.value) {                                                      // If the element does not have a value
            this.classList.remove('filled');                                    // Remove filled class
        }
    }

    function loopFormEls(formObj) {                                             // Not using delegated events because focus and blur cannot be delegated
        for (var i = 0; i < formObj.len; i++) {                                 // Loop through elements
            formObj.controlEls[i].addEventListener('focus', addFormClass);      // On focus, call addFormClass
            formObj.controlEls[i].addEventListener('blur', checkFormValue);     // On blur, call checkFormValue
        };
    }

    function Form(formId) {                                                     // Form object constructor
        this.formEl = document.getElementById(formId);                          // Form element
        this.controlEls = this.formEl.elements;                                 // Form control elements
        this.len = this.controlEls.length;                                      // Number of form control elements
    }

    var contactForm = new Form('contact-form');                                 // Create form object

    loopFormEls(contactForm);                                                   // Call form function

    
    // Project modal
    $('body').on('click', '.project', function(e) {
            e.preventDefault();

            var $this = $(this);
            var $target = $($this.attr('href'));
            var modalContent = $target.html();

            $('.modal__overlay').append(modalContent).show();
    });

    $('body').on('click', '.modal__close', function(e) {
        e.preventDefault();
    
        $('.modal__overlay').empty().hide();
    });

    // Close modal on esc or space
    $(document).on('keyup', function(e) {
            if (e.keyCode == 27 || e.keyCode == 32) {
                $('.modal__overlay').empty().hide();
            }
    });

    $('.layout-scroll').on('click', function(e) {
        e.preventDefault();

        $('body').animate({
            scrollTop: $('.header').height() + 'px'
        }, 300);
    });


    function checkEmail(val) {
        var regEx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return regEx.test(val);
    }

})(jQuery);
