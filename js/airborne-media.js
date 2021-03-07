(function($) {
	"use strict";
	// Start of use strict
	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top - 50)
		}, 1250, 'easeInOutExpo');
		event.preventDefault();
	});
	// Highlight the top nav as scrolling occurs
	$('body').scrollspy({
		target: '.navbar-fixed-top',
		offset: 51
	});
	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
		$('.navbar-toggle:visible').click();
	});
	// Offset for Main Navigation
	$('#mainNav').affix({
		offset: {
			top: 100
		}
	})
	// Initialize and Configure Scroll Reveal Animation
	window.sr = ScrollReveal();
	sr.reveal('.sr-icons', {
		duration: 600,
		scale: 0.3,
		distance: '0px'
	}, 200);
	sr.reveal('.sr-button', {
		duration: 1000,
		delay: 200
	});
	sr.reveal('.sr-contact', {
		duration: 600,
		scale: 0.3,
		distance: '0px'
	}, 300);
	$(document).ready(function() {
		$(".player").mb_YTPlayer();
	});
	// Back to Top
	$(document).ready(function() {
		$(window).scroll(function() {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function() {
			$('#back-to-top').tooltip('hide');
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		$('#back-to-top').tooltip('show');
	});
})(jQuery);
// End of use strict
