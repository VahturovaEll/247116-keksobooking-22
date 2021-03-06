/* global L:readonly */
//import {adverts} from './data.js';
import {renderCard} from './card.js';

const ROUNDING = 5;
const ZOOM_MAP = 12;
const CENTER_TOKYO = {
  lat: 35.68950,
  lng: 139.75388,
};
const PIN_MAIN = {
  iconUrl: 'img/main-pin.svg',
  iconPin: [52, 52],
  iconAncor: [26, 52],
};
const PIN_AD = {
  iconUrl: 'img/pin.svg',
  iconPin: [32, 32],
  iconAncor: [16, 32],
};

const LeafletProperties = {
  TILE_LAYER: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}

const mapFilter = document.querySelector('.map__filters');
const mapFilterBlocks = mapFilter.children;
const form = document.querySelector('.ad-form');
const formBlocks = form.children;

const setDisabled = (elements) => {
  for (let element of elements) {
    element.disabled = true;
  }
}

const setEnabled = (elements) => {
  for (let element of elements) {
    element.disabled = false;
  }
}

const deactivePage = () => {
  mapFilter.classList.add('map__filters--disabled');
  setDisabled(mapFilterBlocks);
  form.classList.add('ad-form--disabled');
  setDisabled(formBlocks);
}

deactivePage();

const activePage = () => {
  mapFilter.classList.remove('map__filters--disabled');
  setEnabled(mapFilterBlocks);
  form.classList.remove('ad-form--disabled');
  setEnabled(formBlocks);
}

const updateAddress = (coordinates) => {
  const addressForm = form.querySelector('#address');
  const lat = coordinates.lat.toFixed(ROUNDING);
  const lng = coordinates.lng.toFixed(ROUNDING);
  addressForm.value = `${lat} ${lng}`;
}

const map = L.map('map-canvas')
  .on('load', () => {
    updateAddress(CENTER_TOKYO);
    activePage();
  }).setView(CENTER_TOKYO, ZOOM_MAP);

L.tileLayer(
  LeafletProperties.TILE_LAYER,
  {
    attribution: LeafletProperties.ATTRIBUTION,
  },
).addTo(map);

const mainIcon = L.icon({
  iconUrl: PIN_MAIN.iconUrl,
  iconSize: PIN_MAIN.iconPin,
  iconAnchor: PIN_MAIN.iconAncor,
});

const mainMarker = L.marker(
  CENTER_TOKYO,
  {
    draggable: true,
    icon: mainIcon,
  },
);

mainMarker.addTo(map);

mainMarker.on('move', (evt) => {
  updateAddress(evt.target.getLatLng());
});

const icon = L.icon({
  iconUrl: PIN_AD.iconUrl,
  iconSize: PIN_AD.iconPin,
  iconAnchor: PIN_AD.iconAncor,
});

const renderAdverts = (adverts) => {
  adverts.forEach((advert) => {

    const lat = advert.location.x;
    const lng = advert.location.y;

    const marker = L.marker(
      {
        lat: lat,
        lng: lng,
      },
      {
        icon: icon,
      },
    );

    marker.addTo(map).bindPopup(renderCard(advert));
  });
}

export {renderAdverts};
