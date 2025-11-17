// @ts-check

/** Store **/
import { store } from 'JS/store/index';
import { TEAM as NS } from 'JS/store/modules/__ns__';
import { Team } from 'JS/store/modules/team/team';
/** Utils **/
import { TEAM_DATA } from 'JS/data/team-data';

export const keys = {
    /* ------------------------------- States ------------------------------- */
    s_team: `${NS}_team`,
    /* ------------------------------- Actions ------------------------------ */
    a_get_team: `${NS}_get_team`
    /* ------------------------------- Getters ------------------------------ */
}

export const module = {
    state: {
        /** @type {Team[]} */
        [keys.s_team]: [],
    },
    actions: {
        [keys.a_get_team](context, payload) {
            let team = payload.map(el => new Team(el));            
            context.commit(`${NS}_UPDATE_TEAM`, team);
        },
    },
    mutations: {
        [`${NS}_UPDATE_TEAM`](state, payload) {
            state[keys.s_team] = payload;
        },
    },
    getters: {}
}

class TeamManager {
    constructor() {}

    /**
     * @returns {Team[]}
     */
    get team() { return store.state[keys.s_team]; }

    get() {
        return store.dispatch(keys.a_get_team, TEAM_DATA);
    }

    /**
     * 
     * @param {string} project_id 
     * @returns {boolean}
     */
    exist(project_id) {
        return this.team.filter(project => project.id == project_id).length > 0;
    }

    /**
     * 
     * @param {string} project_id 
     * @returns {Team}
     */
    get_by_id(project_id) {
        let projects = this.team.filter(project => project.id == project_id);
        return projects.length > 0 ? projects[0]: null;
    }

    /**
     * @returns {Team[]}
     */
    order_by_priority() {
        return this.team.sort((a, b) => {
            // Primary: numeric priority (ascending).
            let p = a.priority - b.priority;
            if (p !== 0) return p;
            // Secondary: alphabetical by last_name.
            let la = (a.last_name || '').toLowerCase();
            let lb = (b.last_name || '').toLowerCase();
            if (la < lb) return -1;
            if (la > lb) return 1;
            return 0;
        });
    }

}

export const TEAM_MANAGER = new TeamManager();