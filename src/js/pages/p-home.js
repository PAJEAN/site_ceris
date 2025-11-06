/** NS **/
import { PAGES, PAGES_INFO } from 'JS/pages/__ns__';
import { WC } from 'JS/components/__ns__';

(function () {
    const TAG_IDS = {
        main:           'p-main',
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
                transition: all 0.3s ease;
            }

            .btn-gradient:hover {
                background-color: var(--vermillion-light);
            }
        </style>

        <div id="${TAG_IDS.main}">
            <${WC.NAV}></${WC.NAV}>

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

            <!-- Publications Section -->
            <section class="pt-2 pb-5 section-color padding-global">
                <div class="container-fluid py-5">
                    <div class="row mb-5">
                        <div class="col-lg-8 mx-auto text-center">
                            <h2 class="display-5 section-title mb-3">Publications récentes</h2>
                            <p class="lead text-muted">Nos contributions à la recherche scientifique en informatique</p>
                        </div>
                    </div>
                    
                    <${WC.PUBLICATIONS} data-rows="3" class="section-color"></${WC.PUBLICATIONS}>
                    
                    <div class="text-center mt-5">
                        <a href="#${PAGES_INFO[PAGES.PUBLICATIONS].route.path}" class="btn btn-gradient">
                            Voir toutes les publications
                            <i data-lucide="arrow-right" class="ms-2" style="width: 16px; height: 16px;"></i>
                        </a>
                    </div>
                </div>
            </section>
            
        </div>

    `;

    window.customElements.define(PAGE_NAME, class extends HTMLElement {
        constructor() {
            super();
        }
        
        connectedCallback () {
            this.appendChild(TEMPLATE.content.cloneNode(true));
            this._content = this.querySelector(`#${TAG_IDS.main}`);
        }
        
        disconnectedCallback () {}
    });
})();

