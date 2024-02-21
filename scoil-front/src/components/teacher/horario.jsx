import Section from '../menu/seccion';
import plusCircle from '@/assets/icons/plusCircleBlue.svg' 
import Materia from './materias';
import Link from 'next/link';
import Line from '../items/line';

import { useContext, useEffect, useState } from "react";

const Horario = ({data, showPlus = false, link = '/horario-profesor'}) => {
    const [ schedules, setSchedules ] = useState([]);


    useEffect(() => {
        setSchedules(data);
    }, [data])

    return(
        <>
            <div className='h-[426px] flex flex-col bg-white rounded-[10px] ' >
                <div className='mx-[32px] mt-[30px]' >
                    <div className='flex justify-between' >
                        <span className='font-open font-bold text-[24px] text-[#3E3E3E] ' >
                            {"HORARIO DE HOY"}
                        </span>
                        {showPlus &&
                            <Link href={link}>
                                <button className='w-[23px] ' >
                                    <img src={plusCircle.src} alt="" className='w-[23px] ' />
                                </button>
                            </Link>
                        }
                    </div>
                    <Line colors='bg-[#000] mt-[12px] h-[1px]' width='100%'></Line>

                    {/* <div className='border mt-[12px] mb-[20px]' ></div> */}
                    <div className='news flex flex-col grow h-[320px] overflow-y-auto  ' >
                        {schedules.map((schedule, index) => {
                            return (
                                <Materia key={index} schedule={true} imagen={schedule.image} width='50px' height='50px' nombre={schedule.name} horarioInit={schedule.horarioInit} horarioFinal={schedule.horarioFinal} />
                            )
                        })}
                    </div>
                </div>
            </div>       
        </>
    )
}

export default Horario;