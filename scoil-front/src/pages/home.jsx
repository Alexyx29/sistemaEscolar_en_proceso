import ScoilLayout from "@/layout/scoil";
import Section from "@/components/menu/seccion";
import Pago from "@/components/items/pagos";
import BarraDerecha from "@/components/menu/barraDerecha";
import Trayectoria from "@/components/items/trayectoria";
import Notificaciones from "@/components/menu/notificaciones";
import Calendar from "@/components/items/calendar";
import GradeExams from "@/components/teacher/gradeExams";
import Subjects from "@/components/student/subjects";

import bgScoil from '../assets/background/bg_1.jpg';

import { useContext, useEffect, useState } from "react";
import { getTextApi, setItemApi, showModal } from "@/components/useForm";
import { getActualSystem } from "@/components/useLanguage";

//Eliminar
import mat from '@/assets/icons/transportador.svg';
import lit from '@/assets/icons/libro.svg';
import admin from '@/assets/icons/engranaje.svg';
import conta from '@/assets/icons/calculadora.svg';
import dere from '@/assets/icons/balanza.svg';
import info from '@/assets/icons/codigo.svg';
import mark from '@/assets/icons/colores.svg';

import espaniol from '@/assets/background/espaniol.png'
import mate from '@/assets/background/mate.png'
import naturaleza from '@/assets/background/naturaleza.png'
import fcye from '@/assets/background/fcye.png'
import artes from '@/assets/background/artes.png'
import ingles from '@/assets/background/ingles.png'
import eduFisic from '@/assets/background/eduFisic.png'

