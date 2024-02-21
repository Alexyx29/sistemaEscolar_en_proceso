import Notificacion from '../items/notificacion';
import Line from '../items/line';
import InputIcon from '../form/inputIcon';
import campana from '../../assets/icons/campana.svg';


import { useContext, useEffect, useState,  } from "react";

const Notificaciones = ({data, borde, title = true}) => {
    const [ notifications, setNotifications ] = useState([]);
    const [ total, setTotal ] = useState(0);

    useEffect(() => {
        setNotifications(data);
        setTotal(data ? data.length : 0);
    }, [data])

    return(
        <>
            <div className={`flex flex-col  grow `}>
                <div className="relative inline-block mb-[0px] mt-[10px]">
                    {title ?
                        <span className='font-bold font-open text-[24px] text-[#535353]  ' >
                            {"MURO"}
                        </span> 
                    :
                        <>
                            <div className={borde ? "border-2 border-yellow-not rounded-full p-1" : ''}>
                                <div className='rounded-full bg-gray-not'>
                                    <img className={'object-cover'} src= {campana.src} />  
                                </div>                                        
                            </div>                                    
                            {total > 0 && (
                                <>
                                    <div className="absolute top-0 left-[60px] flex align-center justify-center w-[37px] h-[37px] bg-red-notification text-white items-center rounded-full border-white cursor-pointer">
                                        <span className="text-[21px] font-helve">{total}</span>
                                    </div>  
                                </>
                            )} 
                        </>
                    }                                  
                </div>                
                <div className='flex flex-col grow mt-[5px]'>
                    <Line colors='bg-gray-not-line h-[1px] mb-[15px]' width='100%' />
                    <main className='notifications flex flex-col grow h-[100px] overflow-y-auto'>
                        {notifications.map((notification, index) => {
                            return (
                                <Notificacion key={index} link={`/muro-alumno/${notification.id}`} tittle={notification.tittle} content={notification.description} />
                            )
                        })}
                    </main>     

                    <Line colors='bg-gray-not-line h-[1px] mt-[15px] ' width='100%' />
                    <div className='my-[20px]'>
                        <InputIcon icono='search' placeholder='Buscar' />
                    </div>                                           
                </div>
            </div>            
        </>
    )
}

export default Notificaciones;