import Generic from "@/components/items/buttons/generic";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const SaveEffect = ({ action, send, title = 'GUARDAR', color="" }) => {
    const [hovered, setHovered] = useState(false);
    return(
        <>
        {/* {hovered && (
                <div className="flex items-center absolute">
                    <div className="bg-btn-blue rounded-[10px] border-[1px] p-[5px] h-[27px] w-[82px] flex justify-center">
                        <span className="font-open font-semibold text-[12px]">{title}</span>
                    </div>                    
                </div>
            )} */}            
            <div className={`${color} rounded-[5px] w-[36px] h-[36px] flex items-center`} onMouseOver={() => {setHovered(true)}} onMouseOut={() => {setHovered(false)}}>
                <button className={`py-3 flex items-center justify-center h-[32px] w-[32px] m-auto px-2 font-open rounded shadow focus:outline-none text-sm btnSend whitespace-nowrap text-ellipsis overflow-hidden disabled:opacity-75`} disabled={send} onClick={action}>
                    { send && 
                        <svg className="animate-spin h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    }
                    { !send && (
                        <FontAwesomeIcon icon={faCheck} size="2x" color={hovered ? '#FFFFFF' : '#D0D0D0'}/>
                    )}                
                </button>
            </div>        
        </>                           
    )    
}

export default SaveEffect;