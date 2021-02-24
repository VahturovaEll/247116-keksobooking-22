const mapFilter = document.querySelector('.map__filters');
const mapFilterBlocks = mapFilter.children;
const form = document.querySelector('.ad-form');
const formBlocks = form.children;
const typeForm = form.querySelector('#type');
const price = form.querySelector('#price');
const address = form.querySelector('#address');

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
    address.setAttribute('readonly', 'readonly');
  }
};

setState(true);

const onPriceValue = (evt) => {
  const typeValue = evt.target.value;
  if (typeValue === 'bungalow') {
    price.setAttribute('min', 0);
    price.setAttribute('placeholder', 0);
  } else if (typeValue === 'flat') {
    price.setAttribute('min', 1000);
    price.setAttribute('placeholder', 1000);
  } else if (typeValue === 'house') {
    price.setAttribute('min', 5000);
    price.setAttribute('placeholder', 5000);
  } else if (typeValue === 'palace') {
    price.setAttribute('min', 10000);
    price.setAttribute('placeholder', 10000);
  }
}

typeForm.addEventListener('change', onPriceValue);

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const onTimeOut = (evt) => {
  const timeInValue = evt.target.value;
  if (timeInValue === '12:00') {
    timeOut.value = '12:00';
  } else if (timeInValue === '13:00') {
    timeOut.value = '13:00';
  } else if (timeInValue === '14:00') {
    timeOut.value = '14:00';
  }
}

timeIn.addEventListener('change', onTimeOut);

const onTimeIn = (evt) => {
  const timeOutValue = evt.target.value;
  if (timeOutValue === '12:00') {
    timeIn.value = '12:00';
  } else if (timeOutValue === '13:00') {
    timeIn.value = '13:00';
  } else if (timeOutValue === '14:00') {
    timeIn.value = '14:00';
  }
}

timeOut.addEventListener('change', onTimeIn);

export {setState};
