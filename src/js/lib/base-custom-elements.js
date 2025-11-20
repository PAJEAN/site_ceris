export class BaseCustomElements extends HTMLElement {
    static tag_name = undefined
    static get tag_name() {
        return `wc-${this.name}`.toLocaleLowerCase();
    }

    /**
     * @param {string} [tag_name] tag_name of a component (wc) is based on his class name and tag_name of pages is based on routes file.
     * @returns {string}
     */
    static define(tag_name = undefined) {
        if (!customElements.get(tag_name)) {
            try {
                this.tag_name = !tag_name ? `wc-${this.name}`.toLocaleLowerCase() : tag_name;
                customElements.define(this.tag_name, this);
            }
            catch (err) {
                console.error(err);
            }
        }
    }
}