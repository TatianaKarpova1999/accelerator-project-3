const footerList = document.querySelector('.footer__list');
const grant = document.querySelector('.grant');


footerList.addEventListener('click', (evt) => {
  evt.preventDefault();

  if (evt.target.innerHTML === 'Как поехать') {
    grant.scrollIntoView({behavior: 'smooth'});
  }
});
