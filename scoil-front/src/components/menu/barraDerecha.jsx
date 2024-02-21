import Reac, {useState} from 'react';
import Alumno from "./alumno";
import ButtonIcon from "../items/buttons/buttonIcon";
import LogoScoil from "../items/logoScoil";
import imagen from '../../assets/usuarios/user.png';
import Section from './seccion';
import '@/styles/scrollBarRight.css'

/**
 * Componente RightMenu
 * Es el menú de la derecha
 * @param {boolean} hidden Si es verdadero oculta el menú en caso contrario lo muestra
 * @param {object} text
 * @param {object} modules
 * @param {function} hiddenMenu Para ocultar el menu
 * @param {object} user Información del usuario logueado
 * @param {integer} space Espacio disponible del 0 al 100
 * @param {string} urlImage
 * @param {string} locale
 * @param {integer} spaceUsed
 * @param {array} idiomas
 * @param {object} system
 * @returns 
 */
const BarraDerecha = ({children, head, plus, styleBarRight}) => {
    
    return (
        <>
            <div className={`${styleBarRight} flex flex-col w-[290px] md:w-full grow gap-[30px] h-[full]   ss:items-center`}>
                <Section colors={'ss:w-[310px] '}>
                    {head}
                </Section>
                
                {plus &&
                    <Section colors={'ss:w-[310px]'}>
                        {plus}
                    </Section>
                }

                <Section colors={'grow ss:w-[310px]'}>
                    {children}
                </Section>            
            </div>      
        </>        
    )
}

export default BarraDerecha;