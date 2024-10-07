const footerList = document.querySelector('.footer__list');
const about = document.querySelector('.about');


footerList.addEventListener('click', (evt) => {
  evt.preventDefault();

  if (evt.target.innerHTML === 'О проекте') {
    about.scrollIntoView({behavior: 'smooth'});
  }
});
