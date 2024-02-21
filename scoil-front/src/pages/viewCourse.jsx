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
import pdf from '../assets/icons/pdf.svg';
import xls from '../assets/icons/xls.svg';
import doc from '../assets/icons/doc.svg';
import jpg from '../assets/icons/jpg.svg';
import user from '@/assets/usuarios/user.png'
import notes from '../assets/icons/notes.svg';
import resources from '../assets/icons/resources.svg';
import calculator from '../assets/icons/calculator.svg';
import dictionary from '../assets/icons/dictionary.svg';
import '@/styles/globals.css'

import Video from "@/components/courses/videoCourses";
import CoursTittle from "@/components/courses/coursTittle";
import videoContent from '@/assets/background/video-content2.jpg';
// import Documents from "./documents";
import Documents from "@/components/courses/documents";

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

import TitleDescriptionCourse from "@/components/items/titleDescriptionCourse";
import CourseContent from "@/components/items/CourseContent";
import FilesCourse from "@/components/items/filesCourse";
import Modules from "@/components/items/modules";
import BodyModules from "@/components/items/bodyModule";
import NameTeacher from "@/components/items/nameTeacher";
import ModulesContent from '@/components/courses/modulesContent';

import { useContext, useEffect, useState } from "react";
import { getTextApi, setItemApi, showModal } from "@/components/useForm";
import { getActualSystem } from "@/components/useLanguage";

