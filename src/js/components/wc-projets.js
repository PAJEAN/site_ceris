// @ts-check

/*** Librairies ***/
import { BaseCustomElements } from 'JS/lib/base-custom-elements';
/** Store **/
import { PROJECT_MANAGER } from 'JS/store/modules/projects/s-projects';
import { WcProjectCard } from 'JS/components/wc-projet-card';

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
        
        @media (max-width: 992px) {
            .modal-image {
                width: 100%;
                margin-bottom: 1rem;
            }
        }
    </style>

    <div id="${ID.main}">
        <div id="${ID.project_container}" class="row g-4">
            <div class="col-md-6 col-lg-4">
                <${WcProjectCard.tag_name} data-project-id="test#1"></${WcProjectCard.tag_name}>
            </div>
        </div>        

        <!-- ✅ Modal large -->
        <div class="modal fade" id="${ID.modal}" aria-labelledby="${ID.modal_title}" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-centered">
                <div class="modal-content border-0 shadow-lg">
                    <div class="modal-body p-4 p-lg-5">
                        <div class="d-flex justify-content-between align-items-start mb-4">
                            <h3 class="fw-semibold mb-0" id="${ID.modal_title}"></h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="row g-4">
                            <!-- Image (colonne fine à gauche sur grand écran) -->
                            <div class="col-lg-4">
                                <img id="${ID.modal_image}" class="img-fluid rounded shadow-sm modal-image" alt="">
                                <div class="mt-3">
                                <div class="d-flex align-items-center gap-2 mb-2">
                                    <span id="${ID.modal_badge}" class="badge"></span>
                                    <small id="${ID.modal_duration}" class="text-muted"></small>
                                </div>
                                <div class="d-flex align-items-center text-muted small">
                                    <i data-lucide="users" class="me-2" style="width: 16px; height: 16px;"></i>
                                    <span id="${ID.modal_authors}"></span>
                                </div>
                                </div>
                            </div>

                            <!-- Texte principal -->
                            <div class="col-lg-8">
                                <p id="${ID.modal_abstract}" class="text-muted fs-6"></p>
                                <hr>
                                <h5 class="fw-semibold mb-3">Résumé</h5>
                                <p id="${ID.modal_extend_abstract}" class="text-muted" style="text-align: justify"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>                
    </div>
`;

export class WcProjets extends BaseCustomElements {
    static limit_attribute_name = 'data-limit';

    constructor() {
        super();
        /** @type {HTMLDivElement} */
        this._content = document.createElement('div');

        this._limit = -1;
    }

    _modal() {
        const modal_tag = this.querySelector(`#${ID.modal}`);
        // @ts-ignore
        const modal = new bootstrap.Modal(modal_tag);

        this._content.querySelectorAll(WcProjectCard.tag_name).forEach(card => {
            card.addEventListener('click', () => {
                let project_id = card.getAttribute(WcProjectCard.project_id_attribute_name);
                let project = PROJECT_MANAGER.get_by_id(project_id);
                
                this._content.querySelector(`#${ID.modal_title}`).textContent = project.title;
                /** @type {HTMLImageElement} */
                let modal_image = this._content.querySelector(`#${ID.modal_image}`);
                modal_image.src = project.image;
                let badge = this._content.querySelector(`#${ID.modal_badge}`)
                badge.textContent = '';
                badge.appendChild(project.badge());
                this._content.querySelector(`#${ID.modal_duration}`).textContent = project.duration();
                this._content.querySelector(`#${ID.modal_abstract}`).textContent = project.short_abstract;
                this._content.querySelector(`#${ID.modal_extend_abstract}`).textContent = project.extend_abstract;
                this._content.querySelector(`#${ID.modal_authors}`).textContent = project.authors;

                modal.show();
            });            
        });

        this._content.addEventListener('hide.bs.modal', function (event) {
            if (document.activeElement) {
                // @ts-ignore
                document.activeElement.blur();
            }
        });
    }

    _project_card() {
        let tag = this._content.querySelector(`#${ID.project_container}`);
        tag.textContent = '';
        for (let [index, project] of PROJECT_MANAGER.order_by_start_date().entries()) {
            let div = document.createElement('div');
            div.classList.add('col-md-6', 'col-lg-4');
            let project_tag = document.createElement(WcProjectCard.tag_name);
            project_tag.setAttribute(WcProjectCard.project_id_attribute_name, project.id);
            div.appendChild(project_tag);
            tag.appendChild(div);

            if (this._limit != -1 && index + 1 >= this._limit) {
                break;
            }
        }
    }

    init() {
        this._project_card();
        this._modal();

        // @ts-ignore
        lucide.createIcons();
    }
    
    connectedCallback () {
        this.appendChild(TEMPLATE.content.cloneNode(true));

        /** @type {HTMLDivElement} */
        this._content = this.querySelector(`#${ID.main}`) ?? this._content;

        this._limit = this.hasAttribute(WcProjets.limit_attribute_name) ? parseInt(this.getAttribute(WcProjets.limit_attribute_name)): this._limit;

        this.init();        
    }
    
    disconnectedCallback () {}
}