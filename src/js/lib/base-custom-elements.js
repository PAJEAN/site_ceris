// @ts-check

export class BaseCustomElements extends HTMLElement {
    static prefix = 'ce'

    static _tag_name = undefined;

    static get tag_name() {
        return this._tag_name;
    }

    static set tag_name(tag_name) {
        this._tag_name = tag_name;
    }

    /**
     * @param {string} [tag_name] tag_name of a component (wc) is based on his class name and tag_name of pages is based on routes file.
     * @param {boolean} [is_component] true if component.
     */
    static define(tag_name, is_component = false) {        
        try {
            this.tag_name = is_component ? `${this.prefix}-${tag_name.split('/').pop().replace('.js', '').toLocaleLowerCase()}`: tag_name;
            if (!customElements.get(this.tag_name)) {
                customElements.define(this.tag_name, this);
            }
        }
        catch (err) {
            console.error(err);
        }
    }
}