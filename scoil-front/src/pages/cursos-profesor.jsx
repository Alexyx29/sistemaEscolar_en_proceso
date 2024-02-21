import bgScoil from '../assets/background/bg_1.jpg';
import '@/styles/globals.css'

import Course from "@/components/items/course";
import informatica from '@/assets/background/informatica.jpg'
import adminis from '@/assets/background/admin.jpg'
import contabilidad from '@/assets/background/contabilidad.jpg'
import derecho from '@/assets/background/derecho.jpg'
import literatura from '@/assets/background/literatura.jpg'
import LayoutTeacher from "@/layout/layaoutScoilTeacher";

import { useContext, useEffect, useState } from "react";
import { getTextApi, setItemApi, showModal } from "@/components/useForm";
import { getActualSystem } from "@/components/useLanguage";

const Courses = () => {
    const [ tittle, setTittle ] = useState('Mi tablero');
    const [ search, setSearch ] = useState(false);
    const [ section, setSection ] = useState(1);
    const [ courses, setCourses ] = useState([]);

    useEffect(() => {
        getCoursees();
    }, [])

    const getCoursees = () => {
        const response = [
            {
                image: informatica.src,
                progress:67,
                name:'Explorando el Mundo de las Matemáticas: Primer Grado en Acción',
                duration:'1:30 hrs.',
                provider:'Manuel Alberto Rosales San Agustín',
                description:'Este curso online de matemáticas de primer grado está diseñado para hacer que el aprendizaje sea interactivo, divertido y significativo para los estudiantes de primer grado, brindando una base sólida para su futuro desarrollo matemático.',
            }, {
                image: adminis.src,
                progress:100,
                name:'Negocios con Éxito',
                duration:'1:30 hrs.',
                provider:'Ivana Pérez Conde',
                description:'Este programa integral está diseñado para empoderar a emprendedores y profesionales en el mundo de los negocios. Desde estrategias efectivas de gestión hasta tácticas de marketing innovadoras, exploraremos las claves para construir y hacer crecer negocios sólidos.',
            }, {
                image: contabilidad.src,
                progress:20,
                name:'Estrategias de Emprend...',
                duration:'1:30 hrs.',
                provider:'Federico Díaz Acuña',
                description:'Este programa te sumergirá en el fascinante viaje de convertir ideas en negocios exitosos. Desde la conceptualización de tu visión hasta la implementación de estrategias efectivas de marketing y gestión, cada lección está diseñada para proporcionarte las habilidades prácticas y la perspicacia estratégica',
            }, {
                image: derecho.src,
                progress:8,
                name:'Negociación y Resolució...',
                duration:'1:30 hrs.',
                provider:'Daniela Marlene Ramírez Zamudio',
                description:'En este programa, exploraremos las habilidades fundamentales para negociar con éxito y resolver conflictos de manera efectiva en entornos profesionales y personales. Desde estrategias de comunicación hasta técnicas de negociación',
            }, {
                image: literatura.src,
                progress:80,
                name:'Marketing Digital y Co...',
                duration:'1:30 hrs.',
                provider:'Manuel Alberto Rigoletti Spartto',
                description:'Diseñado para profesionales y emprendedores, este programa integral te sumergirá en las estrategias más actuales y efectivas para destacar en el entorno digital.',
            }, {
                image: null,
                progress:100,
                name:'Liderazgo Estratégico E...',
                duration:'1:30 hrs.',
                provider:'Federico Díaz Acuña',
                description:'Exploraremos los principios fundamentales del liderazgo estratégico, desde la formulación de visiones inspiradoras hasta la toma de decisiones estratégicas y la gestión efectiva de equipos.',
            },
        ];

        setCourses(response);
    }

    const handleButtonClickInBarraMenu = (Id) => {
        setSection(Id);
        updateHeader(Id);
    }

    const updateHeader = (ID) =>{
        switch (ID) {
            case 1: setSearch(false) ;setTittle('Mi tablero') ;break;
            case 2: setSearch(true) ;setTittle('Aula Virtual') ;break;
            case 3: setSearch(true) ;setTittle('Cursos Online') ;break;            
            default:                
        }
    }

    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <LayoutTeacher 
                    botonSeleccionado={'cursos'} 
                    widthBody="w-[1295px]" 
                    stylesInput= {'w-[878px] '}
                >
                    <>
                        <div className="flex grow flex-col gap-[30px] min-w-min ">
                            <div className={'flex flex-wrap gap-[30px]'}>
                                {courses.map((cours, indeex) => {
                                    return (
                                        <Course key={indeex} img={cours.image} progress={cours.progress} name={cours.name} duration={cours.duration} provider={cours.provider} description={cours.description} href="/cursos-profesores-contenido" click={null} />
                                    )
                                })}
                            </div>
                        </div>                                   
                    </>
                </LayoutTeacher>                                                    
            </div>            
        </>
    );
}

export default Courses;

// <div className={'flex flex-col grow gap-[50px]'}>