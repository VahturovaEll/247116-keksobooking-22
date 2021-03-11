import {showSuccessModal, showErrorModal} from './popup.js';
import {sendData} from './server.js';
import {defaultMap} from './map.js';
import {resetPictures} from './picture.js';

const titleLength = {
  min: 30,
  max: 100,
};
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

const adForm = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');
const typeForm = adForm.querySelector('#type');
const priceForm = adForm.querySelector('#price');
const titleForm = adForm.querySelector('#title');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const adFormReset = adForm.querySelector('.ad-form__reset');

const onPriceChange = () => {
  priceForm.placeholder = minPriceOfType[typeForm.value];
  priceForm.min = minPriceOfType[typeForm.value];
}

const onTitleChange = () => {
  const title = titleForm.value;
  if (titleForm.validity.tooShort) {
    titleForm.setCustomValidity(`Ещё ${titleLength.min - title.length} симв.`);
  } else if (titleForm.validity.tooLong) {
    titleForm.setCustomValidity(`Лишних ${title.length - titleLength.max} симв.`);
  } else {
    titleForm.setCustomValidity('');
  }
  titleForm.reportValidity();
}

const onPriceValue = (evt) => {
  const target = evt.target;
  if (target.validity.rangeUnderflow) {
    priceForm.setCustomValidity(`Цена не ниже ${target.min}`);
  } else if (target.validity.rangeOverflow) {
    priceForm.setCustomValidity(`Цена не больше ${target.max}`);
  } else {
    priceForm.setCustomValidity('');
  }
  priceForm.reportValidity();
}

const onTimeInChange = (evt) => {
  timeOut.value = evt.target.value;
}

const onTimeOutChange = (evt) => {
  timeIn.value = evt.target.value;
}

const onRoomsChange = () => {
  const capacityOptions = capacity.options;
  for (let capacityOption of capacityOptions) {
    if (roomsToGuests[roomNumber.value].includes(capacityOption.value)) {
      capacityOption.selected = true;
      capacityOption.style.display = 'block';
    } else {
      capacityOption.style.display = 'none';
    }
  }
}

titleForm.addEventListener('input', onTitleChange);
typeForm.addEventListener('change', onPriceChange);
priceForm.addEventListener('input', onPriceValue);
timeIn.addEventListener('change', onTimeInChange);
timeOut.addEventListener('change', onTimeOutChange);
roomNumber.addEventListener('change', onRoomsChange);

const resetMap = () => {
  defaultMap();
};

const onResetForm = () => {
  mapFilter.reset();
  adForm.reset();
  resetMap();
  resetPictures();
}

const handleFormSubmit = () => {
  showSuccessModal();
  onResetForm();
}

const handleFormFail = () => {
  showErrorModal();
  onResetForm();
}

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  sendData(handleFormSubmit, handleFormFail, formData);
});

adFormReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  onResetForm();
});
