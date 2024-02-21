import Generic from "./buttons/generic";
import PaymentReceipt from "../paymentReceiptScoil";
import { showModal, hideModal } from "../useForm";

import { useRouter } from "next/router";

const Pago = ({fecha, monto}) => {
    const router = useRouter();

    const modalScoil = () => {
        showModal("scoil");
    };

    const cerrarScoil = () => {
        hideModal("scoil");
    };



    return(
        <>
            <div className="my-[0px] mb-[25px] ">
                <div className={'flex flex-col ml-1 w-full'}>                            
                    <label className={`font-open font-bold text-black-mat text-[19px]`}>Próximo Vencimiento</label>
                    <label className={`font-open font-bold text-red-date text-[22px] mt-[-5px]`}>{fecha}</label>
                    <div className="flex justify-between w-full items-center">
                        <label className={`font-open font-bold text-txt-black text-[28px]`}>{monto}</label>
                        <Generic colors='bg-green-scoil rounded h-[35px] w-[90px] text-input-white font-open font-bold text-[14px]' title= 'PAGAR' action={modalScoil} />
                    </div>                
                </div>
            </div>
                <PaymentReceipt   submit={{"cerrar": cerrarScoil}} />
        </>
        
    );
}

export default Pago;