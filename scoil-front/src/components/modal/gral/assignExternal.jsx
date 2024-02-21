import Modal from "@/layout/modal";
import { useEffect, useState } from "react";
import Save from "../btns/save";
import { getTextApi } from "@/components/useForm";
import Search from "@/components/items/search";
import UserIcon from "@/components/items/users/userIcon";

const AssignExternal = ( {idModal = '', afterClose = () => {}, openModal, prefix, system, idItem } ) => {
    const [ text, setText ] = useState({title: 'Roles', search: 'Buscar'});
    const [ save, setSave ] = useState(false);
    const [ selected, setSelected ] = useState([]);
    const [ items, setItems ] = useState([])

    const options = <>
        <Save action={()=>{}} send={save} />
    </>;

    useEffect(() => {
        if(openModal){
            if(system){
                getTextApi(`${prefix}/get-modal/`, r => {
                    setText(r.text);
                    setSelected(r.selected);
                    setItems(r.items);
                }, system, err => {

                });
            }
        } else{
            setSelected([]);
            setItems([]);
        }
    }, [ openModal ]);

    const filterData = e => {

    }

    const addCheck = ()=>{}

    return (
        <Modal id={`modalItems${idModal}`} title={text.title} size="400px" options={options} afterClose={()=>{afterClose();}}>
            <div className="max-h-[100px] overflow-auto w-full">

            </div>
            <div className="flex items-center justify-center my-4 pr-10">
                <Search search={text.search} padding="py-2" evtSearch={filterData} />
            </div>
            <div className="max-h-[100px] overflow-auto w-full">
                { items.map((item, index) => {
                    return <UserIcon key={index} id={`unselected-${idItem}`} value={item.id} checked={false} index={index} removeChecks={addCheck} />
                })}
            </div>
        </Modal>
    )
}

export default AssignExternal;