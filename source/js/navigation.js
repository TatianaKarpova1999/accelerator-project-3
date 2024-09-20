const menu = document.querySelector('.header__nav');
const button = document.querySelector('.header__toggle');
const body = document.querySelector('.page-body');

function menuInteractive () {
  if (menu.className === 'header__nav header__nav--open') {
    menu.classList.remove('header__nav--open');
    button.classList.remove('header__toggle--open');
    menu.classList.add('header__nav--close');
    button.classList.add('header__toggle--close');
    body.classList.remove('page-body--overlay');
  } else {
    menu.classList.remove('header__nav--close');
    button.classList.remove('header__toggle--close');
    menu.classList.add('header__nav--open');
    button.classList.add('header__toggle--open');
    body.classList.add('page-body--overlay');
  }
}

menu.addEventListener('click', menuInteractive);

