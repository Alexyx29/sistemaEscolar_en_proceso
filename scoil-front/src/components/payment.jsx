//import PaymentReceiptImec from "@/components/modal/paymentReceiptImec";
//import { showModal, hideModal } from "@/components/modal/useForm";
import Section from "./menu/seccion";
import TextButton from "./items/buttons/textbutton";
import IndicatorCircle from './items/indicatorCircle';
import plus from '@/assets/icons/plus.svg';
import { useEffect, useState } from "react";

const Payment = ({paymentData}) => {
    const [expirationDate, setExpirationDate] = useState('');
    const [amount, setAmount] = useState('');
    const [alertColor, setAlertColor] = useState('');        
    const [text, setText] = useState({
        label_next_pay: "TU PRÓXIMO PAGO SE VENCE EL ",
        label_history: 'VER HISTORIAL DE PAGOS',
        label_pay: 'PAGAR'
    });

    useEffect(() => {
        if(paymentData){
            //console.log(paymentData);
            setExpirationDate(paymentData.nextPayment.expirationDate);
            setAmount(paymentData.nextPayment.amount);
        }
    })

    

    const modalImec = () => {
        showModal("imec");
    };

    const cerrarImec = () => {
        hideModal("imec");
    };

    return(
        <>
            <Section tittle='' colors={'bg-input-white grow w-[100%]'}>
                <div>
                    <div className="flex">
                        <div className="flex justify-center items-center mr-[10px]">
                            <IndicatorCircle colors='bg-red-indicator'></IndicatorCircle>
                        </div>                
                        <div className="flex justify-between w-full items-center">
                            <div className="w-[65%]">
                                <label className="font-open text-[18px] text-section-title"> {text.label_next_pay} {<label className="font-open text-[18px] text-red-indicator font-bold">{expirationDate}</label>}</label>
                            </div>                    
                            <div className="flex justify-center justify-items-center items-baseline">
                                <div className="mr-[10px]">
                                    <label className="font-open text-[20px] text-gray-amount font-bold">{amount}</label>
                                </div>                        
                                <div>
                                    <TextButton txt_button={text.label_pay} colors='font-open text-[20px] font-bold text-green-pay'></TextButton>
                                </div>                        
                            </div>
                        </div>                
                    </div>
                    <div className="flex justify-end">
                        <TextButton txt_button={text.label_history} colors='font-open text-[18px]   text-[#0082C9]  '></TextButton>
                        <div className="flex justify-center ml-[10px]">
                            <label className='flex items-center'><img src={plus.src} className='w-[15px] h-[15px] cursor-pointer'/></label>
                        </div>                
                    </div>
                </div>            
            </Section>
            {/* <PaymentReceiptImec   submit={{"cerrar": cerrarImec}} />         */}
        </>
    )
}

export default Payment;