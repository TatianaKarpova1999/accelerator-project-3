import Swiper from 'swiper';
import 'swiper/css';

new Swiper('.swiper-tabs', {
  loop: false,

  breakpoints: {
    320: {
      allowTouchMove: true,
      spaceBetween: 11,
      slidesPerView: 2,
      slidesPerGroup: 1,
    },

    768: {
      allowTouchMove: false,
      spaceBetween: 10,
    },
  }
});
