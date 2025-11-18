export class BaseCustomElements extends HTMLElement {
    static get tag_name() {
        return `wc-${this.name}`.toLocaleLowerCase();
    }

    static define() {        
        if (!customElements.get(this.tagName)) {
            try {
                customElements.define(this.tag_name, this);
            }
            catch (err) {
                console.error(err);
            }
        }
    }
}