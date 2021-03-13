import {removeMapMarkers} from './map.js';


const DEFAULT_TYPE_VALUE = 'any';

const formFilter = document.querySelector('.map__filters');//
const typeFilter = formFilter.querySelector('#housing-type');/*
const priceFilter = formFilter.querySelector('#housing-price');
const roomsFilter = formFilter.querySelector('#housing-rooms');
const guestsFilter = formFilter.querySelector('#housing-guests');
const featuresFilter = formFilter.querySelector('#housing-features');*/

const checkType = (data) => {
  return typeFilter.value === data.offer.type || typeFilter.value === DEFAULT_TYPE_VALUE;
}
/*
const checkPrice = () => {

}

const checkRooms = () => {

}

const checkGuests = () => {

}

const checkFeatures = () => {

}
*/
const checkAllFilters = (data) => {
  return checkType(data);
}


const changeFilters = (cb) => {
  formFilter.addEventListener('change', ()=> {
    removeMapMarkers();
    cb();
  });
}

export {checkAllFilters, changeFilters}
