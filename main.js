$(function() {
  function home() {
    window.location.href='/';
    $('#blog').removeClass('active');
    $(this).addClass('active');
    console.log('home');
  }

  function blog() {
    window.location.href='/blog';
    $('#home').removeClass('active');
    $(this).addClass('active');
    console.log('blog');
  }

  $('#home').onclick = home;
  $('#blog').onclick = blog;

});
