import { useState } from 'react';
import profesor from '../../assets/users/user-2.svg';
import addImage from '@/assets/icons/addPhoto.svg';

const UserImageChange = ({click}) => {
    const [hovered, setHovered] = useState(false);

    return(
        <div className="relative inline-block">                    
            <div className="border-2 border-image-blue rounded-full p-1 cursor-pointer" onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)} onClick={click}>
                <div className='bg-back-blue rounded-full w-[100px] h-[100px] flex justify-center items-center'>
                    {!hovered && (
                        <img className={`w-[100px] h-[100px] object-cover rounded-full`} src= {profesor.src}></img>                          
                    )}
                    {hovered && (
                        <img className={`w-[55px] h-[55px] object-cover`} src= {addImage.src}></img>                          
                    )}                    
                </div>                
            </div>                                                          
        </div>    
    )
}

export default UserImageChange;