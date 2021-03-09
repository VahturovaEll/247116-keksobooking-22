import {getData} from './server.js';
import {showAlert} from './popup.js';
import {renderAdverts} from './map.js';

getData(renderAdverts, showAlert);
