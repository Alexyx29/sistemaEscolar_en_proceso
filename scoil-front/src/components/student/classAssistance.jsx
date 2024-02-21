const ClassAssists = ({date, scale}) => {
    var colors;
    if(scale < 59){        
        colors = 'red-mat';
    } else if(scale < 79){
        colors = 'yellow-mat';
    } else {
        colors = '[#80BF1B]';
    }
    return(
        <>
            <div className={'flex-container flex mt-[10px] mb-[10px] w-full'}>                                    
                <div className={'flex flex-col items-start justify-center ml-[10px] w-full'}>                                                
                    <div className='flex w-full'>                        
                        <div className='flex justify-between w-full'>
                            <label className={`font-open font-bold text-black-mat text-[14px]`}>{date}</label>                                                                            
                            <label className={`font-open font-bold text-[14px] text-${colors}`}>{scale}%</label>                            
                        </div>                            
                    </div>                                                
                </div>
            </div>         
        </>
    )
}

export default ClassAssists;