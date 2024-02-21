import user from '@/assets/usuarios/user.png'
import CircleIndicator from '@/assets/users/circleIndicator';
import plusCircleBlue from '@/assets/icons/plusCircleBlue.svg'
import Link from 'next/link';
import Line from '../items/line';

import { useContext, useEffect, useState } from "react";

const AttendaceTeacher = ({data, principal="h-[680px]", showPlus = false, link = 'lista-asistencia-profesor', secundario="h-[555px]", text="text-[24px]", styleName='text-[18px]', padding="", textTittle, widthSecundario='w-[100%]', textSecundario=''}) => {
    const [ students, setStudents ] = useState([]);

    useEffect(() => {
        setStudents(data);
    }, [data])

    const getCircleColor = (attendance) => {
        switch (attendance) {
            case "assistance":
                return 'bg-[#80BF1B]';
            case "delay":
                return 'bg-[#FEC401]';
            case "missSchool":
                return 'bg-[#FC0000]';
            default:
                return 'bg-gray-500';
        }
    };

    return(
        <>
            <div className={ `   ${principal} bg-[#ffffff] rounded-[10px] shadow-2xl  ` } >
                <div className={' h-full   justify-center mt-[30px] mx-[28px]'}>
                    <div className={ `flex justify-between ${padding}` } >
                        <span className={ ` font-bold font-open ${text}   ` } >
                            {textTittle}
                        </span>
                        { showPlus && (
                            <Link href={link}>
                                <button className='flex items-center w-[23px] ' >
                                    <img src={plusCircleBlue.src} alt="" className='w-[23px]' />
                                </button>
                            </Link>
                        )}
                    </div>
                    <Line colors='bg-[#000]  mt-[10px] h-[1px]' width='100%'></Line>
                
                    {/* <div className='border h-[1px] border-[#707070] mt-[10px]' ></div> */}
                    <div className={ ` news  ${secundario} overflow-auto   ` } >
                        {students.map((student) => (
                            <div key={student.id} className={'mapeo flex w-[full]  my-[20px]'}>
                                
                                <div className={`flex justify-between mt-[0px] ${widthSecundario}`}>
                                    <div className={'flex flex-col justify-center ml-[0px]'}>
                                        <label className={`font-open ${styleName} text-[#535353] leading-none`}>
                                            {student.name} {student.lastName}
                                        </label>
                                    </div>
                                    <div className=" flex justify-end   z-10">                   
                                        <CircleIndicator colors={ getCircleColor(student.attendance)} />
                                    </div> 
                                </div> 
                            </div>
                        ))}               
                    </div>
                </div> 
            </div>
        </>   
    ) 
}

export default AttendaceTeacher;