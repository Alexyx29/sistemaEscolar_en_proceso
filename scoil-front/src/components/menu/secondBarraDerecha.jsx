import Reac, {useState} from 'react';
import Alumno from "./alumno";
import ButtonIcon from "../items/buttons/buttonIcon";
import LogoScoil from "../items/logoScoil";
import imagen from '../../assets/usuarios/user.png';
import Section from './seccion';
import '@/styles/scrollBarRight.css'

import Tools from "@/components/tools/tools";

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
const SecondBarraDerecha = ({children, head, linkResourses }) => {
    
    return (
        <>
            <div className=" flex flex-col gap-[30px]"  >
                <Section width="w-[290]" >
                    {head}
                </Section>
                
                {/* <Section> */}
                <Tools showNotes = {false} showCourses={true} showResourses = {true} linkResourses={linkResourses} showVideo = {true} showDictionary = {true} showCalc = {false} showHelp = {false} />

                {/* </Section> */}
                {children}            
            </div>      
        </>        
    )
}

export default SecondBarraDerecha;