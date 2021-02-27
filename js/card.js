import {getWords} from './utils.js';

const typeToHouse = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
};

const mapPopup = document.querySelector('.map__canvas');
const similarCardTemplate = document.querySelector('#card').content.querySelector('.popup');

const getFeaturesCard = (arr, list) => {
  arr.forEach((element) => {
    const feature = document.createElement('li');
    feature.classList.add('popup__feature', `popup__feature--${element}`);
    list.appendChild(feature);
  });
}

const getPhotosCard = (arr, list) => {
  if (arr.length) {
    arr.forEach((element) => {
      const photo = similarCardTemplate.querySelector('.popup__photo').cloneNode(true);
      photo.src = element;
      list.appendChild(photo);
    });
  }
}

const createCard = (card) => {
  const similarCardElement = similarCardTemplate.cloneNode(true);

  const titleCard = similarCardElement.querySelector('.popup__title');
  const addressCard = similarCardElement.querySelector('.popup__text--address');
  const priceCard = similarCardElement.querySelector('.popup__text--price');
  const typeCard = similarCardElement.querySelector('.popup__type');
  const capacityCard = similarCardElement.querySelector('.popup__text--capacity');
  const timeCard = similarCardElement.querySelector('.popup__text--time');
  const featuresList = similarCardElement.querySelector('.popup__features');
  const descriptionCard = similarCardElement.querySelector('.popup__description');
  const photosCard = similarCardElement.querySelector('.popup__photos');
  const avatarCard = similarCardElement.querySelector('.popup__avatar');

  card.offer.title ? titleCard.textContent = card.offer.title : titleCard.remove();
  card.offer.address ? addressCard.textContent = card.offer.address : addressCard.remove();
  card.offer.price ? priceCard.textContent = `${card.offer.price} ₽/ночь`: priceCard.remove() ;
  card.offer.type ? typeCard.textContent = typeToHouse[card.offer.type] : typeCard.remove();
  card.author.avatar ? avatarCard.src = card.author.avatar : avatarCard.remove();
  card.offer.description ? descriptionCard.textContent = card.offer.description: descriptionCard.remove();

  capacityCard.textContent = `${card.offer.rooms} ${getWords(card.offer.rooms, 'rooms')} для ${card.offer.guests} ${getWords(card.offer.guests, 'guests')}`;

  timeCard.textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;

  featuresList.innerHTML = '';
  getFeaturesCard(card.offer.features, featuresList);

  photosCard.innerHTML = '';
  getPhotosCard(card.offer.photos, photosCard);

  mapPopup.appendChild(similarCardElement);

  return similarCardElement;
}

export {createCard};
