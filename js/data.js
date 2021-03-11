import {getData} from './server.js';
import {showErrorModal} from './popup.js';
import {renderAdverts} from './map.js';

getData(renderAdverts, showErrorModal);
