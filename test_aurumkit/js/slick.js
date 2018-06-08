$(document).ready(function(){


    $('.slider').slick({
       autoplay: true,
       autoplaySpeed: 5000,
       arrows: false,
       dots: false,
       pauseOnHover: false
    });

    $('.slider3').slick({
        
        arrows: true,
        infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3       
      
    });



    $('.slider4').slick({        
        arrows: false,
        infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4       
      
    });

  });