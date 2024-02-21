import React from "react"
import iconoSearch from '@/assets/icons/search.svg';

const InputSearh = ({}) => {
    return (
        <div className="w-[36px] h-[36px] bg-[#F4F4EF] rounded-[10px] flex items-center justify-center " >
            <img src={iconoSearch.src} alt="" />
        </div>
    )
}

export default InputSearh;
