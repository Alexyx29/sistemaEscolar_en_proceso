import LayoutTeacher from "@/layout/layaoutScoilTeacher";
import Section from "@/components/menu/seccion";
import Pago from "@/components/items/pagos";
import BarraDerecha from "@/components/menu/barraDerecha";
import Trayectoria from "@/components/items/trayectoria";
import Notificaciones from "@/components/menu/notificaciones";
import Calendar from "@/components/items/calendar";
import StudentListTeacher from "@/components/teacher/studentListTeacher";
import AttendaceTeacher from "@/components/teacher/attendance";
import GradeExams from "@/components/teacher/gradeExams";
import Horario from "@/components/teacher/horario";
import ListAttendanceModalTeacher from "@/components/teacher/listAttendanceModalTeacher";
import { getActualSystem } from "@/components/useLanguage";

import bgScoil from '@/assets/background/bg_1.jpg'

import { useContext, useEffect, useState } from "react";
import { getTextApi, setItemApi, showModal } from "@/components/useForm";

//Eliminar
import calculadora  from '@/assets/icons/calculator.svg';
import balanza  from '@/assets/icons/balanza.svg';
// import contabilidad  from '@/assets/icons/contabilidad.svg';
import mat from '@/assets/icons/transportador.svg';
import lit from '@/assets/icons/libro.svg';
import admin from '@/assets/icons/engranaje.svg';
import espaniol from '@/assets/background/espaniol.png'
import naturaleza from '@/assets/background/naturaleza.png'
import mate from '@/assets/background/mate.png'
import contabilidad from '@/assets/background/contabilidad.jpg'
import fcye from '@/assets/background/fcye.png'
import artes from '@/assets/background/Artes.png'
import ingles from '@/assets/background/ingles.png'


