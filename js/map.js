/* global L:readonly */

import {adverts} from './data.js';
import {createCard} from './card.js';
import {setState} from './form.js';

const centerTokyo = {
  x: 35.68950,
  y: 139.69171,
};
const zoomMap = 12;

const sizesPinMain = {
  width: 52,
  height: 52,
};
const ancorePinMain = {
  width: sizesPinMain.width/2,
  height: sizesPinMain.height,
};

const map = L.map('map-canvas')
  .on('load', () => {
    setState(false);
  }).setView({
    lat: centerTokyo.x,
    lng: centerTokyo.y,
  }, zoomMap);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [sizesPinMain.width, sizesPinMain.height],
  iconAnchor: [ancorePinMain.width, ancorePinMain.height],
});

const mainMarker = L.marker(
  {
    lat: centerTokyo.x,
    lng: centerTokyo.y,
  },
  {
    draggable: true,
    icon: mainIcon,
  },
);

mainMarker.addTo(map);

const getCoordinate = (evt) => {
  const address = document.querySelector('#address');
  const lat = evt.target.getLatLng().lat.toFixed(5);
  const lng = evt.target.getLatLng().lng.toFixed(5);
  address.value = `${lat} ${lng}`;
};

mainMarker.on('moveend', getCoordinate);

adverts.forEach(({author, offer, location}) => {
  const lat = location.x;
  const lng = location.y;

  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon: icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(createCard({author, offer}),
      {
        keepInView: true,
      },
    )
});
