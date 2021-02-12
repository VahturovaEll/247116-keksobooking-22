const getRandomInteger = (min, max) => {
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

const getRandomNumber = (min, max, decimalPlaces) => {
  if (max < min) {
    [min, max] = [max, min];
  }

  if (min >= 0 && max >= 1) {
    return (Math.random() * (max - min) + min).toFixed(decimalPlaces);
  }

  throw new Error('Введено значение вне диапазона');
};

const getRandomElementArr = (arr) => {
  return arr[getRandomInteger(0, arr.length - 1)]
}

const getArrRandomLength = (arr) => {
  return arr.slice(0, getRandomInteger(0, arr.length - 1));
}

export { getRandomInteger, getRandomNumber, getRandomElementArr, getArrRandomLength };
