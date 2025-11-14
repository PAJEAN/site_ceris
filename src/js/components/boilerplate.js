/* Components */
import { WC } from './__ns__';

(function() {
    const TAG_IDS = {
        wc_main:    'wc-main'
    };

    const COMPONENT_NAME = '';

    const TEMPLATE = document.createElement('template');
    TEMPLATE.innerHTML = /* html */`

        <style></style>

        <div id="${TAG_IDS.wc_main}"></div>

    `;

    window.customElements.define(COMPONENT_NAME, class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'open'}); /* ShadowRoot */
        }

        connectedCallback() {
            this.shadowRoot.appendChild(TEMPLATE.content.cloneNode(true));
            this.content = this.shadowRoot.querySelector(`#${TAG_IDS.wc_main}`);
        }

        disconnectedCallback() {}
        
        static get observedAttributes() { return []; }
        attributeChangedCallback(attrName, oldVal, newVal) {} /* Called for every change to attributes listed in the observedAttributes array */
    });
})();