import notes from '@/assets/icons/notes.svg';
import resources from '@/assets/icons/resources.svg';
import dictionary from '@/assets/icons/libro.svg';
import play from '@/assets/icons/video.svg';
import calc from '@/assets/icons/calculadora.svg';
import help from '@/assets/icons/asistencia.svg';
import Link from 'next/link';

const ProfesorTools = ({
recursos= true,
video= true,
ayuda=false,
linkCursos="/",
linkResources="/"
}) => {
    return(
        <>
            <div class={'w-[290px] flex bg-[#F7F8F9] shadow-2xl rounded-[10px] justify-center  '}>
                <div className={'flex w-[85%] my-[15px] justify-center space-x-[30px]'}> 
                    {recursos && (
                        <div className={'flex flex-col items-center justify-end'}>
                            <Link href={linkResources}>
                            <img src={resources.src} className='cursor-pointer'></img>
                            <label className={'font-open text-[12px] font-bold text-dark-blue cursor-pointer'}>Recursos</label>
                            </Link>
                        </div>
                    ) }

                    {video && (
                        <div className={'flex flex-col items-center justify-end '}>
                            <Link href={linkCursos} >
                            <img src={play.src} className='cursor-pointer '></img>
                            <label className={'font-open text-[12px] mt-[-7px] font-bold text-dark-blue cursor-pointer'}>Cursos Online</label>
                            </Link>  
                        
                        </div>
                    ) }

                    {/* <a href="https://www.rae.es" target="_blank" rel="noopener noreferrer">
                        <div className={'flex flex-col items-center justify-end'}>
                            <img src={dictionary.src} className='cursor-pointer'></img>
                            <label className={'font-open text-[12px] font-bold text-dark-blue cursor-pointer'}>Diccionario</label>
                        </div>  
                    </a>  */}
                    {/* {ayuda && (
                        <div className={'flex flex-col items-center justify-end'}>
                            <img src={help.src} className='cursor-pointer'></img>
                            <label className={'font-open text-[12px] font-bold text-dark-blue  cursor-pointer'}>Ayuda</label>
                        </div>    
                    ) } */}

                </div>                
            </div>
        </>
    )
}

export default ProfesorTools;