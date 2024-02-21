import videoContent1 from '@/assets/background/video-content2.jpg';
import videoContent2 from '@/assets/background/video-content1.jpg';
import { useEffect } from 'react';

const Module = ({id, colors, tittle, duration, onModuleClick}) => {
    return(
        <>
            <div className="flex">
                <div className={`${colors} w-[6px] h-auto`}/>
                <div className="w-[234px]  flex flex-col">
                    <label className="font-open text-[14px] font-semibold text-[#535353] mt-[5px] cursor-pointer line-clamp-2 leading-[1.2]" onClick={onModuleClick}>{tittle}</label> 
                    <label className="font-open text-[11px] font-semibold text-[#0082C9] leading-none mb-[5px] mt-[4px] max-w-max cursor-pointer" onClick={onModuleClick}>{duration}</label>
                </div>
            </div>
        </>
    )
}

export default Module;