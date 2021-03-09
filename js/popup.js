import {isEscEvent} from './utils.js';

const ALERT_SHOW_TIME = 5000;

const main = document.querySelector('main');
const successTemplate = document.querySelector('#success').content;
const successPopup = successTemplate.querySelector('.success');
const errorTemplate = document.querySelector('#error').content;
const errorPopup = errorTemplate.querySelector('.error');

const showSuccessModal = () => {
  const message = successPopup.cloneNode(true);
  main.append(message);
  message.style.zIndex = 1000;

  const onDocumentEscKeydownInSuccess = () => {
    if (isEscEvent) {
      onDocumentClickInSuccess();
    }
  };

  const onDocumentClickInSuccess = () => {
    message.remove();
    document.removeEventListener('click', onDocumentClickInSuccess);
    document.removeEventListener('keydown', onDocumentEscKeydownInSuccess);
  };

  document.addEventListener('click', onDocumentClickInSuccess);
  document.addEventListener('keydown', onDocumentEscKeydownInSuccess);
};

const showErrorModal = () => {
  const message = errorPopup.cloneNode(true);
  main.append(message);
  message.style.zIndex = 1000;

  const onDocumentEscKeydownInError = () => {
    if (isEscEvent) {
      onDocumentClickInError();
    }
  };

  const onDocumentClickInError = () => {
    message.remove();
    document.removeEventListener('click', onDocumentClickInError);
    document.removeEventListener('keydown', onDocumentEscKeydownInError);
  };

  document.addEventListener('click', onDocumentClickInError);
  document.addEventListener('keydown', onDocumentEscKeydownInError);
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

export {showSuccessModal, showErrorModal, showAlert};
