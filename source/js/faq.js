const list = document.querySelector('.faq__list');
const item = list.querySelectorAll('.faq__item');


item.forEach((element) => {
  element.addEventListener('click', (evt) => {
    const button = element.querySelector('.faq__button');

    if (evt.target.className === 'faq__item faq__item--current' || evt.target.parentNode.className === 'faq__item faq__item--current') {
      element.classList.remove('faq__item--current');
      button.classList.remove('faq__button--current');
    } else {
      element.classList.add('faq__item--current');
      button.classList.add('faq__button--current');
    }

    if (button.attributes.disabled) {
      element.classList.remove('faq__item--current');
      button.classList.remove('faq__button--current');
    }
  });
});

