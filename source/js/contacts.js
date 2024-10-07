const footerList = document.querySelector('.footer__list');
const contacts = document.querySelector('.contacts');


footerList.addEventListener('click', (evt) => {
  evt.preventDefault();

  if (evt.target.innerHTML === 'Контакты') {
    contacts.scrollIntoView({behavior: 'smooth'});
  }
});
