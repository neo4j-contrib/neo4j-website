$(function() {
  $('.browse').toggle( function(){
    $('.main-header').css({ border: 0 });
    $(this).addClass('curtain-open');
    $('.browse-menu').slideDown();
    },
    function(){
      $('.browse-menu').slideUp( 'normal', function(){
        $('.main-header').css({ borderBottom: '5px solid #777' });
      });
      $(this).removeClass('curtain-open');
    }
  );
});

$(document).ready(function() {
  /* Take the control of hidden elements with jQuery */
  $('.hidden, .hidden-if-js').removeClass('hidden hidden-if-js').hide();

});
