(function($) {
  var $window = $(window);
  var $document = $(document);
	var $nav = $('.nav');
  var $footer = $('.footer');

	function fixNav() {
    var windowHeight = $window.height();
    var documentHeight = $document.height();
    var navHeight = $nav.outerHeight();
		var footerHeight = $footer.outerHeight();
    var windowScrollBottom = $window.scrollTop() + windowHeight;
    var fixedPoint = documentHeight - footerHeight;

		if (windowScrollBottom > fixedPoint) {
			$nav.addClass('nav--absolute');
		} else {
			$nav.removeClass('nav--absolute');
		}
	}

  fixNav();
	$window.on('scroll', $.debounce(25, fixNav));
})(jQuery);
