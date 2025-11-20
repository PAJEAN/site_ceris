// @ts-check

import { BaseCustomElements } from 'JS/lib/base-custom-elements';
/** Store **/
import { TEAM_MANAGER } from 'JS/store/modules/team/s-team';
import { WcTeamCard } from 'JS/components/wc-team-card';

const ID = {
    main: 'div-main',
    team_container: 'team-container',
};

const TEMPLATE = document.createElement('template');
TEMPLATE.innerHTML = /* html */`

    <style>
    </style>

    <div id="${ID.main}">
        <div id="${ID.team_container}" class="row g-4">
            <${WcTeamCard.tag_name} ${WcTeamCard.team_id_attribute_name}="test#1"></${WcTeamCard.tag_name}>
        </div>
    </div>
`;

export class WcTeam extends BaseCustomElements {
    static limit_attribute_name = 'data-limit';

    constructor() {
        super();
        /** @type {HTMLDivElement} */
        this._content = document.createElement('div');

        this._limit = -1;
    }

    _team_card() {
        let tag = this._content.querySelector(`#${ID.team_container}`);
        tag.textContent = '';
        for (let [index, team] of TEAM_MANAGER.order_by_priority().entries()) {
            let div = document.createElement('div');
            div.classList.add('col-md-6', 'col-lg-4');
            let team_tag = document.createElement(WcTeamCard.tag_name);
            team_tag.setAttribute(WcTeamCard.team_id_attribute_name, team.id);
            div.appendChild(team_tag);
            tag.appendChild(div);

            if (this._limit != -1 && index + 1 >= this._limit) {
                break;
            }
        }
    }

    init() {
        this._team_card();
    }
    
    connectedCallback () {
        this.appendChild(TEMPLATE.content.cloneNode(true));

        /** @type {HTMLDivElement} */
        this._content = this.querySelector(`#${ID.main}`) ?? this._content;

        this._limit = this.hasAttribute(WcTeam.limit_attribute_name) ? parseInt(this.getAttribute(WcTeam.limit_attribute_name)): this._limit;

        this.init();
    }
    
    disconnectedCallback () {}
}

WcTeam.define();