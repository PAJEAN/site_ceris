// @ts-check

import { BaseCustomElements } from 'JS/lib/base-custom-elements';
/*** Components ***/
import { WcNav } from 'JS/components/wc-nav';
import { WcTeaching } from 'JS/components/wc-teaching';


const ID = {
    main: 'div-main',
};

const TEMPLATE = document.createElement('template');
TEMPLATE.innerHTML = /* html */`

    <style>
    </style>

    <div id="${ID.main}">
        <${WcNav.tag_name}></${WcNav.tag_name}>

        <section class="pt-2 pb-5 padding-global">
            <div class="container-fluid pt-5">

                <div class="row mb-5">
                    <div class="col-lg-8 mx-auto text-center">
                        <h2 class="display-5 section-title mb-3">Filières d'enseignement</h2>
                        <p class="lead text-muted">Nos programmes de formation soutenus par le laboratoire</p>
                    </div>
                </div>

                <!-- Researchers -->
                <div class="mb-5">
                    <${WcTeaching.tag_name}></${WcTeaching.tag_name}>
            </div>
        </section>
    </div>
`;

export class PTeaching extends BaseCustomElements {
    /** @type {HTMLDivElement} */
    #content;

    constructor() {
        super();
    }

    init() {}
    
    connectedCallback () {
        this.appendChild(TEMPLATE.content.cloneNode(true));

        this.#content = this.querySelector(`#${ID.main}`);

        this.init();
    }
    
    disconnectedCallback () {}
}