import React from 'react';
/**
 * Componente Line. Devuelve la linea entre elementos
 * @param {string} width
 * @returns 
 */
const Line = ( {colors ='bg-[#F7F8F9]', width = 'w-full'} ) => {    
    return (
        <>
            {/* SCOIL */}
            {/* <div className={`w-full bg-gradient-to-r from-[#00C4FF] to-[#001973]`} style={{height: height}}></div> */}
            {/* IMEC */}
            {/* <div className={`w-full bg-gradient-to-r from-[#fff0] via-[#fff] to-[#fff0]`} style={{height: height}}></div> */}
            {/* GLOBE */}
            <div className={`${colors}`} style={{width: width}}></div>
        </>
    )
}

export default Line;