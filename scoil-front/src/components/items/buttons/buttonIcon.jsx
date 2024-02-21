import tablero from '../../../assets/icons/tablero.svg';
import aula from '../../../assets/icons/aula_virtual.svg';
import biblioteca from '../../../assets/icons/biblioteca.svg';
import cursos from '../../../assets/icons/cursos_online.svg';
import agenda from '../../../assets/icons/agenda.svg';
import calendario from '../../../assets/icons/calendario.svg';
import chat from '../../../assets/icons/chat.svg';
import muro from '../../../assets/icons/muro.svg';
import servicios from '../../../assets/icons/servicios_escolares.svg';
import salir from '../../../assets/icons/salir.svg';
import pagos from '../../../assets/icons/pagos.svg';
import wall from '../../../assets/icons/wall.svg';
import foros from '../../../assets/icons/foro.svg';


/**
 * Componente ButtonDelete. Devuelve botón con icono "Delete"
 * @param {string} type
 * @param {string} colors se puede personalizar el color del fondo y del texto con el parámetro colors mediante clases de tailwind 
 * @param {string} txt_button
 * @param {bool} filtro {personaliza el color del icono}
 * @param {function} click (optional)
 * @returns 
 */

const ButtonIcon = ({id, type, colors, filtro = false, icono = {icono} , send = false, txt_button , click = () => {}}) => {

    switch(icono){
        case 'tablero': var icon = tablero.src; break;
        case 'aula': var icon = aula.src; break;
        case 'biblioteca': var icon = biblioteca.src; break;
        case 'cursos': var icon = cursos.src; break;
        case 'agenda': var icon = agenda.src; break;
        case 'calendario': var icon = calendario.src; break;
        case 'foro': var icon = foros.src; break;
        case 'chat': var icon = chat.src; break;
        // case 'cartelera': var icon = muro.src; break;
        case 'pagos': var icon = pagos.src; break;
        case 'servicios': var icon = servicios.src; break;
        case 'wall': var icon = wall.src; break;

        case 'salir': var icon = salir.src; break;
    }

    return (
        <>
            <div className=' pl-[35px]'>
                <button type={type} className={`${colors}   flex items-center  h-[35px] w-[228px] font-open rounded-lg focus:outline-none text-sm btnSend whitespace-nowrap text-ellipsis overflow-hidden disabled:opacity-75`} disabled={send} title={txt_button} onClick={click}> 
                    <div className=' mx-[13px] ' style={ filtro ? {filter: 'invert(99%) sepia(23%) saturate(0%) hue-rotate(219deg) brightness(299%) contrast(102%)'} : {filter: 'none'}}>
                        <img src={icon}></img>
                    </div>
                    <>{txt_button}</>
                </button>
            </div>
        </>
    )
}

export default ButtonIcon