// @ts-check

import { BaseCustomElements } from 'JS/lib/base-custom-elements';
/** Store **/
import { TEAM_MANAGER } from "JS/store/modules/team/s-team";
import { Team } from "JS/store/modules/team/team";


const ID = {
    main: 'wc-main',
    image: 'team-image',
    name: 'team-name',
    job: 'team-job',
    keywords: 'team-keywords',
    links: 'team-link'
};

const TEMPLATE = document.createElement('template');
TEMPLATE.innerHTML = /* html */`
    <style>
        .team-img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 50%;
            border: 3px solid #fff;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .social-a {
            width: 40px;
            height: 40px;
            border-radius: 8px;
            color: var(--vermillion-light);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        .social-a:hover {
            background: var(--vermillion-light);
            color: white;
            transform: translateY(-3px);
        }
        .social-icon {
            width: 32px;
            height: 32px;
        }
        .team-card {
            transition: all 0.3s ease;
        }
        .team-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
    </style>

    <div id="${ID.main}" class="h-100">
        <div class="card base-card h-100 border-0 shadow-sm team-card">
            <div class="card-body d-flex flex-column justify-content-between">
                <div>
                    <img id="${ID.image}" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&amp;h=400&amp;fit=crop" alt="Chercheur" class="team-img mb-3">
                    <h5 id="${ID.name}" class="fw-semibold mb-1">Dr. Marc Durand</h5>
                    <p id="${ID.job}" class="text-primary small mb-2">Directeur de recherche</p>
                    <p id="${ID.keywords}" class="small text-muted mb-3">Intelligence artificielle, Apprentissage automatique</p>
                </div>
                <div id="${ID.links}" class="d-flex gap-2">
                    <a href="#" class="social-a" title="Mail">
                        <img class="social-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/5e/ResearchGate_icon_SVG.svg"/>
                    </a>
                    <a href="#" class="social-a">
                        <i data-lucide="linkedin" style="width: 16px; height: 16px;"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
`;

export class WcTeamCard extends BaseCustomElements {
    static team_id_attribute_name = 'data-team-id';

    constructor() {
        super();
        /** @type {HTMLDivElement} */
        this._content = document.createElement('div');

        this._team_id = undefined;
        /** @type {Team} */
        this._team = undefined;
    }

    #full_name() {
        let tag = this._content.querySelector(`#${ID.name}`);
        tag.textContent = this._team.full_name();
    }

    #image() {
        /** @type {HTMLImageElement} */
        let tag = this._content.querySelector(`#${ID.image}`);        
        tag.src = this._team.image;
    }

    #job() {
        let tag = this._content.querySelector(`#${ID.job}`);        
        tag.textContent = this._team.job_title;
    }

    #keywords() {
        let tag = this._content.querySelector(`#${ID.keywords}`);
        tag.textContent = this._team.keywords.join(', ');
    }

    #links() {
        let tag = this._content.querySelector(`#${ID.links}`);
        tag.textContent = '';
        for (let link of this._team.links) {
            let a = document.createElement('a');
            let icon = document.createElement('img');
            icon.classList.add('social-icon');
            switch (link.name.toLowerCase()) {
                case 'mail':
                    a.href = `mailto:${link.url}`;
                    icon.src = 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Circle-icons-mail.svg';
                    break;
                case 'linkedin':
                    a.href = link.url;
                    icon.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg';
                    break;
                case 'researchgate':
                    a.href = link.url;
                    icon.src = 'https://upload.wikimedia.org/wikipedia/commons/5/5e/ResearchGate_icon_SVG.svg';
                    break;
                default:
                    a.href = link.url;
                    break;
            }
            a.classList.add('social-a');
            a.title = link.name.charAt(0).toUpperCase() + link.name.slice(1);
            a.appendChild(icon);
            this._content.querySelector(`#${ID.links}`).appendChild(a);
        }
    }

    init() {
        this.#full_name();
        this.#image();
        this.#job();
        this.#keywords();
        this.#links();
    }

    connectedCallback() {
        this.appendChild(TEMPLATE.content.cloneNode(true));

        /** @type {HTMLDivElement} */
        this._content = this.querySelector(`#${ID.main}`) ?? this._content;

        this._team_id = this.hasAttribute(WcTeamCard.team_id_attribute_name) ? this.getAttribute(WcTeamCard.team_id_attribute_name): this._team_id;
        
        if (TEAM_MANAGER.exist(this._team_id)) {
            this._team = TEAM_MANAGER.get_by_id(this._team_id);
            this.init();
        }
    }

    disconnectedCallback() {}
}

WcTeamCard.define(import.meta.url, true);