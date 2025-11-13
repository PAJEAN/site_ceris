// @ts-check

export const PAGES = {
    HOME: 'p-home',
    PUBLICATIONS: 'p-publications',
    PROJETS: 'p-projets'
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
    }
}