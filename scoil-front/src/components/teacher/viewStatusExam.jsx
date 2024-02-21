
import iconoExam from '@/assets/icons/iconExam.svg';
import selectIcon from '@/assets/icons/select-icon.svg';
import React, { useState } from 'react';


const ViewStatusExam = ({
    
    
}) => {
    const [content, setContent] = useState(false);
    const [selectedModule, setSelectedModule] = useState(1);

    const showContent = () => {
        setContent(!content);
    }

    const onModuleClick = (id, videoTittle, videoImage) => {
        setSelectedModule(id);
        onModuleData(id, videoTittle, videoImage);
    }

    const [selectedFilter, setSelectedFilter] = useState('Todos');
            const handleFilterClick = (filter) => {
            setSelectedFilter(filter);
            };
            
    return(
        <>
            <div class={'w-[290px] flex bg-[#F7F8F9] rounded-[10px] shadow-2xl relative z-10 '}>
                <div className={'flex w-full items-center my-[15px] ml-[40px]'}>
                    <img src={iconoExam.src} className='text-[#0082C9]' ></img>
                    <div className='flex flex-col' >
                        <label className={'font-open text-[21px] font-bold text-[#535353] ml-[10px]'}>Exámenes</label>
                        <label className={'changeitem font-open text-[11px] font-semibold text-[#818181] ml-[10px]'}>{selectedFilter}</label>
                    </div>
                    <div className='w-full flex justify-end  mr-[50px]' >
                        <img className={ content ? 'rotate-180 cursor-pointer' : 'cursor-pointer'} src={selectIcon.src} onClick={showContent}></img>
                    </div>
                </div>
            </div>

            {content && (
            <div class={'w-[100%] flex bg-input-white rounded-[10px] mt-[-15px] '}>
                <div className='flex flex-col font-open text-[11px] font-semibold text-[#818181]  my-[15px] ml-[40px]' >
                    <label className={`cursor-pointer changeItem ${selectedFilter === 'Todos' ? 'text-[#0082C9]' : 'text-[#818181]'}`} onClick={() => handleFilterClick('Todos')}>Todos</label>
                    <label className={`cursor-pointer changeItem ${selectedFilter === 'Por Calificar' ? 'text-[#0082C9]' : 'text-[#818181]'}`} onClick={() => handleFilterClick('Por Calificar')}>Por Calificar</label>
                    <label className={`cursor-pointer changeItem ${selectedFilter === 'Calificados' ? 'text-[#0082C9]' : 'text-[#818181]'}`} onClick={() => handleFilterClick('Calificados')}>Calificados</label>
                    {/* <label className={`cursor-pointer changeItem ${selectedFilter === 'CALIFICADAS' ? 'text-[#6781FE]' : 'text-[#818181]'}`} onClick={() => handleFilterClick('CALIFICADAS')}>CALIFICADAS</label> */}
                </div>
            </div>
            )}
        </>
    )
}

export default ViewStatusExam;