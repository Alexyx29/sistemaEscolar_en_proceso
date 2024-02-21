import selectIcon from '@/assets/icons/select-icon.svg';
import { useEffect, useState } from 'react';
import Module from './modules';

const ModuleContent = ({id, tittle, name, duration, contenido, onModuleData, loadInfoId = ()=>{}}) => {
    const [content, setContent] = useState(false);
    const [selectedModule, setSelectedModule] = useState(1);
    
    const showContent = () => {
        setContent(!content);
    }
    

    return(
        <>
            <div className='flex flex-col'>
                <div className="w-full bg-[#F7F8F9] shadow-lg rounded-[10px] flex flex-col items-center">
                    <div className='w-[85%] my-[20px]'>
                        <div className='flex justify-between w-full'>
                            <div className='flex flex-col'>
                                <label className="font-open text-[21px] font-bold text-black-mat leading-none ">{tittle}</label>
                                <label className="font-open text-[14px] font-semibold text-[#818181] w-[204px]  line-clamp-2   leading-[1.2]  ">{name}</label>
                                <label className="font-open text-[11px] font-semibold text-[#0082C9] leading-none">{duration}</label>
                            </div>                        
                            <img className={content ? 'rotate-180 cursor-pointer' : 'cursor-pointer'} src={selectIcon.src} onClick={showContent}></img>
                        </div>                    
                    </div>                               
                </div>
                {content && (
                    <div className='w-[290px] rounded-[10px] bg-input-white flex justify-center mt-[1px]'>
                        <div className='w-full my-[15px]'>
                            {contenido.map((cont, index) => {
                                return (
                                    <Module key={index} id={cont.id} tittle={cont.tittle} duration={cont.duration} colors={ selectedModule == cont.id ? 'bg-purple-mat mr-[10%]' : 'bg-white mr-[10%]'} onModuleClick={() => {onModuleData(cont.id); loadInfoId(cont.id);}} />
                                )
                            })}
                        </div>                        
                    </div>
                )}                 
            </div>            
        </>
    )
}

export default ModuleContent;