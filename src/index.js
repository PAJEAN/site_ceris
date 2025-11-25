// @ts-check

import { Router } from 'JS/lib/router/router';
import { ROUTES, ROUTES_INFO } from 'JS/lib/router/routes';

Router.define('app-router');
Router.init(ROUTES_INFO);

/*** ROUTES ***/
import { PHome } from 'JS/pages/p-home';
import { PProjets } from 'JS/pages/p-projets';
import { PPublication } from 'JS/pages/p-publications';
import { PTeaching } from 'JS/pages/p-teaching';
import { PTeam } from 'JS/pages/p-team';

PHome.define(ROUTES.HOME);
PProjets.define(ROUTES.PROJETS);
PPublication.define(ROUTES.PUBLICATIONS);
PTeaching.define(ROUTES.TEACHING);
PTeam.define(ROUTES.TEAM);

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