$(document).ready(function(){
	$('a[href="#search"]').on('click', function(event) {                    
		$('#ms-autocomplete').addClass('open');
		$('.ms-input-search-wrapper > input[type="search"]').focus();
	});            
	$('.ms-autocomplete, .ms-autocomplete button.close').on('click keyup', function(event) {
		if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
			$(this).removeClass('open');
		}
	});            
});