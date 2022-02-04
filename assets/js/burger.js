
$(".burger").click(function () {
  $(this).toggleClass('active');
  let headerHeight = $(".header-wrap").height();
  // $('.mask').toggleClass('active');
  $('.nav-mob').css("top", headerHeight);
  $("body").toggleClass("oh");
  $('.nav-mob').toggleClass('active');
  // $(document.body).toggleClass('oh');
});

let mask = document.querySelector('.mask');
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav-mob');
let menuFixed = document.querySelector('.nav-fixed');
let menu = document.querySelector('.nav');

// menuFixed.addEventListener('click', function(e){
//   let link = e.target;

//   if(link.classList.contains('nav-fixed-link')){
//     e.preventDefault();
//     scrollToTarget(link.hash);
//     if(mask.classList.contains('mob-active')){
//       mask.classList.remove('mob-active');
//       document.body.classList.remove('oh');
//       burger.classList.remove('burger-clicked');
//       nav.classList.remove('mob-active');
//     }
//   }
// })

// menu.addEventListener('click', function(e){
//   let link = e.target;
// 	console.log(link);

//   if(link.classList.contains('nav-link')){
//     e.preventDefault();
//     scrollToTarget(link.hash);
//   }
// })

// function scrollToTarget(id){
//   let target = document.querySelector(id);
//   let pos = target.offsetTop - 20;

//   window.scrollTo({
//     top: pos,
//     behavior: "smooth"
//   })
// }



$(function(){

  $('.prevent').on('click', function(e){
    e.preventDefault();

    let answer = $(this).next();

    answer.slideToggle();
  });

});



// modalClose.addEventListener('click', function(){
  
//   modal.classList.remove('modal-show');
//   mask.classList.remove('mob-active');

// })
