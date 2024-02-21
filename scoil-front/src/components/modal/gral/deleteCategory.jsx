import Modal from "@/layout/modal";
import err from "@/assets/alerts/err.svg";
import Image from "next/image";
import parse from 'html-react-parser';

const DeleteCategoryModal = ({ children }) => {
    return (
        <Modal id="deleteCategoryModal" title="" size="480px" options={<></>} padding = "px-[62px] pb-9" hiddenBtns={true}>
            <div className="text-center mt-8 mb-4">
                <Image src={err.src} width={103} height={103} className="m-auto" alt="Warning"/>
            </div>
            <div className={` text-center m-auto font-open text-[18px] text-gray_alter`}>
                { typeof children == 'string' && (
                    parse(children)
                )}
                { typeof children != 'string' && (
                    children
                )}
            </div>
        </Modal>
    )
}

export default DeleteCategoryModal;