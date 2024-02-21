import { useContext, useEffect, useState } from "react";

const VideoClass = ({data=[], alert=false,}) => {
    const [ stream, setStream ] = useState([]);

    useEffect(() => {
        setStream(data);
    }, [data])

    return(
        <>            
            <div className={` w-[full] ss:w-full sm:w-full flex grow flex-col  mb-[0px] bg-gray-light justify-end rounded-[10px] `} >
                {stream &&
                    <>
                        {/* <div className="flex w-full mt-[30px]" >
                            <div className="ml-[60px] w-full flex items-center  mr-[30px] absolute">
                                <img src={stream.user ? stream.user.image : ''} className="w-[66px] h-[66px]" />
                                <div className="flex flex-col">
                                    <span className="ml-[15px] font-open font-bold text-dark-blue text-[16px] leading-none" >{stream.user ? stream.user.name : ''}</span>
                                    <span className="ml-[15px] font-open text-[#223955] text-[16px] leading-none" >{stream.user ? stream.user.lastname : ''}</span>
                                </div>                                                    
                            </div>
                        </div> */}
                        {!alert && (
                            <div className='flex flex-col  w-[972px] ss:w-full sm:w-full md:w-full  bg-gray-light rounded-[10px] '  > 
                                <div className='flex   flex-col  '>
                                    {/* <label className={'flex  rounded-[10px] h-auto text-black-mat text-[32px] font-bold font-open  '}>{stream.title}</label>
                                    <label className={'flex  rounded-[10px] h-auto text-black-mat text-[18px] font-open '}>{stream.descripcion}</label>                     */}
                                    <div className={' border-[2px] border-black m-[60px] ss:m-[15px] sm:m-[20px]  '}>
                                        <img src={stream.img} className="w-[855px] ss:w-full sm:w-[440px] md:w-full h-[480px] ss:h-[240px] sm:h-[340px]" />
                                    </div>
                                </div>
                            </div> 
                        )}

                        {alert && (
                            <div className='flex flex-col items-end mr-[30px] ml-[30px] w-[911px] mb-[30px] mt-[40px]  rounded-[10px] '  > 
                                <div className='flex   flex-col mt-[30px] ml-[30px] mr-[30px] mb-[22px] '>
                                    <label className={'flex  rounded-[10px] h-auto text-black-mat text-[32px] font-bold font-open  '}>{stream.title}</label>
                                    <label className={'flex  rounded-[10px] h-auto text-black-mat text-[18px] font-open '}>{stream.descripcion}</label>   

                                    <div className={' border-[2px] border-black mt-[10px]'}>
                                        <span className="w-[855px] h-[485px] bg-[#ECEFF0]  border-[#000000] border-[2px] font-open font-bold text-[21px] text-[#535353] items-center flex flex-col  justify-center " >
                                            <img src={stream.iconAlert} alt="" className="mb-[32px] "  width="140" />
                                            {stream.alert}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}

                    </>
                }
            </div>        
        </>
    )
}

export default VideoClass;