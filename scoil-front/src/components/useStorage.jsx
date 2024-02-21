import { useRouter } from "next/router";

/**
 * Obtener información
 * @param {string} key 
 * @param {*} type 
 * @returns 
 */
const getItem = (key, type) => {
    /* const storageType = (type) => `${type ?? 'session'}Storage`;
    const isBrowser = typeof window !== 'undefined';
    return isBrowser ? window[storageType(type)][key] : ''; */
    if(typeof window !== 'undefined'){
        return localStorage.getItem(key);
    }
    return ''
}
/**
 * Asignar información
 * @param {string} key 
 * @param {*} value 
 * @param {*} type 
 * @returns 
 */
const setItem = (key, value, type) => {
    /* const storageType = (type) => `${type ?? 'session'}Storage`;
    const isBrowser = typeof window !== 'undefined';
    if(isBrowser){
        window[storageType(type)].setItem(key, value);
        return true;
    }
    return false; */
    if(typeof window !== 'undefined'){
        localStorage.setItem(key, value);
        return true;
    }
    return false;
}
/**
 * Eliminar elemento
 * @param {string} key 
 * @param {*} type 
 */
const removeItem = (key, type) => {
    /* const storageType = (type) => `${type ?? 'session'}Storage`;
    window[storageType(type)].removeItem(key); */
    if(typeof window !== 'undefined'){
        localStorage.removeItem(key);
    }
}

export { getItem, setItem, removeItem}