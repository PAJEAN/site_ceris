// @ts-check

/** Store **/
import { store } from 'JS/store/index';
import { HAL as NS } from 'JS/store/modules/__ns__';
import { Publication } from 'JS/store/modules/hal/publication';
/** Utils **/
import { DEBUG } from 'JS/utils/constants';
import { DATA_TEST } from 'JS/data/hal-data-test';

export const keys = {
    /* ------------------------------- States ------------------------------- */
    s_publications: `${NS}_publications`,
    s_total_publications: `${NS}_total_publications`,
    /* ------------------------------- Actions ------------------------------ */
    a_fetch_publications: `${NS}_fetch_publications`
    /* ------------------------------- Getters ------------------------------ */
}

export const module = {
    state: {
        /** @type {Publication[]} */
        [keys.s_publications]: [],
        [keys.s_total_publications]: 0
    },
    actions: {
        [keys.a_fetch_publications](context, payload) {
            return new Promise((resolve, reject) => {

                if (DEBUG) {
                    return setTimeout(() => {
                        let url = new URL(payload);
                        let start = parseInt(url.searchParams.get('start'));
                        let rows = parseInt(url.searchParams.get('rows'));
                        let resultat = DATA_TEST;
                        // @ts-ignore
                        let publications = resultat.response.docs.map(el => new Publication(el));
                        publications = publications.slice(start, start + rows);
                        context.commit(`${NS}_UPDATE_PUBLICATIONS`, publications);
                        context.commit(`${NS}_UPDATE_TOTAL_PUBLICATIONS`, resultat.response.numFound);
                        resolve();
                    }, 250);
                }
                
                fetch(payload, {
                    method: 'GET'
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error, status = ${response.status}`);
                    }
                    return response.json();
                })
                .then(json => {
                    let publications = json.response.docs.map(el => new Publication(el));
                    context.commit(`${NS}_UPDATE_PUBLICATIONS`, publications);
                    context.commit(`${NS}_UPDATE_TOTAL_PUBLICATIONS`, parseInt(json.response.numFound));
                    resolve();
                })
                .catch(error => {
                    console.error(error.message);
                    reject();
                });
                
            });
        },
    },
    mutations: {
        [`${NS}_UPDATE_PUBLICATIONS`](state, payload) {
            state[keys.s_publications] = payload;
        },
        [`${NS}_UPDATE_TOTAL_PUBLICATIONS`](state, payload) {
            state[keys.s_total_publications] = payload;
        },
    },
    getters: {}
}

class Hal {

    constructor() {}

    /**
     * @returns {Publication[]}
     */
    get publications() { return store.state[keys.s_publications]; }
    /**
     * @returns {number}
     */
    get total_publications() { return store.state[keys.s_total_publications]; }

    /**
     * @param {number} rows
     * * @param {number} start
     * @returns Promise
     */
    async fetch(rows, start, search = undefined) {        
        return store.dispatch(keys.a_fetch_publications, this.#query(rows, start, search));
    }

    /**
     * @param {number} rows 
     * @param {number} start 
     * @param {string} search 
     * @returns {string}
     */
    #query(rows, start, search = undefined) {
        let query = `q=structId_i:1100796`;
        if (search) {
            if (!Number.isNaN(parseInt(search))) {
                query += ` AND (producedDateY_i:${search})`;
            } else {
                query += ` AND (title_t:*${search}* OR authFullName_t:*${search}* OR keyword_t:*${search}* OR publisher_t:*${search}* OR conferenceTitle_t:*${search}* OR journalTitle_t:*${search})`;
            }
        }
        let url = `https://api.archives-ouvertes.fr/search/?${query}&fl=title_s,authFullName_s,keyword_s,abstract_s,producedDateY_i,publisher_s,conferenceTitle_s,degree_s,book_s,uri_s,journalTitle_s&sort=producedDateY_i%20desc,docid%20desc&rows=${rows}&start=${start}`;
        return url;
    }
}

export const HAL = new Hal();
