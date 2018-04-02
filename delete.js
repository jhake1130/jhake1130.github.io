$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.jumbotron');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.topnav').css('background-color', '#1b2631');
       } else {
          $('.topnav').css('background-color', 'transparent');
       }
   });
});