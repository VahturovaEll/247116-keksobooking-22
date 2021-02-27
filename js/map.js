/* global L:readonly */
import {adverts} from './data.js';
import {createCard} from './card.js';
import {setState, updateAddress, addressForm} from './form.js';

const CENTER_TOKYO = {
  lat: 35.68950,
  lng: 139.75388,
};
const ZOOM_MAP = 12;
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

const map = L.map('map-canvas')
  .on('load', () => {
    updateAddress(addressForm, CENTER_TOKYO);
    setState(false);
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

mainMarker.on('moveend', (evt) => {
  updateAddress(addressForm, evt.target.getLatLng());
});

const icon = L.icon({
  iconUrl: PIN_AD.iconUrl,
  iconSize: PIN_AD.iconPin,
  iconAnchor: PIN_AD.iconAncor,
});

adverts.forEach((adv) => {
  const lat = adv.location.x;
  const lng = adv.location.y;

  const marker = L.marker(
    {
      lat: lat,
      lng: lng,
    },
    {
      icon: icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(createCard(adv),
      {
        keepInView: true,
      },
    )
});
