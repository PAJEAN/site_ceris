// @ts-check

export class Teaching {
    #id;
    #extended_resume;
    #keywords;
    #image;
    #level;
    #manager;
    #resume;
    #time;
    #title;

    /**
     * @typedef {Object} TeachingData
     * @property {string} id 
     * @property {string} extended_resume 
     * @property {string[]} keywords
     * @property {string} image
     * @property {string} level
     * @property {string} manager
     * @property {string} resume 
     * @property {string} time
     * @property {string} title
     */

    /**
     * @param {TeachingData} data
     */
    constructor(data) {
        this.#id                = data.id ?? undefined;
        this.#extended_resume   = data.extended_resume ?? '';
        this.#keywords          = data.keywords ?? [];
        this.#image             = data.image ?? '';
        this.#level             = data.level ?? '';
        this.#manager           = data.manager ?? '';
        this.#resume            = data.resume ?? '';
        this.#time              = data.time ?? '';
        this.#title             = data.title ?? '';
    }

    get id() { return this.#id; }
    get extended_resume() { return this.#extended_resume; }
    get keywords() { return this.#keywords; }
    get image() { return this.#image; }
    get level() { return this.#level; }
    get manager() { return this.#manager; }
    get resume() { return this.#resume; }
    get time() { return this.#time; }
    get title() { return this.#title; }
}