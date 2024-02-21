import React from "react";

const NameTeacher =({image, nameTeacher, lastNameTeacher, })=>{

    return(
        <>
            <div className="flex" >
                <div className="h-[60px] w-[60px] ml-[30px] " >                
                    <img className={` object-cover`} src= {image}></img>  
                </div>

                <div className="flex flex-col ml-[14px] justify-center" >
                    <span className="font-open font-bold text-[21px] text-[#535353] " >
                        {nameTeacher}
                    </span>
                    <span className="font-open font-semibold text-[11px] text-[#818181] "  >
                        {lastNameTeacher}
                    </span>
                </div>
            </div>
        </>
    )
};

export default NameTeacher;