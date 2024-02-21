import ButtonBack from '@/components/items/buttons/buttonBack';
import '../styles/globals.css'
import Line from '@/components/items/line';
import Select from '@/components/form/select';
import InputIcon from '@/components/form/inputIcon';
import BarraMenu from '@/components/menu/barraIzquierda';
import React from 'react';
import BarraDerecha from '@/components/menu/barraDerecha';
// import bgScoil from '../assets/background/bg_1.jpg';
import BarTeacher from '@/components/menu/barTeacher';

import { useContext, useEffect, useState } from "react";
import { getItem, removeItem } from '@/components/useStorage'
import { getActualSystem } from "@/components/useLanguage";
import { getTextApi, setItemApi } from "@/components/useForm";

import imagen from '@/assets/usuarios/user-2.svg';
  
const LayoutTeacher = ({stylesSelect= 'w-[347px]', stylesInput= 'w-[547px]', children, derecha, vacio = false, botonSeleccionado, widthBody="w-full", otherRight, wrap="flex-wrap",}) => {    
    const token = getItem('_token');
    const system_selected = getActualSystem();
    const prefix = 'teacher/modules/';
    const [ listaPages, setListaPages ] = useState([]);
    const [ teacher, setTeacher ] = useState([]);
    const [ modules, setModules ] = useState([]);

    useEffect(() => {
        if(!system_selected && !token){
            window.location.href = '/';
        } else {
            dataLayout();
        }
    }, [])

    const dataLayout = () => {
        getTextApi(`${prefix}/get/${botonSeleccionado}`, r => {
            setListaPages(r.pages);
            setTeacher(r.teacher)
            setModules(r.modules)
        }, '', err => {
            const response  = {
                'pages': [
                    {id:1, name: 'TABLERO'}
                    /* {label: 'ESPAÑOL II'},
                    {label: 'HISTORIA II'}, */
                ],
                'teacher': {
                    'name': 'Manuel Alberto',
                    'lastName': 'Rosales San Agustín',
                    'image': imagen,
                    'notifications': 22,
                    'subjets': [
                        { id: 1, group: 'Español'},
                        { id: 2, group: 'Matemáticas'},
                        { id: 3, group: 'Exploración de la Naturaleza y la Sociedad'},
                        { id: 4, group: 'Formación Cívica y Ética'},
                        { id: 5, group: 'Educación Artística'},
                        { id: 6, group: 'Inglés'},
                        { id: 7, group: 'Educación Física'},
                    ],
                },
                'modules': [
                    {
                        id_module: 1, 
                        name: 'tablero',
                        txt_button: 'Tablero',
                        icono: 'tablero',
                        link: '/home-teacher'
                    }, {
                        id_module: 2, 
                        name: 'aula',
                        txt_button: 'Aula virtual',
                        icono: 'aula',
                        link: '/aula-virtual-profesor'
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
                        link: '/cursos-profesor'
                    }, {
                        id_module: 5, 
                        name: 'calendario',
                        txt_button: 'Calendario',
                        icono: 'calendario',
                        link: '/calendario-profesor'
                    }, {
                        id_module: 6, 
                        name: 'foro',
                        txt_button: 'Foro',
                        icono: 'foro',
                        link: '/foros'
                    }, {
                        id_module: 7, 
                        name: 'chat',
                        txt_button: 'Chat',
                        icono: 'chat',
                        link: '/chat'
                    }, {
                        id_module: 8, 
                        name: 'wall',
                        txt_button: 'Muro',
                        icono: 'wall',
                        link: '/muro'
                    }, {
                        id_module: 9, 
                        name: 'servicios',
                        txt_button: 'Administrativo',
                        icono: 'servicios',
                        link: null
                    }, {
                        id_module: 10, 
                        name: 'salir',
                        txt_button: 'Salir',
                        icono: 'salir',
                        link: null
                    }, 
                ]      
            };

            setListaPages(response.pages);
            setTeacher(response.teacher)
            setModules(response.modules)
        })
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
        <div className='flex justify-center w-[full] overflow-y-auto overflow-x-visible ml-[153px]'>
            <div className='flex w-[full]  overflow-x-visible'>
                {/* Barra lateral izquierda */}
                <BarTeacher botonSeleccionado={botonSeleccionado} user={teacher} modules={modules} signOff={logoff} />
                <div className='flex flex-col'>
                    {/* Cabecera */}
                    <header className="p-0 mt-[30px] ">
                        <div className="items-center flex">
                            <div  className='mr-[16px]'>
                                <ButtonBack type= 'button' colors= 'bg-btn-input-white hover:bg-btn-back-cursor' />
                            </div>                            
                            <div className={`${stylesSelect} mr-[16px] w-[347px] `}>
                                <Select styles= 'bg-gray-light' options= {listaPages} hiddenMargin={true} />
                            </div>   
                            <div className={`${stylesInput} w-[547px] `}>
                                <InputIcon icono='search' placeholder='Buscar' />
                            </div>                            
                        </div>
                    </header>
                    <div className='mt-[30px]'>
                        <Line colors='bg-gray-light h-[2px]' width='100%' />
                    </div>
                    {/* Prmer Contenido a desplegar dentro del Layout */}
                    <main className={`overflow-y-scroll flex ${wrap}  gap-[30px] overflow-x-visible bg-transparent `} >
                        <div className={`flex ${widthBody} gap-[30px]  flex-wrap my-[30px] `} >
                            {children}                        
                        </div>                                                
                    </main>                                        
                </div>
                {/* Contenido a desplegar a la derecha del Layout*/}
                {vacio && (
                    <div className='news flex ml-[30px] min-h-[760px] w-[320px] h-[full] my-[30px] overflow-auto  '>
                        {otherRight}
                    </div>  
                )}
                {!vacio && (
                     <>
                        {derecha &&(
                            
                            <div className='flex ml-[30px] min-h-[760px] w-[320px] h-[full] my-[30px]  '>
                                {derecha}
                            </div>                          
                        )}
                    </>
                )}                 
            </div>            
        </div>     
    );
}

export default LayoutTeacher;