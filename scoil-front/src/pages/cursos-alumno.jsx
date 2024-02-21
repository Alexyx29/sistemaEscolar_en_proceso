import Materia from "@/components/items/materias";
import Section from "@/components/menu/seccion";
import ScoilLayout from "@/layout/scoil";
import bgScoil from '../assets/background/bg_1.jpg';
import mat from '../assets/icons/transportador.svg';
import lit from '../assets/icons/libro.svg';
import admin from '../assets/icons/engranaje.svg';
import conta from '../assets/icons/calculadora.svg';
import dere from '../assets/icons/balanza.svg';
import info from '../assets/icons/codigo.svg';
import mark from '../assets/icons/colores.svg';
import facturacion from '../assets/icons/facturacion.svg';
import monedero from '../assets/icons/monedero.svg';
import asistencia from '../assets/icons/asistencia.svg';
import '@/styles/globals.css'

import Pago from "@/components/items/pagos";
import BarraDerecha from "@/components/menu/barraDerecha";
import Trayectoria from "@/components/items/trayectoria";
import Notificaciones from "@/components/menu/notificaciones";
import Calendar from "@/components/items/calendar";

import IconMoney from "@/components/items/iconMoney";
import InfoPayments from "@/components/items/infopayments";
import Line from "@/components/items/line";
import Items from "@/components/items/items";
import AlertDefeaded from "@/components/items/alertDefeaded";
import Course from "@/components/items/course";
import informatica from '@/assets/background/informatica.jpg'
import adminis from '@/assets/background/admin.jpg'
import contabilidad from '@/assets/background/contabilidad.jpg'
import derecho from '@/assets/background/derecho.jpg'
import literatura from '@/assets/background/literatura.jpg'
import ViewCourse from "./viewCourse";

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
                name:'"Explorando el Mundo de las Matemáticas: Primer Grado en Acción"',
                duration:'1:30 hrs.',
                provider:'Manuel Alberto Rigoletti Spartto',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor in re, sunt in culpa qui officia deserunt mollit anim id est laborum…',
                href:'/curso-desglose-alumno',
            }, {
                image: adminis.src,
                progress:100,
                name:'Negocios con Éxito',
                duration:'1:30 hrs.',
                provider:'Ivana Pérez Conde',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor in re, sunt in culpa qui officia deserunt mollit anim id est laborum…',
                href: "",
            }, {
                image: contabilidad.src,
                progress:20,
                name:'Estrategias de Emprend...',
                duration:'1:30 hrs.',
                provider:'Federico Díaz Acuña',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor in re, sunt in culpa qui officia deserunt mollit anim id est laborum…',
                href: "",
            }, {
                image: derecho.src,
                progress:8,
                name:'Negociación y Resolució...',
                duration:'1:30 hrs.',
                provider:'Daniela Marlene Ramírez Zamudio',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor in re, sunt in culpa qui officia deserunt mollit anim id est laborum…',
                href: "",
            }, {
                image: literatura.src,
                progress:80,
                name:'Marketing Digital y Co...',
                duration:'1:30 hrs.',
                provider:'Manuel Alberto Rigoletti Spartto',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor in re, sunt in culpa qui officia deserunt mollit anim id est laborum…',
                href: "",
            }, {
                image: null,
                progress:100,
                name:'Liderazgo Estratégico E...',
                duration:'1:30 hrs.',
                provider:'Federico Díaz Acuña',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor in re, sunt in culpa qui officia deserunt mollit anim id est laborum…',
                href: "",
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
            case 1: setSearch(false); setTittle('Mi tablero'); break;
            case 2: setSearch(true); setTittle('Aula Virtual'); break;
            case 3: setSearch(true); setTittle('Cursos Online'); break;                          
        }
    }

    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <ScoilLayout 
                 vacio={false} 
                 derecha={false} 
                    botonSeleccionado={'cursos'} 
                    widthBody="w-[1293px]" 
                    stylesInput= {'w-[878px] '}
                >
                    <>
                        <div className="flex grow flex-col gap-[30px] min-w-min ">
                            <div className={'flex flex-wrap gap-[30px]'}>
                                {courses.map((cours, indeex) => {
                                    return (
                                        <Course key={indeex} img={cours.image} progress={cours.progress} name={cours.name} duration={cours.duration} provider={cours.provider} description={cours.description} click={null} bar={true} href={cours.href}/>
                                    )
                                })}
                            </div>
                        </div>                                   
                    </>
                </ScoilLayout>                                                    
            </div>            
        </>
    );
}

export default Courses;

// <div className={'flex flex-col grow gap-[50px]'}>
                              

