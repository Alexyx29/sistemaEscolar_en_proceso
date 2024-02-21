import err from "@/assets/alerts/info.svg";
import Button from "../form/button";
import parse from 'html-react-parser';
import Modal from "@/layout/modal";
/**
 * Componente modal para confirmar la eliminación de un registro
 * @param {JSX.Element} JSX.Element
 * @param {string} btn_confirm
 * @param {string} btn_deny
 * @param {boolean} cancel
 * @param {function} delete_action
 * @returns 
 */
const ConfirmDelete = ({ children, btn_confirm, btn_deny, cancel, delete_action = () => {}, id = '', showBtns = true, afterClose = () => {} }) => {
    /**
     * Cerrar el modal
     */
    const close = () => {
        let modal = document.getElementById(`deleteModal${id}`);
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        afterClose();
    }
    /**
     * Procesa la función delete_action y cierra el modal
     */
    const processDelete = () => {
        delete_action();
        close();
    }

    return (
        <>
            <Modal id={`deleteModal${id}`} title="" size="480px" options={<></>} hiddenBtns={true} >
                <div className="mb-8 mt-6 text-center"><img src={err.src} width="103px" className="m-auto"/></div>
                <div className={` text-center m-auto font-open text-sm text-gray_alter`}>
                    { typeof children == 'string' && (
                        parse(children)
                    )}
                    { typeof children != 'string' && (
                        children
                    )}
                </div>
                { showBtns && (
                    <div className="flex items-center justify-between w-full mx-auto mt-9 mb-2">
                        <div className="w-1/2 px-4">
                            <Button type="button" colors="bg-red-btn hover:bg-red-hover text-white w-full" send={cancel} txt_button={btn_confirm} click={processDelete}/>
                        </div>
                        <div className="w-1/2 px-4">
                            <Button type="button" colors="bg-green-btn hover:bg-green-hover text-white w-full" send={false} txt_button={btn_deny} click={close}/>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    )
}

export default ConfirmDelete;