//import Modal from "./layout";
import success from "@/assets/alerts/success.svg";
import err from "@/assets/alerts/err.svg";
import info from "@/assets/alerts/info.svg"
import { hideModal } from "../useForm";
import parse from 'html-react-parser';
import Modal from "@/layout/modal";
import { useEffect, useState } from "react";
/**
 * Modal de mensaje de éxito
 * @param {JSX.Element} children
 * @param {string} btn_confirm
 * @param {boolean} success_icon
 * @returns 
 */
const SuccessModal = ({ children, btn_confirm, success_icon, id = '', info_icon = false }) => {
    const [ iconShow, setIconShow ] = useState(success.src);

    useEffect(() => {

        if(info_icon && !success_icon){
            setIconShow(info.src);
        } else if(success_icon) {
            setIconShow(success.src);
        } else {
            setIconShow(err.src);
        }

    }, [ success_icon, info_icon ]);
    /**
     * Cerrar el modal
     */
    const close = () => {
        hideModal(`confirmModal${id}`);
    }

    return (
        <>
            <Modal id={`confirmModal${id}`} title="" size="480px" padding = "pl-[44px] pr-[82px] pb-8 pt-0">
                <div className="my-8 text-center"><img src={iconShow} width="103px" className="m-auto"/></div>
                <div className="text-center m-auto font-open text-[18px] text-gray_alter px-4 whitespace-pre-line">
                    { typeof children == 'string' && (
                        parse(children)
                    )}
                    { typeof children != 'string' && (
                        children
                    )}
                </div>
                {/* <div className="flex items-center justify-center w-full mx-auto">
                    <div className="w-[115px]">
                        <BtnBlue text={btn_confirm} click={close} />
                    </div>
                </div> */}
            </Modal>
        </>
    )
}

export default SuccessModal;