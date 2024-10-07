import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

const footerList = document.querySelector('.footer__list');
const reviews = document.querySelector('.reviews');


footerList.addEventListener('click', (evt) => {
  evt.preventDefault();

  if (evt.target.innerHTML === 'Отзывы') {
    reviews.scrollIntoView({behavior: 'smooth'});
  }
});


new Swiper('.swiper-reviews', {
  modules: [Navigation, Pagination],
  loop: false,

  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
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
    },

    768: {
      allowTouchMove: true,
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 30,
    },

    1440: {
      allowTouchMove: false,
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 32,
    },
  }
});
