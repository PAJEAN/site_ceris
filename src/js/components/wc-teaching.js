// @ts-check

import { BaseCustomElements } from 'JS/lib/base-custom-elements';
/** Store **/
import { TEACHING_MANAGER } from 'JS/store/modules/teaching/s-teaching';
import { WcTeachingCard } from 'JS/components/wc-teaching-card';


const ID = {
    main: 'div-main',
    teaching_container: 'teaching-container',
    modal: 'teaching-modal',
    modal_image: 'teaching-modal-image',
    modal_badge: 'teaching-modal-badge',
    modal_duration: 'teaching-modal-duration',
    modal_title: 'teaching-modal-title',
    modal_resume: 'teaching-modal-resume',
    modal_extend_resume: 'teaching-modal-extend-resume',
    modal_manager: 'teaching-modal-manager'
};

const TEMPLATE = document.createElement('template');
TEMPLATE.innerHTML = /* html */`

    <style>
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
        .teaching-modal-level-badge {
            font-size: 0.75rem;
            background-color: var(--vermillion-light);
        }
    </style>

    <div id="${ID.main}">
        <div id="${ID.teaching_container}" class="row g-4">
            <${WcTeachingCard.tag_name} ${WcTeachingCard.teaching_id_attribute_name}="test#1"></${WcTeachingCard.tag_name}>
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
                                    <span id="${ID.modal_badge}" class="badge teaching-modal-level-badge"></span>
                                    <small id="${ID.modal_duration}" class="text-muted"></small>
                                </div>
                                <div class="d-flex align-items-center text-muted small">
                                    <i data-lucide="users" class="me-2" style="width: 16px; height: 16px;"></i>
                                    <span id="${ID.modal_manager}"></span>
                                </div>
                                </div>
                            </div>

                            <!-- Texte principal -->
                            <div class="col-lg-8">
                                <p id="${ID.modal_resume}" class="text-muted fs-6"></p>
                                <hr>
                                <h5 class="fw-semibold mb-3">Résumé</h5>
                                <p id="${ID.modal_extend_resume}" class="text-muted" style="text-align: justify"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

export class WcTeaching extends BaseCustomElements {
    static limit_attribute_name = 'data-limit';

    constructor() {
        super();
        /** @type {HTMLDivElement} */
        this._content = document.createElement('div');

        this._limit = -1;
    }

    #modal() {
            const modal_tag = this.querySelector(`#${ID.modal}`);
            // @ts-ignore
            const modal = new bootstrap.Modal(modal_tag);
    
            this._content.querySelectorAll(WcTeachingCard.tag_name).forEach(card => {
                card.addEventListener('click', () => {                    
                    let teaching_id = card.getAttribute(WcTeachingCard.teaching_id_attribute_name);
                    let teaching = TEACHING_MANAGER.get_by_id(teaching_id);
                    this._content.querySelector(`#${ID.modal_title}`).textContent = teaching.title;
                    /** @type {HTMLImageElement} */
                    let modal_image = this._content.querySelector(`#${ID.modal_image}`);
                    modal_image.src = teaching.image;
                    let badge = this._content.querySelector(`#${ID.modal_badge}`)
                    badge.textContent = teaching.level;
                    this._content.querySelector(`#${ID.modal_duration}`).textContent = teaching.time;
                    this._content.querySelector(`#${ID.modal_resume}`).textContent = teaching.resume;
                    
                    this._content.querySelector(`#${ID.modal_extend_resume}`).textContent = teaching.extended_resume;
                    this._content.querySelector(`#${ID.modal_manager}`).textContent = teaching.manager;
    
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

    #teaching_card() {
        let tag = this._content.querySelector(`#${ID.teaching_container}`);
        tag.textContent = '';
        for (let [index, teaching] of TEACHING_MANAGER.programs.entries()) {
            let div = document.createElement('div');
            div.classList.add('col-md-6');
            let teaching_tag = document.createElement(WcTeachingCard.tag_name);
            teaching_tag.setAttribute(WcTeachingCard.teaching_id_attribute_name, teaching.id);
            div.appendChild(teaching_tag);
            tag.appendChild(div);

            if (this._limit != -1 && index + 1 >= this._limit) {
                break;
            }
        }
    }

    init() {
        this.#teaching_card();
        this.#modal();
        // @ts-ignore
        lucide.createIcons();
    }
    
    connectedCallback () {
        this.appendChild(TEMPLATE.content.cloneNode(true));

        /** @type {HTMLDivElement} */
        this._content = this.querySelector(`#${ID.main}`) ?? this._content;

        this._limit = this.hasAttribute(WcTeaching.limit_attribute_name) ? parseInt(this.getAttribute(WcTeaching.limit_attribute_name)): this._limit;

        this.init();
    }
    
    disconnectedCallback () {}
}

WcTeaching.define();