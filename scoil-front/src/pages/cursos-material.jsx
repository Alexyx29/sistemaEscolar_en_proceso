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
import LayoutTeacher from "@/layout/layaoutScoilTeacher";
import ResoursesCards from "@/components/tools/resoursesCards";

import imagen1 from '@/assets/background/imagen1.png'
import imagen2 from '@/assets/background/imagen2.jpg'
import imagen4 from '@/assets/background/imagen4.jpg'
import imagen5 from '@/assets/background/imagen5.png'
import imagen6 from '@/assets/background/imagen6.jpg'

import { useContext, useEffect, useState } from "react";
import { getTextApi, setItemApi, showModal } from "@/components/useForm";
import { getActualSystem } from "@/components/useLanguage";

const SelectCoursesMaterial = () => {
    const [ section, setSection ] = useState(1);
    const [ search, setSearch ] = useState(false);
    const [ tittle, setTittle ] = useState('Mi tablero');
    const [ courses, setCourses ] = useState([]);

    useEffect(() => {
        getCoursees();
    }, [])

    const getCoursees = () => {
        const response = [
            {
                image: imagen1.src,
                name:"Guía Práctica Segundo Examen",
                contador:"4",
                date:"15/11/2023 09:30",
                description:"En esta guía, encontrarás explicaciones detalladas y ejemplos contextualizados que refuerzan los conceptos discutidos en clase, desde el interés compuesto hasta la valoración de inversiones.",
            }, {
                image: null,
                name:"Ejercicios Resueltos para Pla...",
                contador:"5",
                date:"10/09/2023 16:15",
                description:"Esta colección de ejercicios, cuidadosamente resueltos y explicados, está diseñada para acompañar tus lecciones y reforzar tu habilidad para aplicar conceptos clave.",
            }, {
                image: imagen6.src,
                name:"Ejercicios Excel",
                contador:"6",
                date:"04/07/2023 11:50",
                description:"Explora nuestra colección de ejercicios de Excel diseñados para estudiantes de primaria. Estas prácticas interactivas te ayudarán a familiarizarte con las funciones básicas de Excel y mejorar tus habilidades tecnológicas para un aprendizaje más efectivo.",
            }, {
                image: imagen5.src,
                name:"Casos de Estudio en Finanzas ...",
                contador:"3",
                date:"28/05/2023 18:25",
                description:"Sumérgete en el mundo de las finanzas a través de casos de estudio prácticos. Este recurso te proporcionará situaciones del mundo real para aplicar y analizar conceptos financieros aprendidos en clase",
            }, {
                image: imagen4.src,
                name:"Infografía Logística Empresar...",
                contador:"",
                date:"20/03/2023 13:40",
                description:"Desde la gestión de inventario hasta la distribución, esta herramienta visual te guiará a través de los conceptos clave, ofreciendo una comprensión clara y detallada de cómo se optimizan las operaciones logísticas en el mundo empresarial.",
            }, {
                image: imagen2.src,
                name:"Simulaciones Financieras Inte...",
                contador:"",
                date:"14/01/2023 20:05",
                description:"Refuerza tus habilidades de toma de decisiones y mejora tu comprensión de los principios financieros a través de esta emocionante simulación.",
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
                    botonSeleccionado={'aula'} 
                    widthBody="w-[1295px]" 
                    stylesInput= {'w-[878px] '}
                >
                    <>
                        <div className={'flex flex-wrap mt-[px] gap-[30px]'}>
                            {courses.map((cours, indeex) => {
                                return (
                                    <ResoursesCards key={indeex} img={cours.image} name={cours.name} contador={cours.contador} date={cours.date} description={cours.description} colorsBg='bg-blue-progress' colorsBorder='border-blue-progress' linkResourses="/recursos-material" />
                                )
                            })}
                        </div> 
                    </>
                </LayoutTeacher>                                                    
            </div>            
        </>
    );
}

export default SelectCoursesMaterial;

// <div className={'flex flex-col grow gap-[50px]'}>
                              

