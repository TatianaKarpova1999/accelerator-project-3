import Swiper from 'swiper';
import {Navigation, Pagination, Grid} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';

const pagination = document.querySelector('.swiper-pagination-news');
const bullet = pagination.querySelectorAll('span');

new Swiper('.swiper-news', {
  modules: [Navigation, Pagination, Grid],
  loop: false,

  pagination: {
    el: '.swiper-pagination-news',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">${index + 1}</span>`;
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
      spaceBetween: 32,
    },
  },
});

for (let i = 0; i <= 3; i++) {
  pagination.children[i].classList.add('swiper-pagination-bullet-main');
}

pagination.addEventListener('click', (evt) => {
  if (evt.target.nextSibling !== null && evt.target.previousElementSibling !== null) {
    if (evt.target.nextSibling.className === 'swiper-pagination-bullet') {
      evt.target.nextSibling.classList.add('swiper-pagination-bullet-main');
      pagination.children[evt.target.innerHTML - 4].classList.remove('swiper-pagination-bullet-main');
    } else if (evt.target.previousElementSibling.className === 'swiper-pagination-bullet') {
      evt.target.previousElementSibling.classList.add('swiper-pagination-bullet-main');
      pagination.children[parseInt(evt.target.innerHTML, 10) + 2].classList.remove('swiper-pagination-bullet-main');
    }
  }
});
