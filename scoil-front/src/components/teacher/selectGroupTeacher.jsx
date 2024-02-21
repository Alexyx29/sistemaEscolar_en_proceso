
import groupIcon from '@/assets/icons/group.svg';
import selectIcon from '@/assets/icons/select-icon.svg';
import React, { useState } from 'react';


const SelectGroupTeacher = ({
    
    
}) => {
    const [content, setContent] = useState(false);
    const showContent = () => {
        setContent(!content);
    }

    const [selectedGroup, setSelectedGroup] = useState('9308');
    const [selectedTime, setSelectedTime] = useState('7:00 - 9:00');

    const handleGroupClick = (student) => {
        setSelectedGroup(student.group);
        setSelectedTime(student.materia);
      };


  
     

      const renderGroup = (student) => (
        <div
          key={student.group}
          className={`flex flex-col font-open text-[11px] font-semibold text-[#BEBEBE] my-[15px] ml-[40px]  `}
          onClick={() => handleGroupClick(student)}
        >
          <label className={`font-open text-[21px] ml-[10px] ${selectedGroup === student.group ? 'text-[#0082C9] font-bold ' : ''}`}>{`Grupo ${student.group}`}</label>
          <label className={`horario font-open text-[11px] font-semibold ml-[10px] ${selectedGroup === student.group ? 'text-[#0082C9]' : ''}`}>{student.materia}</label>
        </div>
      );

  


      const student = [
        { id: 1, group: '9308', materia: 'Licenciatura en Informática' },
        { id: 2, group: '9409', materia: 'Licenciatura en Informática' },
        { id: 3, group: '9510', materia: 'Licenciatura en Contaduría' },
        { id: 4, group: '9611', materia: 'Licenciatura en Contaduría' },
      ];   
   
            
    return(
        <>
            <div class={'w-[290px] flex bg-input-white rounded-[10px] shadow-md relative z-10 '}>
                <div className={'flex w-full  my-[15px] ml-[28px]'}>
                    <img src={groupIcon.src}></img>
                    <div className=' w-[full] flex flex-col' >
                        <label className={'font-open text-[21px] font-bold text-[#535353] ml-[10px]'}>{`Grupo ${selectedGroup}`}</label>
                        <label className={'horario font-open text-[11px] font-semibold text-[#818181] ml-[10px]'}>{selectedTime}</label>
                    </div>
                    
                </div>
                <div className='w-[10px] h-[7px] mt-[42px] mr-[28px]' >
                        <img className={ content ? 'rotate-180 cursor-pointer' : 'cursor-pointer'} src={selectIcon.src} onClick={showContent}></img>
                    </div>
            </div>

            {content && (
            <div class={'w-[100%] bg-input-white rounded-[10px] mt-[-28px] shadow-2xl'}>
                {student.map((student) => renderGroup(student))}  
            </div>
            )}
        </>
    )
}

export default SelectGroupTeacher;