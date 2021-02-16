import {createAdvert} from './data.js';
import {declOfNum} from './end-world.js';

const mapPopup = document.querySelector('.map__canvas');

const similarCardTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarAdvert = createAdvert();

const createCard = (card) => {
  const similarCardElement = similarCardTemplate.cloneNode(true);
  mapPopup.appendChild(similarCardElement);

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

  titleCard.textContent = card.offer.title;

  addressCard.textContent = card.offer.address;

  priceCard.textContent = `${card.offer.price} ₽/ночь`;

  typeCard.textContent = card.offer.type;

  capacityCard.textContent = `${card.offer.rooms} ${declOfNum(card.offer.rooms, ['комнатa', 'комнаты', 'комнат'])} для ${card.offer.guests} ${declOfNum(card.offer.guests,['гостя', 'гостей', 'гостей'])}`;
  
  timeCard.textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;

  featuresList.innerHTML = '';
  for (let i = 0; i <= card.offer.features.length - 1; i++) {
    const feature = document.createElement('li');
    const featureClass = `popup__feature--${card.offer.features[i]}`;
    feature.classList.add('popup__feature', featureClass);
    featuresList.appendChild(feature);
  }

  descriptionCard.textContent = card.offer.description;

  photosCard.innerHTML = '';
  for (let i = 0; i <= card.offer.photos.length - 1; i++) {
    const photo = similarCardTemplate.querySelector('.popup__photo').cloneNode(true);
    photo.src = card.offer.photos[i];
    photosCard.appendChild(photo);
  }

  avatarCard.src = card.author.avatar;
}

createCard(similarAdvert);
