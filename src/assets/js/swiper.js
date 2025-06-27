const swiper = new Swiper('.swiper-hero', {

  direction: 'horizontal',
  loop: true,
  allowTouchMove: true,

  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    type: "bullets",
    clickeable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


//------------------------------------------
