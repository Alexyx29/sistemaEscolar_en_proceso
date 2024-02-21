import TextButton from "./buttons/textbutton";
import ProgressBar from "./progressBar";
import Link from "next/link";
// import base from '@/assets/background/mate.jpg';

const Course = ({name, duration, provider, description, img, progress, colorsBorder, send, txt_button, click, bar= false, href='/', }) => {
    const extractInitials = (name) => {
        const words = name.split(' ');
        const initials = words.map(word => word[0]);
        const limitedInitials = initials.slice(0, 3);
        return limitedInitials.join('');
    }

    const ImgBackground = () => {
        return (
            <div className={'relative  '}>
                <img className={'w-full h-full'} src={null} />
                <div className={' w-[full] h-[251px] items-center flex justify-center'}>
                    <label className={'text-[145px] font-bold text-input-white leading-none uppercase'}>{extractInitials(name)}</label>
                </div>
            </div>         
        );
    }

    return(
        <>
            <div className={`w-[410px] ${bar ? 'h-[480px]' : 'h-[434px]'} bg-input-white rounded-[10px]`}>
                <div className=" w-[410px] h-[251px] bg-[#4A61CE]  rounded-tl-[10px] rounded-tr-[10px] " >
                    {(img ? <><img className=" w-[410px] h-[251px]  rounded-tl-[10px] rounded-tr-[10px] " width={410} height={251} src={img}/></> : <>{ImgBackground()}</>)}     
                </div>
                <div className={''}>
                    <div className={'flex flex-col justify-center ml-[30px] '}>
                        <div className={'w-[full] mt-[17px] mb-[6px]'}>
                            <div className={'flex justify-between w-[340px] '}>
                                <div className={'mb-[-5px]  '}>
                                    <label className={'block max-w-[280px] text-[23px] font-bold text-[#505357] leading-none overflow-hidden  truncate  '}>{name}</label>
                                </div>                            
                                <div className={' '}>
                                    <span className={'text-[14px] font-semibold text-[#6781FE] leading-none'}>{duration}</span>
                                </div>                            
                            </div>
                            <div>
                                <label className={'text-[16px] text-[#6F6F6F] leading-none'}>{provider}</label>
                            </div>
                        </div>


                        {bar && (
                            <div className={'w-[90%] flex justify-center mb-[5px]'}>
                                
                                <ProgressBar progress={progress} colorsBorder={colorsBorder}  ></ProgressBar>                                            
                            </div>
                        )}
                           {bar && (
                                <div className={'w-[90%] flex justify-center mt-[12px]'}>
                                    <label className={'text-[16px] text-[#ACACA2] truncate-lines-3'}>{description}</label>
                                </div>
                                )}
                                {bar && (

                                <div className={'w-[90%] flex mt-[12px] mb-[1px]'}>
                                    <Link href={href}>
                                        <TextButton disabled={send} title={txt_button} onClick={click} txt_button='LEER MÁS' colors='text-[14px] font-bold text-[#6781FE]'></TextButton>
                                    </Link>
                                </div>
                            )}

                        {!bar && (
                            <div className={'w-[90%] flex justify-center mt-[7px]'}>
                                <label className={'text-[16px] text-[#ACACA2] truncate-lines-3'}>{description}</label>
                            </div>
                        )}
                        {!bar && (
                            <div className={'w-[90%] flex mt-[12px] mb-[-32px]'}>
                                <Link href={href}>
                                    <TextButton disabled={send} title={txt_button} onClick={click} txt_button='LEER MÁS' colors='text-[14px] font-bold text-[#6781FE]'></TextButton>
                                </Link>
                            </div>
                        )}                        
                    </div>                
                </div>                
            </div>
        </>
    )
}

export default Course;