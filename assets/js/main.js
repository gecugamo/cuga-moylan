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

// var form = document.getElementById('contact-form');
// form.noValidate = true;
// form.addEventListener('submit', function(e) {
//     var els = form.elements;
//     var len = els.length;
//     for (var i = 0; i < len; i++) {
//         if (!els[i].value && els[i].required) {
//             els[i].classList.add('error');
//             e.preventDefault();
//         }
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    getDataWidth();
    loopFormEls();
});
