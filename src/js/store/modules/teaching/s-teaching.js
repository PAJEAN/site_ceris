// @ts-check

/** Store **/
import { store } from 'JS/store/index';
import { PROJECTS as NS } from 'JS/store/modules/__ns__';
import { Teaching } from './teaching';
/** Data **/
import { TEACHING_DATA } from 'JS/data/teaching-data';

export const keys = {
    /* ------------------------------- States ------------------------------- */
    s_programs: `${NS}_programs`,
    /* ------------------------------- Actions ------------------------------ */
    a_get_programs: `${NS}_get_programs`
    /* ------------------------------- Getters ------------------------------ */
}

export const module = {
    state: {
        /** @type {Teaching[]} */
        [keys.s_programs]: [],
    },
    actions: {
        [keys.a_get_programs](context, payload) {
            let programs = payload.map(el => new Teaching(el));
            context.commit(`${NS}_UPDATE_PROGRAMS`, programs);
        },
    },
    mutations: {
        [`${NS}_UPDATE_PROGRAMS`](state, payload) {
            state[keys.s_programs] = payload;
        },
    },
    getters: {}
}

class TeachingManager {
    constructor() {}

    /**
     * @returns {Teaching[]}
     */
    get programs() { return store.state[keys.s_programs]; }

    get() {
        return store.dispatch(keys.a_get_programs, TEACHING_DATA);
    }

    /**
     * 
     * @param {string} program_id 
     * @returns {Teaching}
     */
    get_by_id(program_id) {
        let teaching = this.programs.filter(program => program.id == program_id);
        return teaching.length > 0 ? teaching[0]: null;
    }

    /**
     * 
     * @param {string} program_id 
     * @returns {boolean}
     */
    exist(program_id) {
        return this.programs.filter(program => program.id == program_id).length > 0;
    }
}

export const TEACHING_MANAGER = new TeachingManager();