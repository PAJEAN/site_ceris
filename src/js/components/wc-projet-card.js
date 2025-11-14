// @ts-check

/* Components */
import { WC } from "./__ns__";
/** Store **/
import { PROJECT_MANAGER } from "JS/store/modules/projects/s-projects";
import { Project } from "JS/store/modules/projects/project";


const TAG_IDS = {
    wc_main: 'wc-main',
    image: 'project-image',
    badge: 'project-badge',
    duration: 'project-duration',
    title: 'project-title',
    abstract: 'project-abstract',
    authors: 'project-authors'
};

const COMPONENT_NAME = WC.PROJET_CARD;

const TEMPLATE = document.createElement('template');
TEMPLATE.innerHTML = /* html */`
    <style>
        .project-img {
            height: 220px;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .project-card:hover .project-img {
            transform: scale(1.05);
        }
    </style>

    <div id="${TAG_IDS.wc_main}">
        <div class="card base-card h-100 border-0 shadow-sm project-card">
            <img id="${TAG_IDS.image}" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop" alt="Projet" class="project-img">
            <div class="card-body d-flex flex-column justify-content-between gap-2">
                <div>
                    <div class="d-flex align-items-center gap-2 mb-3">
                        <div id="${TAG_IDS.badge}" class="d-flex align-items-center">
                            <span class="badge bg-warning badge-custom">Warning</span>
                        </div>
                        <small id="${TAG_IDS.duration}" class="text-muted"></small>
                    </div>
                    <h5 id="${TAG_IDS.title}" class="card-title fw-semibold">Identifiant introuvable</h5>
                    <p id="${TAG_IDS.abstract}" class="card-text small text-muted"></p>
                </div>
                <div class="d-flex align-items-center text-muted small">
                    <i data-lucide="users" class="me-2" style="width: 16px; height: 16px;"></i>
                    <span id="${TAG_IDS.authors}"></span>
                </div>
            </div>
        </div>
    </div>
`;

export class WcProjectCard extends HTMLElement {
    static project_id_attribute_name = 'data-project-id';

    constructor() {
        super();
        /** @type {HTMLDivElement} */
        this._content = document.createElement('div');

        this._project_id = undefined;
        /** @type {Project} */
        this._project = undefined;
    }

    _abstract() {
        let tag = this._content.querySelector(`#${TAG_IDS.abstract}`);
        tag.textContent = this._project.short_abstract;
    }

    _authors() {
        let tag = this._content.querySelector(`#${TAG_IDS.authors}`);
        tag.textContent = this._project.authors;
    }

    _badge() {
        let tag = this._content.querySelector(`#${TAG_IDS.badge}`);
        tag.textContent = '';
        tag.appendChild(this._project.badge());
    }

    _duration() {
        let tag = this._content.querySelector(`#${TAG_IDS.duration}`);
        tag.textContent = this._project.duration();
    }

    _image() {
        /** @type {HTMLImageElement} */
        let tag = this._content.querySelector(`#${TAG_IDS.image}`);        
        tag.src = this._project.image;
    }

    _title() {
        let tag = this._content.querySelector(`#${TAG_IDS.title}`);
        tag.textContent = this._project.title;
    }

    init() {
        this._image();
        this._badge();
        this._duration();
        this._title();
        this._abstract();
        this._authors();
    }

    connectedCallback() {
        this.appendChild(TEMPLATE.content.cloneNode(true));

        /** @type {HTMLDivElement} */
        this._content = this.querySelector(`#${TAG_IDS.wc_main}`) ?? this._content;

        this._project_id = this.hasAttribute(WcProjectCard.project_id_attribute_name) ? this.getAttribute(WcProjectCard.project_id_attribute_name): this._project_id;
        
        if (PROJECT_MANAGER.exist(this._project_id)) {
            this._project = PROJECT_MANAGER.get_by_id(this._project_id);
            this.init();
        }
    }

    disconnectedCallback() {}
}


try {
    (function() {
        window.customElements.define(COMPONENT_NAME, WcProjectCard);
    })();
}
catch (err) {
    console.error(err);
}