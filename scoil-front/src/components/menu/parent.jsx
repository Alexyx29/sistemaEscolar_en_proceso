import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import selectIcon from '@/assets/icons/select-icon.svg'
import Link from "next/link";

/**
 * Componente Line. Devuelve la linea entre elementos
 * @param {string} name
 * @param {string} lastname
 * @param {string} curricula
 * @param {img} imagen
 * @returns 
 */
const Parent = ({name='', lastname= '', imagen= '', tamanio='', notificaciones= null, borde= null}) => {            
    return(
        <>
            <div className='mt-[30px] flex flex-col items-center w-full '>
                <div className="relative inline-block">                    
                    <div className={borde ? "border-2 border-libellum-light-blue rounded-full p-1" : ''}>
                        <Link href='/mis-datos-padres'>
                            <img className={`${tamanio} object-cover rounded-full`} src= {imagen.src}></img>  
                        </Link>                        
                    </div>                                        
                    {notificaciones && (
                        <>
                            <div className="absolute top-0 left-[75px] flex align-center justify-center w-[37px] h-[37px] bg-red-notification text-white items-center rounded-full border-white cursor-pointer">
                                <span className="text-[21px] font-helve">{notificaciones}</span>
                            </div>  
                        </>
                    )}                    
                </div>
                <Link href='/mis-datos-padres'>
                    <div className='flex flex-col text-center pt-[10px]'>                    
                        <span className='text-black  font-open font-bold text-[16px] mb-[4px] leading-none'>{name}</span>
                        <span className='text-gray_alter text-[16px] font-open font-bold leading-none '>{lastname}</span>                                                
                    </div>                 
                </Link>                
            </div>
        </>
    )
}

export default Parent;