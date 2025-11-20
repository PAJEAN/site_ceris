// @ts-check

const ID = {
    wc_main:   'wc-main',
    nav_brand: 'nav-brand',
    nav_items: 'nav-items'
};

const TEMPLATE = document.createElement('template');
TEMPLATE.innerHTML = /* html */`

    <style>
        .navbar-brand {
            font-size: 1.5rem;
            font-weight: 900;
        }

        .nav-item {
            font-size: 1rem;
            padding: 0.5rem 1rem;
        }

        .navbar {
            --bs-navbar-color: rgba(var(--bs-emphasis-color-rgb), 1);
            --bs-emphasis-color-rgb: var(--primary-text-rgb);
        }

        .nav-link {
            cursor: pointer;
        }
    </style>

    <div id="${ID.wc_main}">
        <nav class="navbar navbar-expand-lg padding-global">
            <div class="container-fluid p-0">
                <a id="${ID.nav_brand}" class="navbar-brand" href="#">Ceris</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse flex-grow-0" id="navbarTogglerDemo02">
                    <ul id="${ID.nav_items}" class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item fw-semibold">
                            <a class="nav-link" aria-current="page" href="#">Projets</a>
                        </li>
                        <li class="nav-item fw-semibold">
                            <a class="nav-link" href="#">Publications</a>
                        </li>
                        <li class="nav-item fw-semibold">
                            <a class="nav-link" href="#">Équipe</a>
                        </li>
                        <li class="nav-item fw-semibold">
                            <a class="nav-link" href="#">Enseignements</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
`;

export class WcFooter extends HTMLElement {
    static location_attribute_name = 'data-location';

    constructor() {
        super();
        /** @type {HTMLDivElement} */
        this._content = document.createElement('div');
    }

    init() {}
    
    connectedCallback () {
        this.appendChild(TEMPLATE.content.cloneNode(true));

        /** @type {HTMLDivElement} */
        this._content = this.querySelector(`#${ID.wc_main}`) ?? this._content;

        this.init();
    }
    
    disconnectedCallback () {}
}