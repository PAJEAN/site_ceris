let debug = true;
export const DEBUG = process.env.NODE_ENV == 'production' ? false: debug;

export const PAGES_INFO = {}
export const LOAD_PAGES = (pages_info) => {
    PAGES_INFO = pages_info;
    console.log(PAGES_INFO);
    
};