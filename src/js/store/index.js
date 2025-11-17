import { Store } from './store.js';
/* Modules */
import { module as publication } from 'JS/store/modules/hal/s-hal.js';
import { module as projet, PROJECT_MANAGER } from 'JS/store/modules/projects/s-projects.js';
import { module as team, TEAM_MANAGER } from 'JS/store/modules/team/s-team.js';
import { module as teaching, TEACHING_MANAGER } from 'JS/store/modules/teaching/s-teaching.js';

export const store = new Store({
    'actions': Object.assign(publication.actions, projet.actions, team.actions, teaching.actions), // Object.assign(cible, ...sources).
    'mutations': Object.assign(publication.mutations, projet.mutations, team.mutations, teaching.mutations),
    'getters': Object.assign(publication.getters, projet.getters, team.getters, teaching.getters),
    'state': Object.assign(publication.state, projet.state, team.state, teaching.state)
});

PROJECT_MANAGER.get();
TEAM_MANAGER.get();
TEACHING_MANAGER.get();