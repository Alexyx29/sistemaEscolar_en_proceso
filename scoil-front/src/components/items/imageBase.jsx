import Image from "./image";
import NotImage from "./notImage";

const ImageBase = ({ image = null, name = '', lastname = '', size = '45px', sizeText = '25px', color = '#223955'}) => {
    return (
        <span className={`flex item-center justify-center overflow-hidden rounded-full text-dark-blue`} style={{borderColor: color, width: size, height: size}}>
            { image && (
                <Image item={{image: image, name: name}} size={size}/>
            )}
            { !image && (
                <NotImage firstname={name} lastname={lastname} size={sizeText} color={color} />
            )}
        </span>
    )
}

export default ImageBase;