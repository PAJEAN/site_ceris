// @ts-check

/*** Libraries ***/
import { Router } from 'JS/lib/router';

Router.init();
Router.define();


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
import './js/pages/p-home';
import './js/pages/p-projets';
import './js/pages/p-publications';

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