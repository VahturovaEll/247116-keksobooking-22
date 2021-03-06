import {getWords} from './utils.js';

const typeToHouse = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
};

const similarCardTemplate = document.querySelector('#card').content.querySelector('.popup');

const creatFeaturesCard = (arr, list) => {
  list.innerHTML = '';
  arr.forEach((element) => {
    const feature = document.createElement('li');
    feature.classList.add('popup__feature', `popup__feature--${element}`);
    list.appendChild(feature);
  });
}

const creatPhotosCard = (arr, list) => {
  list.innerHTML = '';
  if (arr.length) {
    arr.forEach((element) => {
      const photo = similarCardTemplate.querySelector('.popup__photo').cloneNode(true);
      photo.src = element;
      list.appendChild(photo);
    });
  }
}

const renderCard = ({author, offer}) => {
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


  offer.title ? titleCard.textContent = offer.title : titleCard.remove();
  offer.address ? addressCard.textContent = offer.address : addressCard.remove();
  offer.price ? priceCard.textContent = `${offer.price} ₽/ночь`: priceCard.remove() ;
  offer.type ? typeCard.textContent = typeToHouse[offer.type] : typeCard.remove();
  author.avatar ? avatarCard.src = author.avatar : avatarCard.remove();
  offer.description ? descriptionCard.textContent = offer.description: descriptionCard.remove();
  capacityCard.textContent = `${offer.rooms} ${getWords(offer.rooms, 'rooms')} для ${offer.guests} ${getWords(offer.guests, 'guests')}`;
  timeCard.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  creatFeaturesCard(offer.features, featuresList);
  creatPhotosCard(offer.photos, photosCard);

  return similarCardElement;
}

const clearCard = () => {
  similarCardTemplate.innerHTML = '';
};

export {renderCard, clearCard};
