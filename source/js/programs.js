import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

const footerList = document.querySelector('.footer__list');
const programs = document.querySelector('.programs');


footerList.addEventListener('click', (evt) => {
  evt.preventDefault();

  if (evt.target.innerHTML === 'Программы') {
    programs.scrollIntoView({behavior: 'smooth'});
  }
});


new Swiper('.swiper-programs', {
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
