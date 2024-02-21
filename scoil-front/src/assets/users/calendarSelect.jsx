import arrow from '@/assets/icons/purple-arrow.svg';
import Link from 'next/link';
import { useState } from 'react';

const CalendarSelect = ({viewChange, view=true, href='', title1, title2}) =>{    
    const [options, setOptions] = useState(false);    
    const [id, setID] = useState(view);    
    const [rotate, setRotate] = useState(false);
        
    const showOptions = () =>{
        setOptions(!options);
        setRotate(!rotate);        
    }
    
    const changeView = () =>{
        //alert(id);
        setID(!id);
        viewChange(!id);        
    }
        
    return(
        <>
            <div>
                <div className='bg-input-white border-[1px] w-[211px] h-[41px] border-blue-date-btn rounded-[15px] cursor-pointer' onClick={() => {showOptions()}}>
                    <div className='flex w-full h-full justify-between'>
                        <div className='ml-[20px] flex items-center'>                            
                            <label className='font-open text-[16px] font-semibold text-gray-date-txt cursor-pointer'>{title1}</label>                                                        
                        </div>                    
                        <div className='w-[12px] h-full mr-[20px] flex items-center'>
                            <img className={`cursor-pointer transition-transform duration-300 ${rotate ? 'rotate-90' : '-rotate-90'} w-[25px]`} src={arrow.src}></img>
                        </div>                    
                    </div>
                </div>
                <div>
                    
                </div>                
                    {options && (
                        <>
                            <div className={options ? 'fade-enter-active fade-enter-from fade-leave-active fade-leave-to' : 'absolute'}>
                                <Link href={href}>
                                    <div className='bg-input-white border-[1px] w-[211px] h-[41px] border-blue-date-btn rounded-[15px] cursor-pointer absolute z-10' onClick={() => {changeView()}}>
                                        <div className='flex w-full h-full justify-between'>
                                            <div className='ml-[20px] flex items-center'>                                                
                                                    <label className='font-open text-[16px] font-semibold text-gray-date-txt cursor-pointer'>{title2}</label>                                                                                                
                                            </div>                                                    
                                        </div>
                                    </div>
                                </Link>                                
                            </div>                        
                        </>
                    )}
                </div>                                    
        </>
    )
}

export default CalendarSelect;