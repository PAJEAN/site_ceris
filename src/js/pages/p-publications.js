// @ts-check

/** NS **/
import { PAGES } from 'JS/pages/__ns__';
import { WC } from 'JS/components/__ns__';

try {
    const TAG_IDS = {
        main:    'p-main'
    };

    (function() {
        const PAGE_NAME = PAGES.PUBLICATIONS;

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

            <div id="${TAG_IDS.main}">
                <${WC.NAV}></${WC.NAV}>
                
                <section class="pt-2 pb-5 padding-global">
                    <div class="container-fluid py-5">
                        <div class="row mb-5">
                            <div class="col-lg-8 mx-auto text-center">
                                <h2 class="display-5 section-title mb-3">Publications récentes</h2>
                                <p class="lead text-muted">Nos contributions à la recherche scientifique en informatique</p>
                            </div>
                        </div>
                        
                        <${WC.PUBLICATIONS} data-rows="3" class="section-color"></${WC.PUBLICATIONS}>
                    </div>
                </section>
            </div>
        `;

        window.customElements.define(PAGE_NAME, class extends HTMLElement {
            constructor() {
                super();
                /** @type {HTMLDivElement} */
                this._content = document.createElement('div');

                /* Params to HAL request */
                this._rows = 5;
                this._start = 0;
            }

            

            init() {}
         
            connectedCallback () {
                this.appendChild(TEMPLATE.content.cloneNode(true));

                /** @type {HTMLDivElement} */
                this._content = this.querySelector(`#${TAG_IDS.main}`) ?? this._content;

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