function setHomeElementSize() {
  var blockHeight = $(window).height();
  blockHeight = blockHeight/2;

  $('.index-style').height(blockHeight);
  $('.index-style').css('line-height', blockHeight+'px');
};

$(window).load(function() {
  setHomeElementSize();
});

$(window).resize(function() {
  setHomeElementSize();
});
