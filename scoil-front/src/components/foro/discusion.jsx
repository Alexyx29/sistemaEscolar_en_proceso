import EditBtn from "@/components/modal/btns/edit";
import ImageBase from "../items/imageBase";
// import ImageBase from "../imageBase";
// import { formateDateHourFunc } from "@/components/useFormats";
import { formateDateHourFunc } from "../modal/useFormats";
import Delete from "@/components/modal/btns/delete";

const Discusion = ( {image, discusion, dateFormat = 'DD/MM/AAAA', hourFormat = 0, editAction = () => {}, deleteProcess = false, deleteAction = () => {} } ) => {
    
    return (
        <div className="flex flex-wrap bg-[#ffffff] relative w-[100%] mb-12 rounded-xl border border-agenda-borde mt-[80px] p-10   min-h-[110px]">
            <div className="absolute top-[-35.5px] left-0">
                <div className="flex items-center justify-start ">
                    <ImageBase image={discusion.image} name={discusion.name_user} lastname={discusion.lastname} />
                    <div className="ml-4  mt-[-18.5px] ">
                        <span className="text-[#223955] text-[14px] font-bold" >{discusion.name_user} {discusion.lastname}</span>
                        <div className="w-full font-open font-semibold text-[14px] text-[#A2ACB7] ">{formateDateHourFunc(discusion.created_at, dateFormat, hourFormat) }</div>
                    </div>
                </div>
            </div>
            { !discusion.autor && (
            <div className="font-open text-[16px] text-[#62676D] text-justify ">{discusion.comentario}</div>
            )}
            { discusion.autor && (
            <div className="font-open text-[16px] text-[#62676D] text-justify mr-[40px]">{discusion.comentario}</div>
            )}
            { discusion.autor && (
                <div className="flex h-full gap-y-[10px] flex-wrap max-h-[250px] items-start justify-center pt-[15px] bg-form-btns text-white w-[52px] rounded-tr-2xl rounded-br-2xl right-0 top-0 absolute">
                    <div className="flex flex-col h-fit gap-y-[15px] flex-wrap max-h-[250px] items-start ">
                        <EditBtn action={e => {editAction(discusion.comentario, discusion.id)}} showLabel={false} />
                        <Delete title={null} send={deleteProcess} action={() => {deleteAction(discusion.id)}} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Discusion