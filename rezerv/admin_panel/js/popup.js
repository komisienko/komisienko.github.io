jQuery(function($){	
$('.wrap_sea > .sea > a').click(function(){
		var $this = $(this),
			$pop =  $this.next('.pop_up_wrap'),
			$close = $pop.children('.close_sms');
		$this.parent().siblings().children('.pop_up_wrap').hide()
		$pop.show();
		$close.click(function(){
			$pop.hide();
		});
		return false;
	});
});