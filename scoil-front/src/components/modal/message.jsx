//import Modal from "./layout";
import success from "@/assets/alerts/success.svg";
import err from "@/assets/alerts/err.svg";
import Button from "../form/button";
import Modal from "@/layout/modal";
/**
 * Modal de mensaje de éxito
 * @param {JSX.Element} children
 * @param {string} btn_confirm
 * @param {boolean} success_icon
 * @returns 
 */
const Message = ({ children, btn_confirm, success_icon, id, rounded='', showTitle }) => {
    /**
     * Cerrar el modal
     */
    const close = () => {
        let modal = document.getElementById(id);
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }

    return (
        <>
            <Modal id={id} title="" size="480px" padding = "pl-[44px] pr-[96px] py-5" rounded={rounded} showTitle={showTitle}>
                <div className="text-center"><img src={success_icon ? success.src : err.src} width="103px" className="m-auto"/></div>
                <div className="text-center m-auto font-open text-[18px] text-gray_alter mt-[18px] mb-[35px] whitespace-pre-line">
                    {children}
                </div>
                {/* <div className="flex w-full items-center justify-center mx-auto">
                    <div className="w-1/2 px-4">
                        <Button type="button" colors="bg-green-btn hover:bg-green-hover text-white w-full" send={false} txt_button={btn_confirm} click={close}/>
                    </div>
                </div> */}
            </Modal>
        </>
    )
}

export default Message;