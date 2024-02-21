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

// import Document from "@/components/items/courses/document";
import Documents from "@/components/courses/documents";
// import Section from "@/components/menu/section";
// import Line from "@/components/items/line";
import trashRed from '@/assets/icons/trashRed.svg'
import editIcon from '@/assets/icons/editIcon.svg'

import { useContext, useEffect, useState } from "react";
import { getTextApi, setItemApi, showModal } from "@/components/useForm";
import { getActualSystem } from "@/components/useLanguage";

const RecursosMaterial = ({buttons=true,}) => {
    const system_selected = getActualSystem();
    // const [ section, setSection ] = useState(1);
    // const [ search, setSearch ] = useState(false);
    // const [ tittle, setTittle ] = useState('Mi tablero');
    const [ curse, setCurse ] = useState([]);

    useEffect(() => {
        getInitial();
    }, [])

    const getInitial = () => {
        const response = {
            'curse': {
                'id': 1,
                'image': imagen2.src,
                'tema': 'Ejercicios Resueltos para Planificación Financiera a Largo Plazo',
                'date': '10/09/2023 16:15',
                'resume': 'Explora nuestra colección de ejercicios de Excel diseñados para estudiantes de primaria. Estas prácticas interactivas te ayudarán a familiarizarte con las funciones básicas de Excel y mejorar tus habilidades tecnológicas para un aprendizaje más efectivo.',
                'documents': [
                    {
                        'type': 'pdf',
                        'nameDocument': 'Nombre del documento',
                        'nameArchive': 'Nombre del archivo',
                        'size':'1.2 MB', 
                        'description': 'Colección de problemas prácticos relacionados con los conceptos clave de matemáticas financieras',
                        'rute': ''
                    }, {
                        'type': 'xls',
                        'nameDocument': 'Nombre del documento',
                        'nameArchive': 'Nombre del archivo',
                        'size':'1.2 MB', 
                        'description': 'Ejercicios Resueltos con fórmulas y anotaciones. ',
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
                        'description': 'Ejemplo práctico editable. ',
                        'rute': ''
                    }
                ]
            },
        };

        setCurse(response.curse)
    }

    // const handleButtonClickInBarraMenu = (Id) => {
    //     setSection(Id);
    //     updateHeader(Id);
    // }

    // const updateHeader = (ID) =>{
    //     switch (ID) {
    //         case 1: setSearch(false) ;setTittle('Mi tablero') ;break;
    //         case 2: setSearch(true) ;setTittle('Aula Virtual') ;break;
    //         case 3: setSearch(true) ;setTittle('Cursos Online') ;break;            
    //         default:                
    //     }
    // }

    // const extractInitials = (name) => {
    //     const words = name.split(' ');
    //     const initials = words.map(word => word[0]);
    //     const limitedInitials = initials.slice(0, 3);
    //     return limitedInitials.join('');
    // }

    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <LayoutTeacher 
                    botonSeleccionado={'aula'} 
                    wrap={null} 
                    widthBody="w-[1293px]"
                > 

                    <>
                        <div className="flex h-[89vh] bg-gray-light shadow-2xl    rounded-[10px] ">
                            {curse &&
                                <div className="w-[1230px] h-[93%] m-[30px]  bg-gray-light shadow-2xl  rounded-[10px] flex flex-col overflow-hidden lg:grow">
                                    <div className="rounded-tl-lg  h-[251px] w-[] overflow-hidden" >
                                        {curse.image &&
                                            <>
                                                <img width={'100%'} maxHeight={'251px'} src={curse.image} className="rounded-tl-lg rounded-tr-lg m " />
                                            </> 
                                        }     
                                    </div>

                                    <div className=" news w-[1180px] flex flex-col overflow-y-scroll h-[59%] mt-[50px] " >
                                        <div className="w-[1180px] mb-[] relative flex justify-between flex-col ml-[25px]  " >
                                            <span className="text-[#505357] flex font-open font-bold text-[22px] " >{curse.tema}</span>
                                            {buttons && (
                                                <div className="flex absolute right-0 mr-[25px] " >
                                                    <button>
                                                        <img src={editIcon.src} alt="" className="mr-[30px] " />
                                                    </button>
                                                    <button>
                                                        <img src={trashRed.src} alt="" />
                                                    </button>
                                                </div>
                                           
                                            )}
                                        </div>
                                        <div className="flex flex-col ml-[25px]" >
                                            <span className="text-[#6F6F6F] font-open text-[16px] " >{curse.date}</span>
                                            <span className="text-[#ACACA2] font-open text-[16px] ">{curse.resume}</span>
                                        </div>
                                

                                        <div className="mt-[15px]  w-[1180px] ml-[25px] mr-[25px] flex flex-col mx-auto lg:grow">
                                            <Documents documents={curse.documents ? curse.documents : [] } section={false} /> 
                                        </div>   
                                    </div>
                                </div>
                            }
                        </div>     
                    </>
                </LayoutTeacher>                                                    
            </div>            
        </>
    );
}

export default RecursosMaterial;

// <div className={'flex flex-col grow gap-[50px]'}>
                              

