import React from "react";

import Generic from "./buttons/generic";
import { faCheck, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import Line from "./line";
import alert from '@/assets/icons/alert.svg'

const text = {
    text:"Tu cuenta ha sido suspendida temporalmente debido a falta de pago.",
    text2: "Te recomendamos regularizar tu situación lo antes posible.",
    defead: "Pago vencido hace 17 días"
}

const AlertDefeaded = ({}) => {
    return (        
        <>
            <div className="  w-[866px] h-[376px] bg-gray-200  items-center ">                    
                <div className="h-[103px] w-[103px] mx-auto mt-[40px] " >                
                    <img className={` object-cover`} src= {alert.src} />  
                </div>

                <div className="flex flex-col mx-auto text-center mt-[32px]">
                    <span className=" font-open font-bold text-[21px] text-[#535353] " >
                        {text.text}
                    </span>

                    <span className="font-open font-bold text-[21px] text-[#535353] ">
                        {text.text2}
                    </span>

                    <span className="font-open font-bold text-[24px] text-[#DE0000] ">
                        {text.defead}
                    </span>
                </div>
                <div className="flex ml-[176px]" >
                    <div className="mt-[20px]  ml-[px]">
                        <Generic textButton="text-[14px]" colors='bg-[#7BAA20] rounded h-[36px] w-[138px] text-input-white font-open font-bold text-[14px]' title= 'Pagar Ahora' action = '' />
                    </div>  

                    <div className="mt-[20px]  ml-[50px] mr-[50px]">
                        <Generic textButton="text-[14px]" colors='bg-[#4A61CE] rounded h-[36px] w-[138px] text-input-white font-open font-bold text-[14px]' title= 'Ayuda' action = '' />
                    </div>   

                    <div className="mt-[20px]  ">
                        <Generic textButton="text-[14px]" colors='bg-[#DE0000] rounded h-[36px] w-[138px] text-input-white font-open font-bold text-[14px]' title= 'Salir' action = '' />
                    </div> 
                </div>                                                             
                 
            </div>                
        </>

    )
}

export default AlertDefeaded;