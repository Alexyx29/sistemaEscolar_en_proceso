import check from '@/assets/icons/check.svg';
import { useEffect } from 'react';

const ProgressBar = ({progress, colorsBorder, colorsBg}) => {

    const borderColor = (progress === 100) ? 'border-[#B2D326]' : 'border-[#4A61CE]';

        
    return(
        <> 
            <div className={'flex w-full'}>
                <div className={`${borderColor} grow border-[1px] rounded-[10px] h-[30px]`} >
                    <div className={`h-full p-[2px]`} style={{width: `${progress}%`}}>
                        <div className={(progress !== 100) ? `bg-[#4A61CE] w-full h-full rounded-l-lg`: `bg-[#B2D326] w-full h-full rounded-[10px]` }/> 
                    </div>                
                </div>
                {(progress == 100) &&
                    <>
                        <div className={'ml-[7px] flex items-center'}>
                            <div className={`bg-[#B2D326] flex h-[28px] w-[28px] rounded-[50%] justify-center`}>
                                <img src={check.src} width='15px' height='15px'></img>
                            </div>
                        </div>
                    </>
                }
            </div>            
        </>
    )
}

export default ProgressBar;