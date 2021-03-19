const words = {
  rooms: ['комнатa', 'комнаты', 'комнат'],
  guests: ['гостя', 'гостей', 'гостей'],
};

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
};

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

const debounce = (cb, delay) => {
  let timeout;
  return () => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(cb, delay)
  };
};

export {getWords, isEscEvent, debounce}
