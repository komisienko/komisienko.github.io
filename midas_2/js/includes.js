
$(document).ready(function () {
    $('.sidenav').sidenav({
        draggable: false,
        
    });
    $('.modal').modal({
        onOpenStart: function(){
            if ($('.modal').hasClass('open')){
       $('body').addClass('disabled-onepage-scroll');
                 console.log('1');
        }else{
            
                 $('body').removeClass('disabled-onepage-scroll');
            $(this).disable();
            console.log('2');
        }
                    },

            onCloseStart: function(){
                      if ($('.modal').hasClass('open')){
       //$('body').addClass('disabled-onepage-scroll');
                 console.log('1');
                          $(this).enable();
        }else{
            
                 //$('body').removeClass('disabled-onepage-scroll');
            $(this).enable();
            console.log('2');
        }
            }
            
    });
          
$('#nav-mobile').on("click", "a", function(event){
     let instance = M.Sidenav.getInstance('.sidenav');
     $('.sidenav').sidenav('close');
     event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
});
});
///




//$('#nav-desctop').on('click',"a", function (event) {
//    //$(this).parent().find('a').parent().removeClass('active');
//   // $(this).parent().addClass('active');
//     event.preventDefault();
////        var id  = $(this).attr('href'),
////            top = $(id).offset().top;
////        $('body,html').animate({scrollTop: top}, 700);
//    
//    event.preventDefault();
//});

$('.card_solo_href, .button_href').on('click', function (event) {
     event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
   
    $('#user_name').focus();
});

//$(window).on('scroll', function () {
//    $('.target').each(function () {
//        if ($(window).scrollTop() >= $(this).position().top-150) {
//            var id = $(this).attr('id');
//            $('#nav-desctop a').parent().removeClass('active');
//            $('#nav-desctop a[href="#' + id + '"]').parent().addClass('active');
//        }
//    });
//});
$("#nav-desctop li:nth-child(1) a, .brand-logo").on('click', function(e){
     $('#nav-desctop li').removeClass('active');
    $(this).parent().addClass('active')
     e.preventDefault();
    $('.onepage-pagination li:nth-child(1) a').click();
})
$("#nav-desctop li:nth-child(2) a, .scrollTrigger1").on('click', function(e){
    $('#nav-desctop li').removeClass('active');
    $(this).parent().addClass('active')
     e.preventDefault();
    $('.onepage-pagination li:nth-child(2) a').click();
})
$("#nav-desctop li:nth-child(3) a, .scrollTrigger2").on('click', function(e){
     $('#nav-desctop li').removeClass('active');
    $(this).parent().addClass('active')
     e.preventDefault();
    $('.onepage-pagination li:nth-child(3) a').click();
});
$("#nav-desctop li:nth-child(4) a, .scrollTrigger3").on('click', function(e){
     $('#nav-desctop li').removeClass('active');
    $(this).parent().addClass('active')
     e.preventDefault();
    $('.onepage-pagination li:nth-child(4) a').click();
});
$("#nav-desctop li:nth-child(5) a, .scrollTrigger4").on('click', function(e){
     $('#nav-desctop li').removeClass('active');
    $(this).parent().addClass('active')
     e.preventDefault();
    $('.onepage-pagination li:nth-child(5) a').click();
});
if ($(window).width() > 992) {
$(".grid__item_get, .scrollTrigger_to_form").on('click', function(e){
     $('#nav-desctop li').removeClass('active');
    $(this).parent().addClass('active')
     e.preventDefault();
    $('.onepage-pagination li:nth-child(1) a').click();
    $('#fname').focus();
});
}else{
//    $(".grid__item_get, .scrollTrigger_to_form").on('click', function(e){
//        e.preventDefault();
//        $('html,body').animate({
//            scrollTop: 0
//        }, 700);
//        $('#fname').focus();
//    });
    
    $('.grid__item_get, .scrollTrigger_to_form').on('click', function (event) {
     event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
        $('#fname').focus();
});
}


   


if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        }
};
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

//$(document).ready(function () {
// $(window).on('scroll', function () {
//if($('body').hasClass('viewing-page-2')){
//    $('.nav-wrapper').hide();
//    console.log("1")
//   
//}else{
//    $('.nav-wrapper').show();
//     console.log("2")
//}
//});
//});
(function ( $ ) {
	'use strict';
   $.fn.heightFull = function() {
	var totalHeight = $('window').height();
	var heightMinus = totalHeight;
	$(this).css('height', heightMinus);
  };
}( jQuery ));

$(".main .item").heightFull();
$(window).resize(function() {
  $(".main .item").heightFull();
});

$(".main").onepage_scroll({
   sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
   //easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)", 
 easing: "cubic-bezier(0.175, 0.885, 0.420, 1.210)", 
    // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000, // AnimationTime let you define how long each section takes to animate
   pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {
        if ($(window).width() > 992) {
//             if($('body').hasClass('viewing-page-1')){
//                $('.nav-wrapper').fadeIn();
//                 console.log("2");
//            }else{
//                 $('.nav-wrapper').fadeOut();
//            console.log("1");
//            } 
            if($('.onepage-pagination li:nth-child(1) a').hasClass("active")){
                  $('#nav-desctop li').removeClass('active');
                $('#nav-desctop li:nth-child(1)').addClass('active')
            }
            
            if($('.onepage-pagination li:nth-child(2) a').hasClass("active")){
                  $('#nav-desctop li').removeClass('active');
                $('#nav-desctop li:nth-child(2)').addClass('active')
            } 
            if($('.onepage-pagination li:nth-child(5) a').hasClass("active")){
                  $('#nav-desctop li').removeClass('active');
                $('#nav-desctop li:nth-child(5)').addClass('active')
            } 
            if($('.onepage-pagination li:nth-child(4) a').hasClass("active")){
                  $('#nav-desctop li').removeClass('active');
                $('#nav-desctop li:nth-child(4)').addClass('active')
            }
            
            
            if($('.onepage-pagination li:nth-child(3) a').hasClass("active")){
                 $('#nav-desctop li').removeClass('active');
                $('#nav-desctop li:nth-child(3)').addClass('active')
                var thisFilter='invert(2)';
                var thisBg = 'rgba(0,0,0,1)';
                $('.nav-wrapper, .onepage-pagination').css('filter',thisFilter)
                                 .css('webkitFilter',thisFilter)
                                 .css('mozFilter',thisFilter)
                                 .css('oFilter',thisFilter)
                                 .css('msFilter',thisFilter)
                               
                $('.nav-wrapper').css('background-color', thisBg);
                
                
                  $('body').css('filter',nullFilter)
                                 .css('webkitFilter',nullFilter)
                                 .css('mozFilter',nullFilter)
                                 .css('oFilter',nullFilter)
                                 .css('msFilter',nullFilter);                  
            }else{
                var nullFilter='invert(0)'
                var nullBg='rgba(0,0,0,.2)'
                $('.nav-wrapper, .onepage-pagination').css('filter',nullFilter)
                                 .css('webkitFilter',nullFilter)
                                 .css('mozFilter',nullFilter)
                                 .css('oFilter',nullFilter)
                                 .css('msFilter',nullFilter);
                                 
                
                $('.nav-wrapper').css('background-color', nullBg );
                                    
                 
            }
        }
       
       

   }, // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {
    
   }, // This option accepts a callback function. The function will be called after the page moves.
   loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   responsiveFallback: 992 // You can fallback to normal page scroll by defining the width of the browser in which you want the responsive fallback to be triggered. For example, set this to 600 and whenever the browser's width is less than 600, the fallback will kick in.
    
});

