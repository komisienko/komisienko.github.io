"use strict";
$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.modal').modal();
          
$('#nav-mobile').on("click", "a", function(){
     let instance = M.Sidenav.getInstance('.sidenav');
     $('.sidenav').sidenav('close');
     event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
});
});

$('#nav-desctop').on('click',"a", function (event) {
    //$(this).parent().find('a').parent().removeClass('active');
   // $(this).parent().addClass('active');
     event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    event.preventDefault();
});
$('.card_solo_href, .button_href').on('click', function (event) {
     event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
   
    $('#user_name').focus();
});
$(window).on('scroll', function () {
    $('.target').each(function () {
        if ($(window).scrollTop() >= $(this).position().top-150) {
            var id = $(this).attr('id');
            $('#nav-desctop a').parent().removeClass('active');
            $('#nav-desctop a[href="#' + id + '"]').parent().addClass('active');
        }
    });
});