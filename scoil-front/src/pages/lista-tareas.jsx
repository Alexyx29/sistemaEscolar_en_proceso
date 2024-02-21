import bgScoil from '../assets/background/bg_1.jpg';
import { useState } from "react";
import LayoutTeacher from "@/layout/layaoutScoilTeacher";
import '@/styles/globals.css'
import ReviewExamen from '@/components/teacher/reviewExam';
import GoBack from '@/components/teacher/goBack';
import ViewStatusExam from '@/components/teacher/viewStatusExam';
import Tools from '@/components/tools/tools';
import Section from '@/components/menu/seccion';
import Calendar from '@/components/items/calendar';
import ReviewTask from '@/components/teacher/reviewTask';
import ViewStatusTask from '@/components/teacher/viewStatusTask';

const ListaTareas = (buttons=true,) => {

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
        {id: 1, theme: 'Investigación sobre Modelos Matemáticos en la …',published:'Publicado: 15/11/2023 10:00', dateN:'Fecha de entrega: 20/11/2023 11:30', description:'Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate arcu, conubia litora risus morbi egestas himenaeos varius nostra, hendrerit et dictumst rhoncus proin dapibus est posuere. A commodo viverra apt…',link:"/calificar-tareas" },
        {id: 2, theme: 'Cálculo Integral y Aplicaciones',published:'Publicado: 12/10/2023', dateN:'Fecha de entrega: 12/10/2023 14:45', description:'Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate arcu, conubia litora risus morbi egestas himenaeos varius nostra, hendrerit et dictumst rhoncus proin dapibus est posuere. A commodo viverra apt…', link:"/" },
        {id: 3, theme: 'Prueba de Álgebra Lineal en Negocios',published:'Publicado: 20/10/2023', dateN:'Fecha de entrega: 20/10/2023 09:15', description:'Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate arcu, conubia litora risus morbi egestas himenaeos varius nostra, hendrerit et dictumst rhoncus proin dapibus est posuere. A commodo viverra apt…', link:"/" },
        {id: 4, theme: 'Estadísticas Avanzadas', published:'Publicado: 15/11/2023', dateN:'Fecha de entrega: 15/11/2023 11:20', description:'Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate arcu, conubia litora risus morbi egestas himenaeos varius nostra, hendrerit et dictumst rhoncus proin dapibus est posuere. A commodo viverra apt…', link:"/" },
        {id: 5, theme: 'Métodos Cuantitativos en Administración',published:'Publicado: 03/12/2023', dateN:'Fecha de entrega: 03/12/2023 18:00', description:'Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate arcu, conubia litora risus morbi egestas himenaeos varius nostra, hendrerit et dictumst rhoncus proin dapibus est posuere. A commodo viverra apt…', link:"/" },
    ]
      
    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <LayoutTeacher 
                    botonSeleccionado={'aula'} 
                    widthLine='957px' 
                    widthBody={"w-[972px]"} 
                    vacio={true}
                    otherRight={
                        <>
                            <div className='flex flex-col gap-[30px]' >
                                <GoBack />
                                {/* <ViewStatusExam></ViewStatusExam> */}
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
                                    <Calendar id='cal' link='/calendario' />                  
                                </Section>
                            </div>
                        </>
                    }
                >
                   <>
                        {examenes.map((examen) => (
                            <ReviewTask key={examen.id} examen={examen} buttons={buttons} link='/' />
                        ))}
                    </>
                </LayoutTeacher>                                                    
            </div>            
        </>
    );
}


export default ListaTareas;


