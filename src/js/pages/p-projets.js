// @ts-check

/** NS **/
import { PAGES } from 'JS/pages/__ns__';
import { WC } from 'JS/components/__ns__';
/** Components **/
import { WcPagination } from 'JS/components/wc-pagination';
import { WcPublications } from 'JS/components/wc-publications';
/** Store **/
import { HAL } from 'JS/store/modules/hal/s-hal';


const TAG_IDS = {
    main: 'p-main',
    wc_pagination: 'wc-pagination',
    wc_pagination_container: 'wc-pagination-container',
    wc_publications_container: 'wc-publication-container',
};

const PAGE_NAME = PAGES.PROJETS;

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
        .project-img {
            height: 200px;
            object-fit: cover;
        }
        @media (max-width: 992px) {
            #projectModalImage {
            width: 100%;
            margin-bottom: 1rem;
            }
        }
    </style>

    <div id="${TAG_IDS.main}">
        <${WC.NAV}></${WC.NAV}>
        
        <section class="pt-2 pb-5 padding-global">
            <div class="container-fluid py-5">
                <div class="row mb-5">
                    <div class="col-lg-8 mx-auto text-center">
                        <h2 class="display-5 section-title mb-3">Projets de recherche</h2>
                        <p class="lead text-muted">Nos initiatives actuelles pour repousser les frontières de l'informatique</p>
                    </div>
                </div>

                <div class="row g-4">
                    <!-- ✅ Card (exemple) -->
                    <div class="col-md-6 col-lg-4">
                        <div class="card card-config h-100 border-0 shadow-sm project-card"
                            data-title="IA pour la santé prédictive"
                            data-status="En cours"
                            data-years="2023–2026"
                            data-image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
                            data-members="M. Durand, C. Dubois"
                            data-description="Développement d'algorithmes d'apprentissage profond pour la détection précoce de maladies à partir d'images médicales."
                            data-details="Ce projet explore l'utilisation de réseaux de neurones convolutifs pour identifier des biomarqueurs précoces de maladies chroniques. Il inclut une collaboration avec le CHU de Paris et vise à publier un ensemble de données ouvertes d'ici 2025. Un module d’explicabilité est également en développement pour améliorer la transparence des modèles IA. Ce projet explore l'utilisation de réseaux de neurones convolutifs pour identifier des biomarqueurs précoces de maladies chroniques. Il inclut une collaboration avec le CHU de Paris et vise à publier un ensemble de données ouvertes d'ici 2025. Un module d’explicabilité est également en développement pour améliorer la transparence des modèles IA. Ce projet explore l'utilisation de réseaux de neurones convolutifs pour identifier des biomarqueurs précoces de maladies chroniques. Il inclut une collaboration avec le CHU de Paris et vise à publier un ensemble de données ouvertes d'ici 2025. Un module d’explicabilité est également en développement pour améliorer la transparence des modèles IA. Ce projet explore l'utilisation de réseaux de neurones convolutifs pour identifier des biomarqueurs précoces de maladies chroniques. Il inclut une collaboration avec le CHU de Paris et vise à publier un ensemble de données ouvertes d'ici 2025. Un module d’explicabilité est également en développement pour améliorer la transparence des modèles IA.">
                            
                            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop" alt="Projet" class="project-img">
                            <div class="card-body d-flex flex-column justify-content-between gap-2">
                            <div>
                                <div class="d-flex align-items-center gap-2 mb-3">
                                <span class="badge bg-success badge-custom">En cours</span>
                                <small class="text-muted">2023–2026</small>
                                </div>
                                <h5 class="card-title fw-semibold">IA pour la santé prédictive</h5>
                                <p class="card-text small text-muted">
                                Développement d'algorithmes d'apprentissage profond pour la détection précoce de maladies à partir d'images médicales.
                                </p>
                            </div>
                            <div class="d-flex align-items-center text-muted small">
                                <i data-lucide="users" class="me-2" style="width: 16px; height: 16px;"></i>
                                <span>M. Durand, C. Dubois</span>
                            </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-md-6 col-lg-4">
                        <div class="card card-config h-100 border-0 shadow-sm">
                            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&amp;h=400&amp;fit=crop" alt="Projet" class="project-img">
                            <div class="card-body d-flex flex-column justify-content-between gap-2">
                                <div>
                                    <div class="d-flex align-items-center gap-2 mb-3">
                                        <span class="badge bg-success badge-custom">En cours</span>
                                        <small class="text-muted">2024-2027</small>
                                    </div>
                                    <h5 class="card-title fw-semibold">Sécurité quantique</h5>
                                    <p class="card-text small text-muted">Recherche sur les protocoles cryptographiques résistants aux attaques quantiques pour sécuriser les communications futures.</p>
                                </div>
                                <div class="d-flex align-items-center text-muted small">
                                    <i data-lucide="users" class="me-2" style="width: 16px; height: 16px;"></i>
                                    <span>S. Martin, T. Bernard</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                            <div class="card card-config h-100 border-0 shadow-sm">
                                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&amp;h=400&amp;fit=crop" alt="Projet" class="project-img">
                                <div class="card-body d-flex flex-column justify-content-between gap-2">
                                    <div>
                                        <div class="d-flex align-items-center gap-2 mb-3">
                                            <span class="badge bg-success badge-custom">En cours</span>
                                            <small class="text-muted">2023-2026</small>
                                        </div>
                                        <h5 class="card-title fw-semibold">IA pour la santé prédictive</h5>
                                        <p class="card-text small text-muted">Développement d'algorithmes d'apprentissage profond pour la détection précoce de maladies à partir d'images médicales.</p>
                                    </div>
                                    <div class="d-flex align-items-center text-muted small">
                                        <i data-lucide="users" class="me-2" style="width: 16px; height: 16px;"></i>
                                        <span>M. Durand, C. Dubois</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="card card-config h-100 border-0 shadow-sm">
                                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&amp;h=400&amp;fit=crop" alt="Projet" class="project-img">
                                <div class="card-body d-flex flex-column justify-content-between gap-2">
                                    <div>
                                        <div class="d-flex align-items-center gap-2 mb-3">
                                            <span class="badge bg-success badge-custom">En cours</span>
                                            <small class="text-muted">2024-2027</small>
                                        </div>
                                        <h5 class="card-title fw-semibold">Sécurité quantique</h5>
                                        <p class="card-text small text-muted">Recherche sur les protocoles cryptographiques résistants aux attaques quantiques pour sécuriser les communications futures.</p>
                                    </div>
                                    <div class="d-flex align-items-center text-muted small">
                                        <i data-lucide="users" class="me-2" style="width: 16px; height: 16px;"></i>
                                        <span>S. Martin, T. Bernard</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="card card-config h-100 border-0 shadow-sm">
                                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&amp;h=400&amp;fit=crop" alt="Projet" class="project-img">
                                <div class="card-body d-flex flex-column justify-content-between gap-2">
                                    <div>
                                        <div class="d-flex align-items-center gap-2 mb-3">
                                            <span class="badge bg-success badge-custom">En cours</span>
                                            <small class="text-muted">2023-2025</small>
                                        </div>
                                        <h5 class="card-title fw-semibold">Smart Cities IoT</h5>
                                        <p class="card-text small text-muted">Infrastructure IoT distribuée pour la gestion intelligente des ressources urbaines et l'amélioration de la qualité de vie.</p>
                                    </div>
                                    <div class="d-flex align-items-center text-muted small">
                                        <i data-lucide="users" class="me-2" style="width: 16px; height: 16px;"></i>
                                        <span>T. Bernard, A. Petit</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="card card-config h-100 border-0 shadow-sm">
                                <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&amp;h=400&amp;fit=crop" alt="Projet" class="project-img">
                                <div class="card-body d-flex flex-column justify-content-between gap-2">
                                    <div>
                                        <div class="d-flex align-items-center gap-2 mb-3">
                                            <span class="badge bg-info badge-custom">Planifié</span>
                                            <small class="text-muted">2024-2028</small>
                                        </div>
                                        <h5 class="card-title fw-semibold">Blockchain pour la traçabilité</h5>
                                        <p class="card-text small text-muted">Systèmes de traçabilité basés sur la blockchain pour garantir l'authenticité et la transparence dans les chaînes d'approvisionnement.</p>
                                    </div>
                                    <div class="d-flex align-items-center text-muted small">
                                        <i data-lucide="users" class="me-2" style="width: 16px; height: 16px;"></i>
                                        <span>S. Martin, A. Petit</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="card card-config h-100 border-0 shadow-sm">
                                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&amp;h=400&amp;fit=crop" alt="Projet" class="project-img">
                                <div class="card-body d-flex flex-column justify-content-between gap-2">
                                    <div>
                                        <div class="d-flex align-items-center gap-2 mb-3">
                                            <span class="badge bg-success badge-custom">En cours</span>
                                            <small class="text-muted">2022-2025</small>
                                        </div>
                                        <h5 class="card-title fw-semibold">Robotique autonome</h5>
                                        <p class="card-text small text-muted">Développement de systèmes de navigation et de prise de décision pour robots autonomes en environnements complexes.</p>
                                    </div>
                                    <div class="d-flex align-items-center text-muted small">
                                        <i data-lucide="users" class="me-2" style="width: 16px; height: 16px;"></i>
                                        <span>J. Moreau, C. Dubois</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="card card-config h-100 border-0 shadow-sm">
                                <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&amp;h=400&amp;fit=crop" alt="Projet" class="project-img">
                                <div class="card-body d-flex flex-column justify-content-between gap-3">
                                    <div>
                                        <div class="d-flex align-items-center gap-2 mb-3">
                                            <span class="badge bg-secondary badge-custom">Terminé</span>
                                            <small class="text-muted">2021-2023</small>
                                        </div>
                                        <h5 class="card-title fw-semibold">Optimisation énergétique cloud</h5>
                                        <p class="card-text small text-muted">Algorithmes d'optimisation pour réduire la consommation énergétique des centres de données tout en maintenant les performances.</p>
                                    </div>
                                    <div class="d-flex align-items-center text-muted small">
                                        <i data-lucide="users" class="me-2" style="width: 16px; height: 16px;"></i>
                                        <span>T. Bernard, A. Petit</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                

                <!-- ✅ Modal large -->
                <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content border-0 shadow-lg">
                    <div class="modal-body p-4 p-lg-5">
                        <div class="d-flex justify-content-between align-items-start mb-4">
                        <h3 class="fw-semibold mb-0" id="projectModalLabel"></h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
                        </div>

                        <div class="row g-4">
                        <!-- Image (colonne fine à gauche sur grand écran) -->
                        <div class="col-lg-4">
                            <img id="projectModalImage" class="img-fluid rounded shadow-sm" alt="">
                            <div class="mt-3">
                            <div class="d-flex align-items-center gap-2 mb-2">
                                <span id="projectModalStatus" class="badge"></span>
                                <small id="projectModalYears" class="text-muted"></small>
                            </div>
                            <div class="d-flex align-items-center text-muted small">
                                <i data-lucide="users" class="me-2" style="width: 16px; height: 16px;"></i>
                                <span id="projectModalMembers"></span>
                            </div>
                            </div>
                        </div>

                        <!-- Texte principal -->
                        <div class="col-lg-8">
                            <p id="projectModalDescription" class="text-muted fs-6"></p>
                            <hr>
                            <h5 class="fw-semibold mb-3">Détails du projet</h5>
                            <p id="projectModalDetails" class="text-muted" style="white-space: pre-line;"></p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <!-- fin -->
                

            </div>
        </section>
    </div>
