import {showSuccessModal, showErrorModal} from './popup.js';
import {sendData} from './server.js';
import {resetMap} from './map.js';
import {resetPictures} from './picture.js';

const minPriceOfType = {
  bungalow: '0',
  flat: '1000',
  house: '5000',
  palace: '10000',
};
const roomsToGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const filterForm = document.querySelector('.map__filters');
const adForm = document.querySelector('.ad-form');
const typeForm = adForm.querySelector('#type');
const priceForm = adForm.querySelector('#price');
const titleForm = adForm.querySelector('#title');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const buttonReset = adForm.querySelector('.ad-form__reset');

const onPriceChange = () => {
  priceForm.placeholder = minPriceOfType[typeForm.value];
  priceForm.min = minPriceOfType[typeForm.value];
};

const onTitleValueInvalid = () => {
  if (titleForm.validity.valueMissing) {
    titleForm.setCustomValidity('Обязательное поле для заполнения!');
  } else {
    titleForm.setCustomValidity('');
  }
};

const onTitleValueInput = () => {
  const title = titleForm.value;
  if (titleForm.validity.tooShort) {
    titleForm.setCustomValidity(`Ещё ${titleForm.minLength - title.length} симв.`);
  } else if (titleForm.validity.tooLong) {
    titleForm.setCustomValidity(`Лишних ${title.length - titleForm.maxLength} симв.`);
  } else if (titleForm.validity.valueMissing) {
    titleForm.setCustomValidity('Обязательное поле для заполнения!');
  } else {
    titleForm.setCustomValidity('');
  }
  titleForm.reportValidity();
};

const onPriceValueInput = (evt) => {
  const target = evt.target;
  if (target.validity.rangeUnderflow) {
    priceForm.setCustomValidity(`Цена не ниже ${target.min}`);
  } else if (target.validity.rangeOverflow) {
    priceForm.setCustomValidity(`Цена не больше ${target.max}`);
  } else if (target.validity.valueMissing) {
    priceForm.setCustomValidity('Обязательное поле для заполнения!');
  } else {
    priceForm.setCustomValidity('');
  }
  priceForm.reportValidity();
};

const onTimeInChange = (evt) => {
  timeOut.value = evt.target.value;
};

const onTimeOutChange = (evt) => {
  timeIn.value = evt.target.value;
};

const onRoomsChange = () => {
  const capacityOptions = capacity.options;
  for (let capacityOption of capacityOptions) {
    capacityOption.disabled = !roomsToGuests[roomNumber.value].includes(capacityOption.value);
    capacityOption.selected = !capacityOption.disabled;
  }
};

onRoomsChange();

titleForm.addEventListener('invalid', onTitleValueInvalid);
titleForm.addEventListener('input', onTitleValueInput);
typeForm.addEventListener('change', onPriceChange);
priceForm.addEventListener('input', onPriceValueInput);
timeIn.addEventListener('change', onTimeInChange);
timeOut.addEventListener('change', onTimeOutChange);
roomNumber.addEventListener('change', onRoomsChange);

const onResetForm = () => {
  adForm.reset();
  filterForm.reset();
  resetMap();
  resetPictures();
  const pricePlaceholder = '0';
  priceForm.placeholder = pricePlaceholder;
};

const handleFormSubmit = () => {
  showSuccessModal();
  onResetForm();
};

const handleFormFail = () => {
  showErrorModal();
  onResetForm();
};

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  sendData(handleFormSubmit, handleFormFail, formData);
});

const changeFilters = (cb) => {
  filterForm.addEventListener('change', () => {
    cb();
  });
};

const resetAllForms = (cb) => {
  buttonReset.addEventListener('click', (evt) => {
    evt.preventDefault();
    onResetForm();
    cb();
  });
};

export {changeFilters, resetAllForms};
