import ScoilLayout from '@/layout/scoil';
import bgScoil from '../assets/background/bg_1.jpg';
import { useEffect, useState } from 'react';
import TableAttendance from '@/components/student/tableAttendances';
import responseDataAssistances from '../../test_data/semesterAttendance.json';

const AttendanceView = () => {
    const [dataAttendances, setDataAttendances] = useState('');

    useEffect(() => {
        setDataAttendances(responseDataAssistances)
    })

    return(
        <>
            <div className="flex w-full h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                <ScoilLayout stylesSelect={'hidden'} stylesInput= {'w-[1244px] '} vacio={false} derecha={false} widthBody='w-[1293px]' botonSeleccionado = {1} wrap={null}
                    children = { 
                        <>
                            <div className='bg-input-white p-[40px] rounded-[15px] shadow-[0_0_17px_-7px_rgba(0,0,0,0.37)] w-[1293px] h-[84vh] mb-[30px]'>
                                <TableAttendance dataAttendance={dataAttendances}></TableAttendance>
                            </div>                            
                        </>
                    } 
                                     
                />                
            </div>
        </>
    )
}

export default AttendanceView;

