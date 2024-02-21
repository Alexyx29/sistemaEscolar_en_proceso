import { failResponse, getItemApi, getTextApi, hideModal, setItemApi } from "@/components/useForm";
import { useEffect, useRef, useState } from "react";
import Save from "../btns/save";
import Cancel from "../btns/cancel";
import Modal from "@/layout/modal";
import Input from "@/components/form/input";
import Status from "@/components/form/status";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Search from "@/components/items/search";

const AbmItemsElement = ({ errors = {}, onCheckItemCb = () => {}, openModal, prefix, system, typeItems, setItemsParent = () => { }, idModal, afterClose = () => { }, addItem = true, showEdit = true, showList = true, isRemove = true, data = {} }) => {
    const [error, setError] = useState(errors);
    const form = useRef(null);
    const [sendForm, setSendForm] = useState(false);
    const [items, setItems] = useState([]);
    const [idEdit, setIdEdit] = useState(0);
    const [text, setText] = useState({});
    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
        if (openModal) {
            if (isRemove) {
                getTextApi(`${prefix}/get-modal/${typeItems}/`, r => {
                    setText(r.text);
                    setItems(r.items);
                    setAllItems(r.items);
                }, system, err => {

                });
            } else {
                setText(data.text);
                setItems(data.items);
                setAllItems(data.items);
            }
        } else {
            setItems([]);
            setIdEdit(0);
            setSendForm(false)
        }

    }, [openModal]);

    const updateType = (checked, value) => {
        onCheckItemCb({
            checked,
            value
        });
    }

    const save = (e) => {
        if (addItem) {
            let name = document.getElementById(`m_type_${idModal}`);
            if (name && name.value) {
                setSendForm(true);
                setError(errors);
                let f = new FormData(form.current);
                f.append('systemUid', system);
                f.append('id', idEdit);
                setItemApi(`${prefix}/add/${typeItems}`, f, (r) => {
                    if (showList) {
                        setItems(r);
                    }
                    let p = r.filter(i => i.active);
                    setItemsParent(p);
                    setSendForm(false);
                    form.current.reset();
                    setIdEdit(0)
                }, failResponse);
            } else {
                setError({ name: text.error });
            }
        } else {
            afterClose();
            hideModal(`modalItems${idModal}`);
        }
    }

    const cancel = () => {
        setIdEdit(0);
        let input = document.getElementById(`m_type_${idModal}`);
        if (input) {
            input.value = '';
        }
    }

    const options = <>
        <Save action={save} send={sendForm} />
        {idEdit > 0 && (
            <Cancel action={cancel} send={false} />
        )}
    </>;

    const edit = (id, name) => {
        setIdEdit(id);
        let input = document.getElementById(`m_type_${idModal}`);
        if (input) {
            input.value = name;
        }
    }

    const filterData = (e) => {
        let value = e.target.value;
        if (value) {
            let results = allItems.filter(s => s.name ? s.name.toLowerCase().includes(value) : 0);
            setItems(results);
        } else {
            setItems(allItems);
        }
    }

    return (
        <>
            {items.length > 0 && (
                <div className="overflow-auto min-h-min max-h-[calc(100vh-290px)] pt-5 text-left">
                    {items.map((t, index) => {
                        return (
                            <div key={index} className="pb-2 flex justify-between items-center max-w-[250px]">
                                <div className="max-w-[225px] overflow-hidden text-ellipsis whitespace-nowrap">
                                    <Status label_active={t.name} status_parent={t.active} label_inactive={t.name} id={`types_${t.id}`} value={t.id} showPadding={false} change={updateType} />
                                </div>
                                {showEdit && (
                                    <span className="text-sm cursor-pointer" onClick={() => { edit(t.id, t.name) }} >
                                        <FontAwesomeIcon icon={faEdit} className="text-btn-image" />
                                    </span>
                                )}
                            </div>
                        )
                    })}
                </div>
            )}
        </>
    )
}

export default AbmItemsElement;