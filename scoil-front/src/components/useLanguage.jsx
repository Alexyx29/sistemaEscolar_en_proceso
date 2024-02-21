import { getItem } from "./useStorage";


const getActualLang = () => {
    let l = getItem('lang')
    let idioma = { nombre: 'Español (México)', iso: 'es', id: 1, iso_country: 'MX'}
    if(l){
        idioma = JSON.parse(l);
    }
    return idioma;
}

const getActualSystem = () => {
    let system_selected = getItem('system_selected');
    if(!system_selected){
        return null;
    }
    const ss = JSON.parse(system_selected);
    return ss;
}

export { getActualLang, getActualSystem }