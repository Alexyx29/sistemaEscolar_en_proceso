import { useEffect, useRef, useState } from "react"

/**
 * Componente Select
 * Puede trabajar con una lista de objetos o un arreglo de elementos string
 * @param {string} label Si no está especifícado o es una cadena vacía no se muestra la etiqueta label
 * @param {boolean} hiddenMargin Si es verdadero se asignará un margen de md:mb-7 mb-2
 * @param {string} id
 * @param {string} name
 * @param {boolean} disabled
 * @param {string} error Solo se muestra el error si el parámetro es distinto de una cadena vacía
 * @param {string} emptyItem Es para mostrar el texto a visualizar con un valor nulo
 * @param {boolean} isObjectList Indica si la lista es de objetos o de textos
 * @param {array} options Es la lista de elementos, si son objetos deben ser {id: valorId, name: valorName}, donde id es el valor que se le da a la opción y name el texto que se muestra
 * Si son textos el valor es el index y el texto se mostrará como opción
 * @param {boolean} add Si es verdadero muestra la opción de añadir un nuevo elemento a la lista con el valor de "addItem"
 * @param {string} text_add Es el texto que se muestra en la opción de nuevo elemento, si add es verdadero hay que específicar este texto
 * @returns 
 */
const Select = ({ label = '', hiddenMargin, id, name, disabled, error, emptyItem, isObjectList = true, options, add, text_add, change = () => {}, value='', styles='' }) => {
    let select = useRef(null);
    useEffect(()=>{
        if(select.current){
            select.current.value = value
        }
    }, [value, options.length]);

    useEffect(() => {
        
    }, [])

    return (
        <>
            <div className={'w-full'}>
                <div className={(hiddenMargin ? '' : 'mb-7') + ' relative'}>
                    { label && 
                        <label className="block ml-1 text-sm text-left opensans text-libellum-text-gray ">{label}</label>
                    }
                    <div className="relative bg-white rounded-lg">
                        <select id={id} autoComplete="off" className={`${styles} form-select text-sm appearance-none w-full border rounded-lg pl-3 pr-6 border-libellum-border text-gray_alter focus:outline-none py-2 h-9 bg-transparent relative z-20`} name={name} disabled={disabled} onChange={change} ref={select}>
                            { emptyItem && 
                                <option value="">{emptyItem}</option>
                            }
                            { isObjectList && options &&
                                options.map(i => {
                                    return <option key={i.id} value={i.id}>{i.name}</option>
                                })
                            }
                            { !isObjectList && 
                                options.map((i, index) => {
                                    return <option key={index} value={index}>{i}</option>
                                })
                            }
                            { add && 
                                <option value="addItem">{text_add}</option>
                            }
                        </select>
                        <div className="absolute w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-x-transparent border-t-gray_alter border-solid right-3 top-4 z-10" onClick={e => {alert('hi');select.current.click()}}></div>
                    </div>
                    { error && 
                        <div className="absolute text-xs text-error-warning whitespace-nowrap font-open">{error}</div>
                    }
                </div>
            </div>
        </>
    )
}
export default Select;