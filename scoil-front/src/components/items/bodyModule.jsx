import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";



const BodyModules = ({ 
    theme,
    timeTheme,
}) => {


   

    
    return (        

                <>
                    <div className="  w-[290px] flex justify-between items-center ">
                        <div className={'flex-container  flex-col flex mt-[0px] mb-[0px] w-[234px] '}>                
                            
                            
                            <span className="font-open font-semibold text-[14px] text-[#535353] ">
                                {theme}
                            </span>

                            <span className="mb-[10px] font-open font-semibold text-[11px] text-[#6781FE]">
                                {timeTheme}
                            </span>
                        </div>

                    </div>                
                </>

    )
}

export default BodyModules;