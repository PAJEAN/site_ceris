// @ts-check

export const PAGES = {
    HOME: 'p-home',
    PUBLICATIONS: 'p-publications'
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
    }
}