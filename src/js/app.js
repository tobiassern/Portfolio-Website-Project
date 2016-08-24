// Wait for jQuery to be ready
jQuery(function($) {
	// Defining the different loadpoints in the portfolio-overlay, image, title, content
	var portfolio_overlay_image = $('#portfolio-overlay-image-wrap'); // Defining the area for the image in the portfolio modal
	var portfolio_overlay_title = $('#portfolio-overlay-title-wrap'); // Defining the area for the title in the portfolio modal
	var portfolio_overlay_content = $('#portfolio-overlay-desc-wrap'); // Defining the area for the description in the portfolio modal

	$('body').on('click', '.portfolio-view-more', function() {
		var portfolio_item = $(this).closest('.portfolio-item'); // defining what portfolio item to load from
		$.when(addPortfolioContent(portfolio_item)).then(loadPortfolioOverlay()); // wait until addPortfolioContent() is finished before loading modal
	});

	$('body').on('click', '.close-portfolio-overlay', function() {
		closePortfolioOverlay(); // closing when clicking on class
	});

	$(document).keyup(function(e) {
	    if (e.keyCode === 27) { // 27 is the escape key
			closePortfolioOverlay(); // closing the overlay on esc key
	    }
	});

	function addPortfolioContent(portfolio_item) {
		portfolio_overlay_image.empty();
		portfolio_overlay_title.empty();
		portfolio_overlay_content.empty();
		portfolio_item.find('img').clone().appendTo(portfolio_overlay_image); // Only picking the img from picture el to avoid low res image
		portfolio_item.find('h3').clone().appendTo(portfolio_overlay_title); // Fetching the title
		portfolio_item.find('p').clone().appendTo(portfolio_overlay_content); // Fetching the description
	}

	function loadPortfolioOverlay() {
		$('body').addClass('portfolio-item-loaded'); // Adding class to body to initalize loading of portfolio modal
	}

	function closePortfolioOverlay() {
		$('body').removeClass('portfolio-item-loaded'); // removing class from body to close portfolio overlay
	}
});