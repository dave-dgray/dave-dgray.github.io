function setHomeElementHeights() {
  var blockHeight = $('#home-image').height();
  blockHeight = blockHeight - parseInt( $('.what-block').css('paddingTop') );
  blockHeight = blockHeight - parseInt( $('.what-block').css('paddingBottom') );
  blockHeight = blockHeight - parseInt( $('.what-block').css('marginBottom') );
  blockHeight = blockHeight - parseInt( $('.showcase-block').css('paddingTop') );
  blockHeight = blockHeight - parseInt( $('.showcase-block').css('paddingBottom') );
  blockHeight = blockHeight/2;

  $('.what-block').height(blockHeight);
  $('.what-block').css('line-height', blockHeight+'px');

  $('.showcase-block').height(blockHeight);
  $('.showcase-block').css('line-height', blockHeight+'px');
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

