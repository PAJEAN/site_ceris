// @ts-check

import { BaseCustomElements } from 'JS/lib/base-custom-elements';
/** Store **/
import { TEACHING_MANAGER } from "JS/store/modules/teaching/s-teaching";
import { Teaching } from "JS/store/modules/teaching/teaching";


const ID = {
    main: 'wc-main',
    title: 'teaching-title',
    resume: 'teaching-resume',
    keywords: 'teaching-keywords',
    time: 'teaching-time',
    level: 'teaching-level',
    manager: 'teaching-manager',
    image: 'teaching-image',
};

const TEMPLATE = document.createElement('template');
TEMPLATE.innerHTML = /* html */`
    <style>
        .feature-icon {
            width: 60px;
            height: 60px;
            background: #FF7C4D;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            margin-bottom: 1rem;
        }
        .teaching-card {
            cursor: pointer;
            transition: all 0.3s ease;
        }        
        .teaching-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .teaching-banner img {
            width: 100%;
            height: 150px;
            object-fit: cover;
            display: block;
        }
        .teaching-level-badge {
            position: absolute;
            top: 12px;
            left: 12px;
            padding: 0.4rem 0.7rem;
            font-size: 0.75rem;
            backdrop-filter: blur(4px);
            background-color: var(--vermillion-light);
        }
    </style>

    <div id="${ID.main}">
        <div class="card base-card h-100 border-0 shadow-sm teaching-card overflow-hidden">

            <div class="teaching-banner position-relative">
                <img id="${ID.image}" src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?w=1200&h=260&fit=crop" alt="Bandeau">

                <span id="${ID.level}" class="badge teaching-level-badge">
                    Master
                </span>
            </div>

            <div class="card-body p-4">

                <h4 id="${ID.title}" class="fw-semibold mb-3">
                    Intelligence Artificielle et Data Science
                </h4>

                <p id="${ID.resume}" class="text-muted mb-4">
                    Formation approfondie en apprentissage automatique, traitement de données massives et analyse prédictive.
                </p>

                <div id="${ID.keywords}" class="d-flex gap-2 mb-4 flex-wrap">
                    <span class="badge base-badge">Machine Learning</span>
                    <span class="badge base-badge">Deep Learning</span>
                    <span class="badge base-badge">Big Data</span>
                </div>

                <div class="d-flex align-items-center text-muted small mt-3" title="Responsable">
                    <i data-lucide="user" class="me-2" style="width: 16px; height: 16px;"></i>
                    <span id="${ID.manager}">Dr. Jean Dupont</span>
                </div>

                <div class="d-flex align-items-center text-muted small mt-2">
                    <i data-lucide="clock" class="me-2" style="width: 16px; height: 16px;"></i>
                    <span id="${ID.time}">2 ans • Temps plein</span>
                </div>

            </div>
        </div>


    </div>
`;

export class WcTeachingCard extends BaseCustomElements {
    static teaching_id_attribute_name = 'data-teaching-id';

    constructor() {
        super();
        /** @type {HTMLDivElement} */
        this._content = document.createElement('div');

        this._teaching_id = undefined;
        /** @type {Teaching} */
        this._teaching = undefined;
    }

    #image() {
        /** @type {HTMLImageElement} */
        let tag = this._content.querySelector(`#${ID.image}`);        
        tag.src = this._teaching.image;
    }

    /**
     * 
     * @param {string[]} keywords
     */
    #keywords(keywords) {
        let create_badge = /** @param {string} keyword */ (keyword) => {
            let span = document.createElement('span');
            span.classList.add('badge', 'base-badge');
            span.textContent = keyword;
            return span;
        };

        if (!keywords) { return ''; }

        let tag = this._content.querySelector(`#${ID.keywords}`);
        for (let keyword of keywords) {
            tag.appendChild(create_badge(keyword));
        }
    }

    #level() {
        let tag = this._content.querySelector(`#${ID.level}`);
        tag.textContent = this._teaching.level;
    }

    #manager() {
        let tag = this._content.querySelector(`#${ID.manager}`);
        tag.textContent = this._teaching.manager;
    }

    #resume() {
        let tag = this._content.querySelector(`#${ID.resume}`);
        tag.textContent = this._teaching.resume;
    }

    #time() {
        let tag = this._content.querySelector(`#${ID.time}`);
        tag.textContent = this._teaching.time;
    }

    #title() {
        let tag = this._content.querySelector(`#${ID.title}`);
        tag.textContent = this._teaching.title;
    }

    init() {
        this.#keywords(this._teaching.keywords);
        this.#image();
        this.#level();
        this.#manager();
        this.#resume();
        this.#time();
        this.#title();
    }

    connectedCallback() {
        this.appendChild(TEMPLATE.content.cloneNode(true));

        /** @type {HTMLDivElement} */
        this._content = this.querySelector(`#${ID.main}`) ?? this._content;

        this._teaching_id = this.hasAttribute(WcTeachingCard.teaching_id_attribute_name) ? this.getAttribute(WcTeachingCard.teaching_id_attribute_name): this._teaching_id;
        
        if (TEACHING_MANAGER.exist(this._teaching_id)) {
            this._teaching = TEACHING_MANAGER.get_by_id(this._teaching_id);
            this.init();
        }
    }

    disconnectedCallback() {}
}

WcTeachingCard.define();