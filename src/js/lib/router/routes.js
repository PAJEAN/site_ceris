// @ts-check

export const ROUTES = {
    HOME: 'wc-phome',
    PUBLICATIONS: 'wc-ppublication',
    PROJETS: 'wc-pprojets',
    TEAM: 'wc-pteam',
    TEACHING: 'wc-pteaching',
}

export const ROUTES_INFO = {
    [ROUTES.HOME]: {
        route: {
            path: '/home',
            title: 'Home',
            is_default: true
        }
    },
    [ROUTES.PUBLICATIONS]: {
        route: {
            path: '/publications',
            title: 'Publications'
        }
    },
    [ROUTES.PROJETS]: {
        route: {
            path: '/projets',
            title: 'Projets'
        }
    },
    [ROUTES.TEAM]: {
        route: {
            path: '/equipe',
            title: 'Equipe'
        }
    },
    [ROUTES.TEACHING]: {
        route: {
            path: '/enseignements',
            title: 'Enseignements'
        }
    }
}