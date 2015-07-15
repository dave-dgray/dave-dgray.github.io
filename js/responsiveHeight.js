function setHomeElementSize() {
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

function setContactElementSize() {
  var blockHeight = $('#contact-image').height();
  blockHeight = blockHeight - parseInt( $('.contact-block').css('paddingTop') );
  blockHeight = blockHeight - parseInt( $('.contact-block').css('paddingBottom') );

  $('.contact-block').height(blockHeight);
  $('.contact-block').css('line-height', blockHeight+'px');
};

function setServiceElementSize() {
  var blockHeight = $('#service-image').height();
  blockHeight = blockHeight - parseInt( $('.service-block').css('paddingTop') );
  blockHeight = blockHeight - parseInt( $('.service-block').css('paddingBottom') );

  var blockWidth = $('#service-image').width();
  blockWidth = blockWidth - parseInt( $('.service-block').css('paddingLeft') );
  blockWidth = blockWidth - parseInt( $('.service-block').css('paddingRight') );

  $('.service-block').height(blockHeight);
  $('.service-block').css('line-height', blockHeight+'px');
  $('.service-block').width(blockWidth);
};

$('#home-image').load(function() {
  setHomeElementSize();
});

$('#contact-image').load(function() {
  setContactElementSize();
});

$('#service-image').load(function() {
  setServiceElementSize();
});

$(window).resize(function() {
  setHomeElementSize();
  setContactElementSize();
  setServiceElementSize();
});

