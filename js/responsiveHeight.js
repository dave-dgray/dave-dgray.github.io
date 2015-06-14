function setHomeElementHeights() {

  var blockHeight = $('#home-image').height();
  blockHeight = blockHeight - parseInt( $('.what-we-do').css('marginBottom') );
  blockHeight = blockHeight/2;

  $('.what-we-do').height(blockHeight);
  $('.what-we-do').css('line-height', blockHeight+'px');

  $('.showcase-project').height(blockHeight);
  $('.showcase-project').css('line-height', blockHeight+'px');

};

$('#home-image').load(function() {
  setHomeElementHeights();
});

$(window).resize(function() {
  setHomeElementHeights();
});

