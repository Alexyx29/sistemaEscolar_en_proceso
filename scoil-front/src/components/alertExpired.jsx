import React, { useState } from "react";
import Modal from "@/layout/modal";
import { hideModal } from "@/components/useForm";
import Generic from "./items/buttons/generic";
import alert from '@/assets/icons/alert.svg';
import closeModal from '@/assets/icons/close.svg';

const AlertExpired = ({submit}) => {
    const [text, setText] = useState({
        suspended: 'Tu cuenta ha sido suspendida temporalmente debido a falta de pago.',
        recommendation: 'Te recomendamos regularizar tu situación lo antes posible.',
        lapse: 'Pago vencido hace 17 días',
        btns: {
            pay: 'Pagar Ahora',
            help: 'Ayuda',
            exit: 'Salir'
        }
    });    

const close = () => {
    hideModal('alert');
}

    return (
        <div className="w-full flex justify-center">
            <Modal id="alert" overflowHidden={false} padding={null} zIndex={50} showTitle={false} minHeight={''} showOptions={false} submit={submit} title={null} size="878px" options={false}>
                <div className="  w-full h-[336px] items-center rounded-[15px]">
                    <div className="w-full flex justify-end pr-[25px] absolute">
                        <img src={closeModal.src} onClick={close} className='cursor-pointer'></img>
                    </div>
                    <div className="h-[103px] w-[103px] mx-auto mt-[40px] " >                
                        <img className={` object-cover`} src= {alert.src}></img>  
                    </div>                    
                    <div className="flex flex-col mx-auto text-center mt-[32px]">
                        <span className=" font-open font-bold text-[21px] text-[#535353] " >{text.suspended}</span>
                        <span className="font-open font-bold text-[21px] text-[#535353] ">{text.recommendation}</span>
                        <span className="font-open font-bold text-[24px] text-[#DE0000] ">{text.lapse}</span>
                    </div>                                                                                 
                    <div className="flex w-full justify-center mt-[20px]" >
                        <div className="">
                            <Generic textButton="text-[14px]" colors='bg-[#7BAA20] rounded h-[36px] w-[138px] text-input-white font-open font-bold text-[14px]' title= {text.btns.pay} action = ''></Generic>
                        </div>  
                        <div className="mx-[50px]">
                            <Generic textButton="text-[14px]" colors='bg-[#4A61CE] rounded h-[36px] w-[138px] text-input-white font-open font-bold text-[14px]' title={text.btns.help} action = ''></Generic>
                        </div>   
                        <div className="">
                            <Generic textButton="text-[14px]" action={close}  colors='bg-[#DE0000] rounded h-[36px] w-[138px] text-input-white font-open font-bold text-[14px]' title= {text.btns.exit}></Generic>
                        </div>  
                    </div>
                </div>                                
            </Modal>
        </div>
    );
    };

    export default AlertExpired;