const RightMenu = ({labels, teacher, modules, onModuleInfo}) => {
    return (
         <>
            <div className=" flex flex-col gap-[20px] ">
                <Section width="w-[100%]  " marggin="mb-[0px]" >
                    <NameTeacher image={teacher.image} nameTeacher={teacher.name} lastNameTeacher={teacher.lastName} />
                </Section>

                <Section marggin="mb-[0px]" >
                    <div className="w-[240px]  overflow-x-auto scrollbar ml-[10px] " >
                        <div className=" flex   w-[340px] " >
                            <Items imagen={notes.src} heightImage='48px' widthImage='47px' mImage=" mt-[5px] " sizeMateria="text-[12px] mt-[6px]" nombre= {labels.notes}  />
                            <Items imagen={resources.src} heightImage='40px' widthImage='47px' mImage=" mt-[5px] " sizeMateria="text-[12px] mt-[13px]" nombre= {labels.resources}  />
                            <Items imagen={calculator.src} heightImage='68px' widthImage='63px' mImage=" mt-[-10px] " sizeMateria="text-[12px] mt-[0px]" nombre= {labels.calculator}  />
                            <Items imagen={dictionary.src} heightImage='63px' widthImage='63px' mImage=" mt-[-5px] " sizeMateria="text-[12px] mt-[0px]" nombre= {labels.dictionary}  />
                        </div>
                    </div>
                </Section>

                <ModulesContent modules={modules} onModuleData={onModuleInfo} />
            </div>
        </>
    )
}
const ViewCourse = () => {
    const [ labels, seetLabels ] = useState({
        notes:"Mis notas",
        resources:"Recursos",
        calculator:"Calculadora",
        dictionary:"Diccionario",
    });
    const [ teacher, setTeacher ] = useState([]);
    const [ modulescurse, setModulesCurse ] = useState([]);
    const [ classStream, setClassStream ] = useState([]); 
    const [ curse, setCurse ] = useState([]);

    useEffect(() => {
        getInitial();
    }, [])

    const getInitial = () => {
        const response = {
            'teacher': {
                'name': 'Manuel Alberto',
                'lastName': 'Rosales San Agustín',
                'image': user.src,
            },
            'modules': [
                {   
                    'id': 1,
                    'title': 'MÓDULO 1',
                    'name': 'Fundamentos Administrativos',
                    'duration': '5 clases - 1 h 30 min',
                    'content': [
                        {
                            'id': 1,
                            'tittle': 'Principios Básicos de Finanzas para Administradores',
                            'duration': '15 min' 
                        }, {
                            'id': 2,
                            'tittle': 'Principios en la Administración Empresarial',
                            'duration': '28 min' 
                        }, {
                            'id': 3,
                            'tittle': 'Innovación y Estrategias de Administración',
                            'duration': '25 min' 
                        }, {
                            'id': 4,
                            'tittle': 'Optimizando la Productividad del Equipo',
                            'duration': '19 min' 
                        }, {
                            'id': 5,
                            'tittle': 'Cultivando un Liderazgo Efectivo',
                            'duration': '35 min' 
                        },
                    ]
                },
                {   
                    'id': 2,
                    'title': 'MÓDULO 2',
                    'name': 'Gestión Efectiva de Equipos',
                    'duration': '14 clases - 3 h',
                    'content': [
                        {
                            'id': 6,
                            'tittle': 'Principios Básicos de Finanzas para Administradores',
                            'duration': '15 min' 
                        }, {
                            'id': 7,
                            'tittle': 'Principios en la Administración Empresarial',
                            'duration': '28 min' 
                        }, {
                            'id': 8,
                            'tittle': 'Innovación y Estrategias de Administración',
                            'duration': '25 min' 
                        }, {
                            'id': 9,
                            'tittle': 'Optimizando la Productividad del Equipo',
                            'duration': '19 min' 
                        }, {
                            'id': 10,
                            'tittle': 'Cultivando un Liderazgo Efectivo',
                            'duration': '35 min' 
                        },
                    ]
                },
                {   
                    'id': 3,
                    'title': 'MÓDULO 3',
                    'name': 'Dominando el Tiempo: Estrategias Prácticas',
                    'duration': '7 clases - 2 h 35 min',
                    'content': [
                        {
                            'id': 11,
                            'tittle': 'Principios Básicos de Finanzas para Administradores',
                            'duration': '15 min' 
                        }, {
                            'id': 12,
                            'tittle': 'Principios en la Administración Empresarial',
                            'duration': '28 min' 
                        }, {
                            'id': 13,
                            'tittle': 'Innovación y Estrategias de Administración',
                            'duration': '25 min' 
                        }, {
                            'id': 14,
                            'tittle': 'Optimizando la Productividad del Equipo',
                            'duration': '19 min' 
                        }, {
                            'id': 15,
                            'tittle': 'Cultivando un Liderazgo Efectivo',
                            'duration': '35 min' 
                        },
                    ]
                },
                {   
                    'id': 4,
                    'title': 'MÓDULO 4',
                    'name': 'Gestión de un proyecto práctico organizacional',
                    'duration': '10 clases - 4 h 12 min',
                    'content': [
                        {
                            'id': 16,
                            'tittle': 'Principios Básicos de Finanzas para Administradores',
                            'duration': '15 min' 
                        }, {
                            'id': 17,
                            'tittle': 'Principios en la Administración Empresarial',
                            'duration': '28 min' 
                        }, {
                            'id': 18,
                            'tittle': 'Innovación y Estrategias de Administración',
                            'duration': '25 min' 
                        }, {
                            'id': 19,
                            'tittle': 'Optimizando la Productividad del Equipo',
                            'duration': '19 min' 
                        }, {
                            'id': 20,
                            'tittle': 'Cultivando un Liderazgo Efectivo',
                            'duration': '35 min' 
                        },
                    ]
                },
            ],
            'curse': {
                'title': 'Gestión del tiempo y producción',
                'duration': '15 h 36 min',
                'description': 'Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate arcu, conubia litora risus morbi egestas himenaeos varius nostra, hendrerit et dictumstrhoncus proin dapibus est posuere. A commodo viverra aptent magnis dapibus primis eget eros, nisi aliquet Auctor purus lacinia blandit condimentum praesent facilisi commodo, semper penatibus ullamcorper netus suscipit in mus luctus, platea est elementum urna nullam gravida.',
                'documents': [
                    {
                        'type': 'pdf',
                        'nameDocument': 'Nombre del documento',
                        'nameArchive': 'Nombre del archivo',
                        'size':'1.2 MB', 
                        'description': 'Donec a turpis pulvinar, hendrerit nulla id, sollicitudin dui. Nam faucibus, diam et vehicula mattis, augue nunc blandit augue, ac bibendum nisi ex eu neque. Suspendisse potenti. Donec finibus varius magna vitae ultrices.',
                        'rute': ''
                    }, {
                        'type': 'xls',
                        'nameDocument': 'Nombre del documento',
                        'nameArchive': 'Nombre del archivo',
                        'size':'1.2 MB', 
                        'description': 'Donec a turpis pulvinar, hendrerit nulla id, sollicitudin dui. Nam faucibus, diam et vehicula mattis, augue nunc blandit augue, ac bibendum nisi ex eu neque. Suspendisse potenti. Donec finibus varius magna vitae ultrices.',
                        'rute': ''
                    }, {
                        'type': 'doc',
                        'nameDocument': 'Nombre del documento',
                        'nameArchive': 'Nombre del archivo',
                        'size':'1.2 MB', 
                        'description': '' , 
                        'rute': ''
                    }, {
                        'type': 'xls',
                        'nameDocument': 'Nombre del documento',
                        'nameArchive': 'Nombre del archivo',
                        'size':'1.2 MB', 
                        'description': 'Donec a turpis pulvinar, hendrerit nulla id, sollicitudin dui. Nam faucibus, diam et vehicula mattis, augue nunc blandit augue, ac bibendum nisi ex eu neque. Suspendisse potenti. Donec finibus varius magna vitae ultrices.',
                        'rute': ''
                    }, {
                        'type': 'jpg',
                        'nameDocument': 'INE',
                        'nameArchive': 'INE-EJ.jpg',
                        'size':'1.2 MB', 
                        'description': 'Donec a turpis pulvinar, hendrerit nulla id, sollicitudin dui. Nam faucibus, diam et vehicula mattis, augue nunc blandit augue, ac bibendum nisi ex eu neque. Suspendisse potenti. Donec finibus varius magna vitae ultrices.',
                        'rute': ''
                    }
                ]
            },
            'jitsi': {
                'title': 'Título del video',
                'img': videoContent,
                'link': '',
                'description': 'Subtítulo expresado en dos renglones que se reduce para los casos de responsividad en celulares, en donde mostrará menos texto del subtítulo.'
            },
        };

        setModulesCurse(response.modules)
        setTeacher(response.teacher)
        setCurse(response.curse)
        setClassStream(response.jitsi)
    }

    return(
        <>
            <div className="flex w-[100%] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <ScoilLayout 
                    botonSeleccionado={3} 
                    vacio={true} 
                    otherRight={<RightMenu labels={labels} teacher={teacher} modules={modulescurse} onModuleInfo={() => {}} />}
                >
                    <>
                        <div className="flex w-full gap-[40px]">
                            <div className="flex w-[972px] flex-col grow gap-[25px]">
                                <div>                    
                                    <CoursTittle tittle={curse ? curse.title : ''} duration={curse ? curse.duration : ''} description={curse ? curse.description : '' } />                                  
                                </div>
                                <div className="w-full">    
                                    <Video tittle={classStream ? classStream.title : ''} img={classStream ? classStream.img : ''} description={classStream ? classStream.description : ''} link={classStream ? classStream.link : ''} />                 
                                </div>
                                <div className="mt-[0px]">                    
                                    <Documents documents={curse && curse.documents ? curse.documents : []} />                    
                                </div>             
                            </div>      
                        </div>                         
                    </>
                </ScoilLayout>                                                    
            </div>            
        </>
    );
}

export default  ViewCourse;



