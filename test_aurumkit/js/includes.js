   $(document).ready(function () {
       $('#mobile_menu').sidenav({
         closeOnClick: true,
//           draggable: true,
//           edge: "left"
       });
       
	
			$('#fullpage').fullpage({
				slidesNavigation: true,
				parallax: true,
                                parallaxKey: 'YWx2YXJvdHJpZ28uY29tXzlNZGNHRnlZV3hzWVhnPTFyRQ==',
				parallaxOptions: {
					type: 'reveal',
					percentage: 62,
					property: 'translate'
				},
                                menu:'#header',
                                navigation: true,
				navigationPosition: 'right',
				scrollingSpeed: 1000,
				autoScrolling: true,
//				scrollBar: hasScrollBar,
				fitToSection:false
                              
                                
                              
			});
		});
