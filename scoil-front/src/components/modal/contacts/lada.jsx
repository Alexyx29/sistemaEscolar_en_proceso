import Search from "@/components/items/search";
import Modal from "@/layout/modal";


const LadaModal = ({ title, children, filterLadas = () => {} }) => {

    return (
        <>
            <Modal id="ladaModal" title={"title"} size="400px" options={<></>} padding = "pl-[44px] pr-[90px] pt-5 pb-6">
                <div className="text-center m-auto font-open text-[13px] text-gray_alter">
                    <div className="flex items-center justify-center mt-4 mb-2">
                        <Search search={"title"} evtSearch={"filterLadas"} />
                    </div>
                    {/* {children} */}
                </div>
            </Modal>
        </>
    )
}

export default LadaModal;