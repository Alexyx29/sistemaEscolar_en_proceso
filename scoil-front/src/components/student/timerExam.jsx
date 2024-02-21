import React from "react";
import ImageBase from "../items/imageBase";
// import user from '@/assets/icons/user-2.svg'
import user from '@/assets/usuarios/user-2.svg'


const TimerExamStudent = ({}) => {

    const timer = {
        exam:"Exámen de Matemáticas",
        text:"TIEMPO RESTANTE",
        time:"00:58:32",
        rating:"5.4",
        textRating:"CALIFICACIÓN ACTUAL",
}

    return (
        <div className=" bg-[#F7F8F9]  w-[290px] h-[230px] rounded-[10px] flex flex-col " >
            <div className="mx-[30px] flex flex-col mb-[30px] " >
                <span className=" mt-[20px] font-open font-bold text-[18px] text-[#62676D] " >
                    {timer.exam}
                </span>
                <span className="font-open font-bold text-[9px] text-[#62676D] mt-[-4px]" >
                    {timer.text}
                </span>
                <span className="font-open text-[40px] text-[#ACACA2] mt-[-14px]" >
                    {timer.time}
                </span>
                
                <span className="w-[224px] border border-[#ACACA2] h-[1px] " ></span>
                <div className="flex ">
                    <div className="flex flex-col " >
                        <span className="font-open font-bold text-[80px] text-[#DE0000] mt-[-14px]" >
                            {timer.rating}
                        </span>
                        <span className="font-open font-bold text-[10px] text-[#535A4E] mt-[-20px]" >
                            {timer.textRating}
                        </span>
                    </div>
                        <span className="mt-[20px] ml-[40px] " >
                            <ImageBase image={null} firstname={"Manuel Alberto"} lastname={"Rosales San Agustín"} size="66px" ></ImageBase>
                        </span>
                </div>
            </div>
        </div>
    )
}
export default TimerExamStudent;