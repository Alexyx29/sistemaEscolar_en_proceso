import ScoilLayout from '@/layout/scoil';
import VideoClass from '@/components/items/videoClass';
import Tools from '@/components/tools/tools';
import Exams from '@/components/student/exams';
import Tasks from '@/components/student/tasks';
import ClassQualifications from '@/components/student/classQualifications';
import ClassAssistances from '@/components/student/classAssistances';
import ClassCalendar from '@/components/student/classCalendar';
import SmallChat from '@/components/chat/smallChat';

import bgScoil from '../assets/background/bg_1.jpg';

import { useContext, useEffect, useState } from "react";
import { getTextApi, setItemApi, showModal } from "@/components/useForm";
import { getActualSystem } from "@/components/useLanguage";

//Eeliminar
import user from '@/assets/users/user-2.svg';
import user1 from '@/assets/users/user-3.png';
import user2 from '@/assets/users/user-2.svg';
import videoClass from '@/assets/background/videoClass.jpg';
import iconAlert from '@/assets/icons/alert.svg'
import responseDataAssistances from '../../test_data/dataAssistances.json';
import responseDataExams from '../../test_data/dataExams.json';
import responseDataTasks from '../../test_data/dataTasks.json';
import responseDataQualifications from '../../test_data/dataQualifications.json';
import ShowTeacher from '@/assets/users/showTeacher';

