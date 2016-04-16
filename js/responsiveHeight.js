function setProjectElementSize() {
  var blockHeight = $('#folio-image').height();
  blockHeight = blockHeight - parseInt( $('.folio-caption').css('paddingTop') );
  blockHeight = blockHeight - parseInt( $('.folio-caption').css('paddingBottom') );

  var blockWidth = $('#folio-image').width();
  blockWidth = blockWidth - parseInt( $('.folio-caption').css('paddingLeft') );
  blockWidth = blockWidth - parseInt( $('.folio-caption').css('paddingRight') );

  $('.folio-caption').height(blockHeight);
  $('.folio-caption').css('line-height', blockHeight+'px');
  $('.folio-caption').width(blockWidth);
};

$(window).load(function() {
  setProjectElementSize();
});

$(window).resize(function() {
  setProjectElementSize();
});
