	function heightDetect() {
		$(".main_head, #sec3").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$("header .brand-logo").animated("bounce", false); 
	$("header .header").animated("fadeInDown", false);
	$("header .sub_header").animated("fadeInUp", false);
	$("header .clds").animated("bounceInRight", false);

	//$("#nav-mobile li").animated("fadeInUp", false);
    //$("#nav-mobile li").animated("flipInX", false);
	$("#nav-mobile li").animated("lightSpeedIn", false);
	//$("#nav-mobile li").animated("rotateInDownLeft", false);
	//$("#nav-mobile li").animated("zoomInLeft", false);
    $(".bit__img-text").animated("bounceInRight", false);
    $(".bit__text-img").animated("bounceInLeft", false);
    $("#sec1 .headerSec").animated("lightSpeedIn", false);