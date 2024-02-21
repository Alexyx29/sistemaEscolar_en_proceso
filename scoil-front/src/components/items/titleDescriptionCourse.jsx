import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";



const TitleDescriptionCourse = ({ 
    materia,
    timeCourse,
    description,
}) => {


    const [isPressed, setPressed] = useState(false);

    const handleButtonClick = () => {
        setPressed(!isPressed);
    };
  


    
    return (        

                <>
                    <div className=" mt-[px] w-[972px] ">
                        <div className={'flex-container flex-col flex mt-[0px] mb-[0px] w-[914px] '}>                
                           
                       
      
                                <div className="flex w-[914px] justify-between items-center">
                                    <span className=" font-open font-bold text-[32px] text-[#535353]">
                                        {materia}
                                    </span>
                                    <div>
                                        <button className={` w-[10px] h-[7px] text-[#888888]`}
                                            onClick={handleButtonClick}
                                            >
                                            
                                                <FontAwesomeIcon icon={isPressed ?  faCaretUp : faCaretDown } /> 
                                                
                                        </button>
                                    </div>
                                </div>

                                <span className="font-open font-semibold text-[16px] text-[#6781FE]" >
                                    {timeCourse}
                                </span>
                                
                                {isPressed && (
                                <span className="font-open text-[18px] text-[#ACACA2] mt-[12px] " >
                                    {description}
                                </span>
                                )}
                        </div>
                    </div>                
                </>

    )
}

export default TitleDescriptionCourse;