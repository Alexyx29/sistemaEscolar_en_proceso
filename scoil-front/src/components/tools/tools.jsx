// import notes from '@/assets/icons/notes.svg';
import notes from '@/assets/icons/notes.svg'
import resources from '@/assets/icons/resources.svg';
import dictionary from '@/assets/icons/libro.svg';
import calc from '@/assets/icons/calculadora.svg';
import help from '@/assets/icons/asistencia.svg';
import video from '@/assets/icons/video.svg';
import courses from '@/assets/icons/cursos-online.svg';
import Link from 'next/link';
import { useState } from 'react';

const Tools = ({ linkResourses="/", linkCourses="/",}) => {
    const [text, setText] = useState({
        notes: 'Mis Notas',
        resources: 'Recursos',
        onlinecourses: 'Cursos Online',
        dictionary: 'Diccionario',
        calculator: 'Calculadora',
        help: 'Ayuda',
    });

    return(
        <>
            <div class={'w-[290px] ss:w-[310px] sm:w-full md:w-full lg:w-full xl:w-full flex bg-[#F7F8F9] rounded-[10px] justify-center shadow-[0_0_17px_-7px_rgba(0,0,0,0.37)]'}>
                <div className={'flex w-[full] my-[15px] justify-between space-x-[12px] sm:space-x-[55px] md:space-x-[35px] lg:space-x-[55px] xl:space-x-[55px] '}>

                        <div className={'flex flex-col items-center justify-end'}>
                            <Link href={linkResourses}>
                                <img src={resources.src}></img>
                                <label className={'font-open text-[12px] sm:text-[14px] font-bold text-dark-blue cursor-pointer'}>{text.resources}</label>
                            </Link>                                                    
                        </div>
                    
                        <div className={'flex flex-col items-center  '}>
                            <Link href={linkCourses}>
                                <img src={courses.src} className='mb-[-10px] flex ml-[10px] '></img>
                                <label className={'font-open text-[12px] sm:text-[14px] font-bold text-dark-blue mt-[-10px] cursor-pointer'}>{text.onlinecourses}</label>
                            </Link>
                        </div>

                        <a href="https://www.rae.es" target="_blank" rel="noopener noreferrer">
                            <div className={'flex flex-col items-center justify-end h-full'}>
                                <img src={dictionary.src}></img>
                                <label className={'font-open text-[12px] sm:text-[14px] font-bold text-dark-blue cursor-pointer mt-[3px]'}>{text.dictionary}</label>
                            </div>  
                        </a> 
                </div>                
            </div>
        </>
    )
}

export default Tools;