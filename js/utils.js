const ALERT_SHOW_TIME = 5000;

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

const words = {
  rooms: ['комнатa', 'комнаты', 'комнат'],
  guests: ['гостя', 'гостей', 'гостей'],
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

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

export {getRandomInteger, getRandomNumber, getRandomElementArr, getArrRandomLength, getWords, showAlert};
