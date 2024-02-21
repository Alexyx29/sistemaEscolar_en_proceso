import { useState } from 'react';

import addImage from '@/assets/icons/addPhoto.svg';

const UserImageChange = ({click, name, lastName, imgUser=''}) => {
    const [hovered, setHovered] = useState(false);
    const [showInitials, setShowInitials] = useState(false);
    
    
    const setInitials = () => {
        setShowInitials(!showInitials);                        
    }

    const viewInitials = () => {
        const primeraLetraName = name ? name.charAt(0).toUpperCase() : '';
        const primeraLetraLastName = lastName ? lastName.charAt(0).toUpperCase() : '';
        const nuevaVariable = primeraLetraName + primeraLetraLastName;
        return nuevaVariable;
    }

    return(
        <div className="relative inline-block">                    
            <div className="border-2 border-image-blue rounded-full p-1 cursor-pointer" onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)} onClick={click}>
                <div className='bg-back-blue rounded-full w-[100px] h-[100px] flex justify-center items-center' onClick={setInitials}>
                    {showInitials && (
                        <label className='font-open text-[50px] font-bold text-input-white cursor-pointer'>{viewInitials()}</label>
                    )}
                    {!showInitials && (
                        <>
                            {!hovered && (
                                <img className={`w-[100px] h-[100px] object-cover rounded-full`} src= {imgUser.src}></img>                          
                            )}
                            {hovered && (
                                <img className={`w-[55px] h-[55px] object-cover`} src= {addImage.src} onClick={setInitials}></img>                          
                            )}                      
                        </>
                    )}                    
                </div>                
            </div>                                                          
        </div>    
    )
}

export default UserImageChange;