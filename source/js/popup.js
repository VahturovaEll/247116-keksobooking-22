import {isEscEvent} from './utils.js';

const main = document.querySelector('main');
const successTemplate = document.querySelector('#success').content.cloneNode(true);
const successPopup = successTemplate.querySelector('.success');
const errorTemplate = document.querySelector('#error').content;
const errorPopup = errorTemplate.querySelector('.error').cloneNode(true);
const closeErrorButton = errorPopup.querySelector('.error__button');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    onPopupClose();
  }
};

const showSuccessModal = () => {
  successPopup.addEventListener('click', onPopupClose);

  document.addEventListener('keydown', onPopupEscKeydown);
  main.appendChild(successPopup);
};

const showErrorModal = () => {
  errorPopup.querySelector('.error__message').textContent = 'Ошибка загрузки данных';

  closeErrorButton.addEventListener('click', onPopupClose);
  errorPopup.addEventListener('click', onPopupClose);

  document.addEventListener('keydown', onPopupEscKeydown);

  main.appendChild(errorPopup);
};

const onPopupClose = () => {
  if (main.contains(successPopup)) {
    main.removeChild(successPopup)
  }

  if (main.contains(errorPopup)) {
    main.removeChild(errorPopup)
  }

  document.removeEventListener('keydown', onPopupEscKeydown);
};

export {showSuccessModal, showErrorModal};
