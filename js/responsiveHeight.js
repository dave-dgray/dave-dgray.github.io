function setHomeElementHeights() {
  var splitHeight = $('#home-image').height()/2;

  $('.what-we-do').height(splitHeight);
  $('.what-we-do').css('line-height', splitHeight+'px');

  $('.showcase-project').height(splitHeight);
  $('.showcase-project').css('line-height', splitHeight+'px');

};

$('#home-image').load(function() {
  setHomeElementHeights();
});

$(window).resize(function() {
  setHomeElementHeights();
});

