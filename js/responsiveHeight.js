function setProjectElementSize() {
  var blockHeight = $('#project-image').height();
  blockHeight = blockHeight - parseInt( $('.project-caption').css('paddingTop') );
  blockHeight = blockHeight - parseInt( $('.project-caption').css('paddingBottom') );

  var blockWidth = $('#project-image').width();
  blockWidth = blockWidth - parseInt( $('.project-caption').css('paddingLeft') );
  blockWidth = blockWidth - parseInt( $('.project-caption').css('paddingRight') );

  $('.project-caption').height(blockHeight);
  $('.project-caption').css('line-height', blockHeight+'px');
  $('.project-caption').width(blockWidth);
};

$(window).load(function() {
  setProjectElementSize();
});

$(window).resize(function() {
  setProjectElementSize();
});
