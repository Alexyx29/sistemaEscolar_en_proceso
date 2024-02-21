
import { Children } from 'react';
/**
 * Componente ButtonDelete. Devuelve botón con icono "Delete"
 * @param {string} type
 * @param {string} colors se puede personalizar el color del fondo y del texto con el parámetro colors mediante clases de tailwind 
 * @param {string} txt_button
 * @param {bool} filtro {personaliza el color del icono}
 * @param {function} click (optional)
 * @returns 
 */

const ButtonThemes = ({id, type, colors, filtro = false, send, txt_button , click = () => {}}) => {
    
    
    
    switch(id){
        case 'tablero': break;
        case 'aula': break;
        case 'biblioteca': break;
        case 'cursos': break;
        case 'agenda': break;
        case 'calendario': break;
        case 'chat': break;
        case 'muro': break;
        case 'pagos': break;
        case 'servicios': break;
        case 'salir': break;
    }
    return (
        <>
        <div className=' pl-[35px]'>
            <button type={type} className={`${colors}   flex items-center  h-[35px] w-[228px] font-open rounded-lg focus:outline-none text-sm btnSend whitespace-nowrap text-ellipsis overflow-hidden disabled:opacity-75`} disabled={send} title={txt_button} onClick={click}> 
                <div className=' mx-[13px] ' style={ filtro ? {filter: 'invert(99%) sepia(23%) saturate(0%) hue-rotate(219deg) brightness(299%) contrast(102%)'} : {filter: 'none'}}>
                
                </div>
                <>{txt_button}</>
            </button>
        </div>
        </>
    )
}

export default ButtonThemes;