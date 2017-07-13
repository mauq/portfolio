$(function() {

  if (window.location.href.indexOf('/blog') > -1) {
      $('#btn-home div').removeClass('active');
      $('#btn-blog div').addClass('active');
  }
});
