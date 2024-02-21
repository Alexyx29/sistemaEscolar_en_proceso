import bgScoil from '../assets/background/bg_1.jpg';
import ParentsLayout from "@/layout/parentsLayout";
import { useEffect, useState } from "react";
import responseAssistances from '../../test_data/semesterAttendance.json';
import TableAttendance from '@/components/student/tableAttendances';

const ParentsAssistancesTable = () => {
    const [idButton, setIdButton] = useState(1);
    const [dataAttendances, setDataAttendances] = useState('');

    useEffect(() => {
        setDataAttendances(responseAssistances);
    },[responseAssistances]);


    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <ParentsLayout botonSeleccionado={idButton} derecha={null} widthBody='2xl:w-[1293px]' stylesInput= {'w-[878px] '} cuerpo ={
                    <div className='bg-input-white p-[40px] rounded-[15px] shadow-[0_0_17px_-7px_rgba(0,0,0,0.37)] w-[1293px] h-[847px]'>
                        <TableAttendance dataAttendance={dataAttendances}></TableAttendance>
                    </div>     
                } 
                />                                                    
            </div>            
        </>
    );
}

export default  ParentsAssistancesTable;



