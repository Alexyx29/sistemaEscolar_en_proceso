import Border from "@/components/items/border";
import Generic from "@/components/items/buttons/generic";
import { hideModal } from "@/components/useForm";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import circleArrow from "../assets/icons/circleArrow.svg"


const Modal = ({ id, title, size, options = <></>, children, afterClose = () => {}, overflowHidden = true, rounded='rounded-2xl', padding = "pl-[44px] pr-[96px] pt-4 pb-9", zIndex = 50, showTitle = true, minHeight = '150px', showOptions = true }) => {
    const close = () => {hideModal(id); afterClose();}
    return (
        <>
            <div id={id} tabIndex="-1" className={`hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 md:inset-0 h-full justify-center items-center bg-shadow-trans py-5`} style={{zIndex: zIndex}}>
                <div className={(overflowHidden ? 'overflow-hidden' : 'overflow-visible') + ` rounded-2xl xl:flex xl:items-stretch m-auto shadow-lg relative bg-white w-[95%] dark:bg-libellum-dark-v`} style={{maxWidth: size, minHeight: minHeight}}>
                    <div className="relative w-full pt-8 md:pt-0">
                        {showTitle && (
                            <>
                                <div className="pt-[27px] pl-[44px] pr-[62px] pb-4">
                                    <h3 className="text-left text-[26px] font-open text-libellum-title dark:text-white">{title}</h3>
                                </div>
                                <Border height="1px" />
                            </>
                        )}
                        
                        <div className="text-center">
                            <div className={padding}>
                                {children}
                            </div>
                        </div>
                    </div>
                    { showOptions && (
                        <>
                            <div className="md:flex absolute bg-form-btns text-white right-0 top-0 h-full hidden items-start justify-center w-[52px] rounded-tr-2xl rounded-br-2xl">
                                <div className="flex flex-col  h-fit gap-y-6 flex-wrap max-h-[250px] items-start pt-[18px]">
                                    <Generic action={close} icon={<FontAwesomeIcon icon={faCircleXmark} />} />
                                    {options}
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 flex items-center justify-between w-full px-4 py-3 text-white bg-form-btns md:hidden rounded-t-2xl">
                                <div className="flex items-center justify-center gap-x-6">
                                    {options}
                                </div>
                                <div>
                                    <Generic action={close} icon={<FontAwesomeIcon icon={faCircleXmark} className="text-[20px]" />} />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Modal;