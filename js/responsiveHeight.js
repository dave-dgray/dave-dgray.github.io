$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.what-we-do').css('height', windowHeight/2);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});