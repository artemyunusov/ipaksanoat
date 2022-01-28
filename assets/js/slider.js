$('.post-slider').slick({
  // centerMode: true,
  centerPadding: '0',
  slidesToShow: 3,
  slidesToScroll: 1,
	dots: true,
	arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        // centerMode: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});