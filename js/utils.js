const words = {
  rooms: ['комнатa', 'комнаты', 'комнат'],
  guests: ['гостя', 'гостей', 'гостей'],
}

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

const getWords = (count, word) => {
  const num = count % 100;
  const mod = num  % 10;

  if (num !== 11 && mod === 1) {
    return words[word][0]
  } else if ( mod >= 2 && mod <= 4 && (num < 10 || num > 20)) {
    return words[word][1]
  } else {
    return words[word][2]
  }
}

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};
/*
const isEnterEvent = (evt) => {
  return evt.key === 'Enter';
};
*/
export {getRandomInteger, getRandomNumber, getRandomElementArr, getArrRandomLength, getWords, isEscEvent};
