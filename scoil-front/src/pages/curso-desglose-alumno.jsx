
import ScoilLayout from "@/layout/scoil";
import bgScoil from '../assets/background/bg_1.jpg';

import { useState } from "react";





import '@/styles/globals.css'
import ProfesorCourseContent from "@/components/teacher/profesorCourseContent";
import Tools from "@/components/tools/tools";



const CourseStudent = () => {

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


    
    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
               
               
                
                <ScoilLayout 
                  vacio={false} 
                  derecha={false} 
                 widthBody="w-[1293px]"
                 widthLine='972px'
                    botonSeleccionado={'cursos'}
                >
                    <>
                        <ProfesorCourseContent 
                            moduleBack={false}
                        ></ProfesorCourseContent>
                    </> 
                </ScoilLayout>                                                    
            </div>            
        </>
    );
}

export default CourseStudent;
                              

