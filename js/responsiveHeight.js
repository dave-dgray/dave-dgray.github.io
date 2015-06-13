function setHomeElementHeights() {
  $('.what-we-do').height($('#home-image').height()/2);
};

$('#home-image').load(function() {
  setHomeElementHeights();
});

$(window).resize(function() {
  setHomeElementHeights();
});

