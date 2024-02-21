import ButtonBack from '@/components/items/buttons/buttonBack';
import '../styles/globals.css'
import Line from '@/components/items/line';
import Select from '@/components/form/select';
import InputIcon from '@/components/form/inputIcon';
import React, { useEffect, useState } from 'react';
import LeftParentsBar from '@/components/menu/leftParentsBar';

const studentList = [
    {name: 'Alejandra Valdés Bernardino'},
    {name: 'Alejandro Valdés Bernardino'},
];

const ParentsLayout = (props) => {
    const {cuerpo, derecha, botonSeleccionado, parent, widthBody="w-full", wrap="flex-wrap", widthLine='100%', stylesSelect= 'w-[347px]', stylesInput= 'w-[547px]',} = props;
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [notifications, setNotifications] = useState(null);
    const [text, setText] = useState({
        search: 'Buscar'
    });

    useEffect(() => {
        if(parent) {
            setName(parent.name);
            setLastName(parent.lastName);            
            setNotifications(parent.notifications);
        }
    })

    return(    
        <div className='flex justify-center w-[full] overflow-y-auto overflow-x-visible ml-[153px]'>
            <div className='flex w-[full] mt-[30px] overflow-x-visible mb-[30px]'>
                {/* Barra lateral izquierda */}
                <LeftParentsBar idButton={botonSeleccionado} name ={name} lastname={lastName} notifications={notifications}></LeftParentsBar>
                <div className='flex flex-col'>
                    {/* Cabecera */}
                    <header className="p-0 ">
                        <div className="items-center flex">
                            <div  className='mr-[16px]'>
                                <ButtonBack type= 'button' colors= 'bg-btn-input-white hover:bg-btn-back-cursor'></ButtonBack>
                            </div>                            
                            <div className={`${stylesSelect} mr-[16px]`}>
                                <Select styles= 'bg-gray-light' options= {studentList} hiddenMargin={true}></Select>
                            </div>                            
                            <div className={`${stylesInput}  `}>
                                <InputIcon icono='search' placeholder={text.search}></InputIcon>
                            </div>                            
                        </div>
                    </header>
                    <div className='mt-[30px]'>
                        <Line colors='bg-gray-light h-[2px]' width={widthLine}></Line>
                    </div>
                    {/* Prmer Contenido a desplegar dentro del Layout */}
                    <main className={`overflow-y-scroll flex ${wrap} gap-[30px] overflow-x-visible bg-transparent `} >
                        <div className={`flex ${widthBody} gap-[30px] mt-[30px] flex-wrap `} >
                            {cuerpo}                        
                        </div>                                                
                    </main>                                        
                </div>
                {/* Contenido a desplegar a la derecha del Layout*/}                            
                    {derecha &&(
                        <div className='flex ml-[30px] min-h-[760px] w-[320px] h-[full]   '>
                            {derecha}
                        </div>                          
                    )}                                                 
            </div>            
        </div>     
    );
}

export default ParentsLayout;