import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";



const CourseContent = ({ 
    title,
    subtitle,
    img,
}) => {


 
    const ImgBackground = () => {
        return (
            <div className={'relative  '}>
                <img className={'w-full h-full'} src={null} />
            </div>         
          );
    }

    
    return (        

                <>
                    <div className=" mt-[px] w-[972px] h-[740px] ">
                        <div className={'flex-container flex-col flex mt-[0px] mb-[17px] w-[914px] '}>                
                            <span className=" font-open font-bold text-[32px] text-[#535353]">
                                {title}
                            </span>
                            <span className="font-open font-semibold text-[18px] text-[#535353] mt-[12px] " >
                                {subtitle}
                            </span>
                        </div>

                        <div className=" w-[917px] h-[557px] bg-[#4A61CE]  " >
                    {(img ? <><img className=" w-[410px] h-[251px]  rounded-tl-[10px] rounded-tr-[10px] " width={410} height={251} src={img}/></> : <>{ImgBackground()}</>)}     
                </div>
                    </div>                
                </>

    )
}

export default CourseContent;