const swiper = new Swiper('.swiper-hero', {


  // Optional parameters
  direction: 'horizontal',
  loop: true,
  allowTouchMove: true,
  //effect: 'fade',

  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    type: "bullets",
    clickeable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  //crollbar: {
    //el: '.swiper-scrollbar',
  //},
});


//------------------------------------------
