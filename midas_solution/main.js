$(document).ready(function(){

    
    $('.board-menu').css('transform', 'translateX(105%)')
    $('.btn_menu').on('click', function(){
        $('.board-menu').css('transform', 'translateX(0)');
    });
    $('.board-menu_title_close').on('click', function(){
        $('.board-menu').css('transform', 'translateX(105%)')
    })
});