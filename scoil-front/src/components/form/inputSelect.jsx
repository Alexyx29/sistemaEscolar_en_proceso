import { useEffect } from "react";
import iconoSearch from '../../assets/icons/search.svg';
import date from '@/assets/icons/date.svg';
import { faTriangle } from '@fortawesome/free-solid-svg-icons';
import selectIcon from '@/assets/icons/select-icon.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


/**
 * Componente Input con icono
 * @param {string} label Si no está especifícado o es una cadena vacía no se muestra la etiqueta label
 * @param {boolean} hiddenMargin Si es verdadero se asignará un margen de md:mb-7 mb-2
 * @param {string} id
 * @param {string} name
 * @param {string} type establecer el tipo de input
 * @param {string} placeholder
 * @param {string} icono {amex, visa, master, date, ...}
 * @param {string} error Solo se muestra si el parámetro es distinto de una cadena vacía
 * @returns 
 */

const InputSelect = ({label, hiddenMargin, rounded='rounded-[10px]', id, name, type = 'text', placeholder = '', icono, error = '', change = () => {}, readonly = false, disabled = false, align = 'left', value = '', autoComplete = 'false', paddingRight = '10px', width = '40px', height = '30px', blur = () => {} }) => {        
    switch(icono){
        case 'search':
            var icon = iconoSearch.src;
            width = '15px';
            height = '15px';
            break;
        case 'calendar':
            var icon = date.src;
            width = '20px';
            height = '20px';
            break;
        /* case 'amex':
            var icon = iconoAmex.src;
        break;
        case 'master':
            var icon = iconoMaster.src;
        break;
        case 'visa':
            var icon = iconoVisa.src;
        break; */
    }    
    useEffect(() => {
        let i = document.getElementById(id);
        if(i){
            i.value = value;
        }
    }, [ value ])
    
    return (
        <>
            <div className={'w-full'}>
                { label !== '' && 
                    <label className="block opensans text-sm text-message whitespace-nowrap  overflow-hidden text-left font-open">{label}</label>
                }
                <div className={(hiddenMargin ? '' : 'md:mb-0 mb-0') + ' relative cursor-pointer'}>
                    <div className="flex absolute h-[100%] items-center top-0 right-[10px]">                        
                        <img src={selectIcon.src}></img>
                    </div>                    
                    <input id={id} name={name} type={type} placeholder={placeholder} autoComplete={autoComplete} className={`${rounded} w-full text-[14px] border border-libellum-border focus:outline-none text-input-label-gray placeholder:opensans placeholder:text-txt-search  pl-[15px] py-3 font-open h-[36px] cursor-pointer text-${align}`} onChange={change} readOnly={readonly} disabled={disabled} style={{paddingRight: paddingRight}} onBlur={blur}/> 
                    { error &&(
                        <div className="text-error-warning text-xs absolute whitespace-nowrap font-open text-left">{error}</div>
                    )}
                    <label className="block opensans text-xs  whitespace-nowrap text-ellipsis overflow-hidden ml-3 dark:text-input-label-gray text-left font-open" style={{color : '#FE7F01'}}></label>
                </div>
            </div>
        </>
    )
}

export default InputSelect;