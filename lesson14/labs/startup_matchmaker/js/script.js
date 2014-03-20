$(".push-button").click(function () {

	if ($(this).hasClass("opened")) {
		//close the menu
	$(".nav-item").css("display", "none");
	$(this).removeClass("opened");

	} else {
	//close the menu
	//$(".nav-item").css("display", "block");

	$(".nav-item").slideDown();
	$(this).addClass("opened");
}
});