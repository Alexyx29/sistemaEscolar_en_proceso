import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageBase from "../imageBase";
import parse from 'html-react-parser';
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Signer = ({ image, name, lastname, job = '', text = '', reqAcept = false, user_id, showRemove = false, removeSigner = () => {}, color = '#00A3FF' }) => {
    return (
        <div className="signer w-[360px] flex flex-col items-center justify-start py-4">
            {showRemove && (
                <div className="relative w-full">
                    <div className="absolute bg-red-btn h-6 w-6 rounded-full right-28 cursor-pointer" onClick={removeSigner}><FontAwesomeIcon icon={faXmark} className="text-white" /></div>
                </div>
            )}
            <div className="user mb-2">
                <ImageBase image={image} name={name} lastname={lastname} size="150px" sizeText="50px" color={color} />
            </div>
            <div className="name text-center">
                <span className="font-helve font-semibold text-[20px] block">{name} {lastname}</span>
                { job != '' && (
                    <span className="font-helve font-semibold text-libellum-gray block dark:text-white text-base">{job}</span>
                )}
            </div>
            { reqAcept && (
                <div className="accept w-full text-justify mt-2">
                    <input type="checkbox" className="mr-1" id={`accept_${user_id}`} />
                    <span className="text-justify text-sm font-open text-libellum-dark-v dark:text-white">{ parse(text.replaceAll('{NAME}', `${name} ${lastname}`)) }</span>
                </div>
            )}
        </div>
    )
}

export default Signer;