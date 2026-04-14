$(document).ready(function () {
  $('.item').slice(0, 9).show();
  $('#loadMore').on('click', function (e) {
    e.preventDefault();
    $('.item:hidden').slice(0, 3).slideDown();
    if ($('.item:hidden').length == 0) {
      $('#loadMore').text('No Content').addClass('noContent');
    }
  });
});
