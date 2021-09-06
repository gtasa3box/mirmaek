console.log('global');

//nav-dropbox

$(document).ready(function () {
    $(".drop-1").hover(
  function () {
     $('.dropbox-1').slideDown('medium');
  }, 
  function () {
     $('.dropbox-1').slideUp('medium');
  }
  
);
});

$(document).ready(function () {
    $(".drop-2").hover(
  function () {
     $('.dropbox-2').slideDown('medium');
  }, 
  function () {
     $('.dropbox-2').slideUp('medium');
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
