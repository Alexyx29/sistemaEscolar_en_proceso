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
import { useState } from "react";
import Course from "@/components/items/course";
import informatica from '@/assets/background/informatica.jpg'
import adminis from '@/assets/background/admin.jpg'
import contabilidad from '@/assets/background/contabilidad.jpg'
import derecho from '@/assets/background/derecho.jpg'
import literatura from '@/assets/background/literatura.jpg'
import ViewCourse from "./viewCourse";
// import LayoutTeacher from "@/layout/layaoutScoilTeacher";
import ResoursesCards from "@/components/tools/resoursesCards";
import imagen1 from '@/assets/background/imagen1.png'
import imagen2 from '@/assets/background/imagen2.jpg'

import imagen4 from '@/assets/background/imagen4.jpg'

import imagen5 from '@/assets/background/imagen5.png'
import imagen6 from '@/assets/background/imagen6.jpg'
// import ReviewTask from '@/components/teacher/reviewTask';
import ReviewTask from "@/components/teacher/reviewTask";
import ViewStatusTask from '@/components/teacher/viewStatusTask';

import GoBack from '@/components/teacher/goBack';
import Tools from '@/components/tools/tools';



import '@/styles/globals.css'
import Teacher from "@/components/menu/teacher";
import ShowTeacher from "@/assets/users/showTeacher";
import user from '@/assets/users/user-2.svg'





const HomeWorkStudent = ({buttons=false}) => {

    const [section, setSection] = useState(1);
    const [search, setSearch] = useState(false);
    const [tittle, setTittle] = useState('Mi tablero');

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

    
    const examenes= [
        {id: 1, theme: 'Investigación sobre Modelos Matemáticos en la …',published:'Publicado: 15/11/2023 10:00', dateN:'Fecha de entrega: 20/11/2023 11:30', description:'Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate arcu, conubia litora risus morbi egestas himenaeos varius nostra, hendrerit et dictumst rhoncus proin dapibus est posuere. A commodo viverra apt…', status:"PENDIENTE", link:"/entregar-tarea-alumno" },
        {id: 2, theme: 'Cálculo Integral y Aplicaciones',published:'Publicado: 12/10/2023', dateN:'Fecha de entrega: 12/10/2023 14:45', description:'Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate arcu, conubia litora risus morbi egestas himenaeos varius nostra, hendrerit et dictumst rhoncus proin dapibus est posuere. A commodo viverra apt…', status:"PENDIENTE", link:"/" },
        {id: 3, theme: 'Prueba de Álgebra Lineal en Negocios',published:'Publicado: 20/10/2023', dateN:'Fecha de entrega: 20/10/2023 09:15', description:'Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate arcu, conubia litora risus morbi egestas himenaeos varius nostra, hendrerit et dictumst rhoncus proin dapibus est posuere. A commodo viverra apt…', status:"ENTREGADO", link:"/" },
        {id: 4, theme: 'Estadísticas Avanzadas', published:'Publicado: 15/11/2023', dateN:'Fecha de entrega: 15/11/2023 11:20', description:'Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate arcu, conubia litora risus morbi egestas himenaeos varius nostra, hendrerit et dictumst rhoncus proin dapibus est posuere. A commodo viverra apt…', status:"ENTREGADO", link:"/" },
        {id: 5, theme: 'Métodos Cuantitativos en Administración',published:'Publicado: 03/12/2023', dateN:'Fecha de entrega: 03/12/2023 18:00', description:'Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate arcu, conubia litora risus morbi egestas himenaeos varius nostra, hendrerit et dictumst rhoncus proin dapibus est posuere. A commodo viverra apt…', status:"10/10 ", link:"/" },
    ]
      
        

    
    return(
        <>
            <div className="flex h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <ScoilLayout 
                    botonSeleccionado={'aula'} 
                    widthBody="w-[976px]"
                    vacio={true}
                    otherRight={
                        <>
                            <div className='flex flex-col w-[290px] gap-[30px]' >
                                {/* <GoBack /> */}
                                {/* <ViewStatusExam></ViewStatusExam> */}
                                <ShowTeacher image={null} name="Manuel Alberto" lastName="Rosales San Agustín" />
                                <ViewStatusTask />
                                <Tools
                                    showNotes={false}
                                    showResourses={true}
                                    showVideo={true}
                                    showDictionary={true}
                                    showCalc={false}
                                    showHelp={false}
                                />
                                <Section colors={'h-[370px]'} title='' link='/calendario'>
                                    <Calendar id='cal'  link='/calendario'/>
                                </Section>

                            </div>
                        </>
                    }
                >
                    <>
                        {examenes.map((examen) => (
                            <ReviewTask key={examen.id} examen={examen} buttons={buttons} student={true} link='/' />
                        ))}
                    </>
                </ScoilLayout>                                                    
            </div>            
        </>
    );
}

export default HomeWorkStudent;

// <div className={'flex flex-col grow gap-[50px]'}>
                              

