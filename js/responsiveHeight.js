function setHomeElementHeights() {

  var blockHeight = $('#home-image').height();
  blockHeight = blockHeight - parseInt( $('.what-we-do').css('marginBottom') );
  blockHeight = blockHeight/2;

  $('.what-we-do').height(blockHeight);
  $('.what-we-do').css('line-height', blockHeight+'px');

  $('.showcase-project').height(blockHeight);
  $('.showcase-project').css('line-height', blockHeight+'px');
};

function setContactElementHeights() {
  var blockHeight = $('#contact-image').height();
  blockHeight = blockHeight - parseInt( $('.contact-block').css('paddingTop') );
  blockHeight = blockHeight - parseInt( $('.contact-block').css('paddingBottom') );

  $('.contact-block').height(blockHeight);
  $('.contact-block').css('line-height', blockHeight+'px');
};

$('#home-image').load(function() {
  setHomeElementHeights();
});

$('#contact-image').load(function() {
  setContactElementHeights();
});

$(window).resize(function() {
  setHomeElementHeights();
  setContactElementHeights();
});

