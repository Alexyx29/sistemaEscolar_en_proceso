import React from "react";
import iconBack from  '@/assets/icons/iconBack.svg';

const GoBack =({}) =>
{
    return (
        <>
            <div className="w-[290px] h-[92px] bg-[#F7F8F9] rounded-[10px] flex shadow-2xl justify-center items-center" >
                <img src={iconBack.src} alt="" className="w-[78px] h-[58px] " />
                <span className="font-open font-bold  text-[21px] text-[#535353] mr-[5px]   " >
                    {"IR AL BACK END"}
                </span>

            </div>
        </>
    )
}

export default GoBack;