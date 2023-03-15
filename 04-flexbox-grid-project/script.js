$(document).ready(function() {
  $('#menu-btn').click(changeNav);

  function changeNav() {
    $('#links').toggle(2000);  // 2 seconds
    $('#menu-btn').toggleClass('turn')
  }
});