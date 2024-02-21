import backend from '@/assets/icons/back.svg';
import iconBack from '@/assets/icons/iconBack.svg';
import ModulesContent from './modulesContent';
import Tools from '../tools/tools';
import { useState } from 'react';
import ProfesorTools from '../tools/profesorTools';
import ShowTeacher from '@/assets/users/showTeacher';

const ProfesorModulesCourse = ({modules, labels, teacher, onModuleInfo, moduleBack= false, setActualId}) => {
    
    const pruebaClick = () => {
        // alert(actualId);
    }

    return(
        <>
            <div className='news flex flex-col gap-[30px] absolute overflow-y-scroll h-[94vh] w-[290px] mt-[-94px] '>
                {moduleBack && (
                    <div className={'flex w-full  rounded-[10px] justify-center bg-[#F7F8F9] shadow-inner shadow-xl'}>
                        <div className='flex w-[85%] my-[15px]'>
                            <div>
                                <img src={iconBack.src} width='78px' height='58px' className='cursor-pointer' onClick={pruebaClick} />
                            </div>
                            <div className={'flex justify-between'}>
                                <div className={'flex flex-col justify-center ml-[5px]'}>
                                    <label className={'font-open text-[21px] font-bold text-black-mat leading-none uppercase cursor-pointer'} onClick={pruebaClick}>{labels.label}</label>
                                </div>                                                          
                            </div>                                
                        </div>                
                    </div>
                )}   
                <div>
                    <ShowTeacher name={teacher.name} lastName={teacher.lastName} image={teacher.image} />
                </div>
                <div>
                    {/* <ProfesorTools /> */}
                    <Tools linkResourses="/recursos-materia" linkCourses='/cursos-alumno' /> 
                </div>
                <div>
                    <ModulesContent modules={modules} onModuleData={onModuleInfo} loadInfoId={setActualId}/>
                </div>
            </div>            
        </>
    )
}

export default ProfesorModulesCourse;