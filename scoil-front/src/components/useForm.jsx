import { getActualLang } from "./useLanguage";

const { default: fetch } = require("./fetch");
const { getItem, setItem } = require("./useStorage");

const redirectUser = (error, errorFunc = () => {}) => {
    let pathname = window.location.pathname;
    if(error === '"common.token_required"'){
        let search = window.location.search;
        let uri = pathname + ((search) ? search : '');
        if(uri != '/'){
            setItem('pathname', uri)
        }
        window.location.href = '/'
    } else {
        let c = getItem('contract')
        if(pathname != '/show-contract' && c){
            window.location.href = '/show-contract';
        } else {
            errorFunc(error);
            console.error(error);
        }
    }
}
/**
 * Obtener una lista del servidor
 * @param {string} url
 * @param {function} setListItems
 * @param {string} system_selected
 */
const getListApi = (url, setListItems, system_selected, errFunc = () => {}) => {
    fetch.fetching(process.env.API_URL + url + system_selected, 'GET').then(response => {
        setListItems(response);
    }).catch(error => {
        redirectUser(error, errFunc);
    });
}
/**
 * Obtiene un elemento del servidor
 * @param {*} id 
 * @param {function} setItem 
 * @param {string} system_selected
 */

const getItemApi = (url, id, setItem, system_selected, errFunc = () => {}) => {
    console.warn(process.env.NODE_ENV);
    fetch.fetching(process.env.API_URL + url + system_selected + '/' + id , 'GET').then(response => {
        setItem(response)
    }).catch(error => {
        console.error(error);
        errFunc(error)
    });
}
/**
 * Manda información al servidor
 * @param {string} url 
 * @param {JS.formdata} form 
 * @param {function} successForm 
 * @param {function} failForm 
 */
const setItemApi = (url, form, successForm = () => {}, failForm = () => {}, file = false) => {
    fetch.fetching(process.env.API_URL + url, 'POST', form, file).then(response => {
        successForm(response);
    }).catch(error => {
        failForm(error);
    });
}
/**
 * Obtener los textos de un modulo
 * @param {string} url
 * @param {function} setText
 * @param {string} system_selected
 */
const getTextApi = (url, setText, system_selected, errorFunc = () => {}) => {
    fetch.fetching(process.env.API_URL + url + system_selected, 'GET').then(response => {
        setText(response);
    }).catch(error => {
        redirectUser(error, errorFunc)
    });
}
/**
 * Obtener los textos de un modulo
 * @param {string} url
 * @param {function} setText
 * @param {string} system_selected
 */
const getTextApiSinSystem = (url, setText, system_selected, errorFunc = () => {}) => {
    fetch.fetching(process.env.API_URL + url, 'GET').then(response => {
        setText(response);
    }).catch(error => {
        redirectUser(error, errorFunc)
    });
}
/**
 * Mostrar un modal
 * @param {string} id 
 */
