// @ts-check

import { BaseCustomElements } from "JS/lib/base-custom-elements";

const ID = {
    wc_main: 'wc-main'
};

const TEMPLATE = document.createElement('template');
TEMPLATE.innerHTML = /* html */`

    <style></style>

    <div id="${ID.wc_main}"></div>
`;

class WcBoilerplate extends BaseCustomElements {
    constructor() {
        super();
        this.attachShadow({mode: 'open'}); /* ShadowRoot */
    }

    connectedCallback() {
        this.shadowRoot.appendChild(TEMPLATE.content.cloneNode(true));
        this.content = this.shadowRoot.querySelector(`#${ID.wc_main}`);
    }

    disconnectedCallback() {}
    
    static get observedAttributes() { return []; }
    attributeChangedCallback(attrName, oldVal, newVal) {} /* Called for every change to attributes listed in the observedAttributes array */
}
