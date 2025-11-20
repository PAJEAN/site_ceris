// @ts-check

import { BaseCustomElements } from 'JS/lib/base-custom-elements';
/** Components **/
import { WcNav } from 'JS/components/wc-nav';
import { WcPagination } from 'JS/components/wc-pagination';
import { WcPublications } from 'JS/components/wc-publications';
/** Store **/
import { HAL } from 'JS/store/modules/hal/s-hal';


const ID = {
    main: 'p-main',
    wc_pagination: 'wc-pagination',
    wc_pagination_container: 'wc-pagination-container',
    wc_publications_container: 'wc-publication-container',
};

const TEMPLATE = document.createElement('template');
TEMPLATE.innerHTML = /* html */`

    <style>
    </style>

    <div id="${ID.main}">
        <${WcNav.tag_name}></${WcNav.tag_name}>
        
        <section class="pt-2 pb-5 padding-global">
            <div class="container-fluid py-5">
                <div class="row mb-5">
                    <div class="col-lg-8 mx-auto text-center">
                        <h2 class="display-5 section-title mb-3">Publications récentes</h2>
                        <p class="lead text-muted">Nos contributions à la recherche scientifique en informatique</p>
                    </div>
                </div>
                
                <div id="${ID.wc_publications_container}"></div>
            </div>
            <div id="${ID.wc_pagination_container}">
                <${WcPagination.tag_name} id="${ID.wc_pagination}" ${WcPagination.rows_attribute_name}="5"></${WcPagination.tag_name}>
            </div>
        </section>
    </div>
`;

export class PPublication extends BaseCustomElements {
    constructor() {
        super();
        /** @type {HTMLDivElement} */
        this._content = document.createElement('div');

        /* Params to HAL request */
        this._rows = 10;
        this._start = 0;
    }

    _clear_pagination() {
        let tag = this._content.querySelector(`#${ID.wc_pagination_container}`);
        tag.textContent = '';
    }

    _clear_publications() {
        let tag = this._content.querySelector(`#${ID.wc_publications_container}`);
        tag.textContent = '';
    }
    
    _observer(mutationsList) {
        for(const mutation of mutationsList) { // List of detected mutations.
            if (mutation.type === 'attributes') { // Check if it's an attribute modification.
                if (mutation.attributeName == WcPagination.current_page_attribute_name) {
                    this._start = mutation.target.current_page * this._rows;
                    HAL.fetch(this._rows, this._start)
                    .then(() => {                  
                        this._publications();
                    });
                }
            }
        }
    }

    _observing() {
        let wc_pagination = this._content.querySelector(`#${ID.wc_pagination}`);
        this.observer.disconnect();
        this.observer.observe(wc_pagination, { attributes: true });
    }

    _pagination() {
        this._clear_pagination();
        let tag = this._content.querySelector(`#${ID.wc_pagination_container}`);
        let wc_pagination = document.createElement(`${WcPagination.tag_name}`);
        wc_pagination.id = ID.wc_pagination;
        wc_pagination.setAttribute(WcPublications.rows_attribute_name, this._rows.toString());
        tag.appendChild(wc_pagination);
    }

    _publications() {
        this._clear_publications();
        let tag = this._content.querySelector(`#${ID.wc_publications_container}`);
        let wc_publications = document.createElement(`${WcPublications.tag_name}`);
        wc_publications.setAttribute(WcPublications.rows_attribute_name, this._rows.toString());
        tag.appendChild(wc_publications);
    }

    init() {
        this._publications();
        this._pagination();
        this.observer && this._observing();
    }
    
    connectedCallback () {
        this.appendChild(TEMPLATE.content.cloneNode(true));

        /** @type {HTMLDivElement} */
        this._content = this.querySelector(`#${ID.main}`) ?? this._content;

        this.observer = new MutationObserver(this._observer.bind(this));

        HAL.fetch(this._rows, this._start)
        .then(() => {
            this.init();
        });
    }
    
    disconnectedCallback () {
        this.observer && this.observer.disconnect();
    }
}