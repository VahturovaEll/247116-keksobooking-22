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
const form = document.querySelector('.ad-form');
const typeForm = form.querySelector('#type');
const priceForm = form.querySelector('#price');
const titleForm = form.querySelector('#title');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');

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

//не понимаю как реализовать
const onRoomsChange = () => {
  capacity.value = roomsToGuests[roomNumber.value];
}

titleForm.addEventListener('input', onTitleChange);
typeForm.addEventListener('change', onPriceChange);
priceForm.addEventListener('input', onPriceValue);
timeIn.addEventListener('change', onTimeInChange);
timeOut.addEventListener('change', onTimeOutChange);
roomNumber.addEventListener('change', onRoomsChange)
