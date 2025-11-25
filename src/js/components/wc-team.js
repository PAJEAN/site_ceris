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

    static breakpoints = {
        lg: 992,
        xl: 1200,
    };

    constructor() {
        super();
        /** @type {HTMLDivElement} */
        this._content = document.createElement('div');

        this._limit = false;
    }

    _get_cards_count() {
        let width = window.innerWidth;

        if (width >= WcTeam.breakpoints.xl)  return 8;
        if (width >= WcTeam.breakpoints.lg)  return 6;

        return 4;
    }

    _team_card() {        
        let limit = -1;
        if (this._limit) {
            limit = this._get_cards_count();
        }

        let tag = this._content.querySelector(`#${ID.team_container}`);
        tag.textContent = '';
        for (let [index, team] of TEAM_MANAGER.order_by_priority().entries()) {
            let div = document.createElement('div');
            div.classList.add('col-md-6', 'col-lg-4', 'col-xl-3');
            let team_tag = document.createElement(WcTeamCard.tag_name);
            team_tag.setAttribute(WcTeamCard.team_id_attribute_name, team.id);
            div.appendChild(team_tag);
            tag.appendChild(div);

            if (limit != -1 && index + 1 >= limit) {
                break;
            }
        }
    }

    init() {
        this._team_card();
    }

    init_event() {
        window.addEventListener("resize", this._team_card);
    }
     
    connectedCallback () {
        this.appendChild(TEMPLATE.content.cloneNode(true));

        /** @type {HTMLDivElement} */
        this._content = this.querySelector(`#${ID.main}`) ?? this._content;

        this._limit = this.hasAttribute(WcTeam.limit_attribute_name) ? Boolean(this.getAttribute(WcTeam.limit_attribute_name)): this._limit;

        this._team_card = this._team_card.bind(this);

        this.init();
        this.init_event();
    }
    
    disconnectedCallback () {
        window.removeEventListener("resize", this._team_card);
    }
}

WcTeam.define(import.meta.url, true);