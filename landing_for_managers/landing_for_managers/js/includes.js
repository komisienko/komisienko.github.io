"use strict";
$(document).ready(function () {
    $('.sidenav').sidenav({
       
    });
          
$('#nav-mobile').on("click", "a", function(){
     let instance = M.Sidenav.getInstance('.sidenav');
     $('.sidenav').sidenav('close');
     event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-54}, 700);
})
});

$('#nav-desctop').on('click',"a", function (event) {
    $(this).parent().find('a').parent().removeClass('active');
    $(this).parent().addClass('active');
    
});
$(window).on('scroll', function () {
    $('.target').each(function () {
        if ($(window).scrollTop() >= $(this).position().top-120) {
            var id = $(this).attr('id');
            $('#nav-desctop a').parent().removeClass('active');
            $('#nav-desctop a[href="#' + id + '"]').parent().addClass('active');
        }
    });
});