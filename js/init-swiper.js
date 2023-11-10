'use strict';
(function(){
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
  
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
})();

(function(){
  const swiperCustomers = new Swiper('.section-customers-says-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
  
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})();