import {debounce} from './utils.js';
import {getData} from './server.js';
import {renderAdverts} from './map.js';
import {changeFilters} from './filter.js';
import {formReset} from './form.js';
//import {showErrorModal} from './popup.js';

const RERENDER_DELAY = 500;

const getDataAdverts = () => {
  getData((offers) => {
    renderAdverts(offers);
    //formReset(() => renderAdverts(offers));
    changeFilters(debounce(
      () => renderAdverts(offers),
      RERENDER_DELAY,
    ));
    //showErrorModal();
  });
}
formReset();
getDataAdverts();

export {getDataAdverts};
