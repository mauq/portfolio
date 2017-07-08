$(function() {
  //variables
  var maxDesLen = 150;

  $('#home-btn').click(function() {
    $('#blog-btn').removeClass('active');
    $(this).addClass('active');
    window.location.href='/portfolio';
  });

  $('#blog-btn').click(function() {
    $('#home-btn').removeClass('active');
    $(this).addClass('active');
    window.location.href='/portfolio/blog';
  });

  if (window.location.href.indexOf('/blog') > -1) {
      $('#home-btn').removeClass('active');
        $('#blog-btn').addClass('active');
  }

});
