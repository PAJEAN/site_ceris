// @ts-check

/** NS **/
import { WC } from 'JS/components/__ns__';
/** Store **/
import { HAL } from 'JS/store/modules/hal/s-hal';

const TAG_IDS = {
    wc_main:  'wc-main',
    ul_items: 'ul-items',
};


const NAME = WC.PAGINATION;

const TEMPLATE = document.createElement('template');
TEMPLATE.innerHTML = /* html */`

    <style>
        .active {
            --bs-pagination-active-bg: var(--primary-text);
            --bs-pagination-active-border-color: var(--primary-text);
        }
        .page-link {
            --bs-pagination-color: var(--primary-text);
            --bs-pagination-hover-color: var(--vermillion-light);
            cursor: pointer;
        }
    </style>

    <div id="${TAG_IDS.wc_main}">
        <nav aria-label="Page navigation example">
            <ul id="${TAG_IDS.ul_items}" class="pagination justify-content-center">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
`;

export class WcPagination extends HTMLElement {
    static rows_attribute_name = 'data-rows';
    static current_page_attribute_name = 'data-current-page';

    constructor() {
        super();
        /** @type {HTMLDivElement} */
        this._content = document.createElement('div');

        /* Params to HAL request */
        this._rows = 5;
        this._current_pages = 0;
        this._nb_pages = 0;
    }

    _active() {
        let all_li = this._content.querySelectorAll('li');
        for (let i = 0; i < all_li.length; i++) { // Previous & next li.
            all_li[i].classList.remove('active');
            if (all_li[i].textContent == (this._current_pages + 1).toString()) all_li[i].classList.add('active');
        }
    }

    /**
     * @param {boolean} is_active
     * @returns {HTMLLIElement}
     */
    _li(is_active = false) {
        let li = document.createElement('li');
        li.classList.add('page-item');
        if (is_active) li.classList.add('active');
        return li
    }

    /**
     * @returns {HTMLLIElement}
     */
    _next_li() {
        let li = this._li();
        let span = this._span(this._current_pages, 'Next', /* html */`<span aria-hidden="true">&raquo;</span>`, false, true);
        li.appendChild(span);
        return li;
    }

    /**
     * @returns {HTMLLIElement}
     */
    _previous_li() {
        let li = this._li();
        let span = this._span(this._current_pages, 'Previous', /* html */`<span aria-hidden="true">&laquo;</span>`, true);
        li.appendChild(span);
        return li;
    }

    _render() {
        let ul = this._content.querySelector(`#${TAG_IDS.ul_items}`);
        ul.appendChild(this._previous_li());

        let delta = 1;
        let range = [];
        let range_with_dots = [];

        for (let i = 0; i < this._nb_pages; i++) {
            if (i === 0 || i === this._nb_pages - 1 || (i >= this._current_pages - delta && i <= this._current_pages + delta)) {
                range.push(i);
            }
        }

        for (let i = 0; i < range.length; i++) {
            let current = range[i];
            if (i + 1 < range.length) {
                range_with_dots.push(current);
                if (current + 1 != range[i + 1]) {
                    range_with_dots.push(-1);
                }
            } else {
                range_with_dots.push(current);
            }
        }

        for (let i of range_with_dots) {
            if (i === -1) {
                let li = this._li();
                li.classList.add('disabled')
                li.innerHTML = `<span class="page-link">…</span>`;
                ul.appendChild(li);
            } else {
                let li = this._li(i == this._current_pages);
                let span = this._span(i, '', (i + 1).toString());
                li.appendChild(span);
                ul.appendChild(li);
            }
        }
        ul.appendChild(this._next_li());
    }

    /**
     * @param {number} current_page
     * @param {string} label
     * @param {string} content
     * @returns {HTMLSpanElement}
     */
    _span(current_page, label, content, is_previous = false, is_next = false) {                
        let span = document.createElement('span');
        span.classList.add('page-link');
        if (label) span.ariaLabel = label;
        span.innerHTML = content;
        span.addEventListener('click', () => {
            if (is_previous) this._current_pages = Math.max(0, this._current_pages - 1);
            else if (is_next) this._current_pages = Math.min(this._nb_pages - 1, this._current_pages + 1);
            else this._current_pages = current_page;
            this.setAttribute(WcPagination.current_page_attribute_name, this._current_pages.toString());
            this.init();
            this._active();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        return span;
    }

    clear() {
        let ul = this._content.querySelector(`#${TAG_IDS.ul_items}`);
        ul.textContent = '';
    }

    init() {
        this.clear();
        this._render();
    }

    get current_page() { return this._current_pages; }
    
    connectedCallback () {
        this.appendChild(TEMPLATE.content.cloneNode(true));

        /** @type {HTMLDivElement} */
        this._content = this.querySelector(`#${TAG_IDS.wc_main}`) ?? this._content;

        this._rows = this.hasAttribute(WcPagination.rows_attribute_name) ? parseInt(this.getAttribute(WcPagination.rows_attribute_name) ?? this._rows.toString()): this._rows;

        this._nb_pages = Math.ceil(HAL.total_publications / this._rows);        

        this.init();
    }
    
    disconnectedCallback () {}
}

try {
    (function() {
        window.customElements.define(NAME, WcPagination);
    })();
}
catch (err) {
    console.error(err);
}