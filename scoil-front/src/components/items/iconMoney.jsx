import React from "react";
import iconMoney from '../../assets/icons/iconMoney.svg';
import Line from "./line";
/**
 * Componente Line. Devuelve la linea entre elementos
 * @param {string} name
 * @param {string} lastname
 * @param {string} curricula
 * @param {img} iconMoney
 * @returns 
 */
const IconMoney = ({year='', sizeIcon='', btnPay=true, btnDetail=true , pay, details, clickPay, clickDetail, }) => {
    return(
        <>  
            {/* section trae mt-[20px] por default */}
            <div className='mt-[10px] flex flex-col mx-[30px] '>
                <div className="flex justify-between " >
                    <div className="relative flex  items-center ">                    
                        <img className={`${sizeIcon} object-cover`} src= {iconMoney.src}></img> 
                        <span className='text-black  font-open  text-[14px] ml-[12px]'>{year}</span>
                    </div>                
                   
                            <>
                            <div className="flex " >
                                {btnDetail && (
                                    <div className="mt-[20px]">
                                        <button onClick={clickDetail} className="text-[14px] bg-[#0082C9] rounded h-[36px] w-[115px] text-input-white font-semibold">
                                            {details}
                                        </button>
                                    </div>
                                )}

                                {btnPay && (
                                    <div className="mt-[20px] ml-[30px] ">
                                        <button  onClick={clickPay} className="text-[14px] bg-[#80BF1B] rounded h-[36px] w-[115px] text-input-white font-semibold">
                                            {pay}
                                        </button>
                                    </div>
                                )}

                                
                            </div>
                            </>                                                              
                </div>

                <div className='w-[912px] z-10 mt-[20px]  '>                        
                    <Line colors='bg-txtbtn-gray h-[1px]' width='w-[733px]'/>
                </div>
            </div>
        </>
    )
}

export default IconMoney;