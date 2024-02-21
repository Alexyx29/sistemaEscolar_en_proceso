import { useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResendMessageUser = ({img, name, role, id}) => {
    const [isChecked, setIsChceked] = useState(false);
    const [colorChecked, setColorChecked] = useState(false);
    const handleCheckbox = () =>{        
        setColorChecked(!colorChecked);
        setIsChceked(!isChecked);
    }

    return(
        <>
            <div className="flex w-full my-[20px]">
                <div className="flex items-center">
                    <label className="cursor-pointer sticky">
                        {isChecked && (
                            <FontAwesomeIcon icon={faCheck} size="" color='#FFFFFF' className="absolute p-[3px] w-[10px] cursor-pointer"/>
                        )}                        
                        <input type="checkbox" id="terms" name="terms" className={(isChecked ? 'bg-[#61B2F2] border-blue-hover' : 'bg-white hover:border-blue-hover border-gray-checked') + ` w-4 h-4 border rounded-md appearance-none cursor-pointer`} checked={isChecked} onChange={handleCheckbox}/>                                           
                    </label>                    
                </div>                
                <div className="h-full ml-[10px]">
                    <img src={img.src} className="w-[66px] h-[66px]"></img>
                </div>
                <div className="flex flex-col grow ml-[10px] justify-center">
                    <div className="h-[65px] flex flex-col justify-around">
                        <div className="w-full flex">
                            <span className="font-open text-[14px] font-bold text-dark-blue text-left leading-none">{name}</span>
                        </div>
                        <div className="w-full flex">
                            <span className="font-open text-[14px] font-semibold text-th text-left leading-none dark:text-input-white">{role}</span>
                        </div>
                    </div>                    
                </div>
            </div>            
        </>
    )
}

export default ResendMessageUser;