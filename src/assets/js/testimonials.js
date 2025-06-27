const swiper = new Swiper('.testimonios', {

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
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});