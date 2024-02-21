// import TextButton from "../buttons/textbutton";
import TextButton from "../items/buttons/textbutton";
// import ProgressBar from "../progressBar";
import base from '@/assets/background/mate.jpg';
import clip from '@/assets/icons/clip.svg';
import Link from "next/link";
import imagen2 from "@/assets/background/imagen2.jpg"



const ResoursesCards = ({name, contador, date, description, img,
    onButtonClick,
    linkResourses=" ",
    }) => {

    const showCourse = () => {
        onButtonClick();
    }

    const extractInitials = (name) => {
        const words = name.split(' ');
        const initials = words.map(word => word[0]);
        const limitedInitials = initials.slice(0, 3);
        return limitedInitials.join('');
    }

    const ImgBackground = () => {
        return (
            <div className={'relative  '}>
                <img className={'w-full h-[251px] rounded-tl-lg rounded-tr-lg  '} src={base.src} />
                <div className={'absolute top-0 w-full h-full items-center flex justify-center rounded-tl-lg rounded-tr-lg '}>
                    <label className={'font-open text-[145px] font-bold text-input-white leading-none uppercase rounded-tl-lg rounded-tr-lg '}>{extractInitials(name)}</label>
                </div>
            </div>         
        );
    }


    return(
        <>
            <div className={'w-[410px] h-[418px] bg-input-white rounded-[10px] shadow-[0_0_17px_-1px_rgba(0,0,0,0.37)]'}>
                <div className="rounded-tl-lg  h-[251px] w-[fullpx] overflow-hidden" >
                    {(img ? <><img width={'100%'} maxHeight={'251px'} src={img} className="rounded-tl-lg rounded-tr-lg m " /></> : <>{ImgBackground()}</>)}     
                </div>
                <div className={''}>
                    <div className={'flex flex-col justify-center items-center '}>
                        <div className={'w-[90%] mt-[10px] mb-[5px]'}>
                            <div className={'flex justify-between mt-[-10px]'}>
                                <div className={'mb-[-5px] w-[292px] overflow-hidden truncate font-open  text-[22px] font-bold text-[#505357]'}>
                                    <label className={'font-open w-[135px] overflow-hidden truncate text-[22px] font-bold text-[#505357] '}>{name}</label>
                                </div>                            
                                <div className={'flex items-end justify-center'}>
                                    <label className={'font-open text-[13px] font-semibold text-[#A2ACB7] leading-none mr-[5px] mb-[-1px]'}>{contador}</label>
                                    <img src={clip.src} alt="" />
                                </div>                            
                            </div>
                            <div className="mt-[5px]" >
                                <label className={'font-open text-[16px] text-[#6F6F6F] leading-none  '}>{date}</label>
                            </div>
                        </div>
                        
                        <div className={'w-[90%] flex justify-center mt-[px]'}>
                            <label className={'font-open text-[16px] text-[#ACACA2] truncate-lines-3'}>{description}</label>
                        </div>
                        <div className={'w-[90%] flex my-[10px]'}>
                            <Link href={linkResourses} >
                                <TextButton txt_button='LEER MÁS' colors='font-open text-[14px] font-bold   text-[#0082C9]  '></TextButton>
                            </Link>
                        </div>
                    </div>                
                </div>                
            </div>
        </>
    )
}

export default ResoursesCards;