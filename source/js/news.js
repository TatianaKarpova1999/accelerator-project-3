import Swiper from 'swiper';
import {Navigation, Pagination, Grid} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';

new Swiper('.swiper-news', {
  modules: [Navigation, Pagination, Grid],
  loop: false,

  pagination: {
    el: '.swiper-pagination-news',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${ className }">${ index + 1 }</span>`;
    },
  },

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
      grid: {
        rows: 2,
        fill: 'row',
      },
    },

    768: {
      allowTouchMove: true,
      slidesPerView: 2,
      slidesPerGroup: 1,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 30,
    },

    1440: {
      allowTouchMove: false,
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 28,
    },
  }
});
