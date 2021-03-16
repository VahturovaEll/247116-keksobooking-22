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
    onClosePopup();
  }
};

const showSuccessModal = () => {
  successPopup.addEventListener('click', onClosePopup);

  document.addEventListener('keydown', onPopupEscKeydown);
  main.appendChild(successPopup);
};

const showErrorModal = (message) => {
  errorPopup.querySelector('.error__message').textContent = message;

  closeErrorButton.addEventListener('click', onClosePopup);
  errorPopup.addEventListener('click', onClosePopup);

  document.addEventListener('keydown', onPopupEscKeydown);

  main.appendChild(errorPopup);
};

const onClosePopup = () => {
  if (main.contains(successPopup)) {
    main.removeChild(successPopup)
  }

  if (main.contains(errorPopup)) {
    main.removeChild(errorPopup)
  }

  document.removeEventListener('keydown', onPopupEscKeydown);
};

export {showSuccessModal, showErrorModal};
