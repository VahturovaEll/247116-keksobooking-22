import {removeMapMarkers} from './map.js';

const DEFAULT_VALUE = 'any';
const MIN_PRICE = 10000;
const MAX_PRICE = 50000;

const formFilter = document.querySelector('.map__filters');//
const typeFilter = formFilter.querySelector('#housing-type');
const priceFilter = formFilter.querySelector('#housing-price');
const roomsFilter = formFilter.querySelector('#housing-rooms');
const guestsFilter = formFilter.querySelector('#housing-guests');
const featuresFilter = formFilter.querySelector('#housing-features');

const checkType = (data) => {
  return typeFilter.value === data.offer.type || typeFilter.value === DEFAULT_VALUE;
}

const checkPrice = (data) => {
  switch (priceFilter.value) {
    case 'low':
      return data.offer.price < MIN_PRICE;
    case 'middle':
      return data.offer.price >= MIN_PRICE && data.offer.price <= MAX_PRICE;
    case 'high':
      return data.offer.price > MAX_PRICE;
    case 'any':
      return true;
  }
}

const checkRooms = (data) => {
  return Number(roomsFilter.value) === data.offer.rooms || roomsFilter.value === DEFAULT_VALUE;
}

const checkGuests = (data) => {
  return  Number(guestsFilter.value) === data.offer.guests || guestsFilter.value === DEFAULT_VALUE;
}

const checkFeatures = (data) => {
  const checkedFeatures = featuresFilter.querySelectorAll('input:checked');

  if (checkedFeatures.length === 0) {
    return true;
  }

  for (let feature of checkedFeatures) {
    if (!data.offer.features.includes(feature.value)) {
      return false;
    }
  }

  return true;
};

const checkAllFilters = (data) => {
  return checkType(data) && checkPrice(data) && checkRooms(data) && checkGuests(data) && checkFeatures(data);
}

const changeFilters = (cb) => {
  formFilter.addEventListener('change', ()=> {
    removeMapMarkers();
    cb();
  });
}

export {checkAllFilters, changeFilters}
