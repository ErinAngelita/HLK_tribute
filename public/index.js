$(window).load(function() {
  var InfiniteRotator = {
    init: function() {
      var initialFadeIn = 0;
      var itemInterval = 3000;
      var fadeTime = 2000;
      var numberOfItems = $('.rotating-item').length;
      var currentItem = 0;
      $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);
      var infiniteLoop = setInterval(function() {
        $('.rotating-item').eq(currentItem).fadeOut(fadeTime);
        if(currentItem == numberOfItems - 1) {
          currentItem = 0;
        } else {
          currentItem++;
        }
        $('.rotating-item').eq(currentItem).fadeIn(fadeTime);
      }, itemInterval);
    }
  };
  InfiniteRotator.init();
});

$(document).ready(function() {
  $("#flip").click(function() {
    $("#panel").slideToggle("slow");
  });
});
