// @ts-check

/*** Librairies ***/
import { BaseCustomElements } from 'JS/lib/base-custom-elements';
/** Store **/
import { HAL } from 'JS/store/modules/hal/s-hal';
import { Publication } from 'JS/store/modules/hal/publication';


const ID = {
    wc_main: 'wc-main'
};

const TEMPLATE = document.createElement('template');
TEMPLATE.innerHTML = /* html */`

    <style>
        .publication-item {
            border-left: 3px solid var(--primary-text);
            transition: transform 0.3s ease;
        }

        .publication-item:hover {
            border-left-color: var(--vermillion-light);
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
    </style>

    <div id="${ID.wc_main}" class="row g-4">
        <div class="col-12">
            <div class="publication-item base-radius-16 base-shadow p-4">
                <div class="d-flex justify-content-between align-items-start">
                    <div class="flex-grow-1">
                        <h5 class="fw-semibold mb-2">Deep Learning Approaches for Real-Time Object Detection in Autonomous Systems</h5>
                        <p class="text-muted small mb-3">M. Durand, C. Dubois, J. Moreau</p>
                        <div class="d-flex gap-2 mb-3 flex-wrap">
                            <span class="badge badge-config">Intelligence Artificielle</span>
                            <span class="badge badge-config">Vision par ordinateur</span>
                        </div>
                        <p class="small text-muted mb-0">IEEE Transactions on Neural Networks and Learning Systems, 2024</p>
                    </div>
                    <a href="#" class="btn btn-outline-secondary btn-sm ms-3">
                        <i data-lucide="external-link" style="width: 16px; height: 16px;"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
`;

export class WcPublications extends BaseCustomElements {
    static rows_attribute_name = 'data-rows';

    constructor() {
        super();
        /** @type {HTMLDivElement} */
        this._content = document.createElement('div');

        /* Params to HAL request */
        this._rows = 5;
    }

    /**
     * 
     * @param {string[]} keywords
     */
    _keywords(keywords) {
        let create_badge = /** @param {string} keyword */ (keyword) => /* html */`<span class="badge base-badge">${keyword}</span>`;

        if (!keywords) { return ''; }

        let badges = [];
        for (let keyword of keywords) {
            badges.push(create_badge(keyword));
        }

        return /* html */`
            <div class="d-flex gap-2 mb-3 flex-wrap">
                ${badges.join('')}
            </div>
        `;
    }

    /**
     * 
     * @param {Publication} publication 
     */
    _publish_in(publication) {
        let div_content = publication.publish_in();

        if (!div_content) { return /* html */`
            <p class="small text-muted mb-0">
                ${publication.year}
            </p>
        `;}

        return /* html */`
            <p class="small text-muted mb-0">
                ${div_content} - ${publication.year}
            </p>
        `;
    }

    /**
     * 
     * @param {Publication} publication 
     */
    _html(publication) {
        let div_content = /* html */`
        <div class="publication-item base-radius-16 base-shadow p-4">
            <div class="d-flex justify-content-between align-items-start">
                <div class="flex-grow-1">
                    <h5 class="fw-semibold mb-2">${publication.first_title}</h5>
                    <p class="text-muted small mb-3">${publication.authors.join(', ')}</p>
                    ${this._keywords(publication.keywords)}
                    ${this._publish_in(publication)}
                </div>
                <a href="${publication.uri}" target="_blank" class="btn btn-outline-secondary btn-sm ms-3">
                    <i data-lucide="external-link" style="width: 16px; height: 16px;"></i>
                </a>
            </div>
        </div>`;
        
        let div = document.createElement('div');
        div.classList.add('col-12');
        div.innerHTML = div_content;
        return div;
    }

    clear() {
        this._content.textContent = '';
    }

    render() {
        for (let publication of HAL.publications) {
            if (!publication.is_valid()) { continue; }
            
            this._content.appendChild(this._html(publication));
        }
    }

    init() {
        this.clear();
        this.render();
        // @ts-ignore
        lucide.createIcons();
    }
    
    connectedCallback () {
        this.appendChild(TEMPLATE.content.cloneNode(true));

        /** @type {HTMLDivElement} */
        this._content = this.querySelector(`#${ID.wc_main}`) ?? this._content;

        this._rows = this.hasAttribute(WcPublications.rows_attribute_name) ? parseInt(this.getAttribute(WcPublications.rows_attribute_name) ?? this._rows.toString()): this._rows;

        this.init();
    }
    
    disconnectedCallback () {}
}