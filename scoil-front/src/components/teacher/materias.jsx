//import Generic from "./buttons/generic";
import Link from "next/link";
// import Generic from "../buttons/generic";
import Generic from "../items/buttons/generic";
import CircleIndicator from "@/assets/users/circleIndicator";
// import CircleIndicator from "../CircleIndicator";
// import Link from "next/link";

import { useContext, useEffect, useState } from "react";

const Materia = ({id='', evaluacion = false, asistencia = false, examen= false, tarea=false, activo= false, descripcion='',  imagen, nombre='', horario='', duracion='', calificacion='', asistencias, schedule= false,  horarioInit="", horarioFinal="", linkReference="/", click, href=''}) => {
    return (        
        <>  
            {evaluacion && (
                <>
                    <div className={'flex-container flex mt-[0px] mb-[10px] w-full'}>                
                        <div className="flex h-auto items-center">
                            {calificacion >= 9 ? (
                                <CircleIndicator colors={'bg-green-indicator'}></CircleIndicator>
                            ) : (
                                <CircleIndicator colors={calificacion < 6 ? 'bg-red-mat' : 'bg-yellow-indicator'}></CircleIndicator>
                            )}
                        </div>                        
                        <div className={'flex flex-col items-start justify-center ml-[10px] w-full'}>
                            <div className='flex justify-between w-full'>   
                                <Link href={`tabla-resumen?id=${id}`}>
                                    <label className={`font-open font-bold text-black-mat text-[18px] cursor-pointer`} onClick={click}>{nombre}</label>                                                                                                                    
                                </Link>
                                <Link href={`tabla-resumen?id=${id}`}>                                    
                                    <label className={'font-open font-bold text-black-mat text-[18px] cursor-pointer'} onClick={click}>{calificacion}</label>                                                                
                                </Link>                                                             
                            </div>                                                    
                        </div>
                    </div>     
                </>
            )}

            {asistencia && (
                <>
                    <div className={'flex-container flex mt-[0px] mb-[10px] w-full'}>                                    
                        <div className={'flex flex-col items-start justify-center ml-[10px] w-full'}>                                                
                            <div className='flex w-full'>
                                <div className='flex h-auto items-center mr-[10px]'>
                                    {asistencias >= 90 ? (
                                        <CircleIndicator colors={'bg-green-indicator'}></CircleIndicator>
                                    ) : (
                                        <CircleIndicator colors={asistencias < 60 ? 'bg-red-mat' : 'bg-yellow-indicator'}></CircleIndicator>
                                    )}
                                </div>
                                <div className='flex justify-between w-full'>
                                    <label className={`font-open font-bold text-input-white text-[18px]`}>{nombre}</label>                                                                            
                                    <label className={'font-open font-bold text-input-white text-[18px]'}>{asistencias}%</label>                            
                                </div>                
                            </div>                                                
                        </div>
                    </div>     
                </>
            )}

            {examen && (
                <>
                    <div className="mb-[20px]">
                        <div className={'flex-container flex mt-[0px] mb-[0px] w-full'}>
                            <div className={'flex h-fit'}>
                                <div className="flex h-auto items-center mr-[10px]">                                                                
                                    <CircleIndicator colors={activo ? 'bg-green-indicator w-[14px] h-[14px]' : 'bg-red-indicator w-[14px] h-[14px]'}></CircleIndicator>
                                </div>
                                <div>
                                    <img src={imagen} width='60px' height='60px'></img>
                                </div>                                          
                            </div>                            
                            <div className={'flex flex-col items-start justify-center ml-[10px] w-full'}>                        
                                <label className={`font-open font-bold text-black-mat text-[21px] leading-none`}>{nombre}</label>                                                
                                <label className={`font-open font-semibold text-gray-mat text-[11px]`}>{horario}</label>
                                <label className={`font-open font-semibold   text-[#0082C9]   text-[11px]`}>Duración: {duracion}</label>                                                
                                {activo && (
                                    <>
                                        <div className="mt-[5px]">
                                            <Link href={linkReference} >
                                                <Generic colors='bg-green-indicator rounded h-[35px] w-[90px] text-input-white font-open font-bold text-[14px]' title= 'Comenzar' action = {null}></Generic>
                                            </Link>
                                        </div>                                                                
                                    </>
                                )}
                            </div>
                        </div>                        
                    </div>                
                </>
            )}

            {tarea && (
                <>
                    <div className="mb-[20px]">
                        <div className={'flex-container flex mt-[0px] mb-[0px] w-full'}>
                            <div className={'flex h-fit'}>
                                <div className="flex h-auto items-center mr-[10px]">                                                                
                                    <CircleIndicator colors={activo ? 'bg-green-indicator w-[14px] h-[14px]' : 'bg-red-indicator w-[14px] h-[14px]'}></CircleIndicator>
                                </div>
                                <div>
                                    <img src={imagen} width='60px' height='60px'></img>
                                </div>                                          
                            </div>                            
                            <div className={'flex flex-col items-start justify-center ml-[10px] w-full'}>                        
                                <label className={`font-open font-bold text-black-mat text-[21px] `}>{nombre}</label>                                                
                                <label className={`font-open font-semibold text-gray-mat text-[11px] mt-[-6px] mb-[5px]`}>{horario}</label>                                
                                <label className={`font-open font-semibold text-gray-mat text-[14px] leading-[15px]`}>{descripcion}</label>      
                                {activo && (                            
                                    <div className="mt-[10px]">
                                        <Link href={linkReference} >
                                            <Generic colors='bg-green-indicator rounded h-[35px] w-[90px] text-input-white font-open font-bold text-[14px]' title= 'Comenzar' action ={null} ></Generic>
                                        </Link>
                                    </div>                                                                                          
                                )}
                            </div>
                        </div>                        
                    </div>                             
                </>
            )}

            {schedule && (
                <>
                    <div className={'flex-container flex w-full mt-[20px] '}>
                         <div>
                            <div className=' w-[60px] h-[60px] flex justify-center items-center rounded-full  ' >
                                <img src={imagen} alt="" className="rounded-full"  width='60px' height='60px' />
                            </div>  
                        </div>                       
                        <div className={'flex flex-col justify-center ml-[10px] w-full  '}>
                            <label className={`w-[300px] font-open font-bold text-[#535353] text-[18px] leading-none overflow-hidden ellipsis truncate `}>{nombre}</label>
                            <label className={`font-open font-semibold text-[#818181] text-[11px] `}>{horarioInit} - {horarioFinal}</label>            
                        </div>
                    </div>  
                </>
            )}                                                                                                                
        </>
    )
}

export default Materia;