// let lastScrollTop = 0;
// let scrollTimeout;
// let header = document.querySelector('.header');
// let logo_l = document.querySelector('.header-l-img');
// let logo_s = document.querySelector('.header-s-img');
// let br = document.querySelector('.burger');
// let brIcon = document.querySelectorAll('.burger-icon-item');

// // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
// // window.addEventListener("scroll", , false);

// 	window.addEventListener('scroll', function(){
// 		clearTimeout(scrollTimeout);
// 		scrollTimeout = setTimeout(onScroll, 100);
// 	}, false);

//   function onScroll(){ // or window.addEventListener("scroll"....
//     let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//     if (st > lastScrollTop){
//        // downscroll code
//        if(header){
//          header.classList.add('scroll-d');
//          logo_l.style.display = "none";
//          logo_s.style.display = "block";
//          logo_s.style.height = "40px";
//          logo_s.style.width = "auto";
//          br.style.top = "20px";
//          brIcon.forEach(el => {
//            el.style.backgroundColor = "#4ec354";
//          })
//        }
//       //  console.log("scroll dwn");
//     } else {
//        // upscroll code
//          header.classList.remove('scroll-d');
//          logo_s.style.display = "none";
//          logo_l.style.display = "block";
//          logo_l.style.height = "50px";
//          logo_l.style.width = "auto";
//          br.style.top = "30px";
//          brIcon.forEach(el => {
//            el.style.backgroundColor = "#ffffff";
//          })
//       //  console.log("scrll up");
//     }
//     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
//   }