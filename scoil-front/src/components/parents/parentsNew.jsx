import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import close from '@/assets/icons/close.svg';
import calendar from '@/assets/icons/date.svg';

const ParentsNew = ({themeImg, userImg, name, role, time, title, content, icon=false}) =>{
    const [viewcontent, setViewContent] = useState(false);
    const [viewMore, setViewMore] = useState(false);
    const [text, setText] = useState({
        labels:{
            showContent:'VER MÁS',
            removeContent:'VER MENOS',
        }
    })
    const divContent = useRef();
    const [hovered, setHovered] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
        setModalVisible(true);
    };
    const closeModal = () => {
        setModalVisible(false);
    };       

    const handleMouseOver = () => {
        setHovered(true);
    };
    
    const handleMouseOut = () => {
        setHovered(false);
    };

    useEffect(() =>{
        const heightDiv = divContent.current.offsetHeight;
        if(heightDiv > 50){
            setViewMore(true);
        }
    },[viewcontent])

    const showContent = () =>{
        setViewContent(!viewcontent);        
    }

    
    return(
        <>
            <div className='flex-flex-col'>
                {themeImg && (
                    <div className='bg-input-white flex justify-center rounded-tl-lg h-[300px]'>
                        <div className='overflow-hidden flex items-center rounded-tl-lg'>
                            <img src={themeImg} className='rounded-tl-lg cursor-pointer block' onClick={openModal}></img>
                        </div>
                    </div>
                )}                
                <div className={ themeImg ?  "bg-input-white rounded-b-lg shadow-lg" : 'bg-input-white rounded-[15px] shadow-lg'}>                
                    <div className='flex w-full justify-center'>
                        <div className='w-[95%] flex justify-between mt-[15px]'>
                            <div className='flex'>
                                <div>
                                    <img src={userImg} className='rounded-full w-[61px] h-[61px] cursor-pointer'></img>
                                </div>                        
                                <div className='flex flex-col h-full justify-center ml-[7px]'>
                                    <label className='font-open text-[16px] font-bold text-news-name leading-none cursor-pointer'>{name}</label>
                                    <label className='font-open text-[14px] text-news-role cursor-pointer'>{role}</label>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label className='font-open text-[18px] text-txtbtn-gray cursor-pointer'>{time}</label>
                            </div>
                        </div>                                        
                    </div>                
                    <div className='w-full my-[10px]'>
                        <div className={`w-full h-[3px] bg-gradient-to-r from-[#00c4ff] to-[#001973]`}></div>
                    </div>                    
                        <div className='w-full flex flex-col items-center'>
                            <div className='flex w-[95%]'>
                                {icon && (
                                    <div className='flex items-center mr-[10px]' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={ hovered ? {filter: 'invert(95%) sepia(79%) saturate(3323%) hue-rotate(207deg) brightness(90%) contrast(87%)'} : {filter: 'none'}}>
                                        <Link href={'/calendario-padres-eventos'}>
                                            <img src={calendar.src} className='w-[50px] h-[40px] cursor-pointer'></img>
                                        </Link>                                        
                                    </div>
                                )}
                                <div className='flex flex-col w-[95%]'>
                                    <label className='font-open text-[20px] font-bold text-txt-search cursor-pointer'>{title}</label>
                                    <div ref={divContent} className={'min-h-[0px]'}>
                                        <div className={viewcontent ? '' : 'overflow-hidden max-h-[52px]'}>
                                            <label className={viewcontent ? 'font-open text-[18px] text-txt-search leading-none cursor-pointer' : 'font-open text-[18px] text-txt-search leading-none cursor-pointer whitespace-nowrap overflow-hidden'} style={{ whiteSpace: viewcontent ? 'pretty' : 'pretty' }}>{content}</label>                                                                      
                                        </div>                                
                                    </div>                                                            
                                </div>                                
                            </div>                            
                            <div className='w-[95%] flex justify-end mt-[0px] mb-[15px]'>
                                {viewMore && (
                                    <label className='font-open text-[14px] font-bold   text-[#0082C9]   cursor-pointer' onClick={() =>{showContent()}}>{viewcontent ? text.labels.removeContent  : text.labels.showContent }</label>                                
                                )}                                    
                            </div>                                          
                        </div>                                                       
                </div>
            </div>
            {modalVisible && (
                    <div className='bg-modal-trans fixed top-0 left-0 w-full h-full z-[1000] flex justify-center items-center backdrop-blur-[10px]'>
                        <div className="w-full bg-input-white relative max-w-[30%]">
                            <div className='h-[50px] w-[95%] flex justify-end items-center'> 
                                <img src={close.src} onClick={closeModal} className='cursor-pointer'></img>                                                          
                            </div>
                            <div className='mx-[15px] mb-[30px]'>                                
                                <img src={themeImg} className=''></img>    
                                {/* <img src={infoLarge.src} className=''></img>     */}
                            </div>                                                                                                        
                        </div>
                    </div>
                )}                    
        </>
    )
}

export default ParentsNew;