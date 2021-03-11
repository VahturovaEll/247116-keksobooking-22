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
    closePopup();
  }
};

const showSuccessModal = () => {
  document.addEventListener('keydown', onPopupEscKeydown);
  main.appendChild(successPopup);
}

const showErrorModal = () => {
  document.addEventListener('keydown', onPopupEscKeydown);
  main.appendChild(errorPopup);
}

const closePopup = () => {
  if (main.contains(successPopup)) {
    main.removeChild(successPopup)
  }

  if (main.contains(errorPopup)) {
    main.removeChild(errorPopup)
  }

  document.removeEventListener('keydown', onPopupEscKeydown);
}

main.addEventListener('click', closePopup);
closeErrorButton.addEventListener('click', closePopup);

export {showSuccessModal, showErrorModal};
