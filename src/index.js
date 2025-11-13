/*** Libraries ***/
import './js/lib/router';

/*** Components ***/
import './js/components/wc-nav';
import './js/components/wc-pagination';
import './js/components/wc-publications';
import './js/components/wc-stats';

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
	
	import ('./css/var.css')
	.then(load_css);

	import ('./css/base.css')
	.then(load_css);
})();