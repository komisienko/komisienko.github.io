$(document).ready(function($) {
	//плиточки1
	$('#portfolio_grid').mixItUp();
	//портфолио
	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});	
	//popup окно
	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});

	//навигация по ид
	$("a[href*='#']").mPageScroll2id();

	//aнимация

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");
	$(".section_header").animated("fadeInUp", "fadeOutDown");
	//слева текст обомне
	$(".animation_1").animated("swing", "fadeOutDown");
	$(".animation_2").animated("fadeInLeft", "fadeOutDown");
	$(".animation_3").animated("fadeInRight", "fadeOutDown");
	//resume
	$(".left .resume_item").animated("slideInUp", "slideInDown");
	$(".right .resume_item").animated("slideInUp", "slideInDown");
	//предзагрузка задержка
	$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

}); 
	//Нахождение высоты
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	// Вращение лого
	jQuery("svg").rotate({ bind:  { 
	   	mouseover : function() { 
	    		jQuery(this).rotate({animateTo:180})},
	  					mouseout : function() { 
							jQuery(this).rotate({animateTo:0})}} 
	});
	//Бургер
		$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	//Валидатор

	$("input, select, textarea").jqBootstrapValidation();

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

	});