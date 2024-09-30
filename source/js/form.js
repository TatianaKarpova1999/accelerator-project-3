const form = document.querySelector('.form__content');
const formInput = form.querySelectorAll('.form__input');
const submitButton = document.querySelector('.form__button');
const formModal = document.querySelector('.form--modal');
const formInputModal = formModal.querySelectorAll('.form__input');
const submitButtonModal = formModal.querySelector('.form__button');

window.addEventListener('DOMContentLoaded', () => {
  [].forEach.call(document.querySelectorAll('.form__input--tel'), (input) => {
    let keyCode;
    function mask(event) {
      keyCode = event.keyCode;
      const pos = this.selectionStart;
      if (pos < 3) {
        event.preventDefault();
      }
      const matrix = '+7 (___) ___ ____';
      let i = 0;
      const def = matrix.replace(/\D/g, '');
      const val = this.value.replace(/\D/g, '');
      let newValue = matrix.replace(/[_\d]/g, (a) => i < val.length ? val.charAt(i++) || def.charAt(i) : a);
      i = newValue.indexOf('_');
      if (i !== -1) {
        newValue = newValue.slice(0, i);
      }
      let reg = matrix.substr(0, this.value.length).replace(/_+/g,
        (a) => `\\d{1,${ a.length }}`).replace(/[+()]/g, '\\$&');
      reg = new RegExp(`^${ reg}$`);
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = newValue;
      }
      if (event.type === 'blur' && this.value.length < 5) {
        this.value = '';
      }
    }

    input.addEventListener('input', mask, false);
    input.addEventListener('focus', mask, false);
    input.addEventListener('blur', mask, false);
    input.addEventListener('keydown', mask, false);
  });
});


submitButton.addEventListener('click', () => {
  formInput.forEach ((input) => {
    if(!input.checkValidity()) {
      input.classList.add('form__input--error');
    } else {
      input.classList.remove('form__input--error');
    }
  });
});

submitButtonModal.addEventListener('click', () => {
  formInputModal.forEach ((input) => {
    if(!input.checkValidity()) {
      input.classList.add('form__input--error');
    } else {
      input.classList.remove('form__input--error');
    }
  });
});

formInput.forEach ((input) => {
  input.addEventListener('input', () => {
    if (input.value.length > 0) {
      input.classList.remove('form__input--error');
    }
  });
});

formInputModal.forEach ((input) => {
  input.addEventListener('input', () => {
    if (input.value.length > 0) {
      input.classList.remove('form__input--error');
    }
  });
});
