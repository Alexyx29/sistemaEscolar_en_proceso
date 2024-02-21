import ScoilLayout from "@/layout/scoil";
import bgScoil from '../assets/background/bg_1.jpg';

import { useState } from "react";

import imagen2 from '@/assets/background/imagen2.jpg'


import trashRed from '@/assets/icons/trashRed.svg'
import editIcon from '@/assets/icons/editIcon.svg'
import Line from "@/components/items/line";
import Document from "@/components/courses/document";


import '@/styles/globals.css'

const RecursoGuia = ({buttons=false}) => {

  
    
const text= {

    tema:"Ejercicios Resueltos para Planificación Financiera a Largo Plazo",
    date:"10/09/2023 16:15",
    resume:"Explora nuestra colección de ejercicios de Excel diseñados para estudiantes de primaria. Estas prácticas interactivas te ayudarán a familiarizarte con las funciones básicas de Excel y mejorar tus habilidades tecnológicas para un aprendizaje más efectivo.",

    type:'pdf',
    nameDocument:'Nombre del documento',
    nameArchive:'Nombre del archivo',
    size:'1.2 MB',
    description:'Colección de problemas prácticos relacionados con los conceptos clave de matemáticas financieras',          
        
    type2:'xls',
    nameDocument2:'Nombre del documento',
    nameArchive2:'Nombre del archivo',
    size2:'1.2 MB',
    description2:'Ejercicios Resueltos con fórmulas y anotaciones. ',          
       
    type3:'doc',
    nameDocument3:'Nombre del documento',
    nameArchive3:'Nombre del archivo',
    size3:'1.2 MB',
    description3:'Donec a turpis pulvinar, hendrerit nulla id, sollicitudin dui. Nam faucibus, diam et vehicula mattis, augue nunc blandit augue, ac bibendum nisi ex eu neque. Suspendisse potenti. Donec finibus varius magna vitae ultrices.',          
       
    type4:'xls',
    nameDocument4:'Nombre del documento',
    nameArchive4:'Nombre del archivo',
    size4:'1.2 MB',
    description4:'',          
       
    type5:'jpg',
    nameDocument5:'Nombre del documento',
    nameArchive5:'Nombre del archivo',
    size5:'1.2 MB',
    description5:'Ejemplo práctico editable.',   
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

    const extractInitials = (name) => {
        const words = name.split(' ');
        const initials = words.map(word => word[0]);
        const limitedInitials = initials.slice(0, 3);
        return limitedInitials.join('');
    }

    const ImgBackground = () => {
        return (
            <div className={'relative  '}>
                <img className={'w-full h-[251px] rounded-tl-lg rounded-tr-lg  '} src={base.src} />
                <div className={' w-full h-full items-center flex justify-center rounded-tl-lg rounded-tr-lg '}>
                    <label className={'font-open text-[145px] font-bold text-input-white leading-none uppercase rounded-tl-lg rounded-tr-lg '}>{extractInitials(name)}</label>
                </div>
            </div>         
        );
    }
    
    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <ScoilLayout botonSeleccionado={'aula'} wrap={null} widthBody="w-[1293px]" stylesInput= {'w-[878px] '}> 
                    <>
                       
                    <div className="flex flex-col h-[84vh] bg-gray-light  mt-[0px]   rounded-[10px] ">
                  
                            <div className="rounded-[10px] w-[1230px] h-[211px] m-[30px]  overflow-hidden shadow-xl " >
                                {(imagen2.src ? <><img width={'full'} maxHeight={'251px'} src={imagen2.src} className="rounded-tl-lg rounded-tr-lg " /></> : <>{ImgBackground()}</>)}     
                            </div>
                        <div className="w-[1230px] h-[510px] mt-[0px] bg-[#fff] rounded-[10px] shadow-xl mx-[30px] " >
                            <div className=" news w-[1180px]  flex flex-col   overflow-y-scroll h-[493px] mx-[25px]" >
                                
                           
                                <div className="w-[1180px] relative flex justify-between flex-col mt-[20px] " >
                                    <span className="text-[#505357] flex font-open font-bold text-[22px] " >{text.tema}</span>
                                    
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
                                <div className="flex flex-col " >
                                    <span className="text-[#6F6F6F] font-open text-[16px] " >{text.date}</span>
                                    <span className="text-[#ACACA2] font-open text-[16px] ">{text.resume}</span>
                                </div>
                                

                                <div className="mt-[10px]  w-[1180px]  flex flex-col mx-auto lg:grow">
                                    <div className='flex justify-center  my-[15px]'>
                                        <Line colors='h-[1px] border border-txtbtn-gray' width='100%'></Line>
                                    </div>
                                    <Document
                                        type={text.type}
                                        nameDocument={text.nameDocument}
                                        nameArchive={text.nameArchive}
                                        size={text.size}
                                        description={text.description}>
                                    </Document>            
                                    <div className='flex justify-center my-[15px]'>
                                        <Line colors='h-[1px] border border-txtbtn-gray' width='100%'></Line>
                                    </div>

                                    <Document
                                        type={text.type2}
                                        nameDocument={text.nameDocument2}
                                        nameArchive={text.nameArchive2}
                                        size={text.size2}
                                        description={text.description2}>
                                    </Document>            
                                    <div className='flex justify-center my-[15px]'>
                                        <Line colors='h-[1px] border border-txtbtn-gray' width='100%'></Line>
                                    </div>

                                    <Document
                                        type={text.type3}
                                        nameDocument={text.nameDocument3}
                                        nameArchive={text.nameArchive3}
                                        size={text.size3}
                                        description={text.description3}>
                                    </Document>            
                                    <div className='flex justify-center my-[15px]'>
                                        <Line colors='h-[1px] border border-txtbtn-gray' width='100%'></Line>
                                    </div>

                                    <Document
                                        type={text.type4}
                                        nameDocument={text.nameDocument4}
                                        nameArchive={text.nameArchive4}
                                        size={text.size4}
                                        description={text.description4}>
                                    </Document>            
                                    <div className='flex justify-center my-[15px]'>
                                        <Line colors='h-[1px] border border-txtbtn-gray' width='100%'></Line>
                                    </div>
                                    <Document
                                        type={text.type5}
                                        nameDocument={text.nameDocument5}
                                        nameArchive={text.nameArchive5}
                                        size={text.size5}
                                        description={text.description5}>
                                    </Document>  
                                    </div> 
                                </div>   
                            </div>
                        </div>     
                    </> 
                </ScoilLayout>                                                    
            </div>            
        </>
    );
}

export default RecursoGuia;

                              

