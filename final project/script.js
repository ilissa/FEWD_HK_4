$(document).ready(function () {
	
	$("#shop").on("mouseenter", '.tights', function(){
		$(this).find(".description").fadeIn();
		$(this).find('.button').show();
	});
	$("#shop > .tights").on("mouseleave", function(){
		if ($(this).find('.box').val() == 'one'){
			$(this).find(".description").fadeOut();
			$(this).find('.button').hide();
		}
	});
});