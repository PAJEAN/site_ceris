/** NS **/
import { PAGES, PAGES_INFO } from 'JS/pages/__ns__';
import { WC } from 'JS/components/__ns__';
/** Store **/
import { HAL } from 'JS/store/modules/hal/s-hal';
/** Component **/
import { WcPublications } from 'JS/components/wc-publications';
import { WcNav } from 'JS/components/wc-nav';
import { WcProjets } from 'JS/components/wc-projets';
import { WcTeam } from 'JS/components/wc-team';
import { WcTeaching } from 'JS/components/wc-teaching';
/** Utils **/

(function () {
    const TAG_IDS = {
        main: 'p-main',
        wc_publications_container: 'wc-publication-container',
        wc_nav: 'wc-nav',
        section_projets: PAGES_INFO[PAGES.PROJETS].route.path.substring(1),
        project_container: 'project-container',
        section_publications: PAGES_INFO[PAGES.PUBLICATIONS].route.path.substring(1),
        section_team: PAGES_INFO[PAGES.TEAM].route.path.substring(1),
        section_teaching: PAGES_INFO[PAGES.TEACHING].route.path.substring(1),
    };

    const PAGE_NAME = PAGES.HOME;

    const TEMPLATE = document.createElement('template');
    TEMPLATE.innerHTML = /* html */`

        <style>
            .hero {
                position: relative;
                height: calc(100vh - 6rem); /* tout le reste de la page après la navbar */
                overflow: hidden;
                border-radius: 16px;
            }

            .hero-img {
                width: 100%;
                height: 100%;
                object-fit: cover; /* couvre le conteneur sans déformation */
            }

            /* Texte intégré à l'image */
            .hero-text {
                position: absolute;  /* superposé sur l'image */
                bottom: 2rem;        /* en bas de l'image */
                color: white;

                column-gap: 6%;
                row-gap: 6%;
            }

            .hero-desc {
                font-size: 1.25rem;
            }

            .hero-title {
                color: var(--vermillion-light);
                white-space: nowrap;
                font-size: clamp(2rem, 14vw, 277.76px);
                line-height: .75;
                font-weight: 900;
            }

            .dark-gradient {
                background-image: linear-gradient(#153a4300 55%, #000c);
                position: absolute;
                inset: 0%
            }

            .noise {
                opacity: .25;
                pointer-events: none;
                mix-blend-mode: difference;
                background-image: url(https://cdn.prod.website-files.com/68011fed23249a9699d7b42b/6807e0c24176475123a57376_noise-light.png);
                background-position: 50%;
                background-size: 220px 220px;
                width: 100%;
                height: 100%;
                position: absolute;
                inset: 0%
            }

            @media screen and (max-width: 1200px) {
                .hero-text {
                    column-gap: 2rem;
                    row-gap: 2rem;
                }
            }

            .btn-gradient {
                background-color: var(--vermillion-light);
                border-radius: 100vw;
                color: white;
                padding: 0.75rem 2rem;
                font-weight: 500;
                transition: all 0.25s ease;
            }

            .btn-gradient:hover {
                background-color: var(--vermillion-light);
                color: white;
                transform: translateY(-3px);
            }
        </style>

        <div id="${TAG_IDS.main}">
            <${WC.NAV} id="${TAG_IDS.wc_nav}"></${WC.NAV}>

            <header class="padding-global">
                <!-- Hero Section -->
                <div class="hero">
                    <img src="https://cdn.prod.website-files.com/68011fed23249a9699d7b42b/6802f26cb1c279ff927f7887_visualelectric-1744594470866.avif" alt="Image" class="hero-img">
                    <div class="dark-gradient"></div>
                    <div class="noise"></div>
                    <div class="hero-text padding-global row align-items-end">
                        <div class="hero-title col-xl">
                            CERIS
                        </div>
                        <p class="hero-desc fw-semibold col-xl m-0">
                            Le Centre d'Enseignement et de Recherche en Informatique et Systèmes est spécialisé dans les domaine de l'informatique, de l'intelligence artificielle et de l'industrie du futur.
                        </p>
                    </div>
                </div>
            </header>

            <!-- Stats Section -->
            <section class="pt-5 padding-global">
                <${WC.STATS} class="padding-global"></${WC.STATS}>
            </section>

            <!-- Research Areas Section -->
            <section id="domaines" class="py-5 padding-global">
                <div class="container-fluid py-5">
                    <div class="row mb-5">
                        <div class="col-lg-8 mx-auto text-center">
                            <h2 class="display-5 section-title mb-3" style="color: var(--background-color--background-secondary)">Domaines de recherche</h2>
                            <p class="lead text-muted">Notre laboratoire couvre un large éventail de domaines à la pointe de l'informatique moderne</p>
                        </div>
                    </div>
                    <div class="row g-4">
                        <div class="col-md-6 col-lg-3">
                            <div class="research-area h-100">
                                <div class="feature-icon mx-auto">
                                    <i data-lucide="brain" style="width: 32px; height: 32px;"></i>
                                </div>
                                <h5 class="fw-semibold mb-3">Intelligence Artificielle</h5>
                                <p class="small mb-0">Deep Learning, Machine Learning, Réseaux neuronaux</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="research-area h-100">
                                <div class="feature-icon mx-auto">
                                    <i data-lucide="shield" style="width: 32px; height: 32px;"></i>
                                </div>
                                <h5 class="fw-semibold mb-3">Cybersécurité</h5>
                                <p class="small mb-0">Cryptographie, Sécurité réseau, Protection des données</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="research-area h-100">
                                <div class="feature-icon mx-auto">
                                    <i data-lucide="cloud" style="width: 32px; height: 32px;"></i>
                                </div>
                                <h5 class="fw-semibold mb-3">Cloud Computing</h5>
                                <p class="small mb-0">Systèmes distribués, Architecture cloud, DevOps</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="research-area h-100">
                                <div class="feature-icon mx-auto">
                                    <i data-lucide="eye" style="width: 32px; height: 32px;"></i>
                                </div>
                                <h5 class="fw-semibold mb-3">Vision par ordinateur</h5>
                                
                                <p class="small mb-0 test">Traitement d'images, Reconnaissance, Réalité augmentée</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Projects Section -->
            <section id="${TAG_IDS.section_projets}" class="pt-2 pb-5 section-color padding-global">
                <div class="container-fluid py-5">
                    <div class="row mb-5">
                        <div class="col-lg-8 mx-auto text-center">
                            <h2 class="display-5 section-title mb-3">Projets de recherche</h2>
                            <p class="lead text-muted">Nos initiatives actuelles pour repousser les frontières de l'informatique</p>
                        </div>
                    </div>

                    <div>
                        <div id="${TAG_IDS.project_container}" class="row g-4">
                            <${WC.PROJETS} ${WcProjets.limit_attribute_name}="6"></${WC.PROJETS}>
                        </div>
                        
                        <div class="text-center mt-5 pt-3">
                            <a href="#${PAGES_INFO[PAGES.PROJETS].route.path}" class="btn btn-gradient">
                                Voir tous les projets
                                <i data-lucide="arrow-right" class="ms-2" style="width: 16px; height: 16px;"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Publications Section -->
            <section id="${TAG_IDS.section_publications}" class="pt-2 pb-5 padding-global">
                <div class="container-fluid py-5">
                    <div class="row mb-5">
                        <div class="col-lg-8 mx-auto text-center">
                            <h2 class="display-5 section-title mb-3">Publications récentes</h2>
                            <p class="lead text-muted">Nos contributions à la recherche scientifique en informatique</p>
                        </div>
                    </div>
                    
                    <div id="${TAG_IDS.wc_publications_container}">
                        <${WC.PUBLICATIONS} data-rows="5" class="section-color"></${WC.PUBLICATIONS}>
                    </div>
                    
                    <div class="text-center mt-5 pt-3">
                        <a href="#${PAGES_INFO[PAGES.PUBLICATIONS].route.path}" class="btn btn-gradient">
                            Voir toutes les publications
                            <i data-lucide="arrow-right" class="ms-2" style="width: 16px; height: 16px;"></i>
                        </a>
                    </div>
                </div>
            </section>

            <!-- Team Section -->
            <section id="${TAG_IDS.section_team}" class="pt-2 pb-5 padding-global section-color">
                <div class="container pt-5">

                    <div class="row mb-5">
                        <div class="col-lg-8 mx-auto text-center">
                            <h2 class="display-5 section-title mb-3">Notre équipe</h2>
                            <p class="lead text-muted">Des experts passionnés dédiés à faire avancer la recherche en informatique</p>
                        </div>
                    </div>

                    <!-- Researchers -->
                    <div class="mb-5">
                        <${WC.TEAM} ${WcTeam.limit_attribute_name}="6"></${WC.TEAM}>
                    </div>
                </div>

                <div class="text-center mt-5 pt-3">
                    <a href="#${PAGES_INFO[PAGES.TEAM].route.path}" class="btn btn-gradient">
                        Découvrir toute l'équipe
                        <i data-lucide="arrow-right" class="ms-2" style="width: 16px; height: 16px;"></i>
                    </a>
                </div>
            </section>

            <!-- Teaching Programs Section -->
            <section id="${TAG_IDS.section_teaching}" class="py-5">
                <div class="container py-5">
                    <div class="row mb-5">
                        <div class="col-lg-8 mx-auto text-center">
                            <h2 class="display-5 section-title mb-3">Filières d'enseignement</h2>
                            <p class="lead text-muted">Nos programmes de formation soutenus par le laboratoire</p>
                        </div>
                    </div>
                    
                    <${WC.TEACHING} ${WcTeaching.limit_attribute_name}="1"></${WC.TEACHING}>
                </div>

                <!-- <div class="text-center pt-3">
                    <a href="#${PAGES_INFO[PAGES.TEACHING].route.path}" class="btn btn-gradient">
                        Découvrir toutes les formations
                        <i data-lucide="arrow-right" class="ms-2" style="width: 16px; height: 16px;"></i>
                    </a>
                </div> -->
            </section>

            <!-- Footer -->
            <footer class="py-5">
                <div class="container px-5 py-2">
                    <div class="row g-4 ">
                        <div class="col-lg-6">
                            <div class="d-flex align-items-center">
                                <span class="fw-semibold text-white text-center">Ceris</span>
                            </div>
                            <p class="small">Excellence en recherche et innovation technologique</p>
                        </div>
                        <div class="col-lg-6 col-md-6 text-end">
                            <h6 class="text-white fw-semibold">Suivez-nous</h6>
                            <div class="d-flex justify-content-end gap-2 m-auto">
                                <a href="#" class="social-icon text-white">
                                    <i data-lucide="twitter" style="width: 18px; height: 18px;"></i>
                                </a>
                                <a href="#" class="social-icon text-white">
                                    <i data-lucide="linkedin" style="width: 18px; height: 18px;"></i>
                                </a>
                                <a href="#" class="social-icon text-white">
                                    <i data-lucide="github" style="width: 18px; height: 18px;"></i>
                                </a>
                                <a href="#" class="social-icon text-white">
                                    <i data-lucide="youtube" style="width: 18px; height: 18px;"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            
        </div>

    `;

    window.customElements.define(PAGE_NAME, class extends HTMLElement {
        constructor() {
            super();
        }

        _clear_publications() {
            let tag = this._content.querySelector(`#${TAG_IDS.wc_publications_container}`);
            tag.textContent = '';
        }

        _observer(mutationsList) {
            for(const mutation of mutationsList) { // List of detected mutations.
                if (mutation.type === 'attributes') { // Check if it's an attribute modification.
                    if (mutation.attributeName == WcNav.location_attribute_name) {                        
                        window.scrollTo({
                            top: this._content.querySelector(`#${mutation.target.getAttribute(WcNav.location_attribute_name)}`).offsetTop,
                            behavior: "smooth"
                        });
                    }
                }
            }
        }

        _observing() {
            let wc_nav = this._content.querySelector(`#${TAG_IDS.wc_nav}`);
            this.observer.observe(wc_nav, { attributes: true });
        }

        _publications() {
            this._clear_publications();
            let tag = this._content.querySelector(`#${TAG_IDS.wc_publications_container}`);
            let wc_publications = document.createElement(`${WC.PUBLICATIONS}`);
            wc_publications.setAttribute(WcPublications.rows_attribute_name, (5).toString());
            tag.appendChild(wc_publications);
        }

        init() {
            HAL.fetch(5, 0)
            .then(() => {                
                this._publications();
            });
            this.observer && this._observing();
        }
        
        connectedCallback () {
            this.appendChild(TEMPLATE.content.cloneNode(true));
            this._content = this.querySelector(`#${TAG_IDS.main}`);

            this.observer = new MutationObserver(this._observer.bind(this));

            this.init();
        }
        
        disconnectedCallback () {
            this.observer && this.observer.disconnect();
        }
    });
})();

