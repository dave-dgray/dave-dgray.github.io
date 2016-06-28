function setSummaryElementSize() {
  var blockHeight = $('#summary-image').height();
  blockHeight = blockHeight - parseInt( $('.summary-caption').css('paddingTop') );
  blockHeight = blockHeight - parseInt( $('.summary-caption').css('paddingBottom') );

  var blockWidth = $('#summary-image').width();
  blockWidth = blockWidth - parseInt( $('.summary-caption').css('paddingLeft') );
  blockWidth = blockWidth - parseInt( $('.summary-caption').css('paddingRight') );

  $('.summary-caption').height(blockHeight);
  $('.summary-caption').css('line-height', blockHeight+'px');
  $('.summary-caption').width(blockWidth);
};

function setFolioElementSize() {
  var blockHeight = $('#coverImage').height();
  blockHeight = blockHeight - parseInt( $('.folio-caption').css('paddingTop') );
  blockHeight = blockHeight - parseInt( $('.folio-caption').css('paddingBottom') );

  var blockWidth = $('#coverImage').width();
  blockWidth = blockWidth - parseInt( $('.folio-caption').css('paddingLeft') );
  blockWidth = blockWidth - parseInt( $('.folio-caption').css('paddingRight') );

  $('.folio-caption').height(blockHeight);
  $('.folio-caption').css('line-height', blockHeight+'px');
  $('.folio-caption').width(blockWidth);
};

$(window).load(function() {
  setSummaryElementSize();
  setFolioElementSize();
});

$(window).resize(function() {
  setSummaryElementSize();
  setFolioElementSize();
});