const showModal = (id) => {
    let modal = document.getElementById(id);
    if(modal){
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}
/**
 * Verificar si existen errores
 * @param {object} itemsObject 
 * @param {object} errorObject 
 * @returns {object}
 */
const verifyErrors = (itemsObject, errorObject) => {
    let errors = {};
    for(var i in itemsObject){
        if(errorObject.hasOwnProperty(i)){
            errors[i] = `${errorObject[i][0]}`;
        }
    }
    return errors;
}
const validateErrorForm = (errorObject) => {
    let errors = {};
    for(var i in errorObject){
        let element = document.getElementById(i);
        if(!element || !element.value){
            errors[i] = `${errorObject[i]}`;
            console.log(errors);
        }
    }
    return errors;
}

const successResponse = (response) => {}

const failResponse = (error) => {
    console.error(error);
}

/**
 * Obtiene un elemento del servidor
 */
const getItemExternalApi = (url, form, setItem) => {
    fetch.fetching(process.env.URL_APIS + url , 'POST', form).then(response => {
        setItem(response)
    }).catch(error => {
        console.error(error);
    });
}

const setValues = (item, cols) => {
    cols.forEach(c => {
        if(item.hasOwnProperty(c)){
            let element = document.getElementById(c);
            if(element){
                element.value = item[c];
            }
        }
    })
}

const setValuesNew = (item, cols) => {
    cols.forEach(c => {
        if(item.hasOwnProperty(c)){
            let element = document.getElementById('new_'+c);
            if(element){
                element.value = item[c];
            }
        }
    })
}

const hideModal = (id) => {
    let modal = document.getElementById(id);
    if(modal){
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

const searchAttribute = (object, attribute, isMultiple = true) => {
    if(!object.hasOwnProperty(attribute)){
        object[attribute] = isMultiple ? [0] : '';
    }
    return object;
}

const getAttributes = () => {
    let token = getItem('_token');
    let params = '';
    if(token){
        let device = getItem('lib_device');
        let langActual = getActualLang();
        params = '?_token=' + token + '&_device=' + device + '&_lang=' + langActual.iso + '_' + langActual.iso_country;
    }
    return params;
}
/**
 * Mostrar u ocultar el formulario
**/  
const toggleForm = (showForm, label_status, funcSet, funcSetLab = () => {}) => {
    let tmp = !showForm;
    funcSet(!tmp);
}
/**
 * Valida la información del formulario
 * @return {boolean}
*/
const validateForm = (errorNull, setErrors) => {
    let errorsLoc = validateErrorForm(errorNull);
    let validate = true;
    if(Object.keys(errorsLoc).length > 0){
        validate = false;
        setErrors(errorsLoc);
    }
    return validate;
}

const formatAddress = (item) => {
    let t = JSON.parse(item.extra_info)
    return (t.direccion) ? t.type_name + ' ' + item.direccion.trim() + ', ' + t.postalcode +', '+ t.suburb_name + ', ' + t.town_hall + ', ' + t.city + ', ' + t.state + ', '+ t.country : '';
}

const formatAddressAlter = (item) => {
    let t = JSON.parse(item.extra_info)
    let a = '';
    let s = '';
    if(t.street){
        a += `${t.street} ${t.num_ext} ${t.num_int}`;
        s = ', ';
    }
    if(t.postalcode){
        a += `${s} C.P. ${t.postalcode}`;
        s = ', ';
    }
    if(t.suburb_name){
        a += `${s} ${t.suburb_name}`;
        s = ', ';
    }
    if(t.town_hall){
        a += `${s} ${t.town_hall}`;
        s = ', ';
    }
    if(t.city){
        a += `${s} ${t.city}`;
        s = ', ';
    }
    if(t.state){
        a += `${s} ${t.state}`;
        s = ', ';
    }
    return a;
}

const resetChecks = (className = 'check-item') => {
    let checks = document.querySelectorAll(`.${className}`);
    if(checks.length){
        checks.forEach(c => c.checked = false);
    }
}

const calculateUnitMeasure = (value, unit, units) => {
    let unidad = value * unit.equivalencia;
    let equivalencia = units.find(u => u.equivalencia > unidad);
    if(equivalencia){
        return {unidad: unidad, simbolo: equivalencia.name, id: equivalencia.id};
    } else {
        return {unidad: unidad, simbolo: unit.name, id: unit.id};
    }
}

const validateNumbers = (id) => {
    let i = document.getElementById(id);
    if(i){
        let value = i.value;
        if(isNaN(value)){
            let t = value.length - 1;
            i.value = value.substring(0, t);
            validateNumbers(id);
        }
    }
}

const validateFullNumbers = (id) => {
    let i = document.getElementById(id);
    if(i){
        let value = i.value;
        if(isNaN(value)){
            i.value = '';
        }
    }
}

const toggleArray = (checked, value, arr, name) => {
    let c = arr;
    value = parseInt(value);
    let exist = c.includes(value);
    if(!checked){
        if(!exist){
            if(value == 0){
                let e = document.querySelectorAll(`input[type="checkbox"][name^="status_${name}"]`);
                c = [];
                e.forEach(el => {
                    if(el.value != 0){
                        c.push(parseInt(el.value));
                    }
                })
            } else {
                c.push(value);
            }
        }
    } else {
        if(exist){
            let key = c.findIndex(i => i == value);
            if(key != -1){
                c.splice(key, 1);
            }
        } else if(value == 0){
            c = [];
        }
    }
    return c;
}

function isJsonString(str, param) {
    try {
        let json = JSON.parse(str);
        return (json[param] != undefined);
    } catch (e) {
        return false;
    }
}

/**
 * Retira los acenos y letras como la ñ o ç
 * @param {string} str 
 * @returns {string}
 */
const quitarAcentos = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}
/**
 * Asigna valores de un objeto a varios inputs
 * @param {object} obj 
 * @param {array} attr 
 * @param {array} ids 
 */
const setValuesObjectToInput = (obj, attr, ids) => {
    ids.forEach((id, index) => {
        let a = attr[index];
        if(obj.hasOwnProperty(a)){
            let element = document.getElementById(id);
            if(element){
                element.value = obj[a];
            }
        }
    })
}
/**
 * Guarda los firmantes de un modal
 * @param {string} idModal
 * @param setModalSign
 * @param {array} signers
 * @param {any} id
 * @param {string} token
 * @param {string} prefix
 * @param {string} uri
 * @param successFunction
 * @param errorFunction
 */
const saveSignersModal = (idModal, setModalSign, signers, id, token, prefix, uri, successFunction = () => {}, errorFunction = () => {}) => {
    hideModal(idModal);
    setModalSign(false);
    let f = new FormData();
    signers.map(s => {
        f.append('user[]', s.id)
        f.append('required[]', s.required)
        f.append('id_type[]', s.id_type)
    });
    f.append('actual', id);
    f.append('systemUid', token);
    setItemApi(`${prefix}/${uri}`, f, r => {successFunction(r)}, e => {errorFunction(e)});
}
/**
 * Mostrar un modal y cambiar el estatus de mostrar
 * @param {string} name 
 * @param functionName 
 */
const openModal = (name, functionName) => {
    functionName(true);
    showModal(name);
}
/**
 * Asigna valores de un objeto a varios inputs
 * @param {array} ids 
 */
const setValueInputToObject = (ids) => {
    const obj = {};
    ids.forEach((id, index) => {
        if(!obj.hasOwnProperty(id)){
            let element = document.getElementById(id);
            if(element){
                obj[id] = element.value;
            }
        }
    })
    return obj;
}

const adjustForm = (showForm) => {
    // if(showForm){
        const anchoMinimo = 244;
        const anchoMaximo = 284;
        const ventanaMin = 570;
        let anchoVentana = window.innerWidth;
        const columnasXAncho = (anchoVentana > ventanaMin) ? Math.floor(anchoVentana / anchoMinimo) : 1;
        const columnasNumero = (columnasXAncho > 6) ? 6 : columnasXAncho;
        // const columnasNumero = columnasXAncho;
        const gap = 20;
        let card = document.querySelector('.cardDiv')
        if(window && card){
            let styles = window.getComputedStyle(card);
            let pl = parseFloat(styles.paddingLeft.replace('px', ''))
            let pr = parseFloat(styles.paddingRight.replace('px', ''))
            let maxWidth = card.offsetWidth - (pl + pr + (gap*columnasNumero));
            let elementos = document.querySelectorAll('#formGral .divInput');
            let anchoDiv = (maxWidth / columnasNumero);
            
            elementos.forEach(e => {
                e.style.maxWidth = 'initial'
                e.style.width = (columnasNumero == 1) ? '100%' : `${anchoDiv}px`;
            })
        }
        
    // }
}

const searchPostal = (e, setResults = ()=>{}) => {
    let formData = new FormData();
    formData.append('postal_code', e.target.value);
    formData.append('country', 1);
    getItemExternalApi('search_postal', formData, setResults);
}


export { getListApi, getItemApi, setItemApi, getTextApi, getTextApiSinSystem, showModal, verifyErrors, successResponse, failResponse, getItemExternalApi, validateErrorForm, setValues, setValuesNew, hideModal, searchAttribute, getAttributes, toggleForm, validateForm, formatAddress, resetChecks, calculateUnitMeasure, validateNumbers, toggleArray, isJsonString, quitarAcentos, setValuesObjectToInput, saveSignersModal, openModal, setValueInputToObject, formatAddressAlter, adjustForm, validateFullNumbers, searchPostal };
