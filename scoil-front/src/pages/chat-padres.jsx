import bgScoil from '../assets/background/bg_1.jpg';
import ParentsLayout from "@/layout/parentsLayout";
import { useEffect, useState } from "react";
import responseAssistances from '../../test_data/semesterAttendance.json';
import ResendMessageModal from '@/components/modal/resendMessageModal';
import { showModal } from '@/components/useForm';
import AlertExpired from '@/components/alertExpired';
import StatusResendMessage from '@/components/modal/statusResendMessage';
import responseParent from '../../test_data/dataParent.json';

const NewsParents = () => {
    const [idButton, setIdButton] = useState(3);
    const [dataAttendances, setDataAttendances] = useState('');
    const [parent, setParent] = useState('');

    useEffect(() => {
        setDataAttendances(responseAssistances);
        setParent(responseParent.parent);
    },[responseAssistances, responseParent]);

    const resendMessage = () => {
        showModal("resendmessagemodal");
    }

    const statusResendMessage = () => {
        showModal("statusresendmodal");        
    }

    const suspendedaccount = () => {
        showModal("alert");
    }

    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <ParentsLayout stylesInput= {'w-[878px] '} botonSeleccionado={idButton} parent={parent} derecha={null} widthBody='2xl:w-[1293px]' cuerpo ={
                    <>
                        <ResendMessageModal/>
                        <StatusResendMessage/>
                        <AlertExpired></AlertExpired>
                        <label onClick={resendMessage}>DESPLIEGA MODAL 1</label>
                        <label onClick={statusResendMessage}>DESPLIEGA MODAL 2</label>
                        <label onClick={suspendedaccount}>DESPLIEGA MODAL 3</label>
                    </>
                } 
                />                                                    
            </div>            
        </>
    );
}

export default  NewsParents;



