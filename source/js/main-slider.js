import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
import 'swiper/css';

new Swiper('.swiper-hero', {
  modules: [Pagination],
  loop: true,

  pagination: {
    el: '.swiper-pagination-hero',
  },

  breakpoints: {
    320: {
      allowTouchMove: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    768: {
      allowTouchMove: true,
    },

    1440: {
      pagination: {
        clickable: true,
      },
      allowTouchMove: false,
    }
  }
});
