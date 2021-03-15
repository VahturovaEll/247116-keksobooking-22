import {debounce} from './utils.js';
import {getData} from './server.js';
//import {showErrorModal} from './popup.js';
import {renderAdverts} from './map.js';
import {changeFilters} from './filter.js';
//import {formReset} from './form.js';

const RERENDER_DELAY = 500;

getData((offers) => {
  renderAdverts(offers);
  //formReset(() => renderAdverts(offers));
  changeFilters(debounce(
    () => renderAdverts(offers),
    RERENDER_DELAY,
  ));
  //showErrorModal();
});
