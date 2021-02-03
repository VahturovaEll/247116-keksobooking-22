'use strict';

const getRandomInteger = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (max <= min) {
    max = min + 1;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInteger();

const getRandomNumber = function (min, max, decimal_places) {
  if (max <= min) {
    max = min + 1;
  }

  return (Math.random() * (max - min) + min).toFixed(decimal_places);
};

getRandomNumber();
