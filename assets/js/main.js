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
    if (this.value.length == 0) {
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

document.addEventListener('DOMContentLoaded', function() {
    getDataWidth();
    loopFormEls();
});