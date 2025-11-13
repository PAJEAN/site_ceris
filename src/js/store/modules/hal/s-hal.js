// @ts-check

/** Store **/
import { store } from 'JS/store/index';
import { HAL as NS } from 'JS/store/modules/__ns__';
import { Publication } from 'JS/store/modules/hal/publication';
/** Utils **/
import { DEBUG } from 'JS/utils/constants';
import { DATA_TEST } from 'JS/utils/data-test';

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
                        let resultat = DATA_TEST;
                        // @ts-ignore
                        let publications = resultat.response.docs.map(el => new Publication(el));
                        publications = publications.slice(payload.start, payload.start + payload.rows);
                        context.commit(`${NS}_UPDATE_PUBLICATIONS`, publications);
                        context.commit(`${NS}_UPDATE_TOTAL_PUBLICATIONS`, resultat.response.numFound);
                        resolve();
                    }, 250);
                }

                fetch(`https://api.archives-ouvertes.fr/search/?q=structId_i:1100796&&fl=title_s,authFullName_s,keyword_s,abstract_s,producedDateY_i,publisher_s,conferenceTitle_s,degree_s,book_s,uri_s,journalTitle_s&sort=producedDateY_i%20desc,docid%20desc&rows=${payload.rows}&start=${payload.start}`, {
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
    async fetch(rows, start) {        
        return store.dispatch(keys.a_fetch_publications, {rows, start});
    }
}

export const HAL = new Hal();
