export class Project {
    #id;
    #image;
    #title;
    #start_date;
    #short_abstract;
    #authors;
    #extend_abstract;
    #end_date;

    /**
     * @typedef {Object} ProjetData
     * @property {string} id 
     * @property {string} image
     * @property {string} title 
     * @property {number} start_date 
     * @property {string} short_abstract 
     * @property {string} authors
     * @property {string} extend_abstract 
     * @property {number} end_date 
     */

    /**
     * @param {ProjetData} data
     */
    constructor(data) {
        this.#id =              data.id ?? undefined;
        this.#image =           data.image ?? '';
        this.#title =           data.title ?? '';
        this.#start_date =      data.start_date ?? undefined;
        this.#short_abstract =  data.short_abstract ?? '';
        this.#authors =         data.authors ?? '';
        this.#extend_abstract = data.extend_abstract ?? '';
        this.#end_date =        data.end_date ?? undefined;
    }

    get id() { return this.#id; }
    get image() { return this.#image; }
    get title() { return this.#title; }
    get start_date() { return this.#start_date; }
    get short_abstract() { return this.#short_abstract; }
    get authors() { return this.#authors; }
    get extend_abstract() { return this.#extend_abstract; }
    get end_date() { return this.#end_date; }

    badge() {
        let span = document.createElement('span');
        span.classList.add('badge', 'badge-custom');
        let year = new Date().getFullYear();
        if (this.#start_date > year) {
            span.textContent = 'Planifié';
            span.classList.add('bg-info');
        } else if (this.#end_date && this.#end_date < year) {
            span.textContent = 'Terminé';
            span.classList.add('bg-secondary');
        } else {
            span.textContent = 'En cours';
            span.classList.add('bg-success');
        }
        return span;
    }

    duration() {
        if (!this.#end_date) {
            return `${this.#start_date}`;
        } else {
            return `${this.#start_date}–${this.#end_date}`;
        }
    }
}