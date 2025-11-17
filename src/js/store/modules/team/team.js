// @ts-check

export class Team {
    #id;
    #image;
    #title;
    #first_name;
    #last_name;
    #job_title;
    #keywords;
    #links;
    #priority;

    /**
     * @typedef {Object} SocialData
     * @property {string} name
     * @property {string} url
     */

    /**
     * @typedef {Object} TeamData
     * @property {string} id 
     * @property {string} image
     * @property {string} title 
     * @property {string} first_name 
     * @property {string} last_name 
     * @property {string} job_title
     * @property {string[]} keywords 
     * @property {SocialData[]} links 
     * @property {number} priority
     */

    /**
     * @param {TeamData} data
     */
    constructor(data) {
        this.#id            = data.id ?? undefined;
        this.#image         = data.image ?? '';
        this.#title         = data.title ?? '';
        this.#first_name    = data.first_name ?? '';
        this.#last_name     = data.last_name ?? '';
        this.#job_title     = data.job_title ?? '';
        this.#keywords      = data.keywords ?? [];
        this.#links         = data.links ?? [];
        this.#priority      = data.priority ?? 3;
    }

    get id() { return this.#id; }
    get image() { return this.#image; }
    get title() { return this.#title; }
    get first_name() { return this.#first_name; }
    get last_name() { return this.#last_name; }
    get job_title() { return this.#job_title; }
    get keywords() { return this.#keywords; }
    get links() { return this.#links; }
    get priority() { return this.#priority; }

    full_name() {
        return `${this.#title} ${this.#first_name} ${this.#last_name}`;
    }
}