import { hideModal } from "../useForm";
import { useEffect, useState } from "react";
import Message from "./message";
import Generic from "../items/buttons/generic";

const StatusResendMessage = ({submit}) =>{    
    const [text, setText] = useState({
        success: 'Se ha enviado el mensaje',
        btn: 'Entendido',
    });    

    return(
        <Message id='statusresendmodal' success_icon={true} rounded='rounded-[25px]' showTitle={false}>
            <>
                <div className='w-full flex flex-col'>
                    <div>
                        <label className='font-open text-[18px] text-message'>{text.success}</label>
                    </div>
                    <div className='w-full flex justify-center mt-[15px] mb-[-15px]'>
                        <Generic title={text.btn} colors='w-[115px] h-[36px] rounded-[5px]   bg-[#0082C9]  ' textButton='text-input-white'></Generic>
                    </div>
                </div>                                
            </>
        </Message>
    )
}

export default StatusResendMessage;