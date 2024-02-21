import Section from "../menu/seccion";
import alert from '@/assets/icons/alert.svg'

const Video = ({tittle='', description='', img='', video=true, labels}) => {
    return(
        <>
            <Section colors={'bg-input-white grow '} width="w-full">  
            {video && (  
                <div className='flex flex-col h-full w-full my-[30px]  '> 
                    <div className='flex flex-col w-full  mt-[0px] mx-[30px] '>
                        <label className={'flex p-0 rounded-[10px] h-auto text-black-mat text-[32px] font-bold font-open leading-none'}>{tittle}</label>
                        <label className={'flex p-0 rounded-[10px] h-auto  text-[#535353] text-[18px] font-open leading-5  mt-[5px]'}>{description}</label>                    
                    </div>
                    {/* VIDEO */}
                    <div className={'mt-[15px] mx-[30px] border-[2px] border-black'}>
                        <img src={img.src}></img>
                    </div>
                </div>
                )}
                 {!video && (  
                <div className='flex flex-col h-full w-full my-[30px]  '> 
                    <div className='flex flex-col w-full  mt-[0px] mx-[30px] '>
                        <label className={'flex p-0 rounded-[10px] h-auto text-black-mat text-[32px] font-bold font-open leading-none'}>{tittle}</label>
                        <label className={'flex p-0 rounded-[10px] h-auto  text-[#535353] text-[18px] font-open leading-5  mt-[5px]'}>{description}</label>                    
                    </div>
                    {/* VIDEO */}
                    <div className={'mt-[15px] w-[917px] h-[557px] bg-[#ECEFF0] mx-[30px] border-[2px] border-black flex flex-col items-center justify-center '}>
                        <img src={alert.src} className="w-[103px] mb-[32px]" ></img>
                        <span className="w-[746px] font-open font-bold text-[21px] text-[#535353] text-center " >
                            {labels.noCourse}
                        </span>
                    </div>
                </div>
                )}
            </Section>            
        </>
    )
}

export default Video;