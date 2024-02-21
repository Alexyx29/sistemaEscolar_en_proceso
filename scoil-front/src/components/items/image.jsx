import { useState } from "react";
import withoutImage from '@/assets/icons/without_image.svg'
/**
 * Componente Image
 * @param {object} item debe contener los atributos de image y name. La imagen se debe de encontrar en el servidor de laravel
 * @returns 
 */
const Image = ({ item, size = '45px',  color = '#00A3FF' }) => {
    const [ urlImage ] = useState(process.env.IMAGE_URL);
    return (
        <>
            <div className={`flex items-center justify-center overflow-hidden rounded-full m-auto`} style={{borderColor: color, width: size, height: size}}>
                <img src={(item.image ? urlImage + item.image : withoutImage.src)} alt={item.name} className='bg-libellum max-w-none w-auto h-full' />
            </div>
        </>
    )
}

export default Image;