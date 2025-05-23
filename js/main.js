$(function(){
  $('#page-top a').click(function(e){
    e.preventDefalt();
    var position = 0;
    var speed = 500;
    $('html,body').animate({
      scrollTop: position,
    },speed,'swing');
    return false;
  });
});