// @ts-check

/** NS **/
import { WC } from 'JS/components/__ns__';
/** Store **/
import { TEAM_MANAGER } from 'JS/store/modules/team/s-team';


const TAG_IDS = {
    main: 'div-main',
    researchers: 'div-researchers',
    staff: 'div-staff',
};

const NAME = WC.TEAM;

const TEMPLATE = document.createElement('template');
TEMPLATE.innerHTML = /* html */`

    <style>
    </style>

    <div id="${TAG_IDS.main}">
        <!-- Researchers -->
        <div class="mb-5">
            <h4 class="text-uppercase text-muted small fw-semibold mb-4">Chercheurs</h4>
            <div id="${TAG_IDS.researchers}" class="row g-4"></div>
        </div>
        <!-- Staff -->
        <div>
            <h4 class="text-uppercase text-muted small fw-semibold mb-4">Personnel administratif et technique</h4>
            <div id="${TAG_IDS.staff}" class="row g-4"></div>
        </div>
    </div>
`;

export class WcTeam extends HTMLElement {
    static limit_attribute_name = 'data-limit';

    constructor() {
        super();
        /** @type {HTMLDivElement} */
        this._content = document.createElement('div');

        this._limit = -1;
    }

    _team_card() {
        let tag = this._content.querySelector(`#${TAG_IDS.project_container}`);
        tag.textContent = '';
        for (let [index, project] of TEAM_MANAGER.team.entries()) {
            let div = document.createElement('div');
            div.classList.add('col-md-6', 'col-lg-4');
            let project_tag = document.createElement(WC.PROJET_CARD);
            // project_tag.setAttribute(WcProjectCard.project_id_attribute_name, project.id);
            div.appendChild(project_tag);
            tag.appendChild(div);

            if (this._limit != -1 && index + 1 >= this._limit) {
                break;
            }
        }
    }

    init() {
        this._team_card();

        // @ts-ignore
        lucide.createIcons();
    }
    
    connectedCallback () {
        this.appendChild(TEMPLATE.content.cloneNode(true));

        /** @type {HTMLDivElement} */
        this._content = this.querySelector(`#${TAG_IDS.main}`) ?? this._content;

        this._limit = this.hasAttribute(WcTeam.limit_attribute_name) ? parseInt(this.getAttribute(WcTeam.limit_attribute_name)): this._limit;

        this.init();        
    }
    
    disconnectedCallback () {}
}

try {
    (function() {
        window.customElements.define(NAME, WcTeam);
    })();
}
catch (err) {
    console.error(err);
}