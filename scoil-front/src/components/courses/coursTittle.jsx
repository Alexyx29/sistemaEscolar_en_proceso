import selectIcon from '@/assets/icons/select-icon.svg';
import { useState } from 'react';

const CoursTittle = ({tittle, duration, description}) => {
    const [text, setText] = useState(false);
    const showText = () => {        
        setText(!text);
    }

    return(
        <>
            <div className="w-[972px] bg-[#F7F8F9] shadow-2xl rounded-[10px] flex flex-col items-center relative ">
                <div className='mx-[30px] ' >
                    <div className='  my-[20px] '>
                        <div className='flex justify-between w-full'>
                            <label className={` w-[900px] font-open text-[32px] font-bold text-black-mat leading-none ${text ? '' : 'line-clamp-1'} `}>{tittle}</label>
                            <img className={text ? 'rotate-180 cursor-pointer absolute right-[30px] mt-[13px] ' : 'cursor-pointer '} src={selectIcon.src} onClick={showText}></img>
                        </div>
                        <div className='w-full mt-[5px] '>
                            <label className="  font-open text-[16px] font-semibold text-[#0082C9] leading-none">{duration}</label>
                        </div>
                    </div>
                    {text && (
                        <div className='w-full  mt-[-15px] mb-[20px]'>
                            <label className='font-open  text-[18px] text-[#ACACA2] leading-snug'>{description}</label>
                        </div>
                    )}           
                </div>     
            </div>
        </>
    )
}
export default CoursTittle;
