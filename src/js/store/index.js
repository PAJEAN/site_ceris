import { Store } from './store.js';
/* Modules */
import { module as publication } from 'JS/store/modules/hal/s-hal.js';
import { module as projet } from 'JS/store/modules/projects/s-projects.js';
import { PROJECT_MANAGER } from 'JS/store/modules/projects/s-projects.js';

export const store = new Store({
    'actions': Object.assign(publication.actions, projet.actions), // Object.assign(cible, ...sources).
    'mutations': Object.assign(publication.mutations, projet.mutations),
    'getters': Object.assign(publication.getters, projet.getters),
    'state': Object.assign(publication.state, projet.state)
});

PROJECT_MANAGER.get();