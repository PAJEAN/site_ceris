// @ts-check

import { BaseCustomElements } from 'JS/lib/base-custom-elements';
/** Router **/
import { ROUTES, ROUTES_INFO } from 'JS/lib/router/routes';


/** Nav **/
/**
 * @typedef {Object} NavItem
 * @property {string} content
 * @property {string} link
 */

/**
 * @typedef {Object} NavInfo
 * @property {NavItem} navbar_brand
 * @property {NavItem[]} nav_items
 */
const NAV_INFO = {
    navbar_brand: {content: 'Ceris', link: '#'},
    nav_items: [
        {content: 'Projets', link: `#${ROUTES_INFO[ROUTES.PROJETS].route.path}`},
        {content: 'Publications', link: `#${ROUTES_INFO[ROUTES.PUBLICATIONS].route.path}`},
        {content: 'Équipe', link: `#${ROUTES_INFO[ROUTES.TEAM].route.path}`},
        {content: 'Enseignements', link: `#${ROUTES_INFO[ROUTES.TEACHING].route.path}`},
    ],
}

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

export class WcNav extends BaseCustomElements {
    static location_attribute_name = 'data-location';

    constructor() {
        super();
        /** @type {HTMLDivElement} */
        this._content = document.createElement('div');
    }

    nav_brand() {
        /** @type {HTMLAnchorElement} */
        let tag = this._content.querySelector(`#${ID.nav_brand}`);
        if (!tag) return;
        tag.href = NAV_INFO.navbar_brand.link;
        tag.textContent = NAV_INFO.navbar_brand.content;
    }

    nav_items() {
        let tag = this._content.querySelector(`#${ID.nav_items}`);
        if (!tag) return;
        tag.textContent = '';
        for (let item of NAV_INFO.nav_items) {
            let li = document.createElement('li');
            li.classList.add('nav-item', 'fw-semibold');
            let a = document.createElement('a');
            a.classList.add('nav-link');
            if (location.hash != '') {
                a.href = item.link;
            }
            a.textContent = item.content;
            a.addEventListener('click', () => {
                this.setAttribute(WcNav.location_attribute_name, item.link.substring(2));
            });
            li.appendChild(a);
            tag.appendChild(li);
        }
    }

    init() {
        this.nav_brand();
        this.nav_items();             
    }
    
    connectedCallback () {
        this.appendChild(TEMPLATE.content.cloneNode(true));

        /** @type {HTMLDivElement} */
        this._content = this.querySelector(`#${ID.wc_main}`) ?? this._content;

        this.init();
    }
    
    disconnectedCallback () {}
}

WcNav.define();