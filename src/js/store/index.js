import { Store } from './store.js';
/* Modules */
import { module as publication } from 'JS/store/modules/hal/s-hal.js';

export const store = new Store({
    'actions': Object.assign(publication.actions), // Object.assign(cible, ...sources).
    'mutations': Object.assign(publication.mutations),
    'getters': Object.assign(publication.getters),
    'state': Object.assign(publication.state)
});