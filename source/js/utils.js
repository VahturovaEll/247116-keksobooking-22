const words = {
  rooms: ['комнатa', 'комнаты', 'комнат'],
  guests: ['гостя', 'гостей', 'гостей'],
};

const Count = {
  ONE: 1,
  ELEVEN: 11,
  TWO: 2,
  FOUR: 4,
  TEN: 10,
  TWENTY: 20,
  ONE_HUNDRED: 100,
};

const getWords = (count, word) => {
  const num = count % Count.ONE_HUNDRED;
  const mod = num  % Count.TEN;

  if (num !== Count.ELEVEN && mod === Count.ONE) {
    return words[word][0]
  } else if (mod >= Count.TWO && mod <= Count.FOUR && (num < Count.TEN || num > Count.TWENTY)) {
    return words[word][1]
  } else {
    return words[word][2]
  }
};

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const debounce = (cb, delay) => {
  let timeout;
  return () => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(cb, delay)
  };
};

export {getWords, isEscEvent, debounce};
