import { getListApi, searchPostal } from "@/components/useForm";
import { useEffect, useRef, useState } from "react";
import InputAgenda from "../inputAgenda";
import DeleteItem from "./btns/deleteItem";

const InputAddress = ({ tag, placeholder, hasTags, name, getTags, tags, addItem, total, text, position, value, openModal = () => {} }) => {
    const inputStreet = useRef(null);
    const [ editable, setEditable ] = useState(false);
    const [ tagSelected, setTagSelected ] = useState(tag);
    const [ tagId, setTagId ] = useState('')
    const inputExterior = useRef(null);
    const inputInterior = useRef(null);
    const inputTower = useRef(null);
    const inputFloor = useRef(null);
    const inputPostaCode = useRef(null);
    const inputSuburb = useRef(null);
    const inputTown = useRef(null);
    const inputCity = useRef(null);
    const inputState = useRef(null);
    const [ height, setHeight ] = useState('h-12');
    const [ addressVisible, setAddressVisible ] = useState(placeholder);
    const [ idAddress, setIdAddress ] = useState(0);
    const [ visible, setVisible ] = useState(true);

    const changeEditable = () => {
        setEditable(true);
        setHeight('h-24')
        getTags();
        if(position == total){
            addItem();
        }
        setTimeout(() => {
            if(!Number.isInteger(value) && typeof value === 'object'){
                inputStreet.current.value = value.street || '';
                inputExterior.current.value = value.num_ext || '';
                inputInterior.current.value = value.num_int || '';
                inputTower.current.value = value.tower || '';
                inputFloor.current.value = value.floor || '';
                inputPostaCode.current.value = value.postal_code || '';
                inputSuburb.current.value = value.colonia || '';
                inputTown.current.value = value.municipio || '';
                inputCity.current.value = value.city || '';
                inputState.current.value = value.estado || '';
                setIdAddress(value.id);
            } else {
                setIdAddress(0)
            }
            inputStreet.current.focus();
        }, 400);
    }

    const verifyTags = () => {
        getTags();
    }

    const setTag = (id, name) => {
        setTagSelected(name);
        setTagId(id||'');
    }

    useEffect(() => {
        setEditable(false);
        if(!Number.isInteger(value) && typeof value === 'object'){
            setTagId(value.id_tag||'');
            let keys = Object.keys(value);
            let v = keys.map(element => {if(element != 'id' && element != 'id_tag' && element != 'tag'){ return element; }});
            let text = '', sep='';
            v.forEach(a => {
                if(a && value[a]){
                    text += `${sep}${value[a]}`;
                    sep = ', ';
                }
            })
            setAddressVisible(`${text}`);
            if(value.tag){
                setTagSelected(value.tag)
            }
        } else {
            setAddressVisible(`${placeholder}`);
            setTagId('')
            setTagSelected(tag)
        }
    }, [ value, placeholder, tag ])

    const searchPostalLocal = e => {
        searchPostal(e, loadResults)
    }

    const loadResults = (results) => {
        if(results.length){
            results.map(r => {
                inputState.current.value = r.estado;
                inputCity.current.value = r.ciudad;
                inputTown.current.value = r.municipio
                inputSuburb.current.value = r.suburb;
            });
        }
    }

    return (
        <>
            { visible && (
                <InputAgenda tag={tagSelected} hasTags={hasTags} tags={tags} clickTag={verifyTags} changeTag={setTag} height={height} openModal={openModal}>
                    <input type="hidden" name="address_tag[]" value={tagId} />
                    { editable && (
                        <div className="flex flex-wrap gap-y-4 w-full py-4 sm:py-0 reative">
                            { position < total && (
                                <div className="absolute right-1"><DeleteItem action={()=>{setVisible(false)}} /></div>
                            )}
                            <input className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none w-[200px] dark:bg-icon-dark dark:text-white dark:placeholder:text-white" name={`${name}_street[]`} placeholder={text.street} type="text" ref={inputStreet} />
                            <input className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none w-[80px] dark:bg-icon-dark dark:text-white dark:placeholder:text-white" name={`${name}_ext[]`} placeholder={text.ext} type="text" ref={inputExterior} />
                            <input className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none w-[80px] dark:bg-icon-dark dark:text-white dark:placeholder:text-white" name={`${name}_int[]`} placeholder={text.int} type="text" ref={inputInterior} />
                            <input className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none w-[100px] dark:bg-icon-dark dark:text-white dark:placeholder:text-white" name={`${name}_tower[]`} placeholder={text.tower} type="text" ref={inputTower} />
                            <input className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none w-[100px] dark:bg-icon-dark dark:text-white dark:placeholder:text-white" name={`${name}_floor[]`} placeholder={text.floor} type="text" ref={inputFloor} />
                            <input className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none w-[120px] dark:bg-icon-dark dark:text-white dark:placeholder:text-white" name={`${name}_postalcode[]`} placeholder={text.postalcode} type="text" ref={inputPostaCode} id={`input-${name}-${position}`} onBlur={e => {searchPostalLocal(e, position, name)}}/>
                            <input className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none w-[200px] dark:bg-icon-dark dark:text-white dark:placeholder:text-white" name={`${name}_suburb[]`} placeholder={text.suburb} type="text" ref={inputSuburb} />
                            <input className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none w-[200px] dark:bg-icon-dark dark:text-white dark:placeholder:text-white" name={`${name}_town[]`} placeholder={text.town} type="text" ref={inputTown} />
                            <input className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none w-[200px] dark:bg-icon-dark dark:text-white dark:placeholder:text-white" name={`${name}_city[]`} placeholder={text.city} type="text" ref={inputCity} />
                            <input className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none w-[200px] dark:bg-icon-dark dark:text-white dark:placeholder:text-white" name={`${name}_state[]`} placeholder={text.state} type="text" ref={inputState} />
                            <input type="hidden" name={`${name}_id[]`} value={idAddress} />
                        </div>
                    )}
                    { !editable && (
                        <span className="font-open text-sm text-gray_alter cursor-pointer sm:py-0 py-2" onClick={changeEditable}>{addressVisible}</span>
                    )}
                </InputAgenda>
            )}

            { !visible && (
                <input type="hidden" name={`${name}_id_del[]`} value={idAddress} />
            )}
        </>
    )
}
const Address = ({ tag, placeholder, hasTags, prefix, system, name, text, multiple, items = [], text_tags, openModal = (tags) => {} }) => {
    const [ tags, setTags ] = useState([]);
    const [ count, setCount ] = useState(1);
    const [ itemsAddress, setItemsAddress ] = useState(items)
    const [ tagText] = useState(text_tags)

    const getTags = () => {
        if(tags.length === 0){
            getListApi(`${prefix}/tags/address/`, setTags, system);
        }
    }

    const addItem = () => {
        if(multiple){
            let ia = itemsAddress;
            let nextItem = count+1;
            ia.push(0);
            setCount(nextItem);
            setItemsAddress(ia);
        }
    }

    useEffect(() => {
        if(items){
            setItemsAddress(items)
        }
    }, [ items, items.length ]);

    return (
        <>
            { itemsAddress && itemsAddress.map((i, index) => {
                return <InputAddress key={index} tag={tag} placeholder={placeholder} hasTags={hasTags} name={name} getTags={getTags} tags={tags} addItem={addItem} text={text} position={index} value={i} total={count-1} openModal={() => {openModal(tagText)}} />
            }) }
        </>
    )
}

export default Address;