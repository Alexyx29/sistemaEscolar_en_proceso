import Link from "next/link";
import Generic from "./buttons/generic";
import { useState,useEffect } from "react";
import BtnTimeInterval from "./buttons/btnTimeInterval";


const Materia = ({id='',activo=true, evaluacionVSmall=false, evaluacion = false, asistencia = false, examen= false, tarea=false, descripcion='',  imagen, nombre='', horario =" ", duracion='', duration, Duracion="Duración:", calificacion='', asistencias, wMateria='w-[250px]', sizeMateria="text-[18px]", sizeCalificacion="text-[21px]", mRight="", flexer="flex", btnExamn, btnTask, link = '/', linkExam='/', text}) => {

  

    return (        
        <>  
            {evaluacion && (
                <>
                    <div className={`flex-container ${flexer} flex mb-[20px] w-full  flex-wrap `}>                
                        <div className="flex lg:w-full md:w-[95%] " >
                            <div className="w-[60px] h-[60px]  " >
                                <img src={imagen} width='60px' height='60px' className="w-[60px] h-[60px]  ss:w-[50px] ss:h-[50px] rounded-full " />
                            </div>
                            <div className={`flex lg:justify-between   w-[340px]  md:w-full ss:pl-[10px] sm:pl-[10px] md:pl-[10px] `}>
                                <div className="flex flex-col items-start w-[full]   md:w-[100%]" >
                                    <label className={`${wMateria}   ss:text-[14px] sm:text-[16px] ss:w-[180px] sm:w-[295px]  md:w-[90%] xl:w-[320px] 2xl:w-[320px] font-open font-bold  text-black-mat line-clamp-1 mb-1 ${sizeMateria} `}>{nombre}</label>                                                
                                    {duracion && (
                                        <>
                                            <label className={` md:line-clamp-1 font-open  font-semibold text-gray-mat text-[11px] mt-[-6px] mb-[-2px] `}>{horario}</label>
                                            <label className={`font-open font-semibold   text-[#0082C9]   text-[11px]`}>{duration}: {duracion}</label>
                                        </>
                                    )}
                                </div>
                                {calificacion >= 8 ? (
                                    <label className={`lg:w-full font-open text-right font-bold text-[#80BF1B]  mb-1 ${mRight} ${sizeCalificacion}  `}>{calificacion}</label>
                                ) : (
                                    <Link href={link}>
                                        <label className={calificacion <=5 ? `w-full font-open font-bold flex justify-end text-red-mat cursor-pointer ${mRight} ${sizeCalificacion} ` : `font-open font-bold text-yellow-mat  cursor-pointer ${mRight} ${sizeCalificacion} `}>{calificacion}</label>
                                    </Link>                                    
                                )}
                            </div>
                                
                        </div>
                    </div>     
                </>
            )}

            {evaluacionVSmall && (
                <>
                <div className={`flex-container  flex mb-[15px] w-full  flex-wrap `}>                
                    <div className="flex lg:w-full md:w-[95%] " >
                        <div className="w-[60px] h-[60px]  " >
                            <img src={imagen} width='60px' height='60px' className="w-[60px] h-[60px]  ss:w-[50px] ss:h-[50px] rounded-full " />
                        </div>
                        <div className={`flex items-center lg:justify-between  2xl:justify-between    md:w-full ss:pl-[10px] sm:pl-[10px] md:pl-[10px] 2xl:ml-[10px] `}>
                                <label className={`   ss:text-[14px] sm:text-[16px] ss:w-[180px] sm:w-[295px]  md:w-[90%] xl:w-[320px] 2xl:w-[150px] text-[13px] font-open font-bold  text-black-mat line-clamp-3 mb-1 `}>{nombre}</label>                                                
                            {calificacion >= 8 ? (
                                <label className={`lg:w-full font-open text-right font-bold text-[#80BF1B]  mb-1  `}>{calificacion}</label>
                            ) : (
                                <Link href={link}>
                                    <label className={calificacion <=5 ? `w-full font-open font-bold flex justify-end text-red-mat cursor-pointer  ` : `font-open font-bold text-yellow-mat  cursor-pointer  `}>{calificacion}</label>
                                </Link>                                    
                            )}
                        </div>
                            
                    </div>
                </div>     
            </>
            )}

            {asistencia && (
                <>
                    <div className={'flex-container flex mt-[0px] mb-[35px] w-full '}>                
                        <img src={imagen} width='60px' height='60px' className="w-[60px] h-[60px] ss:w-[50px] ss:h-[50px] rounded-full " ></img>
                        <div className={'flex flex-col items-start justify-center ml-[10px] w-full'}>
                            <div className='flex items-center  justify-between w-full md:w-[95%] ss:w-[88%] '>
                                <label className={`w-[250px] lg:w-[85%] md:w-[75%]  ss:w-[190px] md:text-[16px] ss:text-[14px] font-open font-bold text-black-mat text-[18px] line-clamp-1 `}>{nombre}</label>                                                
                                {asistencias >= 80 ? (
                                    <label className={'font-open font-bold text-[#80BF1B] text-[21px] ss:text-[18px]  '}>{asistencias}%</label>
                                ) : (
                                    <label className={asistencias <=50 ? 'font-open font-bold text-red-mat text-[21px] ss:text-[18px]' : 'font-open font-bold text-yellow-mat text-[21px] ss:text-[18px]'}>{asistencias}%</label>
                                )}
                            </div>                                                
                        </div>
                    </div>     
                </>
            )}

            {examen && (
                <>
                    <div className="mb-[30px] ">
                        <div className={'flex-container flex mt-[0px] mb-[0px] w-full items-center  '}>                
                            <img src={imagen} width='60px' height='60px' className="rounded-full w-[60px] h-[60px] ss:w-[50px] ss:h-[50px] " ></img>
                            <div className={'flex flex-col items-start justify-center ml-[10px] w-full '}>                        
                                <label className={`w-[225px] ss:w-[120px] md:w-[150px] font-open font-bold text-black-mat text-[18px] ss:text-[14px] mb-1 line-clamp-1 `}>{nombre}</label>                                                
                                <label className={`font-open ss:w-[120px] font-semibold text-gray-mat text-[11px] mt-[-6px] mb-[-2px] line-clamp-1 `}>{horario}</label>
                                <label className={`font-open font-semibold   text-[#0082C9]   text-[11px]`}>{duration}: {duracion}</label>                                                
                            </div>

                        
                           <BtnTimeInterval dateInit='2024/02/08 16:24:00' dateLimit='2024/02/08 19:25:00'  title='comenzar' link='/' ></BtnTimeInterval>  
                        </div>
                    </div>                
                </>
            )}

            {tarea && (
                <>
                    <div className="mb-[21px]">
                        <div className={'flex-container flex mt-[0px] mb-[0px] w-full items-center  '}>                
                            <img src={imagen} width='60px' height='60px' className="rounded-full ss:w-[50px] ss:h-[50px] " ></img>
                            <div className={'flex flex-col items-start justify-center ml-[10px] w-full'}>                        
                                <label className={`w-[230px] ss:w-[150px] md:w-[150px] font-open font-bold text-black-mat text-[18px] ss:text-[14px] line-clamp-1 `}>{nombre}</label>                                                
                                <label className={`w-[230px] ss:w-[150px] md:w-[150px] font-open font-semibold text-gray-mat text-[11px] mt-[-2px] mb-[px]`}>{horario}</label>                                
                                <label className={`w-[230px]  ss:hidden   md:w-[160px] font-open font-semibold text-gray-mat text-[12px] line-clamp-1 leading-none`}>{descripcion}</label>                            
                            </div>
                            <BtnTimeInterval dateInit='2024/02/01 19:24:00' dateLimit='2024/02/01 19:25:00'  title='comenzar' link='/' ></BtnTimeInterval>  
 
                        </div>
                                                                      
                           
                    </div>                
                </>
            )}                                                                                                                
        </>
    )
}

export default Materia;