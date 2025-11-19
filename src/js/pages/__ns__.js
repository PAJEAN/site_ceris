// @ts-check

export const PAGES = {
    HOME: 'p-home',
    PUBLICATIONS: 'p-publications',
    PROJETS: 'p-projets',
    TEAM: 'p-team',
    TEACHING: 'p-teaching',
}

export const PAGES_INFO__ = {
    [PAGES.HOME]: {
        route: {
            path: '/home',
            title: 'Home',
            is_default: true
        }
    },
    [PAGES.PUBLICATIONS]: {
        route: {
            path: '/publications',
            title: 'Publications'
        }
    },
    [PAGES.PROJETS]: {
        route: {
            path: '/projets',
            title: 'Projets'
        }
    },
    [PAGES.TEAM]: {
        route: {
            path: '/equipe',
            title: 'Equipe'
        }
    },
    [PAGES.TEACHING]: {
        route: {
            path: '/enseignements',
            title: 'Enseignements'
        }
    }
}

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
        {content: 'Projets', link: `#${PAGES_INFO__[PAGES.PROJETS].route.path}`},
        {content: 'Publications', link: `#${PAGES_INFO__[PAGES.PUBLICATIONS].route.path}`},
        {content: 'Équipe', link: `#${PAGES_INFO__[PAGES.TEAM].route.path}`},
        {content: 'Enseignements', link: `#${PAGES_INFO__[PAGES.TEACHING].route.path}`},
    ],
}