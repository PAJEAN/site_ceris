// @ts-check

/** NS **/
import { WC } from 'JS/components/__ns__';
/** Store **/
import { store } from 'JS/store/index';
import { HAL } from 'JS/store/modules/hal/s-hal';
import { PROJECT_MANAGER } from 'JS/store/modules/projects/s-projects';
import { TEACHING_MANAGER } from 'JS/store/modules/teaching/s-teaching';
import { TEAM_MANAGER } from 'JS/store/modules/team/s-team';

try {
    const TAG_IDS = {
        wc_main:   'wc-main',
        nb_publication: 'nb-publications',
        nb_projects: 'nb-projects',
        nb_team: 'nb-team',
        nb_teaching: 'nb-teaching',
    };

    (function() {
        const NAME = WC.STATS;

        const TEMPLATE = document.createElement('template');
        TEMPLATE.innerHTML = /* html */`

            <style></style>

            <div id="${TAG_IDS.wc_main}" class="container">
                <div class="row text-center g-4">
                    <div class="col-6 col-md-3">
                        <div id="${TAG_IDS.nb_team}" class="display-4 fw-semibold">45+</div>
                        <div class="text-muted">Chercheurs</div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div id="${TAG_IDS.nb_publication}" class="display-4 fw-semibold">200+</div>
                        <div class="text-muted">Publications</div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div id="${TAG_IDS.nb_projects}" class="display-4 fw-semibold">30+</div>
                        <div class="text-muted">Projets</div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div id="${TAG_IDS.nb_teaching}" class="display-4 fw-semibold">8</div>
                        <div class="text-muted">Filières</div>
                    </div>
                </div>
            </div>
        `;

        window.customElements.define(NAME, class extends HTMLElement {
            constructor() {
                super();
                /** @type {HTMLDivElement} */
                this._content = document.createElement('div');
            }

            nb_publications() {
                let tag = this._content.querySelector(`#${TAG_IDS.nb_publication}`);
                if (!tag) return;
                tag.textContent = HAL.total_publications.toString();
            }

            nb_projects() {
                let tag = this._content.querySelector(`#${TAG_IDS.nb_projects}`);
                if (!tag) return;
                tag.textContent = PROJECT_MANAGER.projects.length.toString();
            }

            nb_teaching() {
                let tag = this._content.querySelector(`#${TAG_IDS.nb_teaching}`);
                if (!tag) return;
                tag.textContent = TEACHING_MANAGER.programs.length.toString();
            }

            nb_team() {
                let tag = this._content.querySelector(`#${TAG_IDS.nb_team}`);
                if (!tag) return;
                tag.textContent = TEAM_MANAGER.team.length.toString();
            }

            init() {
                this.nb_publications();
                this.nb_projects();
                this.nb_teaching();
                this.nb_team();
            }
         
            connectedCallback () {
                this.appendChild(TEMPLATE.content.cloneNode(true));

                /** @type {HTMLDivElement} */
                this._content = this.querySelector(`#${TAG_IDS.wc_main}`) ?? this._content;

                this.unsubscribe = store.events.subscribe('stateChange', this.nb_publications.bind(this));

                this.init();
            }
          
            disconnectedCallback () {
                this.unsubscribe();
            }
        });
    })();
}
catch (err) {
    console.error(err);
}