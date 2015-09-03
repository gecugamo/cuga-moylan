(function() {                                                                   // IIFE to avoid global namespace pollution

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

}());

/*
 * - autoSmoothScroll -
 * Licence MIT
 * Written by Gabriel Delépine
 * Current version  1.2 (2014-02-13)
 * Previous version 1.0.1 (2013-11-08)
 * Previous version 1.0 (2013-10-27)
 * Requirement : No one, it is a framework-free fonction (ie : You do not need to include any other file in your page such as jQuery)
 * Fork-me in github :
 * */
(function(window, undefined) // Code in a function to create an isolate scope
{
    'use strict';
    var height_fixed_header = 0, // For layout with header with position:fixed. Write here the height of your header for your anchor don't be hiden behind
        speed = 500,
        moving_frequency = 15, // Affects performance ! High number makes scroll more smooth
        links = document.getElementsByTagName('a'),
        href;

    for(var i=0; i<links.length; i++)
    {
        href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
        if(href !== null && href.length > 1 && href.indexOf('#') != -1) // href.substr(0, 1) == '#'
        {
            links[i].onclick = function()
            {
                var element,
                    href = this.attributes.href.nodeValue.toString(),
                    url = href.substr(0, href.indexOf('#')),
                    id = href.substr(href.indexOf('#')+1);
                if(element = document.getElementById(id))
                {

                    var hop_count = (speed - (speed % moving_frequency)) / moving_frequency, // Always make an integer
                        getScrollTopDocumentAtBegin = getScrollTopDocument(),
                        gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

                    if(window.history && typeof window.history.pushState == 'function')
                        window.history.pushState({}, undefined, url+'#'+id);// Change URL for modern browser

                    for(var i = 1; i <= hop_count; i++)
                    {
                        (function()
                        {
                            var hop_top_position = gap*i;
                            setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency*i);
                        })();
                    }

                    return false;
                }
            };
        }
    }

    var getScrollTopElement =  function(e)
    {
        var top = height_fixed_header * -1;

        while (e.offsetParent != undefined && e.offsetParent != null)
        {
            top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
            e = e.offsetParent;
        }

        return top;
    };

    var getScrollTopDocument = function()
    {
        return document.documentElement.scrollTop !== undefined ? document.documentElement.scrollTop : document.body.scrollTop;
    };
})(window);
