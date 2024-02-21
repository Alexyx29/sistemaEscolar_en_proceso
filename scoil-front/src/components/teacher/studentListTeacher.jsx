import ImageBase from '../items/imageBase';
import Line from '../items/line';
import CircleIndicator from '@/assets/users/circleIndicator';


import { useContext, useEffect, useState, useRef } from "react";

const StudentListTeacher = ({data}) => {
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
            <div className='w-[471px] h-[680px] bg-[#F7F8F9] rounded-[10px] relative  ' >
                <div className={' h-full flex flex-col  mt-[px] mx-[40px]'}>
                    
                    <span className='font-bold font-open text-[24px] text-[#535353] mt-[30px] ' >
                        {"ASISTENCIA DE ALUMNOS"}
                    </span>
                    
                    {/* <div className='border-[1px] border-[#707070] mt-[14px]' ></div> */}
                    <Line colors='bg-txtbtn-gray mt-[14px] h-[1px] ' width='w-full' ></Line>
                    <div className='news h-[580px] overflow-auto pt-[20px]  ' >
                  
                        {students.map((student) => (
                            <div key={student.id} className={'mapeo  flex w-[full] mb-[20px] ' } >
                                <ImageBase image={student.image} name={student.name} lastname={student.lastName} size='60px' />
                                <div className={'flex justify-between w-[340px]'}>
                                    <div className={'flex w-full items-center justify-between ml-[10px]'}>
                                        <label className={'w-[300px] h-[20px] font-open text-[18px] font-bold text-[#535353] leading-none line-clamp-1 '}>
                                            {student.name} {student.lastName}
                                        </label>
                                        <div className=" flex justify-end   z-10">                   
                                            <CircleIndicator colors={ getCircleColor(student.attendance)} />
                                        </div> 
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

export default StudentListTeacher;