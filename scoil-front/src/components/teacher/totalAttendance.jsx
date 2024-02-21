import starFill  from '../../assets/icons/star-fill.svg';
import star  from '../../assets/icons/star.svg';

const TotalAttendance = ({promedio='',

}) => {

    var a = () => {
        return promedio <= 2 ? 1 : promedio <= 5 ? 2 : promedio < 8 ? 3 : promedio < 9 ? 4 : 5;        
    }

    const renderStars = () => {        
        //console.log(a());
        switch(a()){
            case 1 : return(
                <>
                    <img src={starFill.src}/><img src={star.src}/><img src={star.src}/><img src={star.src}/><img src={star.src}/>
                </>
            )
            case 2 : return(
                <>
                    <img src={starFill.src}/><img src={starFill.src}/><img src={star.src}/><img src={star.src}/><img src={star.src}/>
                </>
            )
            case 3 : return(
                <>
                    <img src={starFill.src}/><img src={starFill.src}/><img src={starFill.src}/><img src={star.src}/><img src={star.src}/>
                </>
            )
            case 4 : return(
                <>
                    <img src={starFill.src}/><img src={starFill.src}/><img src={starFill.src}/><img src={starFill.src}/><img src={star.src}/>
                </>
            )
            case 5 : return(
                <>
                    <img src={starFill.src}/><img src={starFill.src}/><img src={starFill.src}/><img src={starFill.src}/><img src={starFill.src}/>
                </>
            )
        }        
    } 

    return(
        <>
        <div className='w-[290px] h-[230px] flex flex-col items-center justify-center ' >
            <div className={'flex-container  rounded-[10px]  flex items-center  mt-[-15px]'}>                                
                <div className={`flex  w-full  items-center`}>                    
                    <label className={`font-open font-bold text-[#0082C9] text-[60px] `}>{promedio}</label>
                        <div className={`flex flex-col ml-[10px] `}>
                            <label className={`font-open font-bold  mb-[-5px] text-[#62676D] text-[12px]`}>{"PROMEDIO GENERAL"}</label>
                            <label className={`font-open  text-[#62676D] text-[12px] `}>{"DE LA CLASE"}</label>
                        </div>       
                </div>

            </div>    
            {/* <div className='mt-[-10px] h-1  ' >  */}
            <div className=' w-[230px] h-[1px] border border-[#ACACA2] ' ></div>
            {/* </div> */}
            <div className='flex items-center mt-[-15px] ' >
                <span className='font-open font-bold text-[40px] text-[#80BF1B] mt-[20px]' >
                    {"93%"}
                </span>
                <div className='flex flex-col ml-[10px] ' >
                    <span className='font-open font-bold text-[11px] text-[#535A4E] mt-[15px]' >
                        {"ASISTENCIA DE LA CLASE"}
                    </span>

                    <span className='font-open text-[11px] text-[#ACACA2] ' >
                        {"TOTAL DE ALUMNOS:"} {"18"}
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}

export default TotalAttendance;