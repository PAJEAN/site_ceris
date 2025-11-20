// @ts-check

import { BaseCustomElements } from 'JS/lib/base-custom-elements';
/*** Components ***/
import { WcNav } from 'JS/components/wc-nav';
import { WcProjets } from 'JS/components/wc-projets';

const ID = {
    main: 'p-main',
    project_container: 'project-container',
    modal: 'project-modal',
    modal_image: 'modal-image',
    modal_badge: 'modal-badge',
    modal_duration: 'modal-duration',
    modal_title: 'modal-title',
    modal_abstract: 'modal-abstract',
    modal_extend_abstract: 'modal-extend-abstract',
    modal_authors: 'modal-authors'
};

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
        <${WcNav.tag_name}></${WcNav.tag_name}>
        
        <section class="pt-2 pb-5 padding-global">
            <div class="container-fluid py-5">
                <div class="row mb-5">
                    <div class="col-lg-8 mx-auto text-center">
                        <h2 class="display-5 section-title mb-3">Projets de recherche</h2>
                        <p class="lead text-muted">Nos initiatives actuelles pour repousser les frontières de l'informatique</p>
                    </div>
                </div>

                <div id="${ID.project_container}" class="row g-4">
                    <${WcProjets.tag_name}></${WcProjets.tag_name}>
                </div>

            </div>
        </section>
    </div>
`;

export class PProjets extends BaseCustomElements {
    constructor() {
        super();
        /** @type {HTMLDivElement} */
        this._content = document.createElement('div');
    }

    init() {
        // @ts-ignore
        lucide.createIcons();
    }
    
    connectedCallback () {
        this.appendChild(TEMPLATE.content.cloneNode(true));

        /** @type {HTMLDivElement} */
        this._content = this.querySelector(`#${ID.main}`) ?? this._content;

        this.init();        
    }
    
    disconnectedCallback () {}
}