(function($) {                                                                   // IIFE to avoid global namespace pollution

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




    function setDataWidth(className) {
        var els, len;                                                           // Define variables
        els = document.getElementsByClassName(className);                       // Elements with class of skill-level
        len = els.length;                                                       // Number of elements

        for (var i = 0 ; i < len; i++) {                                        // Loop through elements
            els[i].style.width = els[i].dataset.width + '%';                    // Set width from data-attribute value
        };
    }

    function getElementOffset(el) {                                             // Inspired by http://javascript.info/tutorial/coordinates
        var coords, body, docEl, scrollTop, clientTop, top;                     // Declare variables
        coords = el.getBoundingClientRect()                                     // Position relative to the window
        body = document.body;                                                   // Body element
        docEl = document.documentElement;                                     // Document element
        scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;  // Vertical scroll position
        clientTop = docEl.clientTop || body.clientTop || 0;                   // Client top coordinate
        top  = coords.top +  scrollTop - clientTop;                             // Top coordinate of element

        return {                                                                // Object with top coordinate and vertical scroll position
            top: Math.round(top),
            scrollTop: scrollTop
        }
    }

    function executeSetWidth(el, offset) {
        var el, coords, executed;                                               // Declare variables
        el = document.querySelector(el);                                        // Element whose coordinates we are looking for
        coords = getElementOffset(el);                                          // Object with element's top position and window's vertical scroll position

        if (coords.scrollTop > coords.top - offset) {
            setDataWidth('skill-level');                                        // Call setDataWidth function
        }
    }

    window.addEventListener('scroll', function() {                              // Scroll function
        setTimeout(function() {                                                 // Use setTimeout to increase time between function calls
            executeSetWidth('#about', 275);                                     // Call function after scrolling to element with about as id attribute (minus offset)
        }, 250);
    }, false);

    function checkEmail(val) {
        var regEx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return regEx.test(val);
    }

    var form = form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        var form, name, email, phone;
        name = document.getElementById('contact-name');
        email = document.getElementById('contact-email');
        phone = document.getElementById('contact-phone');

        if (name.val == '') {
            e.preventDefault();
        }
    }, false);

})(jQuery);
