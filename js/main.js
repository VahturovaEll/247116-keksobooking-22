'use strict';

const getRandomInteger = function (min, max) {
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

getRandomInteger(0, 10);

const getRandomNumber = function (min, max, decimalPlaces) {
  if (max < min) {
    [min, max] = [max, min];
  }

  if (min >= 0 && max >= 1) {
    return (Math.random() * (max - min) + min).toFixed(decimalPlaces);
  }

  throw new Error('Введено значение вне диапазона');
};

getRandomNumber(0, 10);
