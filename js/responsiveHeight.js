function setPickerElementSizes() {
  var blockHeight = $('#pickerImage').height();
  blockHeight = blockHeight - parseInt( $('.picker-caption').css('paddingTop') );
  blockHeight = blockHeight - parseInt( $('.picker-caption').css('paddingBottom') );

  var blockWidth = $('#pickerImage').width();
  blockWidth = blockWidth - parseInt( $('.picker-caption').css('paddingLeft') );
  blockWidth = blockWidth - parseInt( $('.picker-caption').css('paddingRight') );

  $('.picker-caption').height(blockHeight);
  $('.picker-caption').css('line-height', blockHeight+'px');

  $('.picker-crop-height').height(blockHeight);
  $('.picker-crop-width').width(blockWidth);
};

function setWindowElementSizes() {
  var blockHeight = window.innerHeight;
  $('.window-caption').height(blockHeight);
  $('.window-caption').css('line-height', blockHeight+'px');
};

$(window).load(function() {
  setPickerElementSizes();
  setWindowElementSizes();
});

$(window).resize(function() {
  setPickerElementSizes();
  setWindowElementSizes();
});
