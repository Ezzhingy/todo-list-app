import './styles/normalize.css';
import './styles/styles.css';

import { hideUnhide } from './functions/hideUnhide';

document.onclick = function (e) {
    hideUnhide(e);
}