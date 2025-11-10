const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button_active',
  },
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
});