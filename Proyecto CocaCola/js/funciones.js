jQuery(document).ready(function(){
	//var enlace = jQuery(".hambur").attr("href");

	jQuery(".hambur").click(function(e){
		e.preventDefault();
		abrirmenu();
	});
	jQuery("header .container nav a").click(function(){
		var enlace = jQuery(this).attr("href");
		abrirmenu();
		jQuery("html,body").animate({
			"scrollTop" : jQuery(enlace).position().top
		}, 500)

	});


});


function abrirmenu(){

	jQuery("header").toggleClass("open")
	jQuery("header .container .hambur").toggleClass("open");
	jQuery("header .container nav").toggleClass("open");

}

