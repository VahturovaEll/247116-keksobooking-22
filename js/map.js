/* global L:readonly */
import {renderCard} from './card.js';
import {checkAllFilters} from './filter.js';

const ADVERTS_COUNT = 10;
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

const mapFilter = document.querySelector('.map__filters');//
const mapFilterBlocks = mapFilter.children;
const form = document.querySelector('.ad-form');
const formBlocks = form.children;
const addressForm = form.querySelector('#address');

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

const defaultMap = () => {
  mainMarker.setLatLng([CENTER_TOKYO.lat, CENTER_TOKYO.lng]).update();
}

const updateAddress = (location) => {
  const lat = location.lat.toFixed(ROUNDING);
  const lng = location.lng.toFixed(ROUNDING);
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

const MARKERS = [];

const renderAdverts = (adverts) => {
  adverts
    .filter(checkAllFilters)
    .slice(0, ADVERTS_COUNT)
    .forEach((advert) => {
      const marker = L.marker(
        {
          lat: advert.location.lat,
          lng: advert.location.lng,
        },
        {
          icon: icon,
        },
      );

      marker.addTo(map).bindPopup(renderCard(advert));
      MARKERS.push(marker);
    });
}

const removeMapMarkers = () => {
  MARKERS.forEach((marker) => {
    marker.remove();
  })
  map.closePopup();
};

const resetMap = () => {
  defaultMap();
};

export {renderAdverts, resetMap, removeMapMarkers};
