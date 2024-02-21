import bgScoil from '../assets/background/bg_1.jpg';
import ParentsLayout from "@/layout/parentsLayout";
import { useEffect, useState } from "react";
import responseAssistances from '../../test_data/semesterAttendance.json';
import { showModal } from '@/components/useForm';
import MyDataProfile from '@/components/items/form/myData';
import MyInvoice from '@/components/items/form/myInvoice';
import responseParent from '../../test_data/dataParent.json';

const MyDataParents = () => {
    const [idButton, setIdButton] = useState(1);    
    const [parent, setParent] = useState('');

    useEffect(() => {        
        setParent(responseParent.parent);
    },[responseAssistances, responseParent]);    

    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <ParentsLayout botonSeleccionado={idButton} parent = {parent} derecha={null} widthBody='2xl:w-[1293px]'
                    cuerpo ={
                        <>
                            <div className='flex flex-col gap-[30px] p-[2px]'>
                                <div>
                                    <MyDataProfile userData={parent}></MyDataProfile>
                                </div>
                                <div>
                                    <MyInvoice></MyInvoice>
                                </div>
                            </div>                            
                        </>
                    } 
                />                                                    
            </div>            
        </>
    );
}

export default MyDataParents;



