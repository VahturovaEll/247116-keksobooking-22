import {debounce} from './utils.js';
import {getData} from './server.js';
import {renderAdverts, resetMarkersPosition} from './map.js';
import {changeFilters, resetAllForms} from './form.js';
import {filterData} from './filter.js';
import {showErrorModal} from './popup.js';

const RERENDER_DELAY = 500;

const sendSuccess = () => {
  getData((data) => {
    renderAdverts(data);

    const renderFilteredData = () => {
      resetMarkersPosition();
      renderAdverts(filterData(data));
    };

    changeFilters(debounce(renderFilteredData, RERENDER_DELAY));

    resetAllForms(() => {
      renderAdverts(data);
    });
  });
}

getData(sendSuccess, showErrorModal);
