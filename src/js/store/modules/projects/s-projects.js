// @ts-check

/** Store **/
import { store } from 'JS/store/index';
import { PROJECTS as NS } from 'JS/store/modules/__ns__';
import { Project } from 'JS/store/modules/projects/project';
/** Utils **/
import { PROJECTS_DATA } from 'JS/data/projects-data';

export const keys = {
    /* ------------------------------- States ------------------------------- */
    s_projets: `${NS}_projets`,
    /* ------------------------------- Actions ------------------------------ */
    a_get_projects: `${NS}_get_projects`
    /* ------------------------------- Getters ------------------------------ */
}

export const module = {
    state: {
        /** @type {Project[]} */
        [keys.s_projects]: [],
    },
    actions: {
        [keys.a_get_projects](context, payload) {
            let projects = payload.map(el => new Project(el));            
            context.commit(`${NS}_UPDATE_PROJECTS`, projects);
        },
    },
    mutations: {
        [`${NS}_UPDATE_PROJECTS`](state, payload) {
            state[keys.s_projets] = payload;
        },
    },
    getters: {}
}

class ProjectManager {
    constructor() {}

    /**
     * @returns {Project[]}
     */
    get projects() { return store.state[keys.s_projets]; }

    get() {
        return store.dispatch(keys.a_get_projects, PROJECTS_DATA);
    }

    /**
     * 
     * @param {string} project_id 
     * @returns {Project}
     */
    get_by_id(project_id) {
        let projects = this.projects.filter(project => project.id == project_id);
        return projects.length > 0 ? projects[0]: null;
    }

    /**
     * 
     * @param {string} project_id 
     * @returns {boolean}
     */
    exist(project_id) {
        return this.projects.filter(project => project.id == project_id).length > 0;
    }

    order_by_start_date(desc = true) {
        return this.projects.sort((a, b) => {
            return desc ? b.start_date - a.start_date: a.start_date - b.start_date;
        })
    }
}

export const PROJECT_MANAGER = new ProjectManager();