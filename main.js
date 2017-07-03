$(function() {
  //variables
  var maxDesLen = 150;

  $('#home-btn').click(function() {
    $('#blog-btn').removeClass('active');
    $(this).addClass('active');
    window.location.href='/';
  });

  $('#blog-btn').click(function() {
    $('#home-btn').removeClass('active');
    $(this).addClass('active');
    window.location.href='/blog';
  });

  if (window.location.href.indexOf('/blog') > -1) {
      $('#home-btn').removeClass('active');
        $('#blog-btn').addClass('active');
  }

  function truncate() {
    $('.post-description').each(function() {
      $(this).text($(this).text().substr(0, maxDesLen) + '...');
    })
  }

  truncate();

});
