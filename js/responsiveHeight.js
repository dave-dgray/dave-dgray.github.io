function setCoverElementSize() {
  var blockHeight = $('#pickerImage').height();
  blockHeight = blockHeight - parseInt( $('.picker-caption').css('paddingTop') );
  blockHeight = blockHeight - parseInt( $('.picker-caption').css('paddingBottom') );

  var blockWidth = $('#pickerImage').width();
  blockWidth = blockWidth - parseInt( $('.picker-caption').css('paddingLeft') );
  blockWidth = blockWidth - parseInt( $('.picker-caption').css('paddingRight') );

  $('.picker-caption').height(blockHeight);
  $('.picker-caption').css('line-height', blockHeight+'px');
  $('.picker-caption').width(blockWidth);
};

function setGalleryElementSize() {
  // use window height minus the height of the header
  var blockHeight = window.innerHeight;

  $('.gallery-caption').height(blockHeight);
  $('.gallery-caption').css('line-height', blockHeight+'px');
  // $('.gallery-caption').css('span').css('line-height', blockHeight+'px');

};

$(window).load(function() {
  setCoverElementSize();
  setGalleryElementSize();
});

$(window).resize(function() {
  setCoverElementSize();
  setGalleryElementSize();
});
