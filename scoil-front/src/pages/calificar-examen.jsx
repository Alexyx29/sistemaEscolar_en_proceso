
import bgScoil from '../assets/background/bg_1.jpg';

import Line from "@/components/items/line";

import { useState } from "react";

import LayoutTeacher from "@/layout/layaoutScoilTeacher";

import imagen2 from '@/assets/background/imagen2.jpg'

import Document from "@/components/courses/document";

import trashRed from '@/assets/icons/trashRed.svg'
import editIcon from '@/assets/icons/editIcon.svg'



import '@/styles/globals.css'
import Button from '@/components/form/button';
import ReviewExamen from '@/components/teacher/reviewExam';
import TestGrading from '@/components/teacher/testGrading';
import CountExamen from '@/components/teacher/countExam';
import SelectGroupTeacher from '@/components/teacher/selectGroupTeacher';
import StudentListTeacher from '@/components/teacher/studentListTeacher';
import SelecListStudent from '@/components/teacher/selectListStudent';



   
    


const CalificarExamenes = (buttons=true,) => {

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
        {id: 1, theme: 'HISTORIA DE LAS COMPUTADORAS',published:'Publicado: 08/10/2023', questions:'15 Preguntas', dateInit:'Fecha Inicial: 11/10/2023 8:00', dateEnd:'Fecha Final: 11/10/2023 10:00' },
        {id: 2, theme: 'Cálculo Integral y Aplicaciones',published:'Publicado: 12/10/2023', questions:'25 Preguntas', dateInit:'Fecha Inicial: 12/10/2023 14:45', dateEnd:'Fecha Final: 17/10/2023 15:30' },
        {id: 3, theme: 'Prueba de Álgebra Lineal en Negocios',published:'Publicado: 20/10/2023', questions:'62 Preguntas', dateInit:'Fecha Inicial: 20/10/2023 09:15', dateEnd:'Fecha Final: 25/10/2023 17:45' },
        {id: 4, theme: 'Estadísticas Avanzadas', published:'Publicado: 15/11/2023', questions:'48 Preguntas', dateInit:'Fecha Inicial: 15/11/2023 11:20', dateEnd:'Fecha Final: 20/11/2023 18:20' },
        {id: 5, theme: 'Métodos Cuantitativos en Administración',published:'Publicado: 03/12/2023', questions:'73 Preguntas', dateInit:'Fecha Inicial: 03/12/2023 18:00', dateEnd:'Fecha Final: 08/12/2023 15:10' },
    ]
      
        


    
    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <LayoutTeacher 
                    botonSeleccionado={'aula'} 
                    widthBody={"w-[973px]"} 
                    vacio={true}
                    otherRight={
                        <>
                            <div className='flex flex-col gap-y-[30px]' >
                                <CountExamen />
                                <SelectGroupTeacher />
                                <SelecListStudent stylesDivPrin='w-[290px] h-[45vhpx] ' stylesDivOver='h-[44vh]'/>
                            </div>
                        </>
                    }
                > 
                    <>
               
                        <TestGrading />   
                    </> 
                </LayoutTeacher>                                                    
            </div>            
        </>
    );
}


export default CalificarExamenes;

// <div className={'flex flex-col grow gap-[50px]'}>
                              

