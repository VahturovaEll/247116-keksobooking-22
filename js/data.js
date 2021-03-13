import {getData} from './server.js';
//import {showErrorModal} from './popup.js';
import {renderAdverts} from './map.js';
import {changeFilters} from './filter.js';

getData((offers) => {
  renderAdverts(offers);
  changeFilters(() => renderAdverts(offers));
  //showErrorModal();
});
