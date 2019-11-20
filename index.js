$(document).ready(function () { 

  $('.hamburger').click(
      function () {
          //show its submenu
          $(".menu").stop().slideToggle(500);    
      }
  );
  
  });

$('.corner').on('click', function(event) {
    $('.projectContainer .image').toggleClass('show hide');
    $('.projectContainer .info').toggleClass('show hide');
  });