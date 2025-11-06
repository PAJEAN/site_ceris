// @ts-check

/** NS **/
import { WC } from 'JS/components/__ns__';
/** Store **/
import { HAL } from 'JS/store/modules/hal/s-hal';
import { Publication } from 'JS/store/modules/hal/publication';


try {
    const TAG_IDS = {
        wc_main:    'wc-main'
    };

    (function() {
        const NAME = WC.PUBLICATIONS;

        const TEMPLATE = document.createElement('template');
        TEMPLATE.innerHTML = /* html */`

            <style>
                .publication-item {
                    border-left: 3px solid var(--primary-text);
                }

                .publication-item:hover {
                    border-left-color: var(--vermillion-light);
                }
            </style>

            <div id="${TAG_IDS.wc_main}" class="row g-4">
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

        window.customElements.define(NAME, class extends HTMLElement {
            constructor() {
                super();
                /** @type {HTMLDivElement} */
                this._content = document.createElement('div');

                /* Params to HAL request */
                this._rows = 5;
                this._start = 0;
                
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

                if (!div_content) { return ''; }

                return /* html */`
                    <p class="small text-muted mb-0">
                        ${div_content}
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

            async hal() {
                HAL.fetch(this._rows);
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

            async init() {
                this.clear();
                await this.hal();
                this.render();
                // @ts-ignore
                lucide.createIcons();
            }
         
            connectedCallback () {
                this.appendChild(TEMPLATE.content.cloneNode(true));

                /** @type {HTMLDivElement} */
                this._content = this.querySelector(`#${TAG_IDS.wc_main}`) ?? this._content;

                this._rows = this.hasAttribute('data-rows') ? parseInt(this.getAttribute('data-rows') ?? this._rows.toString()): this._rows;
                this._start = this.hasAttribute('data-start') ? parseInt(this.getAttribute('data-start') ?? this._start.toString()): this._start;

                this.init();
            }
          
            disconnectedCallback () {}
        });
    })();
}
catch (err) {
    console.error(err);
}