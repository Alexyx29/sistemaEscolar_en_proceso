const ClassQualification = ({name, date, scale}) => {
    var colors;
    if(scale < 6){        
        colors = 'red-mat';
    } else if(scale < 8){
        colors = 'yellow-mat';
    }
    else {
        colors = '[#80BF1B]';
    }
    
    return(
        <>
            <div className={'flex-container flex mb-[16px] w-full'}>                               
                <div className={'flex flex-col items-start justify-center w-full'}>
                    <div className='flex justify-between w-full'>
                        <div className={'flex flex-col'}>
                            <label className={`font-open font-bold text-black-mat text-[14px] leading-none`}>{name}</label> 
                            <label className={`font-open text-black-mat text-[14px] leading-none`}>{date}</label> 
                        </div>                        
                        <label className={`font-open font-bold text-[14px] text-${colors}`}>{scale}</label>
                    </div>                                                    
                </div>                
            </div>            
        </>
    )
}

export default ClassQualification;