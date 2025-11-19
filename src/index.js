// @ts-check


console.log("#1");


/*** Router ***/
import { Router } from 'JS/lib/router';
/*** Components ***/
import { WcNav } 			from 'JS/components/wc-nav';
import { WcPagination } 	from 'JS/components/wc-pagination';
import { WcProjets }		from 'JS/components/wc-projets';
import { WcProjectCard } 	from 'JS/components/wc-projet-card';
import { WcPublications } 	from 'JS/components/wc-publications';
import { WcStats } 			from 'JS/components/wc-stats';
import { WcTeaching }		from 'JS/components/wc-teaching';
import { WcTeachingCard } 	from 'JS/components/wc-teaching-card';
import { WcTeam }			from 'JS/components/wc-team';
import { WcTeamCard }		from 'JS/components/wc-team-card';
/*** Pages ***/
import { PHome } from 'JS/pages/p-home';
import { PProjets } from './js/pages/p-projets';
import { PPublication } from 'JS/pages/p-publications';
import { PTeaching } from 'JS/pages/p-teaching';
import { PTeam } from 'JS/pages/p-team';

export const PAGES_INFO = {
    [PHome.tag_name]: {
        route: {
            path: '/home',
            title: 'Home',
            is_default: true
        }
    },
    [PPublication.tag_name]: {
        route: {
            path: '/publications',
            title: 'Publications'
        }
    },
    [PProjets.tag_name]: {
        route: {
            path: '/projets',
            title: 'Projets'
        }
    },
    [PTeam.tag_name]: {
        route: {
            path: '/equipe',
            title: 'Equipe'
        }
    },
    [PTeaching.tag_name]: {
        route: {
            path: '/enseignements',
            title: 'Enseignements'
        }
    }
};

import { LOAD_PAGES } from 'JS/utils/constants';
LOAD_PAGES(PAGES_INFO);


Router.define();
Router.init(PAGES_INFO);


/*** Components ***/

WcNav.define();
WcPagination.define();
WcProjets.define();
WcProjectCard.define();
WcPublications.define();
WcStats.define();
WcTeaching.define();
WcTeachingCard.define();
WcTeam.define();
WcTeamCard.define();


/*** Pages ***/

PHome.define();
PProjets.define();
PPublication.define();
PTeaching.define();
PTeam.define();


/*** CSS ***/
(function() {
	let load_css = (module) => {
		let tag = document.createElement('style');
		tag.innerHTML = module.default.toString();
		document.head.appendChild(tag);
	};
	// @ts-ignore
	import ('./css/var.css')
	.then(load_css);
	// @ts-ignore
	import ('./css/base.css')
	.then(load_css);
})();