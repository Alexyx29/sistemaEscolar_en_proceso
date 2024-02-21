import { useEffect } from "react";

/**
 * Componente Input
 * @param {string} label Si no está especifícado o es una cadena vacía no se muestra la etiqueta label
 * @param {boolean} hiddenMargin Si es verdadero se asignará un margen de md:mb-7 mb-2
 * @param {string} id
 * @param {string} name
 * @param {string} type establecer el tipo de input
 * @param {string} placeholder
 * @param {string} error Solo se muestra si el parámetro es distinto de una cadena vacía
 * @returns 
 */
const Input = ({ label, hiddenMargin, id, name, type = 'text', placeholder = '', error = '', change = () => {}, readonly = false, disabled = false, align = 'left', value = '', autoComplete = 'false', paddingRight = '10px',height='', rounded = 'rounded-md',blur = () => {} }) => {
    
    useEffect(() => {
        let i = document.getElementById(id);
        if(i){
            i.value = value;
        }
    }, [ value ])
    
    return (
        <>
            <div className={`w-full ${height}`}>
                { label !== '' && 
                    <label className="block opensans text-sm text-libellum-text-gray whitespace-nowrap  overflow-hidden text-left font-open">{label}</label>
                }
                <div className={(hiddenMargin ? 'md:mb-7 mb-2' : '') + ' relative'}>
                    <input id={id} name={name} type={type} placeholder={placeholder} autoComplete={autoComplete} className={`w-full bg-white border border-libellum-border focus:outline-none text-libellum-text-gray placeholder:opensans pl-[15px] py-3 font-open h-[36px] dark:bg-input-white dark:placeholder:text-libellum-text-gray text-${align} ${height} ${rounded}`} onChange={change} readOnly={readonly} disabled={disabled} style={{paddingRight: paddingRight}} onBlur={blur} />
                    { error &&(
                        <div className="text-error-warning text-[13px] absolute whitespace-nowrap font-open text-left">{error}</div>
                    )}
                    <label className="block opensans text-xs  whitespace-nowrap text-ellipsis overflow-hidden ml-3 dark:text-input-label-gray text-left font-open" style={{color : '#FE7F01'}}></label>
                </div>
            </div>
        </>
    )
}
export default Input;