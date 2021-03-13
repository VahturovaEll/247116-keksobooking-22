const URL = 'https://22.javascript.pages.academy/keksobooking';
const METOD_SEND = 'POST';

const getData = (onSuccess, onFail) => {
  fetch(`${URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    })
    .then(onSuccess)
    .catch(onFail);
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    URL,
    {
      method: METOD_SEND,
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    })
    .catch(onFail);
};

export {getData, sendData};