const Home = () => {
    const system_selected = getActualSystem();
    const prefix = 'home/student/';
    const [ promedio, setPromedio ] = useState(0);
    const [ carrera, setCarrera ] = useState('');
    const [ pago, setPago ] = useState([]);
    const [ subjets, setSubjets ] = useState([]);
    const [ attendance, setAttendance ] = useState([]);
    const [ exams, setExams ] = useState([]);
    const [ tasks, setTasks ] = useState([]);
    const [ notifications, setNotifications ] = useState([]);

    const text= {
        duration:"Duración",
        btnExamn:'Comenzar',
    }

    useEffect(() => {
        getInitial();
        getNotifications();
    }, []);

    const getInitial = () => {
        getTextApi(`${prefix}/get`, r => {
            setPromedio(r.promedio);
            setCarrera(r.carrera);
            setPago(r.pagos);
            setSubjets(r.subjets);
            setAttendance(r.attendance);
            setExams(r.exams);
            setTasks(r.tasks);
        }, '', err => {
            const response = {
                'promedio': 8.2,
                'carrera': 'LIC. ADMINISTRACIÓN',
                'pagos': {
                    'fecha': '15 de Julio de 2023',
                    'monto': '$1,570.00',
                },
                'subjets': [
                    { id: 1, name: "Español", horario: "20/08/2023 00:00 - 24:00 hs.", duration: "45 minutos", calificacion: 10, image: espaniol.src },
                    { id: 2, name: "Matemáticas", horario: "20/08/2023 00:00 - 24:00 hs.", duration: "45 minutos", calificacion: 6.4, image: mate.src },
                    { id: 3, name: "Exploración de la Naturaleza y la Sociedad", horario: "20/08/2023 00:00 - 24:00 hs.", duration: "1:00 hora", calificacion: 9.9, image: naturaleza.src },
                    { id: 4, name: "Formación Cívica y Ética", horario: "20/08/2023 00:00 - 24:00 hs.", duration: "45 minutos", calificacion: 9.8, image: fcye.src },
                    { id: 5, name: "Educación Artística", horario: "20/08/2023 00:00 - 24:00 hs.", duration: "45 minutos", calificacion: 3.2, image: artes.src },
                    { id: 6, name: "Inglés", horario: "20/08/2023 00:00 - 24:00 hs.", duration: "1:00 hora", calificacion: 8.2, image: ingles.src },
                    { id: 7, name: "Educación física", horario: "20/08/2023 00:00  - 24:00 hs.", duration: "45 minutos", calificacion: 10, image: eduFisic.src },
                ],
                'attendance': [
                    { id: 1, name: "Español", asistencia: 100, image: espaniol.src },
                    { id: 2, name: "Matemáticas", asistencia: 64, image: mate.src },
                    { id: 3, name: "Exploración de la Naturaleza y la Sociedad", asistencia: 99, image: naturaleza.src },
                    { id: 4, name: "Formación Cívica y Ética", asistencia: 98, image: fcye.src },
                    { id: 5, name: "Educación Artística", asistencia: 32, image: artes.src },
                    { id: 6, name: "Inglés", asistencia: 82, image: ingles.src },
                    { id: 7, name: "Educación física", asistencia: 100, image: eduFisic.src },
                ],
                'exams': [
                    { id: 1, name: "Español", horario: "20/08/2023 10:00 - 12:00 hs.", duration: "45 minutos", image: espaniol.src, btnExamn:'Comenzar'},
                    { id: 2, name: "Matemáticas", horario: "20/08/2023 10:00 - 12:00 hs.", duration: "45 minutos", image: mate.src, btnExamn:'Comenzar'},
                    { id: 3, name: "Educación Artística", horario: "20/08/2023 10:00 - 12:00 hs.", duration: "1:00 hora", image: artes.src,  btnExamn:'Comenzar'},
                    { id: 4, name: "Educación Artística", horario: "20/08/2023 10:00 - 12:00 hs.", duration: "1:00 hora", image: artes.src,  btnExamn:'Comenzar'},
                    { id: 4, name: "Educación Artística", horario: "20/08/2023 10:00 - 12:00 hs.", duration: "1:00 hora", image: artes.src,  btnExamn:'Comenzar'},
                    { id: 6, name: "Educación Artística", horario: "20/08/2023 10:00 - 12:00 hs.", duration: "1:00 hora", image: artes.src,  btnExamn:'Comenzar'},
                
                ],
                'tasks': [
                    { id: 1, name: "Matemáticas", horario: "20/08/2023 00:00 - 24:00 hs.", description: "5 Ejercicios de Trigonometría sobre lo analizado en clase.", image: mate.src, btnTask:'Comenzar' },
                    { id: 2, name: "Matemáticas", horario: "20/08/2023-00:00 - 24:00 hs.", description: "5 Ejercicios de Trigonometría sobre lo analizado en clase.", image: mate.src, btnTask:'Comenzar' },
                    { id: 3, name: "Matemáticas", horario: "20/08/2023-00:00 - 24:00 hs.", description: "5 Ejercicios de Trigonometría sobre lo analizado en clase.", image: mate.src, btnTask:'Comenzar' },
                    { id: 4, name: "Matemáticas", horario: "20/08/2023-00:00  - 24:00 hs.", description: "5 Ejercicios de Trigonometría sobre lo analizado en clase.", image: mate.src, btnTask:'Comenzar' },
                    { id: 5, name: "Matemáticas", horario: "20/08/2023-00:00  - 24:00 hs.", description: "5 Ejercicios de Trigonometría sobre lo analizado en clase.", image: mate.src, btnTask:'Comenzar' },
                    { id: 6, name: "Matemáticas", horario: "20/08/2023-00:00  - 24:00 hs.", description: "5 Ejercicios de Trigonometría sobre lo analizado en clase.", image: mate.src, btnTask:'Comenzar' },
                
                ]
            };

            setPromedio(response.promedio);
            setCarrera(response.carrera);
            setPago(response.pagos);
            setSubjets(response.subjets);
            setAttendance(response.attendance);
            setExams(response.exams);
            setTasks(response.tasks);
        });
    }

    const getNotifications = () => {
        getTextApi(`${prefix}/get-notifications`, r => {
            setNotifications(r.notifications);
        }, '', err => {
            const response = {
                'notifications': [
                    { id: 1, tittle: 'Junta de Consejo Técnico', description: 'Litora curae tincidunt quam a netus mus erat nascetur, euismod tristique vestibulum tellus ante nisi ornare lectus sem, urna pharetra pulvinar facilisi augue himenaeos bibendum. Habitant sociis aptent vel integer ultrices aliquam mollis justo netus nec natoque, fames' },
                    { id: 2, tittle: '¡Feliz día de las madres!', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolor sit amet, consectetur.' },
                    { id: 3, tittle: 'Festival deportivo', description: 'Dolor sit ameididunt ut labore et dolore magna aliqua elit, sed do eiusmod tempor…' },
                    { id: 4, tittle: 'Campaña contra el bullying escolar', description: 'Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipis cing elit, sed do eiusmod tempor  aliqua…' },
                    { id: 5, tittle: 'incididunt labore et dolore', description: 'Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipis cing elit, sed do eiusmod tempor  aliqua…' },
                    { id: 6, tittle: 'sed do eiusmod', description: 'sed do eiusmod lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur adipiscing elit.' },
                    { id: 7, tittle: 'sit AMET', description: 'Lorem ipsum dolor sit amet, consectetur.' },
                    { id: 8, tittle: 'incididunt ut labore magna', description: 'Sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna adipis cing elit, sed do eiusmod tempor  aliqua…' },
                ],
            };

            setNotifications(response.notifications);
        });
    }

    return(
        <>
            <div className="flex w-[full] h-[100vh] " style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <ScoilLayout  
                    derecha={
                        <>
                            {/* Contenido de sección superior*/}
                            <BarraDerecha styleBarRight={'md:hidden lg:hidden xl:hidden'} head ={
                                <>
                                    <Trayectoria promedio={promedio} carrera={carrera}  />
                                </>
                        }>
                                <>
                                    <Notificaciones borde={true} data={notifications}  />
                                </>
                            </BarraDerecha>
                        </>
                    }
                >
                    <>
                    <div className="flex sm:flex-col ss:flex-col gap-[30px] sm:gap-y-[30px] ss:gap-y-[30px] w-[100%]  sm:w-full ss:w-[310px] ss:flex ss:mx-auto " >
                        <div className="flex grow flex-col gap-[30px] max-w-[471px] sm:w-full md:w-[46%]   ">
                            {/* Sección de materias*/}
                            <Section colors={''} title='MATERIAS' widthSection="w-[86%] " showPlus={true} link={'/horario-alumno'}>
                                <div className="h-[532px] " >
                                    <div className="h-[500px]  overflow-auto news " >
                                        <Subjects type={'subjets'} data={subjets} duration={text.duration} />
                                    </div>
                                </div>             
                            </Section>  

                            {/* Sección de asistencias*/}
                            <Section colors={''} title='ASISTENCIAS' widthSection="w-[100%]" showPlus={true} link={'/tabla-asistencias'} >
                                <div className="h-[600px] " >
                                    <div className="h-[560px]  overflow-auto news " >
                                        <Subjects type={'attendance'} data={attendance} duration={text.duration}/>
                                    </div>
                                </div>
                            </Section>
                            <Section colors={'h-[410px] ss:hidden sm:hidden  2xl:hidden'}>
                                <Notificaciones borde={true} data={notifications}  />
                            </Section>

                        </div>


                        <div className="flex grow flex-col gap-[30px] max-w-[471px] sm:w-full md:w-[46%] ">
                            {/* Sección de pagos*/}
                            <Section colors={''} title='PAGOS' link={'/pagos-alumno'} showPlus={true} >
                                <Pago fecha={pago ? pago.fecha : ''} monto={pago ? pago.monto : ''} />                        
                            </Section>

                            {/* Sección de calendario*/}
                            <Section colors={''} title='' showPlus={true} >
                                <Calendar showPlus={true} id='cal' link='/calendario' height={'h-[350px]'} margin = {'my-[15px]'}/>
                            </Section>
                            
                            {/* Sección de exámenes*/}
                            <Section colors={''} title='EXÁMENES' showPlus={true} link={'/lista-examenes-alumnos'}>
                                <div className="h-[200px] mb-[25px]  overflow-auto news  " >
                                    <GradeExams type={'examen'} tablero={'student'} data={exams} promedio={promedio} carrera={carrera} />                      
                                </div>
                            </Section> 

                            {/* Sección de TAREAS*/}
                        
                            <Section colors={''} title='TAREAS' showPlus={true} link={'/lista-tareas-alumnos'}  >
                                <div className="h-[245px] mt-[0px] mb-[25px]  overflow-auto news  " >
                                    <GradeExams type={'tarea'} tablero={'student'} data={tasks} promedio={promedio} carrera={carrera} />            
                                </div>
                            </Section> 

                            <Section colors={'ss:hidden sm:hidden  2xl:hidden'} >
                                <Trayectoria promedio={promedio} carrera={carrera}  />
                            </Section>
                        
                        </div>
                    </div>                                        
                    </>
                </ScoilLayout>                                                    
            </div>            
        </>
    );
}

export default  Home;

               
                



