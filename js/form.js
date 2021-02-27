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
const mapFilter = document.querySelector('.map__filters');
const mapFilterBlocks = mapFilter.children;
const form = document.querySelector('.ad-form');
const formBlocks = form.children;
const typeForm = form.querySelector('#type');
const priceForm = form.querySelector('#price');
const addressForm = form.querySelector('#address');
const titleForm = form.querySelector('#title');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
//const roomNumber = form.querySelector('#room_number');
//const capacity = form.querySelector('#capacity');

const setDisabled = (elements) => {
  for (let element of elements) {
    element.disabled = true;
  }
}

const setEnabled = (elements) => {
  for (let element of elements) {
    element.disabled = false;
  }
}

const setState = (disabled = true) => {
  if (disabled) {
    mapFilter.classList.add('map__filters--disabled');
    setDisabled(mapFilterBlocks);
    form.classList.add('ad-form--disabled');
    setDisabled(formBlocks);
  } else {
    mapFilter.classList.remove('map__filters--disabled');
    setEnabled(mapFilterBlocks);
    form.classList.remove('ad-form--disabled');
    setEnabled(formBlocks);
    addressForm.setAttribute('readonly', 'readonly');
  }
};

setState();

const onPriceChange = () => {
  priceForm.placeholder = minPriceOfType[typeForm.value];
  priceForm.min = minPriceOfType[typeForm.value];
}

const onTitleChange = () => {
  const title = titleForm.value.length;

  if (title < titleLength.min) {
    titleForm.setCustomValidity(`Ещё ${titleLength.min - title} симв.`);
  } else if (title > titleLength.max) {
    titleForm.setCusttomValidity(`Лишних ${title - titleLength.max} симв.`);
  } else {
    titleForm.setCustomValidity('');
  }
  titleForm.reportValidity();
}

const updateAddress = (addressForm, coordinates) => {
  const lat = coordinates.lat.toFixed(5);
  const lng = coordinates.lng.toFixed(5);
  addressForm.value = `${lat} ${lng}`;
}

const onPriceValue = (evt) => {
  const priceValue = evt.target.validity;
  if (priceValue.rangeUnderflow) {
    evt.target.setCustomValidity(`Цена не ниже ${evt.target.min}`);
  } else if (priceValue
    .rangeOverflow) {
    evt.target.setCustomValidity(`Цена не больше ${evt.target.max}`);
  } else {
    evt.target.setCustomValidity('');
  }
  evt.target.reportValidity();
}

const onTimeInChange = (evt) => {
  timeOut.value = evt.target.value;
}

const onTimeOutChange = (evt) => {
  timeIn.value = evt.target.value;
}

//const roomNumber = form.querySelector('#room_number');
//const capacity = form.querySelector('#capacity');

titleForm.addEventListener('input', onTitleChange);
typeForm.addEventListener('change', onPriceChange);
priceForm.addEventListener('input', onPriceValue);
timeIn.addEventListener('change', onTimeInChange);
timeOut.addEventListener('change', onTimeOutChange);

export {setState, updateAddress, addressForm};
