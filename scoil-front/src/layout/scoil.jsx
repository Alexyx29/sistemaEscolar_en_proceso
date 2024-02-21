import ButtonBack from '@/components/items/buttons/buttonBack';
import '../styles/globals.css'
import Line from '@/components/items/line';
import Select from '@/components/form/select';
import InputIcon from '@/components/form/inputIcon';
import BarraMenu from '@/components/menu/barraIzquierda';
import React from 'react';
import BarraDerecha from '@/components/menu/barraDerecha';
import bgScoil from '../assets/background/bg_1.jpg';

import { useContext, useEffect, useState } from "react";
import { getItem, removeItem } from '@/components/useStorage'
import { getActualSystem } from "@/components/useLanguage";
import { getTextApi, setItemApi } from "@/components/useForm";

import imagen from '@/assets/usuarios/user.png';
import Hamburger from '@/assets/icons/hamburguer.svg'
import BtnHamburguer from '@/components/items/buttons/btnHamburguer';
import InputSearh from '@/components/form/inputSearch';

  
const ScoilLayout = ({stylesSelect, stylesInput= 'w-[547px]', children, derecha, vacio = false, botonSeleccionado, widthBody="w-full", widthLine='100%', otherRight, wrap="flex-wrap", stylesCenter, stylesBarRight, stylesUniverse}) => {
    const token = getItem('_token');
    const system_selected = getActualSystem();
    const prefix = 'student/modules/';
    const [ listaPages, setListaPages ] = useState([]);
    const [ student, setStudent ] = useState([]);
    const [ modules, setModules ] = useState([]);

    useEffect(() => {
        if(!system_selected && !token){
            window.location.href = '/';
        } else {
            dataLayout();
        }
    }, [])

    const dataLayout = () => {
        const response  = {
            'pages': [
                {id:1, name: 'TABLERO'}
                /* {label: 'ESPAÑOL II'},
                {label: 'HISTORIA II'}, */
            ],
            'student': {
                'name': 'Lara Sofía',
                'lastName': 'Laborde Revilla',
                'carrera': 'Lic. en Administración',
                'curricula': '50CK28',
                'image': imagen,
                'notifications': 22,
            },
            'modules': [
                {
                    id_module: 1, 
                    name: 'tablero',
                    txt_button: 'Tablero',
                    icono: 'tablero',
                    link: '/home'
                }, {
                    id_module: 2, 
                    name: 'aula',
                    txt_button: 'Aula virtual',
                    icono: 'aula',
                    link: '/aula-virtual-alumno'
                }, {
                    id_module: 3, 
                    name: 'biblioteca',
                    txt_button: 'Biblioteca',
                    icono: 'biblioteca',
                    link: null
                }, {
                    id_module: 4, 
                    name: 'cursos',
                    txt_button: 'Cursos Online',
                    icono: 'cursos',
                    link: '/cursos-alumno'
                }, {
                    id_module: 5, 
                    name: 'calendario',
                    txt_button: 'Calendario',
                    icono: 'calendario',
                    link: '/calendario'
                }, {
                    id_module: 6, 
                    name: 'foro',
                    txt_button: 'Foro',
                    icono: 'foro',
                    link: '/foro-alumno'
                }, {
                    id_module: 7, 
                    name: 'chat',
                    txt_button: 'Chat',
                    icono: 'chat',
                    link: '/chat-alumno'
                }, {
                    id_module: 8, 
                    name: 'wall',
                    txt_button: 'Muro',
                    icono: 'wall',
                    link: '/muro-alumno'
                },  {
                    id_module: 9, 
                    name: 'pagos',
                    txt_button: 'Pagos',
                    icono: 'pagos',
                    link: '/pagos-alumno'
                }, {
                    id_module: 10, 
                    name: 'servicios',
                    txt_button: 'Servicios Escolares',
                    icono: 'servicios',
                    link: null
                }, {
                    id_module: 11, 
                    name: 'salir',
                    txt_button: 'Salir',
                    icono: 'salir',
                    link: null
                }, 
            ]  
        };

            setModules(response.modules)
            setStudent(response.student);
            setListaPages(response.pages);
    }

    const logoff = () => {
        // fetch.fetching(process.env.API_URL + 'end-session', 'GET').then(response => {
            removeItem('_token');
            window.location.href = '/';
        // }).catch(error => {
            // console.log(error);
        // });
    }

    return( 
        <div className={`${stylesUniverse} flex justify-center news w-[full] min-ss:w-[320px] xl:overflow-y-auto  lg:overflow-y-auto md:overflow-y-auto sm:overflow-y-auto ss:overflow-y-auto overflow-x-visible mx-auto 2xl:mx-auto xl:mx-auto lg:mx-auto md:mx-auto sm:mx-auto ss:mx-auto  `}>
            <div className='flex w-full  news  mt-[30px] overflow-x-visible sm:mx-auto md:mx-[30px]   '>
                {/* Barra lateral izquierda */}
                <div className={`lg:hidden md:hidden sm:hidden ss:hidden ${stylesBarRight} `} >
                    <BarraMenu botonSeleccionado={botonSeleccionado} user={student} modules={modules} signOff={logoff} />
                </div>
                <div className='flex xl:flex-col lg:flex-col md:flex-col sm:flex-col ss:flex-col   ' >
                    <div className={`flex flex-col ${stylesCenter}  `}>
                        {/* Cabecera */}
                        <header className=" p-0 flex ss:w-full ss:items-center ss:flex ss:justify-center 2xl:w-[973px] ">
                            <div className="items-center flex md:w-[100%]  ">
                                <div className='flex md:w-[50%] ' >
                                    <div  className='hamburguesa mr-[16px]  hidden lg:block md:block sm:block ss:block ss:ml-[0px] '>
                                        <BtnHamburguer></BtnHamburguer>
                                    </div>  
                                    <div  className='mr-[16px]'>
                                        <ButtonBack type= 'button' colors= 'bg-btn-input-white hover:bg-btn-back-cursor' />
                                    </div>                            
                                    <div className={`${stylesSelect} mr-[16px] w-[347px] sm:w-[300px] ss:w-[150px] `}>
                                        <Select styles= 'bg-gray-light' options= {listaPages} hiddenMargin={true} />
                                    </div> 
                                </div>                           
                                <div className={`${stylesInput} lg:w-[500px] md:w-[50%] sm:hidden ss:hidden`}>
                                    <InputIcon icono='search' placeholder='Buscar' />
                                </div>
                                <div className='h-[36px] w-[36px]  hidden  sm:block ss:block'>
                                    <InputSearh></InputSearh>
                                </div>  
                                                          
                            </div>
                        </header>

                        <div className='mt-[30px]   '>
                            <Line colors='bg-gray-light h-[2px]' width={`${widthLine} `} />
                        </div>
                        {/* Prmer Contenido a desplegar dentro del Layout */}
                        <main className={`news overflow-y-scroll ss:w-[100%]  ss:mx-auto flex ${wrap}  gap-[30px]  overflow-x-visible bg-transparent  `}>
                            <div className={`flex ${widthBody}   gap-[30px] flex-wrap bg-transparent my-[27px] `}>
                                {children}                        
                            </div>                                                
                        </main>                                        
                    </div>

                    {/* Contenido a desplegar a la derecha del Layout*/}
                    {vacio &&(
                        <div className='news flex ml-[30px] min-h-[760px] 2xl:w-[290px] xl:w-[270px] h-[94vh]  pb-[30px]  '>
                            {otherRight}
                        </div>  
                    )}

                    {!vacio &&(
                        <>
                            {derecha &&(
                                
                                <div className='news  flex h-[97vh]  2xl:ml-[30px] ss:mx-auto  min-h-[760px] 2xl:w-[290px] xl:w-[466px] xl:flex-row-reverse pb-[30px] lg:w-[467px] md:w-[48%] ss:w-[100%]'>
                                    {derecha}
                                </div>                          
                            )}
                        </>
                    )}  
                </div>               
            </div>            
        </div>  
    );
}

export default ScoilLayout;