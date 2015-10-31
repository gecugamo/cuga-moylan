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

})(jQuery);
