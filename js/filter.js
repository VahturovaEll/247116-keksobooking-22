const DEFAULT_VALUE = 'any';
const MIN_PRICE = 10000;
const MAX_PRICE = 50000;
const ADVERTS_COUNT = 10;

const filterForm = document.querySelector('.map__filters');
const typeFilter = filterForm.querySelector('#housing-type');
const priceFilter = filterForm.querySelector('#housing-price');
const roomsFilter = filterForm.querySelector('#housing-rooms');
const guestsFilter = filterForm.querySelector('#housing-guests');
const featuresFilter = filterForm.querySelector('#housing-features');

const checkType = (data) => {
  return typeFilter.value === data.offer.type || typeFilter.value === DEFAULT_VALUE;
};

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
};

const checkRooms = (data) => {
  return Number(roomsFilter.value) === data.offer.rooms || roomsFilter.value === DEFAULT_VALUE;
};

const checkGuests = (data) => {
  return  Number(guestsFilter.value) === data.offer.guests || guestsFilter.value === DEFAULT_VALUE;
};

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
};

const filterData = (data) => {
  return data.filter(checkAllFilters).slice(0, ADVERTS_COUNT);
};

export {checkAllFilters, filterData};
