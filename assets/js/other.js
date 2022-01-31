

$(function(){

  $('.people-show span').on('click', function(e){
    e.preventDefault();

    let answer = $(this).next();

    answer.slideToggle();
  });

});
