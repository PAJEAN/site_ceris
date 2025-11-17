// @ts-check

/** NS **/
import { PAGES } from 'JS/pages/__ns__';
import { WC } from 'JS/components/__ns__';

const ID = {
    main: 'p-main',
};

const PAGE_NAME = PAGES.TEAM;

const TEMPLATE = document.createElement('template');
TEMPLATE.innerHTML = /* html */`

    <style>
        /* test */
        .modal-content {
            border-radius: 1rem;
        }

        .modal-body {
            max-height: 80vh;
            overflow-y: auto;
        }

        .card {
            cursor: pointer;
        }
        
        @media (max-width: 992px) {
            .modal-image {
                width: 100%;
                margin-bottom: 1rem;
            }
        }
    </style>

    <div id="${ID.main}">
        <${WC.NAV}></${WC.NAV}>

        <section class="pt-2 pb-5 padding-global">
            <div class="container pt-5">

                <div class="row mb-5">
                    <div class="col-lg-8 mx-auto text-center">
                        <h2 class="display-5 section-title mb-3">Notre équipe</h2>
                        <p class="lead text-muted">Des experts passionnés dédiés à faire avancer la recherche en informatique</p>
                    </div>
                </div>

                <!-- Researchers -->
                <div class="mb-5">
                    <${WC.TEAM}></${WC.TEAM}>
            </div>
        </section>
    </div>
`;

class PTeam extends HTMLElement {
    constructor() {
        super();
        /** @type {HTMLDivElement} */
        this._content = document.createElement('div');
    }

    init() {}
    
    connectedCallback () {
        this.appendChild(TEMPLATE.content.cloneNode(true));

        /** @type {HTMLDivElement} */
        this._content = this.querySelector(`#${ID.main}`) ?? this._content;

        this.init();
    }
    
    disconnectedCallback () {}
}

try {
    (function() {
        window.customElements.define(PAGE_NAME, PTeam);
    })();
}
catch (err) {
    console.error(err);
}