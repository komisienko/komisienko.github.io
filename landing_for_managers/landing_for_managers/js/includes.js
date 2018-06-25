"use strict";
$(document).ready(function () {
    $('.sidenav').sidenav();
});

$('#nav-mobile').on('click', function (event) {
    $(this).parent().find('a').parent().removeClass('active');
    $(this).parent().addClass('active');
});
$(window).on('scroll', function () {
    $('.target').each(function () {
        if ($(window).scrollTop() >= $(this).position().top) {
            var id = $(this).attr('id');
            $('#nav-mobile a').parent().removeClass('active');
            $('#nav-mobile a[href="#' + id + '"]').parent().addClass('active');
        }
    });
});