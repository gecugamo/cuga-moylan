'use strict';

function addFormClass() {
    this.classList.add('filled');                                               // Add filled class
}

function checkFormValue() {
    if (!this.value) {                                                          // If the element does not have a value
        this.classList.remove('filled');                                        // Remove filled class
    }
}


(function() {

    var form, els, len, activeClass;                                            // Declare variables
    form = document.forms.contact;                                              // Form element
    els = form.elements;                                                        // Form control elements
    len = els.length;                                                           // Number of form control elements
    activeClass = 'filled';

    for (var i = 0; i < len; i++) {                                             // Loop through elements
        els[i].addEventListener('focus', addFormClass);                         // On focus, call addFormClass
        els[i].addEventListener('blur', checkFormValue);                        // On blur, call checkFormValue
    };
}());

// (function() {
//     var form, els, requiredEls, email, pattern, len;                         // Declare variables
//     form = document.forms.contact;
//     requiredEls = document.getElementsByClassName('required');
//     email = form.els.email;
//     pattern = /[^@]+@[^@]+/;
//     len = form.els.length;
//
//     form.noValidate = true;                                             // Turn off HTML5 validation
//
//     form.addEventListener('submit', checkFormValue);
//
//     function checkFormValue(e) {
//         for (var i = 0; i < len; i++) {                                 // Check required inputs for a value
//             if (!requiredEls[i].value) {
//                 e.preventDefault();
//                 requiredEls[i].classList.add('error');
//             } else {
//                 requiredEls[i].classList.remove('error');
//             }
//         }
//         if (!pattern.test(email.value)) {
//             e.preventDefault();
//             email.classList.add('error');                           // Check email pattern
//         } else {
//             email.classList.remove('error');
//         }
//
//     }
// }());


function setDataWidth() {
    var els = document.getElementsByClassName('skill-level');           // Elements with class of skill-level
    var len = els.length;                                               // Number of elements

    for (var i = 0 ; i < len; i++) {                                    // Loop through elements
        els[i].style.width = els[i].dataset.width + '%';                // Set width from data-attribute value
    };
}

// Inspired by http://javascript.info/tutorial/coordinates
function getElementOffset(el) {
    var coords, body, docEl, scrollTop, clientTop, top;                             // Declare variables

    var coords = el.getBoundingClientRect()                                         // Position relative to the window

    var body = document.body;                                                       // Body element
    var docElem = document.documentElement;                                         // Document element

    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;      // Vertical scroll position

    var clientTop = docElem.clientTop || body.clientTop || 0;                       // Client top coordinate

    var top  = coords.top +  scrollTop - clientTop;                                 // Top coordinate of element

    return {                                                                        // Object with top coordinate and vertical scroll position
        top: Math.round(top),
        scrollTop: scrollTop
    }
}

function executeSetWidth(el) {
    var el, coords, executed;                                                       // Declare variables
    el = document.querySelector(el);                                                // Element whose coordinates we are looking for
    coords = getElementOffset(el);                                                     // Object with element's top position and window's vertical scroll position

    if (!executed && (coords.scrollTop > coords.top - 275)) {
        setDataWidth();                                                             // Call setDataWidth function
    }
}

window.addEventListener('scroll', function() {
    setTimeout(function() {
        executeSetWidth('.skill-level');
    }, 100);
}, false);
