import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

new Swiper('.swiper-programs', {
  modules: [Navigation],
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      allowTouchMove: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },

    768: {
      allowTouchMove: true,
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },

    1440: {
      allowTouchMove: false,
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 32,
    },
  }
});
