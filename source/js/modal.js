const aboutLink = document.querySelector('.about__link');
const modal = document.querySelector('.modal');
const body = document.querySelector('.page-body');
const toggle = document.querySelector('.form__toggle ');

aboutLink.addEventListener('click', () => {
  modal.classList.add('modal--open');
  modal.classList.remove('modal--close');
  body.classList.add('page-body--modal');
});

toggle.addEventListener('click', () => {
  modal.classList.remove('modal--open');
  modal.classList.add('modal--close');
  body.classList.remove('page-body--modal');
});

body.addEventListener('click', (evt) => {
  if (evt.target.className === 'page-body page-body--modal') {
    modal.classList.remove('modal--open');
    modal.classList.add('modal--close');
    body.classList.remove('page-body--modal');
  }
})
