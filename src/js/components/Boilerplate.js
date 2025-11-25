// @ts-check

import { BaseCustomElements } from "JS/lib/core/base-custom-elements";

const ID = {
    main: 'div-main'
};

const TEMPLATE = document.createElement('template');
TEMPLATE.innerHTML = /* html */`

    <style></style>

    <div id="${ID.main}"></div>
`;

export class Boilerplate extends BaseCustomElements {
    /** @type {HTMLDivElement} */
    #content;

    constructor() {
        super();
        this.attachShadow({mode: 'open'}); /* ShadowRoot */
    }

    connectedCallback() {
        this.shadowRoot.appendChild(TEMPLATE.content.cloneNode(true));
        this.#content = this.shadowRoot.querySelector(`#${ID.main}`);
    }

    disconnectedCallback() {}
    
    static get observedAttributes() { return []; }
    attributeChangedCallback(attrName, oldVal, newVal) {} /* Called for every change to attributes listed in the observedAttributes array */
}

Boilerplate.define(import.meta.url, true);