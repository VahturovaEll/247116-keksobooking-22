/*
import { getRandomInteger, getRandomNumber, getRandomElementArr, getArrRandomLength } from './utils.js';

const OFFER = {
  ADVERT_COUNT: 10,
  LOCATION: {
    X: {
      MIN: 35.65000,
      MAX: 35.70000,
    },
    Y: {
      MIN: 139.70000,
      MAX: 139.80000,
    },
  },
  PRICES: {
    MIN: 0,
    MAX: 1000000,
  },
  ROOMS: {
    MIN: 0,
    MAX: 100,
  },
  GUESTS: {
    MIN: 0,
    MAX: 3,
  },
  TITLES: ['Чудесная однушка с видом на набережную', 'Огромная студия для большой компании', 'Вариант для холостяка', 'Незабываемые ощущения', 'Хозяин - кот'],
  DESCRIPTIONS: ['К нам можно с детьми и котиками','Если боитесь высоты, поищите другой вариант', 'На первом этаже три ресторана и Макдональдс', 'У нас можно закатить вечеринку', 'Туалет на улице, кровать под открытым небом'],
  TYPES: ['palace', 'flat', 'house', 'bungalow'],
  CHECKINS: ['12:00', '13:00', '14:00'],
  CHECKOUTS: ['12:00', '13:00', '14:00'],
  FEATURES: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  PHOTOS: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'],
}

const createAdvert = () => {
  const x = getRandomNumber(OFFER.LOCATION.X.MIN, OFFER.LOCATION.X.MAX, 5);
  const y = getRandomNumber(OFFER.LOCATION.Y.MIN, OFFER.LOCATION.Y.MAX, 5);

  return {
    author: {
      avatar: `img/avatars/user0${getRandomInteger(1, 8)}.png`,
    },
    offer: {
      title: getRandomElementArr(OFFER.TITLES),
      address: `${x}, ${y}`,
      price: getRandomInteger(OFFER.PRICES.MIN, OFFER.PRICES.MAX),
      type: getRandomElementArr(OFFER.TYPES),
      rooms: getRandomInteger(OFFER.ROOMS.MIN, OFFER.ROOMS.MAX) ,
      guests: getRandomInteger(OFFER.GUESTS.MIN, OFFER.GUESTS.MAX) ,
      checkin: getRandomElementArr(OFFER.CHECKINS),
      checkout: getRandomElementArr(OFFER.CHECKOUTS),
      features: getArrRandomLength(OFFER.FEATURES),
      description: getRandomElementArr(OFFER.DESCRIPTIONS),
      photos: getArrRandomLength(OFFER.PHOTOS),
    },
    location: {
      x,
      y,
    },
  }
}

const adverts = new Array(OFFER.ADVERT_COUNT).fill(null).map(createAdvert);

export {adverts};
*/
import {getData} from './server.js';
import {renderAdverts} from './map.js';

/*
let similarAdverts = [];

const renderOffers = () => {
  getData((offers) => {
    const advert = similarAdverts.concat(offers);
    console.log(advert);

    //renderAdverts(advert);

    return advert;
  });
};


const adverts = renderOffers();
console.log(adverts);
export {adverts};*/

//объявления выводятся в консоль, но как их вытащить и дальще с ними работать не пойму
fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((adverts) => {
    console.log(adverts);
  });

//не работает тоже
getData(renderAdverts);

