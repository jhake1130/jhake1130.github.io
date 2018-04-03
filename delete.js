$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.starthere');
   var p2offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > p2offset.top) {
          $('.topnav').css('background-color', '#000');
       } else {
          $('.topnav').css('background-color', 'transparent');
       }
   });
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function darktheme() {
  var x = document.getElementById("bodydark");
   if (x.className === "classbody") {
        x.className += " responsive";
    } 
      else {
        x.className = "classbody";
    }

}
