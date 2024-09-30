const menu = document.querySelector('.header__nav');
const button = document.querySelector('.header__toggle');
const list = document.querySelector('.header__list');
const body = document.querySelector('.page-body');
const menuLink = list.querySelectorAll('.header__link');


body.addEventListener('click', (evt) => {
  if (evt.target.className === 'header__nav header__nav--close' || evt.target.className === 'header__toggle header__toggle--close') {
    menu.classList.remove('header__nav--close');
    button.classList.remove('header__toggle--close');
    menu.classList.add('header__nav--open');
    button.classList.add('header__toggle--open');
    body.classList.add('page-body--overlay');
  } else if (evt.target !== list && evt.target.offsetParent !== list){
    menu.classList.remove('header__nav--open');
    button.classList.remove('header__toggle--open');
    menu.classList.add('header__nav--close');
    button.classList.add('header__toggle--close');
    body.classList.remove('page-body--overlay');
  }
});

menuLink.forEach((el) => {
  el.addEventListener ('click', (evt) => {
    if (evt.target.className === 'header__link header__link--programs' || evt.target.className === 'header__link header__link--news') {
      evt.target.nextElementSibling.classList.add('header__sublist--open');
      evt.target.classList.add('header__link--open');
    } else if (evt.target.className === 'header__link header__link--programs header__link--open' || evt.target.className === 'header__link header__link--news header__link--open') {
      evt.target.nextElementSibling.classList.remove('header__sublist--open');
      evt.target.classList.remove('header__link--open');
    }
  });
});

