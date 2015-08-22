'use strict';

function getDataWidth() {
    var els = document.getElementsByClassName('strength-level');
    var len = els.length;
    for (var i = 0 ; i < len; i++) {
        els[i].style.width = els[i].dataset.width + '%';
    };
}

function addFormClass() {
    this.classList.add('filled')
}

function checkFormValue() {
    if (!this.value) {
        this.classList.remove('filled');
    }
}

function loopFormEls() {
    var els = document.querySelectorAll('input, textarea');
    var len = els.length;
    for (var i = 0; i < len; i++) {
        els[i].addEventListener('focus', addFormClass);
        els[i].addEventListener('blur', checkFormValue);
    };
}

(function() {
    var form, elements, requiredElements, emailInput, pattern, len;              // Declare variables
    form = document.forms.contact;
    requiredElements = document.getElementsByClassName('required');
    emailInput = form.elements.email;
    pattern = /[^@]+@[^@]+/;
    len = form.elements.length;

    form.noValidate = true;                                             // Turn off HTML5 validation

    form.addEventListener('submit', checkFormValue);

    function checkFormValue(e) {
        for (var i = 0; i < len; i++) {                                 // Check required inputs for a value
            if (!requiredElements[i].value) {
                e.preventDefault();
                requiredElements[i].classList.add('error');
            } else {
                requiredElements[i].classList.remove('error');
            }
        }
        if (!pattern.test(emailInput.value)) {
            e.preventDefault();
            emailInput.classList.add('error');                           // Check email pattern
        } else {
            emailInput.classList.remove('error');
        }

    }
}());

document.addEventListener('DOMContentLoaded', function() {
    getDataWidth();
    loopFormEls();
});
