const URL = 'https://22.javascript.pages.academy/keksobooking';
const METOD_SEND = 'POST';

const getData = (onSuccess, onFail) => {
  fetch(`${URL}/data`)
    .then((response) => response.json())
    .then((offers) => onSuccess(offers))
    .catch(() => {
      onFail('Не удалось загрузить данные с сервера. Повторите попытку позже');
    });
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
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
