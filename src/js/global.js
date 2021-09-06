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
