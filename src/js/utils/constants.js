let debug = false;
export const DEBUG = process.env.NODE_ENV == 'production' ? false: debug;

export let REGISTERED_PAGES = [];
export const REGISTER_PAGES = (cls, path, title, is_default = false) => {
    REGISTERED_PAGES.push([cls, path, title, is_default]);
};