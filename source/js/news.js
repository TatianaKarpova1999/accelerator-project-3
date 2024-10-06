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
    type: 'bullets',
    dynamicBullets: true,
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

let i = 0;
let j = pagination.children.length;

pagination.addEventListener('click', (evt) => {
  // if (evt.target.innerHTML >= 4 && evt.target.nextElementSibling.className === 'swiper-pagination-bullet swiper-pagination-bullet-active-next') {
  //   pagination.children[i].style.opacity = '0';
  //   pagination.children[j - 1].style.opacity = '1';
  //   i++;
  //   console.log(evt.target.nextElementSibling.className);
  // } else if (evt.target.innerHTML <= 5 && evt.target.previousElementSibling.className === 'swiper-pagination-bullet swiper-pagination-bullet-active-prev') {
  //   pagination.children[j - 1].style.opacity = '0';
  //   pagination.children[evt.target.innerHTML - 2].style.opacity = '1';
  //   console.log(evt.target.innerHTML);
  //   j--;
  // }




  console.log(evt.target.innerHTML);
  for (i = 0; i < 8; i++)
  {
    console.log(pagination.children[i].className);
  }


});
