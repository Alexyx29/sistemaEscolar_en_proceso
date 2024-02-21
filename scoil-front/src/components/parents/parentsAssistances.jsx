import mat from '@/assets/icons/transportador.svg';
import lit from '@/assets/icons/literatura.png';
import admin from '@/assets/icons/engranaje.svg';
import conta from '@/assets/icons/calculadora.svg';
import dere from '@/assets/icons/balanza.svg';
import info from '@/assets/icons/codigo.svg';
import mark from '@/assets/icons/colores.svg';
import { useEffect, useState } from "react";
import Link from "next/link";
import Section from "../menu/seccion";
import Materia from "../items/materias";

const ParentsAssistances = ({onContentClick, subjectsList}) =>{    
    const [subjects, setSubjects] = useState([]);
    const [text, setText] = useState({
        titleSection: 'ASISTENCIAS'
    })
        
    useEffect(() =>{
        if(subjectsList){
            setSubjects(subjectsList);            
        }        
    },[subjectsList]);    
    const subjectImages = [lit.src, dere.src, conta.src, mat.src, info.src, admin.src, mark.src]; //ASIGNACIÖN DE IMÁGENES PROVICIONAL
        
    const renderSubjects = () =>{
        return subjects.map((subject, index) =>{
            return(                                
                <Materia key={index} id= {index} asistencia={true} imagen={subjectImages[index]} nombre= {subject.name} asistencias={subject.assistance}></Materia>
            )
        })
    }
    
    return(
        <>
            <Section colors={''} title={text.titleSection} widthSection="w-full" link='/tabla-asistencias-padres'>
                <div className="my-[0px]">
                    {renderSubjects()}                                                          
                </div>                    
            </Section>
        </>
    )                
}    

export default ParentsAssistances;