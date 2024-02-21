import React from "react";
import Section from "@/components/menu/seccion";
import groupImg from "@/assets/icons/group.svg"
import alert from "@/assets/icons/alert.svg"

const Video = ({tittle='', description='', img='', link='', group}) => {
    return(
        <>
            {/* <Section colors={'bg-gray-light grow w-[full] flex items-end '}>     */}
            <div className={` w-[972px] h-[664px] flex grow flex-col mt-[0px] mb-[0px] bg-gray-light items-center   rounded-[10px]  flex-wrap `} >
                    <div className="m-[60px] " >
                    <div className="flex w-full px-[0px] justify-end flex-wrap" >
                        <div style={{width: '125px'}} >
                            <button className="block mb-[px] relative font-open font-semibold w-full h-[36px] text-[12px] text-white bg-[#0082C9] rounded-[5px] border " >
                                {"Pizarrón Virtual"}
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col items-end  h-[480px] w-[855px] mt-[30px] rounded-[10px]  '  > 
                        <div className={'flex flex-col mt-[0px] ml-[0px] '}>
                            {/* <label className={'flex  rounded-[10px] h-auto text-black-mat text-[32px] font-bold font-open  '}>{tittle}</label> */}
                            { description != '' &&
                                <label className={'flex  rounded-[10px] h-auto text-black-mat text-[18px] font-open mb-[20px]'}>{description}</label>
                            }
                            <span className="w-[855px] h-[480px] bg-[#ECEFF0]  border-[#000000] border-[2px] font-open font-bold text-[21px] text-[#535353] items-center flex flex-col  justify-center " >
                                <img src={alert.src} alt="" className="mb-[32px] "  width="140" />
                                {"Actualmente, no se está llevando a cabo ninguna clase en vivo."}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Video;