const HomeTeacher = () => {
    const system_selected = getActualSystem();
    const prefix = 'home/teacher/';
    const [ promedio, setPromedio ] = useState(0);
    const [ students, setStudents ] = useState([]);
    const [ attendanceStudents, setAttendanceStudents ] = useState([]);
    const [ schedules, setSchedules ] = useState([]);
    const [ exams, setExams ] = useState([]);
    const [ tasks, setTasks ] = useState([]);
    const [ notifications, setNotifications ] = useState([]);
    const [ text, setText ] = useState({duracion: 'Duración'})

    useEffect(() => {
        getInitial();
        getNotifications();
    }, []);

    const getInitial = () => {
        getTextApi(`${prefix}/get`, r => {
            setPromedio(r.promedio);
            setStudents(r.students);
            setAttendanceStudents(r.attendance);
            setSchedules(r.schedules);
            setExams(r.exams);
            setTasks(r.tasks);
        }, '', err => {
            const response = {
                'promedio': 8.2,
                'students': [
                    { id: 1,  attendance:"assistance",  name: 'Alberto', lastName: 'Villa Reyes', usuario: 'user', image: '' },
                    { id: 2,  attendance:"assistance",  name: 'Jane', lastName: 'Doe', usuario: 'user', image: '' },
                    { id: 3,  attendance:"assistance",  name: 'Alejandra', lastName: 'Valdés Bernardino', usuario: 'user', image: '' },
                    { id: 4,  attendance:"assistance",  name: 'Anette', lastName: 'Hernández Nodal', usuario: 'user', image: '' },
                    { id: 5,  attendance:"delay",       name: 'Areli', lastName: 'Mateos Sepulvera', usuario: 'user', image: '' },
                    { id: 6,  attendance:"assistance",  name: 'Carlos', lastName: 'Duarte González', usuario: 'user', image: '' },
                    { id: 7,  attendance:"assistance",  name: 'Cinthya', lastName: 'Sandoval Ruíz', usuario: 'user', image: '' },
                    { id: 8,  attendance:"missSchool",  name: 'Daniela', lastName: 'Obregón Silva', usuario: 'user', image: '' },
                    { id: 9,  attendance:"assistance",  name: 'Dante', lastName: 'Ferreira Morales', usuario: 'user', image: '' },
                    { id: 10, attendance:"delay",       name: 'Diana', lastName: 'Valdés Bernardino', usuario: 'user', image: '' },
                    { id: 11, attendance:"delay",       name: 'Diego Javier', lastName: 'Rivera Mendoza', usuario: 'user', image: '' },
                    { id: 12, attendance:"delay",       name: 'Diego Javier', lastName: 'Maximiliano Francisco Sebastián Alejandro Rodríguez Hernández González López Martínez Pérez Suárez.', usuario: 'user', image: '' },

                ], 
                'attendance': [
                    { id: 1, attendance:"assistance", name: 'Alberto', lastName: 'Villa reyes',},
                    { id: 2, attendance:"assistance", name: 'Jane', lastName: 'Doe',},
                    { id: 3, attendance:"assistance", name: 'Alejandra', lastName: 'Valdés Bernardino',},
                    { id: 4, attendance:"assistance", name: 'Anette', lastName: 'Hernández Nodal',},
                    { id: 5, attendance:"delay", name: 'Areli', lastName: 'Mateos Sepulvera',},
                    { id: 6, attendance:"assistance", name: 'Carlos', lastName: 'Duarte González',},
                    { id: 7, attendance:"assistance", name: 'Cinthya', lastName: 'Sandoval Ruíz',},
                    { id: 8, attendance:"missSchool", name: 'Daniela', lastName: 'Obregón Silva',},
                    { id: 9, attendance:"assistance", name: 'Dante', lastName: 'Ferreira Morales',},
                    { id: 10, attendance:"delay", name: 'Diana', lastName: 'Valdés Bernardino',},
                    { id: 11, attendance:"delay", name: 'Diego Javier', lastName: 'Rivera Mendoza',},
                    { id: 12, attendance:"delay", name: 'Louise', lastName: 'Hurtado Kegel',},
                    { id: 13, attendance:"delay", name: 'Maya', lastName: 'Cortes Hernández',},
                    { id: 14, attendance:"delay", name: 'Olivia', lastName: 'Hampton',},
                    { id: 15, attendance:"delay", name: 'Paola', lastName: 'Cisneros Díaz',},
                    { id: 16, attendance:"delay", name: 'Ricardo', lastName: 'Juárez Díaz',},
                    { id: 17, attendance:"delay", name: 'Ricardo', lastName: 'Mejía Hernández',},
                    { id: 18, attendance:"delay", name: 'Roberto', lastName: 'Meza Serrano',},
                    { id: 19, attendance:"delay", name: 'Roberto', lastName: 'Ballarta Dominguez',},
                    { id: 20, attendance:"delay", name: 'Tae Tomer', lastName: 'Wilde Valencia',},
                ],
                'schedules': [
                    { id: 1, name: "Español", horarioInit: "08:10", horarioFinal: "09:00", image: espaniol.src },
                    { id: 2, name: "Exploración de la naturaleza y la Sociedad ", horarioInit: "10:40", horarioFinal: "11:20", image: naturaleza.src },
                    { id: 3, name: "Matemáticas", horarioInit: "10:40", horarioFinal: "11:20", image: mate.src  },
                    { id: 4, name: "Inglés", horarioInit: "11:30", horarioFinal: "12:00", image: ingles.src },
                    { id: 5, name: "Español", horarioInit: "08:10", horarioFinal: "09:00", image: espaniol.src },
                    { id: 6, name: "Exploración de la naturaleza y la Sociedad ", horarioInit: "10:40", horarioFinal: "11:20", image: naturaleza.src },
                    { id: 7, name: "Matemáticas", horarioInit: "10:40", horarioFinal: "11:20", image: mate.src  },
                
                ],
                'exams': [
                    { id: 1, name: "Matemáticas",               horario: "20/08/2023-00:00 hs. 28/08/2023-24:00 hs.", duration: "45 minutos", image: mate.src, btnExamn:'Calificar'},
                    { id: 2, name: "Formación Cívica y Ética",  horario: "20/08/2023-00:00 hs. 28/08/2023-24:00 hs.", duration: "45 minutos", image: fcye.src, btnExamn:'Calificar' },
                    { id: 3, name: "Español",                   horario: "20/08/2023-00:00 hs. 28/08/2023-24:00 hs.", duration: "1:00 hora", image: espaniol.src, btnExamn:'Calificar'},
                    { id: 4, name: "Matemáticas",               horario: "20/08/2023-00:00 hs. 28/08/2023-24:00 hs.", duration: "45 minutos", image: mate.src, btnExamn:'Calificar'},
                    { id: 5, name: "Formación Cívica y Ética",  horario: "20/08/2023-00:00 hs. 28/08/2023-24:00 hs.", duration: "45 minutos", image: fcye.src, btnExamn:'Calificar'},
                    { id: 6, name: "Español",                   horario: "20/08/2023-00:00 hs. 28/08/2023-24:00 hs.", duration: "1:00 hora", image: espaniol.src, btnExamn:'Calificar'},
                
                ],
                'tasks': [
                    { id: 1, name: "Matemáticas", horario: "20/08/2023-00:00 hs. 28/08/2023-24:00 hs.", description: "5 Ejercicios de Trigonometría sobre lo analizado en clase.", image: mate.src, btnTask:'Calificar'},
                    { id: 2, name: "Matemáticas", horario: "20/08/2023-00:00 hs. 28/08/2023-24:00 hs.", description: "5 Ejercicios de Trigonometría sobre lo analizado en clase.", image: mate.src, btnTask:'Calificar' },
                    { id: 3, name: "Matemáticas", horario: "20/08/2023-00:00 hs. 28/08/2023-24:00 hs.", description: "5 Ejercicios de Trigonometría sobre lo analizado en clase.", image: mate.src, btnTask:'Calificar' },
                    { id: 4, name: "Matemáticas", horario: "20/08/2023-00:00 hs. 28/08/2023-24:00 hs.", description: "5 Ejercicios de Trigonometría sobre lo analizado en clase.", image: mate.src, btnTask:'Calificar' },
                ]

            };

            setPromedio(response.promedio);
            setStudents(response.students);
            setAttendanceStudents(response.attendance);
            setSchedules(response.schedules);
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
                    { id: 1, tittle: 'Kermés 14 de febrero', description: '¡Celebremos juntos el Día del Amor y la Amistad!' },
                    { id: 2, tittle: 'Taller Códices Contemporáneos', description: 'Taller que introduce a los participantes a la exposición Sergio Hernández, destacando su enfoque en la expresión personal y simbólica.' },
                    { id: 3, tittle: 'Semana de Vacunación contra la Influenza', description: 'Nos dirigimos a toda la comunidad para informarles sobre la importancia de la salud y la prevención de enfermedades respiratorias, especialmente en la temporada de' },
                    { id: 4, tittle: 'La Maravillosa Historia de Chiquita Pingüica', description: 'En el evento cultural de la semana les recomendamos la siguiente obra: La Maravillosa Historia de Chiquita Pingüica' },
                    { id: 5, tittle: 'Regreso a clases', description: 'Es un placer darles la más cordial bienvenida al nuevo ciclo escolar. Después de unas merecidas vacaciones, nos alegra enormemente ver a nuestros queridos estudiantes' },
                ],
            };

            setNotifications(response.notifications);
        });
    }

    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <LayoutTeacher 
                    derecha={
                        <>
                            {/* Contenido de sección superior*/}
                            <BarraDerecha head ={<><Trayectoria teacher={true} colorNum={"text-[#0082C9]"} promedio={promedio} /></>}> 
                                <>
                                    <Notificaciones borde={true} data={notifications} />
                                </>
                            </BarraDerecha>
                        </>
                    }
                >
                    <>
                        <div className="flex grow flex-col gap-[30px]">
                            <div>
                                <StudentListTeacher data={students}  />
                            </div>
                            <Section colors={'h-[349px] w-[471px] '} title='TAREA A CALIFICAR' showPlus={true} >
                                <div className="mt-[px] h-[250px] overflow-auto news " >
                                    <GradeExams type={'tarea'} tablero={'teacher'} data={tasks} promedio={promedio} text={text} />            
                                </div>
                            </Section> 
                        </div>

                         {/* Sección de TAREAS*/}
                        

                        <div className="flex grow flex-col gap-[30px]  ">
                        {/* <AttendaceTeacher data={attendanceStudents} textTittle='ASISTENCIA' principal="h-[680px] w-[471px]" secundario="h-[585px]" text="text-[24px] text-[#3E3E3E] " textSecundario="text-[18px] text-[#535353] " href='/reporte-asistencia-profesor' showPlus={true}/> */}
                        
                            <Horario data={schedules} showPlus={true}/>
                        
                            <Section colors={'w-[471px] '} title='' link='/calendario'  >
                                <Calendar id='cal' link='/calendario' height={''} margin = {'my-[15px]'} showPlus={true} />        
                            </Section>

                            
                            {/* Sección de exámenes*/}
                            <Section colors={'h-[349px] w-[471px]'} title='EXÁMENES A CALIFICAR' showPlus={true}  >
                                <div className="h-[250px] overflow-auto news " >
                                    <GradeExams type={'examen'} tablero={'teacher'} data={exams} promedio={promedio} text={text} />                      
                                </div>
                            </Section> 

                                                                                                                  
                        </div>                                        
                    </>
                </LayoutTeacher>                                                    
            </div>            
        </>
    );
}

export default  HomeTeacher;

