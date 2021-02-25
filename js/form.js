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

const setState = (disabled) => {
  if (disabled === true) {
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

setState(true);

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
/*
const onPriceValue = (evt) => {
  if (evt.target.value) {
    setCustomValidity(`Стоимость  не может быть меньше ${}`);
  } else if (evt.target.value) {
    setCusttomValidity(`Стоимость не может быть больше ${}`);
  } else {
    setCustomValidity('');
  }
  reportValidity();
}
*/

const onPriceChange = (evt) => {
  const typeValue = evt.target.value;
  if (typeValue === 'bungalow') {
    priceForm.setAttribute('min', `${minPriceOfType.bungalow}`);
    priceForm.setAttribute('placeholder', `${minPriceOfType.bungalow}`);
  } else if (typeValue === 'flat') {
    priceForm.setAttribute('min', `${minPriceOfType.flat}`);
    priceForm.setAttribute('placeholder', `${minPriceOfType.flat}`);
  } else if (typeValue === 'house') {
    priceForm.setAttribute('min', `${minPriceOfType.house}`);
    priceForm.setAttribute('placeholder', `${minPriceOfType.house}`);
  } else if (typeValue === 'palace') {
    priceForm.setAttribute('min', `${minPriceOfType.palace}`);
    priceForm.setAttribute('placeholder', `${minPriceOfType.palace}`);
  }
}

const onTimeChange = (evt) => {
  timeIn.value = evt.target.value;
  timeOut.value = evt.target.value;
}

titleForm.addEventListener('input', onTitleChange);
typeForm.addEventListener('change', onPriceChange);/*
priceForm.addEventListener('input', onPriceValue);*/
timeIn.addEventListener('change', onTimeChange);
timeOut.addEventListener('change', onTimeChange);

export {setState};
