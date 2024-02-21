import EditBtn from "@/components/modal/btns/edit";
import ImageBase from "../imageBase";
import { formateDateHourFunc } from "@/components/useFormats";
import Delete from "@/components/modal/btns/delete";

const Discusion = ( { discusion, dateFormat = 'DD/MM/AAAA', hourFormat = 0, editAction = () => {}, deleteProcess = false, deleteAction = () => {} } ) => {
    
    return (
        <div className="flex flex-wrap relative w-full mb-12 rounded-xl border border-agenda-borde p-8 min-h-[110px]">
            <div className="absolute top-[-22.5px] left-0">
                <div className="flex items-center justify-start">
                    <ImageBase image={discusion.image} name={discusion.name_user} lastname={discusion.lastname} />
                    <div className="ml-4 text-sm text-gray-mutted bg-white">
                        <span>{discusion.name_user} {discusion.lastname}</span>
                        <div className="w-full text-sm text-gray-mutted">{formateDateHourFunc(discusion.created_at, dateFormat, hourFormat) }</div>
                    </div>
                </div>
            </div>
            <div className="text-sm text-gray-mutted">{discusion.comentario}</div>
            { discusion.autor && (
                <div className="flex h-full gap-y-6 flex-wrap max-h-[250px] items-start justify-center pt-[18px] bg-form-btns text-white w-[52px] rounded-tr-2xl rounded-br-2xl right-0 top-0 absolute">
                    <div className="flex h-fit gap-y-6 flex-wrap max-h-[250px] items-start">
                        <EditBtn action={e => {editAction(discusion.comentario, discusion.id)}} />
                        <Delete send={deleteProcess} action={() => {deleteAction(discusion.id)}} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Discusion