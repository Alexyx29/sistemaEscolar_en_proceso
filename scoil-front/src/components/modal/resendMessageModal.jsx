import { hideModal } from "../useForm";
import { useEffect, useState } from "react";
import InputIcon from "../form/inputIcon";
import CloseEffect from "./btns/closeEffect";
import SaveEffect from "./btns/saveEffect";
import Modal from "@/layout/modal";
import ResendMessageUser from "../items/resendMessageUser";
import resend from '@/assets/icons/resend.svg';
import responseContacts from '../../../test_data/dataContacts.json';
import user1 from '@/assets/users/prof-1.svg';
import user2 from '@/assets/users/user-4.svg';
import user3 from '@/assets/users/user-5.svg';
import user4 from '@/assets/users/user-6.svg';
import user5 from '@/assets/users/user-7.svg';
import user6 from '@/assets/users/user-8.svg';
import user7 from '@/assets/users/user-9.svg';
import user8 from '@/assets/users/user-10.svg';
import user9 from '@/assets/users/user-11.svg';
import user10 from '@/assets/users/user-12.svg';

const ResendMessageModal = ({submit}) =>{
    const [contacts, setContacts] = useState([]);
    const [text, setText] = useState({
        modalTitle: 'Reenviar a...',
        search: 'Buscar',
    });

    const userImages = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10]; //ASIGNACIÖN DE IMÁGENES PROVICIONAL

    useEffect(() => {
        if(responseContacts) {            
            setContacts(responseContacts.contacts);
        }
    }, [responseContacts]);

    const resendMessages = () => {
        alert('RESEND!');
    };

    const renderContacts = () => {
        return contacts.map((contact, index) =>{
            return(
                <ResendMessageUser key={index} name={contact.name} role={contact.role} img={userImages[index]} ></ResendMessageUser>
            )
        })
    }

    const options = <>        
        {/* <CloseEffect action={cerrarImec} color=""></CloseEffect>    */}             
        <SaveEffect color="hover:bg-btn-blue"/>      
    </>

    return(
        <Modal id="resendmessagemodal" overflowHidden={false} zIndex={60}
        showTitle={true} minHeight={'780px'} options={options}
        title={text.modalTitle} size="450px" padding={"py-[30px] pr-[90px] pl-[40px]"} submit={submit} rounded=" rounded-[25px]" >
            <div className="h-[700px]">
                <div className="flex w-full justify-between">
                    <div className="w-full mr-[5px]">
                        <InputIcon icono='search' placeholder={text.search} align=' bg-input-white h-[38px]' rounded='rounded-[60px]'/>
                    </div>
                    <div className="flex items-center" onClick={resendMessages}>
                        <div className="bg-blue-resend flex rounded-full w-[32px] h-[32px] justify-center items-center cursor-pointer"> <img src={resend.src} className="w-[24px] h-[24px] cursor-pointer"></img></div>                    
                    </div>                                        
                </div>
                <div className="news mt-[25px] flex flex-col overflow-y-scroll h-[650px]">
                    {renderContacts()}                                                       
                </div>   
            </div> 
        </Modal>
    )
}

export default ResendMessageModal;