`;

class PProjets extends HTMLElement {
    constructor() {
        super();
        /** @type {HTMLDivElement} */
        this._content = document.createElement('div');
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            const modalEl = document.getElementById('projectModal');
            const modal = new bootstrap.Modal(modalEl);

            document.querySelectorAll('.project-card').forEach(card => {
                card.addEventListener('click', () => {
                document.getElementById('projectModalLabel').textContent = card.dataset.title;
                document.getElementById('projectModalImage').src = card.dataset.image;
                document.getElementById('projectModalStatus').textContent = card.dataset.status;
                document.getElementById('projectModalYears').textContent = card.dataset.years;
                document.getElementById('projectModalDescription').textContent = card.dataset.description;
                document.getElementById('projectModalDetails').textContent = card.dataset.details;
                document.getElementById('projectModalMembers').textContent = card.dataset.members;

                const badge = document.getElementById('projectModalStatus');
                badge.className = `badge ${card.dataset.status === 'En cours' ? 'bg-success' : 'bg-secondary'}`;

                modal.show();
                });
            });
        });

        // @ts-ignore
        lucide.createIcons();
    }
    
    connectedCallback () {
        this.appendChild(TEMPLATE.content.cloneNode(true));

        /** @type {HTMLDivElement} */
        this._content = this.querySelector(`#${TAG_IDS.main}`) ?? this._content;

        this.init();        
    }
    
    disconnectedCallback () {}
}

try {
    (function() {
        window.customElements.define(PAGE_NAME, PProjets);
    })();
}
catch (err) {
    console.error(err);
}