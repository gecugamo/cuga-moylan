(function IIFE($) {                                                             // IIFE to avoid global namespace pollution

    "use strict";                                                               // Enable strict mode

    $("form").on("submit", function(e) {
        var elements = this.elements;
        var valid = {};
        var isValid;
        var isFormValid;

        for (var i = 0, l = (elements.length - 1); i < l; i++) {
            isValid = validateRequired(elements[i]) && validateTypes(elements[i]);

            if (!isValid) {
                showErrorMessage(elements[i]);
            } else {
                removeErrorMessage(elements[i]);
            }

            valid[elements[i].id] = isValid;
        }

        for (var field in valid) {
            if (!valid[field]) {
                isFormValid = false;
                break;
            }
            isFormValid = true;
        }

        if (!isFormValid) {
            e.preventDefault();
        }
    });

    // Checks required fields
    function validateRequired(el) {
        if (isRequired(el)) {
            var valid = !isEmpty(el);
            if (!valid) {
                setErrorMessage(el, "Field is required");
            }
            return valid;
        }
        return true;
    }

    function isRequired(el) {
        return ((typeof el.required === "boolean") && el.required || (typeof el.required === "string"));
    }

    function isEmpty(el) {
        return !el.value || el.value === el.placeholder;
    }

    // Checks fields for correct type
    function validateTypes(el) {
        if (!el.value) {
            return true;
        }

        var type = $(el).data("type") || el.getAttribute("type");
        if (typeof validateType[type] === "function") {
            return validateType[type](el);
        } else {
            return true;
        }
    }

    var validateType = {
        email: function(el) {
            var valid = /[^@]+@[^@]/.test(el.value);
            if (!valid) {
                setErrorMessage(el, "Please enter a valid email address");
            }
            return valid;
        },
        number: function(el) {
            var valid = !isNaN(parseFloat(el.value)) && isFinite(el.value);
            if (!valid) {
                setErrorMessage(el, "Please enter a number");
            }
            return valid;
        }
    };

    // Error messages
    function setErrorMessage(el, message) {
        $(el).data("errorMessage", message);
    }

    function showErrorMessage(el) {
        var $el = $(el);
        var $errorContainer = $el.siblings(".error");

        if (!$errorContainer.length) {
            $errorContainer = $("<span class=\"error\"></span>").insertAfter($el);
            $errorContainer.text($el.data("errorMessage"));
        }
    }

    function removeErrorMessage(el) {
        var $el = $(el);
        var $errorContainer = $el.siblings(".error");

        if ($errorContainer.length) {
            $errorContainer.detach();
        }
    }
})(jQuery);
