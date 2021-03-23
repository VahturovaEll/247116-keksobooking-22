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

const checkType = (data, type, value) => {
  if (value === DEFAULT_VALUE) {
    return true;
  }

  return data.offer[type].toString() === (value || DEFAULT_VALUE);
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

const checkFeatures = (data) => {
  const checkedFeatures = featuresFilter.querySelectorAll('input:checked');

  return Array.from(checkedFeatures).every((feature) => {
    return  data.offer.features.includes(feature.value);
  });
};

const checkAllFilters = (data) => {
  const isTypeCheck = checkType(data, 'type', typeFilter.value);
  const isPriceCheck = checkPrice(data);
  const isRoomsCheck = checkType(data, 'rooms', roomsFilter.value);
  const isGuestsCheck = checkType(data, 'guests', guestsFilter.value);
  const isFeaturesCheck = checkFeatures(data);

  return isTypeCheck && isPriceCheck && isRoomsCheck  &&  isGuestsCheck && isFeaturesCheck;
};

const filterData = (data) => {
  return data.filter(checkAllFilters).slice(0, ADVERTS_COUNT);
};

export {checkAllFilters, filterData};
