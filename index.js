$(document).ready(function () { 

  $('.hamburger').click(
      function () {
          //show its submenu
          $(".menu").stop().slideToggle(500);    
      }
  );
  
  });