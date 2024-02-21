import Link from "next/link";

/**
 * Componente Line. Devuelve la linea entre elementos
 * @param {string} name
 * @param {string} lastname
 * @param {string} curricula
 * @param {img} imagen
 * @returns 
 */
const Alumno = ({name='', lastname= '', carrera='', curricula= '', imagen= '', tamanio='', notificaciones= null, borde= null, reference="",}) => {
    return(
        <>
            <div className='mt-[30px] flex flex-col items-center'>
                <div className="relative inline-block">                    
                    <div className={borde ? "border-2 border-libellum-light-blue rounded-full p-1" : ''}>
                        <Link href={reference}>
                            <img className={`${tamanio} object-cover`} src= {imagen.src}></img>  
                        </Link>
                    </div>                                        
                    {notificaciones && (
                        <>
                            <div className="absolute top-0 left-[75px] flex align-center justify-center w-[37px] h-[37px] bg-red-notification text-white flex items-center justify-center rounded-full border-white cursor-pointer">
                                <span className="text-[21px] font-helve">{notificaciones}</span>
                            </div>  
                        </>
                    )}                    
                </div>                
                <div className='flex flex-col text-center pt-[10px]'>                
                    <span className='text-black  font-open font-bold text-[16px] mb-[-4px]'>{name}</span>
                    <span className='text-gray_alter text-[16px] font-open font-bold mb-[-4px] '>{lastname}</span>
                    <span className='  text-[#0082C9]   text-[14px] font-open font-bold mb-[-2px]'>{carrera}</span>
                    <span className='text-light-purple text-[14px] font-open font-bold '>{curricula}</span>
                </div>                
            </div>
        </>
    )
}

export default Alumno;