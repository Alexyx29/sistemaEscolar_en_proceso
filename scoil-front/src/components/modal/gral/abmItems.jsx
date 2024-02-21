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
import Avatar from "@/components/column2/avatar";
import UserSwitch from "@/components/items/users/userSwitch";
import Loading from "@/components/loading";

const AbmItems = ( { errors = {}, openModal, prefix, system, typeItems, setItemsParent = () => {}, idModal, afterClose = () => {}, showSearch = true, addItem = true, showEdit = true, showList = true, isRemove = true, data = {}, size="400px", addAll = false, showAll = false, generate = false } ) => {
    const [ error, setError ] = useState(errors);
    const form = useRef(null);
    const [ sendForm, setSendForm ] = useState(false);
    const [ items, setItems ] = useState([]);
    const [ idEdit, setIdEdit ] = useState(0);
    const [ text, setText ] = useState({});
    const [ allItems, setAllItems ] = useState([]);
    const [ load, setLoad ] = useState(true);
    const [ filtro, setFiltro ] = useState(null)
    
    useEffect(() => {
        if(openModal){
            if(isRemove){
                if(generate){
                    
                    getTextApi(`${prefix}/generate/`, res => {
                        getTextApi(`${prefix}/get-modal/${typeItems}/`, r => {
                            setText(r.text);
                            setItems(r.items);
                            setAllItems(r.items);
                            setLoad(false)
                        }, system, err => {
                            setLoad(false)
                        });
                    }, system, err => {})
                } else {
                    getTextApi(`${prefix}/get-modal/${typeItems}/`, r => {
                        setText(r.text);
                        setItems(r.items);
                        setAllItems(r.items);
                        setLoad(false)
                    }, system, err => {
                        setText({title: 'Materias', search: 'Buscar'});
                        setItems([{id:1, name: 'Matemáticas', active: true}, {id: 2, name: 'Historia', active: false}]);
                        setAllItems([{id:1, name: 'Matemáticas', active: true}, {id: 2, name: 'Historia', active: false}]);
                        setLoad(false);

                    });
                }
            } else {
                setText(data.text);
                setItems(data.items);
                setAllItems(data.items);
                setLoad(false)
            }      
        } else {
            setItems([]);
            setIdEdit(0);
            setSendForm(false)
            setLoad(true)
        }

    }, [ openModal ]);

    const updateType = (checked, value) => {
        if(isRemove){
            getItemApi(`${prefix}/update/${typeItems}/${checked}/`, value, (r) => {
                if(filtro){
                    let results = r.filter(s => s.name ? s.name.toLowerCase().includes(filtro) : 0);
                    setItems(results);
                } else {
                    setItems(r);
                }
                let p = r.filter(i => i.active);
                setItemsParent(p);
            }, system);
        } else {
            let i = allItems.find( ai => ai.id == value)
            let k = allItems.findIndex(ai => ai.id == value);
            i.active = checked
            allItems[k] = i;
            if(filtro){
                let results = allItems.filter(s => s.name ? s.name.toLowerCase().includes(filtro) : 0);
                setItems(results);
            }
            // setItems(allItems);
            setAllItems(allItems)
            if(addAll){
                setItemsParent(allItems);
            } else {
                let p = allItems.filter(i => i.active);
                setItemsParent(p);
            }
        }
    }

    const save = (e) => {
        if(addItem){
            let name = document.getElementById(`m_type_${idModal}`);
            if(name && name.value){
                setSendForm(true);
                setError(errors);
                let f = new FormData(form.current);
                f.append('systemUid', system);
                f.append('id', idEdit);
                setItemApi(`${prefix}/add/${typeItems}`, f, (r) => {
                    if(showList){
                        setItems(r);
                    }
                    let p = r.filter(i => i.active);
                    setItemsParent(p);
                    setSendForm(false);
                    form.current.reset();
                    setIdEdit(0)
                }, failResponse);
            } else {
                setError({name: text.error});
            }
        } else {
            afterClose();
            hideModal(`modalItems${idModal}`);
        }
    }

    const cancel = () => {
        setIdEdit(0);
        let input = document.getElementById(`m_type_${idModal}`);
        if(input){
            input.value = '';
        }
    }

    const options = <>
        <Save action={save} send={sendForm} />
        { idEdit > 0 && (
            <Cancel action={cancel} send={false} />
        )}
    </>;

    const edit = (id, name) => {
        setIdEdit(id);
        let input = document.getElementById(`m_type_${idModal}`);
        if(input){
            input.value = name;
        }
    }

    const filterData = (e) => {
        let value = e.target.value;
        if(value){
            const v = value.toLowerCase();
            setFiltro(v)
            let results = allItems.filter(s => s.name ? s.name.toLowerCase().includes(v) : 0);
            setItems(results);
        } else {
            setItems(allItems);
            setFiltro(null)
        }
    }

    const updateTypeAll = (checked, value) => {
        if(isRemove){
            getItemApi(`${prefix}/update-all/${typeItems}/${checked}/`, value, (r) => {
                setItems(r);
                let p = r.filter(i => i.active);
                setItemsParent(p);
            }, system);
        } else {
            let i = allItems.find( ai => ai.id == value)
            let k = allItems.findIndex(ai => ai.id == value);
            i.active = checked
            allItems[k] = i;
            setItems(allItems);
            setAllItems(allItems)
            if(addAll){
                setItemsParent(allItems);
            } else {
                let p = allItems.filter(i => i.active);
                setItemsParent(p);
            }
        }
    }

    return (
        <Modal id={`modalItems${idModal}`} title={text.title} size={size} options={options} afterClose={()=>{setIdEdit(0);afterClose();}} padding = "pl-[44px] pr-[62px] pb-5">
            <Loading loading={load}>
                <>
                    { addItem && (
                        <form className="flex lg:gap-y-3 gap-y-1 gap-x-5 text-left pr-10 mb-6" onSubmit={(e)=>{e.preventDefault();}} ref={form}>
                            <Input label={text.label} hiddenMargin={true} id={`m_type_${idModal}`} name="name" type='text' placeholder="" error={error.name} />
                        </form>
                    )}
                    { !addItem && (
                        <div className="mb-6"></div>
                    )}
                    { showSearch && (
                        <div className="flex items-center justify-center my-4 pr-10">
                            <Search search={text.search} padding="py-[8px]" evtSearch={filterData}/>
                        </div>
                    )}
                    { showAll && (
                        <div className="overflow-auto min-h-min max-h-[calc(100vh-290px)] pt-2 text-left">
                            <div className="pb-2 flex justify-between items-center max-w-[90%]">
                                <div className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                                    <Status label_active={'Todos'} status_parent={items.every(i => i.active)} label_inactive={'Todos'} id={`all_${idModal}`} value={-1} showPadding={false} change={updateTypeAll} />
                                </div>
                            </div>
                        </div>
                    )}
                    { items.length > 0 && (
                        <div className="overflow-auto min-h-min max-h-[calc(100vh-290px)] pt-2 text-left">
                            { items.map((t, index) => {
                                return (
                                    <div key={index} className="pb-2 flex justify-between items-center max-w-[90%]">
                                        { t.hasOwnProperty('image') && (
                                            <UserSwitch id={`types_${idModal}_${t.id}`} value={t.id} checked={t.active} updateType={updateType} image={t.image} name={t.name} lastname={t.lastname} job={t.rol} mb="mb-4" />
                                        )}
                                        { !t.hasOwnProperty('image') && (
                                            <div className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                                                <Status label_active={t.name} status_parent={t.active} label_inactive={t.name} id={`types_${idModal}_${t.id}`} value={t.id} showPadding={false} change={updateType} />
                                            </div>
                                        )}
                                        {showEdit && (
                                            <span className="text-sm cursor-pointer" onClick={()=>{edit(t.id, t.name)}} >
                                                <FontAwesomeIcon icon={faEdit} className="text-btn-image" />
                                            </span>
                                        )}
                                    </div>
                                )
                            }) }
                        </div>
                    )}
                </>
            </Loading>
        </Modal>
    )
}

export default AbmItems;