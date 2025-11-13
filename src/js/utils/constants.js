import { PAGES, PAGES_INFO } from "JS/pages/__ns__";

let debug = true;
export const DEBUG = process.env.NODE_ENV == 'production' ? false: debug;


/** Nav **/
/**
 * @typedef {Object} NavItem
 * @property {string} content
 * @property {string} link
 */

/**
 * @typedef {Object} NavInfo
 * @property {NavItem} navbar_brand
 * @property {NavItem[]} nav_items
 */
export const NAV_INFO = {
    navbar_brand: {content: 'Ceris', link: '#'},
    nav_items: [
        {content: 'Projets', link: `#${PAGES_INFO[PAGES.PROJETS].route.path}`},
        {content: 'Publications', link: `#${PAGES_INFO[PAGES.PUBLICATIONS].route.path}`},
        {content: 'Équipe', link: '#'},
        {content: 'Enseignements', link: '#'},
    ],
}