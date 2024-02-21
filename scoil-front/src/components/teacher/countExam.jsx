import React from "react";


const CountExamen = ({
    
    califi= '5.4' ,
    califiN='Calificación Actual',
    react='Reactivo',
    reactN='9/20',

}) => {
    return(
        <>
            <div className='w-[290px] h-[230px]   bg-[#F7F8F9] rounded-[10px] shadow-2xl  '>
                <div className="w-full h-full flex flex-col items-center justify-center    " >
                    <span className='font-open font-bold text-[109px] text-[#DE0000] mt-[-25px] ' >
                        {califi}
                    </span>
                    <span className='font-open font-bold text-[14px] text-[#535A4E] mt-[-30px]  ' >
                        {califiN}
                    </span>
                    <div className='border w-[224px] mt-[8px]  ' ></div>
                    <span className='font-open font-bold text-[21px] text-[#62676D] mt-[px]  ' >
                        {react}
                    </span>
                    <span className='font-open font-bold text-[60px] text-[#ACACA2]  mt-[-20px]' >
                        {reactN}
                    </span>
                </div>
            </div>

        </>
    )
}

export default CountExamen;