import LayoutTeacher from "@/layout/layaoutScoilTeacher";
import Section from "@/components/menu/seccion";
import SecondBarraDerecha from "@/components/menu/secondBarraDerecha";
import Calendar from "@/components/items/calendar";
import AttendaceTeacher from "@/components/teacher/attendance";
import Video from "@/assets/users/video";
import TotalAttendance from "@/components/teacher/totalAttendance";
import GradeExams from "@/components/teacher/gradeExams";

import bgScoil from '@/assets/background/bg_1.jpg'

import { useContext, useEffect, useState } from "react";
import { getTextApi, setItemApi, showModal, hideModal } from "@/components/useForm";
import { getActualSystem } from "@/components/useLanguage";

//Eliminar
import mat from '../assets/icons/transportador.svg';
import lit from '../assets/icons/libro.svg';
import admin from '../assets/icons/engranaje.svg';
import jitsi from '@/assets/usuarios/jitsi.png'
import mate from '@/assets/background/mate.png'

const VirtualAulaProfesor = () => {
    const system_selected = getActualSystem();
    const prefix = 'teacher/aulav/';
    const [ promedio, setPromedio ] = useState(0);
    const [ carrera, setCarrera ] = useState('');
    const [ group, setGroup ] = useState('');
    const [ classStream, setClassStream ] = useState([]);
    const [ attendanceStudents, setAttendanceStudents ] = useState([]);
    const [ exams, setExams ] = useState([]);
    const [ tasks, setTasks ] = useState([]);

    useEffect(() => {
        getInitial();
        getStreamClass();
    }, []);

    const getInitial = () => {
        getTextApi(`${prefix}/get`, r => {
            setPromedio(r.promedio);
            setCarrera(r.carrera);
            setGroup(r.group);
            setAttendanceStudents(r.attendance);
            setExams(r.exams);
            setTasks(r.tasks);
        }, '', err => {
            const response = {
                'promedio': 8.2,
                'carrera': 'LIC. ADMINISTRACIÓN',
                'group': 'GRUPO 1034',
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
                'exams': [
                    { id: 1, name: "Matemáticas I", horario: "20/08/2023-00:00 hs. 28/08/2023-24:00 hs.", duration: "45 minutos", image: mate.src, btnExamn:'Calificar' },
                    { id: 2, name: "Matemáticas II", horario: "20/08/2023-00:00 hs. 28/08/2023-24:00 hs.", duration: "45 minutos", image: mate.src, btnExamn:'Calificar' },
                    { id: 3, name: "Matemáticas III", horario: "20/08/2023-00:00 hs. 28/08/2023-24:00 hs.", duration: "1:00 hora", image: mate.src, btnExamn:'Calificar' },
                    { id: 4, name: "Matemáticas I", horario: "20/08/2023-00:00 hs. 28/08/2023-24:00 hs.", duration: "45 minutos", image: mate.src, btnExamn:'Calificar' },
                    { id: 5, name: "Matemáticas II", horario: "20/08/2023-00:00 hs. 28/08/2023-24:00 hs.", duration: "45 minutos", image: mate.src, btnExamn:'Calificar' },
                    { id: 6, name: "Matemáticas III", horario: "20/08/2023-00:00 hs. 28/08/2023-24:00 hs.", duration: "1:00 hora", image: mate.src, btnExamn:'Calificar' },
                ],
                'tasks': [
                    { id: 1, name: "Matemáticas I", horario: "20/08/2023-00:00 hs. 28/08/2023-24:00 hs.", description: "5 Ejercicios de Trigonometría sobre lo analizado en clase.", image: mate.src, btnTask:'Calificar' },
                    { id: 2, name: "Matemáticas I", horario: "20/08/2023-00:00 hs. 28/08/2023-24:00 hs.", description: "5 Ejercicios de Trigonometría sobre lo analizado en clase.", image: mate.src, btnTask:'Calificar' },
                    { id: 3, name: "Matemáticas I", horario: "20/08/2023-00:00 hs. 28/08/2023-24:00 hs.", description: "5 Ejercicios de Trigonometría sobre lo analizado en clase.", image: mate.src, btnTask:'Calificar' },
                    { id: 4, name: "Matemáticas I", horario: "20/08/2023-00:00 hs. 28/08/2023-24:00 hs.", description: "5 Ejercicios de Trigonometría sobre lo analizado en clase.", image: mate.src, btnTask:'Calificar' },
                
                ]
            };

            setPromedio(response.promedio);
            setCarrera(response.carrera);
            setGroup(response.group);
            setAttendanceStudents(response.attendance);
            setExams(response.exams);
            setTasks(response.tasks);
        })
    }

    const getStreamClass = () => {
        getTextApi(`${prefix}/get-class-stream`, r => {
            setClassStream(r.jitsi);
        }, '', err => {
            const response = {
                'jitsi': {
                    'title': 'Título del video',
                    'img': jitsi.src,
                    'link': '',
                    'descripcion': '' 
                },
            }

            setClassStream(response.jitsi);
        });
    }

    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <LayoutTeacher   
                    botonSeleccionado={'aula'} 
                    widthBody="w-[973px]"  vacio={true}
                    otherRight={
                        <>
                            {/* Contenido de sección superior*/}
                            <SecondBarraDerecha linkResourses={"/cursos-material"} width="w-[290px]" head ={<><TotalAttendance teacher={true}  colorNum={"text-[#0082C9]"} promedio={promedio} carrera={carrera} /></>}>
                                <>
                                    <div className="mt-[-30px]" >
                                        <AttendaceTeacher showPlus={true} data={attendanceStudents} styleName='text-[14px]' text="text-[16px]" padding="pt-[15px]" principal="h-[370px]" secundario="h-[290px]" textTittle='ASISTENCIA DE LA CLASE'  widthSecundario="w-[234px]"/>
                                    </div>
                                    <Section colors={'h-[385px] '} title='' link='/calendario'>
                                        <Calendar id='cal' link='/calendario' hCalendar="h-[327px] m0px]" showPlus={true} />                   
                                    </Section>
                                </>
                            </SecondBarraDerecha>
                        </>
                    }
                >
                    <>

                        <div className="flex  h-[700px]  flex-col">
                            {/* Sección de Video*/}                                                
                            <Video tittle={classStream ? classStream.title : ''} img={classStream ? classStream.img : ''} description={classStream ? classStream.descripcion : ''} link={classStream ? classStream.link : ''}  group={group} />                                                           
                        </div>
                        <div className="flex gap-[40px] w-full mt-[0px]" >
                            {/* Sección de exámenes*/}
                            <Section colors={'h-[330px]'} title='EXÁMENES A CALIFICAR' showPlus={true}>
                                <div className=" h-[230px] overflow-auto news " >
                                    <GradeExams type={'examen'} tablero={'teacher'} data={exams} promedio={promedio} carrera={carrera} group={group}/>                      
                                </div>
                            </Section> 

                            {/* Sección de TAREAS*/}
                            <Section colors={'h-[330px]'} title='TAREA A CALIFICAR' showPlus={true}>
                                <div className=" h-[230px] overflow-auto news " >
                                    <GradeExams type={'tarea'} tablero={'teacher'} data={tasks} promedio={promedio} carrera={carrera} />            
                                </div>
                            </Section>                                                                                                         
                        </div>
                    </>
                
                </LayoutTeacher>                                                    
            </div>            
        </>
    );
}

export default  VirtualAulaProfesor;



