import { useState } from "react";
import Avatar from "../column2/avatar";
import Border from "../items/border";
import Calendar from "../modal/btns/calendar";
import Delete from "../modal/btns/delete";
import EditDocument from "../modal/btns/editDocument";
import parse from 'html-react-parser';

const Publish = ( { info, edit = () => {}, deleteAction = () => {}, loadParent = () => {}, calendarAction = () => {} } ) => {
    const urlImage = process.env.IMAGE_URL;
    const [ showFull, setShowFull ] = useState(false);
    const maxCharacters = 400;
    const characteres = info.description.length;

    const showMore = e => {
        setShowFull(true);
        loadParent(info.id);
    }

    return <div className={"card bg-white rounded-md overflow-hidden relative w-[100%] min-h-[150px] " + (info.autor ? 'pr-[52px]' : '')}>
        { info.autor && (
            <div className="md:flex absolute bg-form-btns text-white right-0 top-0 h-full hidden items-start justify-center w-[52px]">
                <div className="flex h-fit gap-y-6 flex-wrap max-h-[250px] items-start pt-[18px]">
                    <EditDocument action={()=> {edit(info.id)}} showLabel={false} colors="w-full" />
                    <Delete action={() => {deleteAction(info.id)}} showLabel={false} color="w-full" />
                    {/*{ info.id_event && 
                        <Calendar action={() => { calendarAction(info.id_event); }} title="Evento de calendario"/>
                    } */}
                </div>
            </div>
        )}
        { info.image && (
            <div className="image w-full max-h-[490px] min-h-[380px] bg-contain overflow-hidden flex items-center justify-center flex-wrap">
                <img src={urlImage + info.image} className="w-full bg-btn-image" />
            </div>
        )}
        <div className="user px-6 py-4 flex justify-between items-center">
            <div className="flex w-full items-center justify-start">
                <div className="mr-3"><Avatar user={{name: info.name, lastname: info.lastname, image: info.image_user}} size="61px" /></div>
                <div className="text-left">
                    <div className="text-libellum-title text-lg font-bold">{info.name} {info.lastname}</div>
                    <div className="text-body-chat text-sm">{info.rol}</div>
                </div>
            </div>
        </div>
        <Border />
        <div className="content px-6 py-4 relative">
            <h2 className="text-[20px] font-bold text-libellum-text-gray">{info.titulo}</h2>
            <div className={((showFull) ? '' : 'line-clamp-3') + ` text-libellum-text-gray text-base"`}>{parse(info.description)}</div>
            { maxCharacters < characteres && !showFull && (
                <div className="flex items-center justify-end w-full pt-2"><span className="text-base text-btn-image cursor-pointer" onClick={showMore}>Ver más</span></div>
            )}
        </div>
    </div>
}
export default Publish;