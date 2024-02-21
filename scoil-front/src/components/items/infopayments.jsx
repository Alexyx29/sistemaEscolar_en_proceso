import Generic from "./buttons/generic";
import { faCheck, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import Line from "./line";
import PaymentReceipt from "../paymentReceiptScoil";
import PaymentReceiptCopernicus from "../paymentReceiptCopernicus";
import PaymentReceiptImec from "../paymentReceiptImec";
import PaymentReceiptInnova from "../paymentReceiptInnova";
import { showModal, hideModal } from "../useForm";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoPayments = ({ activo= false, activoBlue=false, descripcion='', nombre='', horario='',
colorDefaeded= "text-[#DE0000]",
colorPayGreen= "text-[#80BF1B]",
colorRecharge="text-[#DE0000]",
nColor="text-[#535A4E]",
nColor2="text-[#DE0000]",
nColor3="text-[#DE0000]",
nColor4="text-[#80BF1B]",
month="",
cuatri="",
defeaded="",
paymentON="",
paymentOnDate="",
beca="",
fromTo="",
dateLimeted="",
dateLimetedN="",
recharge="",
moneyN="",
moneyN2="",
moneyN3="",
moneyN4="",
forPayment="",

}) => {

    const [isChecked, setIsChceked] = useState(false);
    const [text, setText] = useState({
        pay: 'PAGAR',
        details: 'DETALLE'
    });
    const handleCheckbox = () =>{             
        setIsChceked(!isChecked);
    }

    const modalScoil = () => {
        showModal("scoil");
    };

    const cerrarScoil = () => {
        hideModal("scoil");
    };

    const modalCopernicus = () => {
        showModal("copernicus");
    };

    const cerrarCopernicus = () => {
        hideModal("copernicus");
    };
    
    const modalImec = () => {
        showModal("imec");
    };

    const cerrarImec = () => {
        hideModal("imec");
    };

    const modalInnova = () => {
        showModal("innova");
    };

    const cerrarInnova = () => {
        hideModal("innova");
    };

    return (        

                <>
                    <div className=" mt-[10px] w-[972px] mb-[10px] ">
                        <div className={'flex-container flex mt-[0px] mb-[0px] w-[733px] mx-[30px]'}>                
                            <div className="flex items-center">
                                <label className="cursor-pointer sticky">
                                {isChecked && (
                                    <FontAwesomeIcon icon={faCheck} size="" color='#FFFFFF' className="absolute p-[3px] w-[10px] cursor-pointer"/>
                                )}                        
                                    <input type="checkbox" id="terms" name="terms" className={(isChecked ? 'bg-[#61B2F2] border-blue-hover' : 'bg-white hover:border-blue-hover border-gray-checked') + ` w-4 h-4 border rounded-md appearance-none cursor-pointer`} checked={isChecked} onChange={handleCheckbox}/>                                           
                                </label>                    
                            </div>
                            <div className={'flex flex-col items-start justify-center ml-[15px] w-[470px]'}>                        
                                <div className="mb-[4px]">
                                <label className={`font-open font-bold text-[16px] text-[#535A4E]`}>{month}</label>
                                <label className={`font-open  text-[16px] text-[#535A4E] ml-1`}>{cuatri}</label>
                                </div>

                                {/* {(!defeaded && recharge === 0 && moneyN2 === 0) ? ( */}
                                <label className={`font-open text-[#80BF1B] text-[16px] mt-[-6px] mb-[7px]`}>{forPayment}</label>
                                {/* ) : ( */}
                                <label className={`font-open  ${colorDefaeded} text-[16px] mt-[-6px] mb-[7px]`}>{defeaded}</label>
                                {/* )} */}

                                <div className={`mt-[-10px] mb-[5px]  ${colorDefaeded}`}>
                                    <label className={`font-open  text-[16px] mt-[-6px] mb-[5px]`}>{paymentON}</label>
                                    {paymentOnDate && (
                                        <>
                                            <label className={`font-open  font-bold  text-[16px] mt-[-6px] mb-[5px] ml-1  `}>{paymentOnDate}</label>
                                        </>
                                    )}
                                </div>
                               
                                <label className={`w-[460px] font-open text-[#535A4E] text-[16px] mt-[-6px] mb-[5px]`}>{beca}</label>
                                <label className={`font-open text-[#535A4E] text-[16px] mt-[-4px] mb-[5px]`}>{fromTo}</label>

                                <div className={`mt-[-10px] mb-[5px] ${colorPayGreen}`}>
                                    <label className={`font-open text-[16px] mt-[-6px] mb-[5px]`}>{dateLimeted}</label> 
                                    <label className={`font-open font-bold text-[16px] mt-[-6px] mb-[5px] ml-1`}>{dateLimetedN}</label>                                
                                </div>
                            </div>

                            <div className={'flex  items-center justify-center ml-[102px] w-[96px] '}>                        
                                <label className={`w-[96px] font-open ${colorRecharge} text-[16px]`}>{recharge}</label>                                                
                            </div>

                            <div className={'flex flex-col font-bold text-right items-right justify-center ml-[96px] w-[128px] '}>                        
                                <label className={`font-open ${nColor}  w-[128px] text-[16px] mt-[-6px] mb-[5px]`}>{moneyN}</label>
                                <label className={`font-open ${nColor2} w-[128px] text-[16px] mt-[-6px] mb-[5px]`}>{moneyN2}</label>
                                <label className={`font-open ${nColor3} w-[128px] text-[16px] mt-[-6px] mb-[5px]`}>{moneyN3}</label>
                                <label className={`font-open ${nColor4} w-[128px] text-[16px] mt-[-6px] mb-[5px]`}>{moneyN4}</label>                                
                            </div> 
               
                        </div>
                        <div className='w-[full] z-10 mt-[10px] mx-[30px]  '>                        
                            <Line colors='bg-txtbtn-gray h-[1px]' width=''/>
                        </div>

                    </div>
<PaymentReceipt   submit={{"cerrar": cerrarScoil}} />
<PaymentReceiptCopernicus   submit={{"cerrar": cerrarCopernicus}} />
<PaymentReceiptImec   submit={{"cerrar": cerrarImec}} />
<PaymentReceiptInnova   submit={{"cerrar": cerrarInnova}} />




                </>

    )
}

export default InfoPayments;