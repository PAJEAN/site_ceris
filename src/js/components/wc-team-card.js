// @ts-check

/* Components */
import { WC } from "./__ns__";
/** Store **/
import { TEAM_MANAGER } from "JS/store/modules/team/s-team";
import { Team } from "JS/store/modules/team/team";


const TAG_IDS = {
    wc_main: 'wc-main',
};

const COMPONENT_NAME = WC.PROJET_CARD;

const TEMPLATE = document.createElement('template');
TEMPLATE.innerHTML = /* html */`
    <style>
    </style>

    <div id="${TAG_IDS.wc_main}">
        
    </div>
`;

export class WcTeamCard extends HTMLElement {
    static team_id_attribute_name = 'data-team-id';

    constructor() {
        super();
        /** @type {HTMLDivElement} */
        this._content = document.createElement('div');

        this._team_id = undefined;
        /** @type {Team} */
        this._team = undefined;
    }

    init() {
        
    }

    connectedCallback() {
        this.appendChild(TEMPLATE.content.cloneNode(true));

        /** @type {HTMLDivElement} */
        this._content = this.querySelector(`#${TAG_IDS.wc_main}`) ?? this._content;

        this._team_id = this.hasAttribute(WcTeamCard.team_id_attribute_name) ? this.getAttribute(WcTeamCard.team_id_attribute_name): this._team_id;
        
        if (TEAM_MANAGER.exist(this._team_id)) {
            this._team = TEAM_MANAGER.get_by_id(this._team_id);
            this.init();
        }
    }

    disconnectedCallback() {}
}


try {
    (function() {
        window.customElements.define(COMPONENT_NAME, WcTeamCard);
    })();
}
catch (err) {
    console.error(err);
}