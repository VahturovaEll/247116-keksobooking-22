'use strict';

const ADVERT_COUNT = 10;
const locationMinX = 35.65000;
const locationMaxX = 35.70000;
const locationMinY = 139.70000;
const locationMaxY = 139.80000;

const TYPE = ['palace', 'flat', 'house', 'bungalow'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (max < min) {
    [min, max] = [max, min];
  }

  if (min >= 0 && max >= 1) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  throw new Error('Введено значение вне диапазона');

};

const getRandomNumber = (min, max, decimalPlaces) => {
  if (max < min) {
    [min, max] = [max, min];
  }

  if (min >= 0 && max >= 1) {
    return (Math.random() * (max - min) + min).toFixed(decimalPlaces);
  }

  throw new Error('Введено значение вне диапазона');
};

const getRandomArrayElement = (arr) => {
  return arr[getRandomInteger(0, arr.length-1)]
}

const getArrRandomLength = (arr) => {
  return arr.slice(0, getRandomInteger(0, arr.length-1));
}

const createAdvert = () => {
  return {
    author: {
      avatar: `img/avatars/user0${getRandomInteger(1, 8)}.png`,
    },
    offer: {
      title: 'Студия с панорамным видом',
      address: `${location.x, location.y}`,
      price: `${getRandomInteger(0, 1000000)} руб.`,
      type: getRandomArrayElement(TYPE),
      rooms: `${getRandomInteger(0, 1000000)} комн.`,
      guests: `${getRandomInteger(0, 1000000)} чел.`,
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getArrRandomLength(FEATURES),
      description: 'Светлая большая студия в новом доме. Закрытый двор. Панорамный вид на парк.',
      photos: getArrRandomLength(PHOTOS),
    },
    location: {
      x: getRandomNumber(locationMinX, locationMaxX, 2),
      y: getRandomNumber(locationMinY, locationMaxY, 2),
    },
  }
}

new Array(ADVERT_COUNT).fill(null).map(() => createAdvert());
