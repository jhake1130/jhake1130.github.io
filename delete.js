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
    x.classList.toggle("responsive")
}


function darktheme() {
  var x = document.getElementById("bodydark");
  var y = document.querySelectorAll(".thumbnail");
  for(var i=0; i <y.length; i++) {
    y[i].classList.toggle("responsive")
  }
    x.classList.toggle("responsive")

}

