
import ScoilLayout from "@/layout/scoil";
import bgScoil from '../assets/background/bg_1.jpg';

import { useState } from "react";
import ResoursesCards from "@/components/tools/resoursesCards";
import imagen1 from '@/assets/background/imagen1.png'
import imagen2 from '@/assets/background/imagen2.jpg'

import imagen4 from '@/assets/background/imagen4.jpg'

import imagen5 from '@/assets/background/imagen5.png'
import imagen6 from '@/assets/background/imagen6.jpg'




import '@/styles/globals.css'

const ResoursesMatematicas = () => {

    const text= {
        name:"Guía Práctica Segundo Examen",
        contador:"4",
        date:"15/11/2023 09:30",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor in re, sunt in culpa qui officia deserunt mollit anim id est laborum…",
    
        name2:"Ejercicios Resueltos para Pla...",
        contador2:"5",
        date2:"10/09/2023 16:15",
        description2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor in re, sunt in culpa qui officia deserunt mollit anim id est laborum…",
    
        name3:"Ejercicios Excel",
        contador3:"6",
        date3:"04/07/2023 11:50",
        description3:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor in re, sunt in culpa qui officia deserunt mollit anim id est laborum…",
    
        name4:"Casos de Estudio en Finanzas ...",
        contador4:"3",
        date4:"28/05/2023 18:25",
        description4:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor in re, sunt in culpa qui officia deserunt mollit anim id est laborum…",
    
        name5:"Infografía Logística Empresar...",
        contador5:"",
        date5:"20/03/2023 13:40",
        description5:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor in re, sunt in culpa qui officia deserunt mollit anim id est laborum…",
    
        name6:"Simulaciones Financieras Inte...",
        contador6:"",
        date6:"14/01/2023 20:05",
        description6:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor in re, sunt in culpa qui officia deserunt mollit anim id est laborum…",
    }
    

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
                {/* Contenido dentro de Layout*/}
                <ScoilLayout botonSeleccionado={'aula'} widthBody="w-[1293px]" stylesInput= {'w-[878px] '} >
                    <>
                       <div className={' flex mt-[px] gap-[30px]'} >
                                    <ResoursesCards
                                    img={imagen1.src}
                                    name={text.name}
                                    contador={text.contador}
                                    date={text.date}
                                    description={text.description}
                                    colorsBg='bg-blue-progress'
                                    colorsBorder='border-blue-progress'
                                    linkResourses="/recursos-guia "
                                    >
                                    </ResoursesCards>

                                    <ResoursesCards
                                    img={null}
                                    name={text.name2}
                                    contador={text.contador2}
                                    date={text.date2}
                                    description={text.description2}
                                    colorsBg='bg-blue-progress'
                                    colorsBorder='border-blue-progress'>
                                    </ResoursesCards>

                                    <ResoursesCards
                                    img={imagen6.src}
                                    name={text.name3}
                                    contador={text.contador3}
                                    date={text.date3}
                                    description={text.description3}
                                    colorsBg='bg-blue-progress'
                                    colorsBorder='border-blue-progress'>
                                    </ResoursesCards>
                                </div>



                                <div className={' flex mt-[px] gap-[45px]'} >
                                    <ResoursesCards
                                    img={imagen5.src}
                                    name={text.name4}
                                    contador={text.contador4}
                                    date={text.date4}
                                    description={text.description4}
                                    colorsBg='bg-blue-progress'
                                    colorsBorder='border-blue-progress'>
                                    </ResoursesCards>

                                    <ResoursesCards
                                    img={imagen4.src}
                                    name={text.name5}
                                    contador={text.contador5}
                                    date={text.date5}
                                    description={text.description5}
                                    colorsBg='bg-blue-progress'
                                    colorsBorder='border-blue-progress'>
                                    </ResoursesCards>

                                    <ResoursesCards
                                    img={imagen2.src}
                                    name={text.name6}
                                    contador={text.contador6}
                                    date={text.date6}
                                    description={text.description6}
                                    linkResourses={"resource-material"}
                                    colorsBg='bg-blue-progress'
                                    colorsBorder='border-blue-progress'>
                                    </ResoursesCards>
                                </div>  
                                                             
                    </>
                </ScoilLayout>                                                    
            </div>            
        </>
    );
}

export default ResoursesMatematicas;

                              

