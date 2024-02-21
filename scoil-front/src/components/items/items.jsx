import React from "react";

const Items = ({
    imagen,
    nombre='', 
    sizeMateria="text-[19px]",
    widthImage='60px',
    heightImage='60px',
    mImage,
}) => {
    
    
    return (        
        <>  
            <>
                <div className={`flex-container  w-full  `}>                    
                    <div className={`flex flex-col items-start justify-center w-full`}>
                        <div className={`w-full flex items-start justify-center ${mImage} `} >                
                            <img src={imagen} width={widthImage} height={heightImage} ></img>
                        </div>
                        <div className="w-full flex justify-center">
                            <label className={`flex items-start justify-center font-open font-bold text-black-mat ${sizeMateria} `}>
                                {nombre}
                            </label>                                                
                        </div>                            
                    </div>
                </div>     
            </>                                                                                                               
        </>
    )
}

export default Items;