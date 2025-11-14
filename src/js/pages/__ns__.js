// @ts-check

export const PAGES = {
    HOME: 'p-home',
    PUBLICATIONS: 'p-publications',
    PROJETS: 'p-projets',
    TEAM: 'p-team',
}

export const PAGES_INFO = {
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
        {content: 'Projets', link: `#${PAGES_INFO[PAGES.PROJETS].route.path}`},
        {content: 'Publications', link: `#${PAGES_INFO[PAGES.PUBLICATIONS].route.path}`},
        {content: 'Équipe', link: `#${PAGES_INFO[PAGES.TEAM].route.path}`},
        {content: 'Enseignements', link: '#'},
    ],
}