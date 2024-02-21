import { useState, useEffect } from "react";
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
const Teacher = ({name='', lastname= '', gruop='Matemáticas', gruop2, gruop3, carrera='', curricula= '', imagen= '', tamanio='', notificaciones= null, borde= null, student = [], reference = ''}) => {
    const [isPressed, setPressed] = useState(false);
    const [content, setContent] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState('');

    useEffect(() => {
        if(gruop == '') {
            setSelectedGroup(student.length > 0 ? student[0].group : '')
        } else {
            setSelectedGroup(gruop)  
        }
    }, [student])

    const handleButtonClick = () => {
        setPressed(!isPressed);
    };
  
    const showContent = () => {
        setContent(!content);
    }

    const handleGroupClick = (student) => {
        setSelectedGroup(student.group);
    };

    const renderGroup = (student) => (
        <div
            key={student.group}
            className={`flex flex-col font-open  font-semibold text-[#BEBEBE] my-[15px]  `}
            onClick={() => handleGroupClick(student)} >
            <label className={`overflow-hidden max-w-[150px] truncate font-open text-[14px] ml-[20px] mr-[20px]  ${selectedGroup === student.group ? 'text-[#0082C9]  ' : ''}`}>
                    {`${student.group}`}
            </label>
        </div>
    );

    return(
        <>
            <div className='mt-[30px] flex flex-col items-center w-full '>
                <div className="relative inline-block">                    
                    <div className={borde ? "border-2 border-libellum-light-blue rounded-full p-1" : ''}>
                        <Link href={reference}>
                            <button >
                                <img className={`${tamanio} object-cover`} src= {imagen.src}></img>
                            </button> 
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
                </div>

                <div className="w-[250px] flex items-center justify-center ">
                    <div className=" w-[160px] flex items-center justify-between space-x-3" >
                        <span className=' text-[#0082C9] text-[16px] font-open font-bold mb-[-4px] overflow-hidden max-w-[140px] truncate '>{`${selectedGroup}`}</span>
                            <img className={ content ? 'rotate-180 cursor-pointer ' : 'cursor-pointer' } src={selectIcon.src} onClick={showContent} />
                    </div>
                    <div className="relative" >
                        {content && (
                            <div class={'w-[150px] absolute top-2.5 right-2.5 mt-[5px] bg-input-white rounded-[10px] shadow-2xl '}>
                                {student.map((student) => renderGroup(student))}  
                            </div>
                        )}
                    </div>
                </div> 
                    
                               
            </div>
        </>
    )
}

export default Teacher;