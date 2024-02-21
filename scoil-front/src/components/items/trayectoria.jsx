import starFill  from '../../assets/icons/star-fill.svg';
import star  from '../../assets/icons/star.svg';

import { useContext, useEffect, useState } from "react";

const Trayectoria = ({promedio=0, carrera='', sizePromedio="text-[90px]", sizePromGene="text-[20px]", sizeCarrera="text-[20px]", flexer="flex-col", mtPromGene="mt-[-25px]", activeStar=true, mlText="", colorNum="  text-[#0082C9]  ", teacher=false, }) => {
    const [ numStars, setNumStars ] = useState(0);

    useEffect(() => {
        setNumStars(promedio <= 2 ? 1 : promedio <= 5 ? 2 : promedio < 8 ? 3 : promedio < 9 ? 4 : 5);
    }, [promedio])

    const renderStars = () => {        
        switch(numStars){
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
            
            default: return(
                <>
                    <img src={star.src}/><img src={star.src}/><img src={star.src}/><img src={star.src}/><img src={star.src}/>
                </>
            )
        }        
    } 

    return(
        <>
            <div className={`flex-container flex w-[290px] mt-[6px] mb-[36px] `}>                                
                <div className={`flex ${flexer} items-start  ml-[10px] w-full`}>                    
                    <label className={`font-open font-bold ${colorNum} ${sizePromedio} `}>{promedio}</label>
                    
                    {!teacher && (
                        <div className={`flex flex-col ${mlText}`}>
                            <label className={`font-open text-txt-search ${sizePromGene} ${mtPromGene} mb-[-5px]`}>PROMEDIO GENERAL</label>
                            <label className={`font-open font-bold text-txt-search ${sizeCarrera}`}>{carrera}</label>
                        </div>
                    )}

                    {teacher && (
                        <div className={`flex flex-col ${mlText} mb-[-5px] mt-[-25px]`}>
                            <label className={`font-open font-bold text-txt-search mb-[-5px] ${sizeCarrera}`}>{"PROMEDIO GENERAL"}</label>
                            <label className={`font-open text-txt-search ${sizePromGene} ${mtPromGene} mt-[-3px]`}>{"DE LA CLASE"}</label>
                        </div>
                    )}

                    {activeStar ? (
                        <div className='flex mt-[10px]'>
                            {renderStars()}                        
                        </div>
                    ) : true}

                    {activeStar ? (
                        <label className={`font-open font-bold text-gray-cal text-[10px]`}>CALIFICACIÓN ACTUAL</label>
                    ) : null}
                </div>
            </div>     
        </>
    )
}

export default Trayectoria;