const StudentVirtualClass = () => {
    
    const prefix = 'student/aulav/';
    const [dataAssistances, setDataAssitances] = useState('');
    const [dataExmas, setDataExams] = useState('');
    const [dataTasks, setDataTasks] = useState('');
    const [dataQualifications, setDataQualifications] = useState('');
    const [ classStream, setClassStream ] = useState([]);

    useEffect(() => {
        getInitial();
        getStreamClass();
    }, []);

    const getInitial = () => {
        getTextApi(`${prefix}/get`, r => {
            setDataAssitances(r.assistances);
            setDataExams(r.exams);    
            setDataTasks(r.tasks);
            setDataQualifications(r.qualifications);
        }, '', err => {
            const response = {
                'promedio': 8.2,
                'carrera': 'LIC. ADMINISTRACIÓN',
                'group': 'GRUPO 1034',
            };

            setDataAssitances(responseDataAssistances.assistances);
            setDataExams(responseDataExams.exams);    
            setDataTasks(responseDataTasks.tasks);
            setDataQualifications(responseDataQualifications);
        });
    }

    const getStreamClass = () => {
        getTextApi(`${prefix}/get-class-stream`, r => {
            setClassStream(r.jitsi);
        }, '', err => {
            const response = {
                'jitsi': {
                    'title': 'Título del video',
                    'img': videoClass.src,
                    'iconAlert':iconAlert.src ,
                    'link': '',
                    'descripcion': 'Subtítulo expresado en dos renglones que se reduce para los casos de responsividad en celulares, en donde mostrará menos texto del subtítulo.',
                    'alert':"Actualmente no se está llevando a cabo ninguna clase en vivo.",
                    'user': {
                        'image': user.src,
                        'name': 'Manuel Alberto',
                        'lastname': 'Rosales San Agustín'
                    },
                }
            }

            setClassStream(response.jitsi);
        });
    }

    return(
        <>
            <div className="flex w-[100%] h-[100vh] " style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                <ScoilLayout 
                    vacio={false} 
                    widthBody='2xl:w-[973px]' 
                    botonSeleccionado = {'aula'} 
                    derecha={
                        <>
                         {/* configuracion 2xl */}
                            <div className='generalScroll flex flex-col w-[300px] gap-[30px] 2xl:overflow-y-scroll ss:w-[310px] sm:w-[471px] md:w-full ss:hidden sm:hidden md:hidden lg:hidden xl:hidden '>
                                {/* <SmallChat userImage1={user1} userImage2={user2}></SmallChat> */}
                                <ShowTeacher name='Manuel Alberto' lastName='Rosales San Agustín' image={null} ></ShowTeacher>
                                <ClassQualifications qualificationsList={dataQualifications} link='/tabla-resumen' />
                                <Tools linkResourses="/recursos-materia" linkCourses='/cursos-alumno'/>                            
                                {/* <ClassAssistances assistancesList={dataAssistances} link={'/tabla-asistencias'} /> */}
                                <div className=' ss:mb-[30px]  ' >
                                    <ClassCalendar hCalendar='h-[200px]    ' />
                                </div>
                            </div>    

                            {/* configuracion ss y sm*/}
                             <div className='generalScroll flex flex-col w-[300px] gap-[30px] 2xl:overflow-y-scroll ss:w-[310px] sm:w-full md:hidden lg:hidden xl:hidden 2xl:hidden '>
                                {/* <SmallChat userImage1={user1} userImage2={user2}></SmallChat> */}
                                <ShowTeacher name='Manuel Alberto' lastName='Rosales San Agustín' image={user.src} ></ShowTeacher>
                                <Tools linkResourses="/recursos-materia" linkCourses='/cursos-alumno' />                            
                                <div className='w-full  '>
                                    <VideoClass data={classStream} alert={false} />
                                </div>   
                                <Exams examsList={dataExmas} link='/lista-examenes-alumnos'  />
                                <Tasks taskList={dataTasks} />
                                <ClassQualifications qualificationsList={dataQualifications} link='/tabla-resumen'  />
                                {/* <ClassAssistances assistancesList={dataAssistances} link={'/tabla-asistencias'} /> */}
                                <div className='h-[200px] ss:mb-[30px] sm:mb-[30px] ' >
                                    <ClassCalendar hCalendar='h-[250px] ss:h-[220px]   ' />
                                </div>
                            </div>                           
                        </>
                    }
                >  
                    <>
                    {/* configuracion xl y 2xl */}
                    <div className=' lg:hidden ss:hidden sm:hidden md:hidden ' >
                        <div className='w-full mb-[30px] '>
                            <VideoClass data={classStream} alert={false} />
                        </div>    
                        <div className='flex justify-between space-x-5 mb-[30px] xl:w-full 2xl:hidden' >
                            <ShowTeacher name='Manuel Alberto' lastName='Rosales San Agustín' image={user.src} ></ShowTeacher>
                            <Tools linkResourses="/recursos-materia" linkCourses='/cursos-alumno' />                                                    
                        </div>               
                        <div className='flex w-full gap-[30px] ss:flex-col sm:flex-col mb-[30px]  '>
                            <Exams examsList={dataExmas} link='/lista-examenes-alumnos' />
                            <Tasks taskList={dataTasks} />
                        </div>   
                      
                        <div className='flex w-full mb-[30px] gap-[30px] md:w-full lg:w-full xl:w-full  2xl:hidden  '>
                            {/* <ClassAssistances assistancesList={dataAssistances} link={'/tabla-asistencias'}/> */}
                            <ClassQualifications qualificationsList={dataQualifications} link='/tabla-resumen'  />
                        </div>
                        <div className='flex w-full mb-[30px] max-w-[471px] md:w-[50%] 2xl:hidden '>
                            <ClassCalendar hCalendar='h-[250px] md:w-full  ' />
                        </div>
                    </div> 

                    {/* configuracion md y lg */}
                    <div className=' ss:hidden sm:hidden  xl:hidden 2xl:hidden ' >
                        <div className='flex justify-between space-x-5 mb-[30px] sm:max-w-[471px]' >
                            <ShowTeacher name='Manuel Alberto' lastName='Rosales San Agustín' image={user.src} ></ShowTeacher>
                            <Tools linkResourses="/recursos-materia" linkCourses='/cursos-alumno' />                                                      
                        </div>

                        <div className='w-full mb-[30px] '>
                            <VideoClass data={classStream} alert={false} />
                        </div>

                        <div className='flex w-full mb-[30px] gap-[30px] md:w-full  '>
                            <Exams examsList={dataExmas} link='/lista-examenes-alumnos' />
                            <Tasks taskList={dataTasks} />
                        </div>

                        <div className='flex w-full mb-[30px] gap-[30px] md:w-full lg:w-full    '>
                            {/* <ClassAssistances assistancesList={dataAssistances} link={'/tabla-asistencias'}/> */}
                            <ClassQualifications qualificationsList={dataQualifications} link='/tabla-resumen'  />
                        </div>
                        <div className='flex w-full mb-[30px] max-w-[471px] md:w-[50%]  '>
                            <ClassCalendar hCalendar='h-[250px] md:w-full  ' />
                        </div>




                    </div>                      
                    </> 
                </ScoilLayout>             
            </div>
        </>
    )
}

export default StudentVirtualClass;

