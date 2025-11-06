/* Components */
import { COMPONENT_NAMES } from './__ns__';

(function() {
    const COMPONENT_NAME = 'wc-boilerplate';

    const TEMPLATE = document.createElement('template');
    TEMPLATE.innerHTML = /* html */`

        <style></style>

        <div id="main"></div>

    `;

    window.customElements.define(COMPONENT_NAME, class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'open'}); /* ShadowRoot */
        }

        connectedCallback() {
            this.shadowRoot.appendChild(TEMPLATE.content.cloneNode(true));
            this.content = this.shadowRoot.querySelector('#main');
        }

        disconnectedCallback() {}
        
        static get observedAttributes() { return []; }
        attributeChangedCallback(attrName, oldVal, newVal) {} /* Called for every change to attributes listed in the observedAttributes array */
    });
})();