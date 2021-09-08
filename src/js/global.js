console.log('global');

//nav-dropbox

$(document).ready(function () {
    $(".drop-1").hover(
  function () {
     $('.dropbox-1').stop(true, false).slideDown('medium');
  }, 
  function () {
     $('.dropbox-1').stop(true, false).slideUp('medium');
  }
  
);
});

$(document).ready(function () {
    $(".drop-2").hover(
  function () {
     $('.dropbox-2').stop(true, false).slideDown('medium');
  }, 
  function () {
     $('.dropbox-2').stop(true, false).slideUp('medium');
  }
);
});


//end-nav-dropbox

//slider-textile 

$('.textile__slider').slick({
   dots: true,
   infinite: false,
   speed: 300,
   slidesToShow: 4,
   slidesToScroll: 1,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
   ]
 });
 //end-slider-textile

 //slider-examples

 $('.examples__slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//end-slider-examples

//slider-product

$('.slider-product__slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//end-slider-product

//button-top

$(document).ready(function() { 
  var button = $('#button-up');	
  $(window).scroll (function () {
    if ($(this).scrollTop () > 300) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
});	 
button.on('click', function(){
$('body, html').animate({
scrollTop: 0
}, 800);
return false;
});		 
});

//end-button-top

//video

$(function(){
  $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });

  $(window).resize(function(){
    $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
  });
});

//video-end

//discount button

$('.button-discount__img').on('click', function(){
  $('.button-discount__img').toggleClass('active');
});

$('.drop-3').on("click",function(){
  $(this).find(".dropbox-3").toggle();
});

//discount button-end
