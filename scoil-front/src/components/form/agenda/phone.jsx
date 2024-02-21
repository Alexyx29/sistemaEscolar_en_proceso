import { getListApi, validateNumbers } from "@/components/useForm";
import { useEffect, useRef, useState } from "react";
import InputAgenda from "../inputAgenda";
import DeleteItem from "./btns/deleteItem";
import { formatPhoneAgenda } from "@/components/useFormats";

const InputPhone = ({ tag, placeholder, hasTags, name, text, getTags, tags, addItem, modalLadas, lada, position, value, total, openModal= () =>{}, formatPhone = '' }) => {
    const inputLada = useRef(null);
    const [ editable, setEditable ] = useState(false);
    const [ tagSelected, setTagSelected ] = useState(tag);
    const [ tagId, setTagId ] = useState('')
    const inputPhone = useRef(null);
    const inputExt = useRef(null);
    const [ phoneVisible, setPhoneVisible ]  = useState(placeholder);
    const [ idPhone, setIdPhone ] = useState(0);
    const [ visible, setVisible ] = useState(true);
    
    const changeEditable = () => {
        setEditable(true);
        getTags();
        if(position === total){
            addItem();
        }
        setTimeout(() => {
            if(!Number.isInteger(value)){
                inputLada.current.value = value.lada || '';
                inputPhone.current.value = value.phone || '';
                inputExt.current.value = value.extension || '';
                setIdPhone(value.id);
            } else {
                if(lada){
                    inputLada.current.value = lada;
                }
                setIdPhone(0)
            }
            inputPhone.current.focus();
        }, 400);
    }

    const verifyTags = () => {
        getTags();
    }

    const setTag = (id, name) => {
        setTagSelected(name);
        setTagId(id);
    }

    const validateData = (input, size) => {
        if(input.current.value.length > size){
            input.current.value = input.current.value.substr(0, size);
        }
    }

    const verifyPhone = (n, p) => {
        validateData(inputPhone, 20);
        validateNumbers(`input-${n}-${p}`);
    }

    const verifyExt = (n, p) => {
        validateData(inputExt, 6);
        validateNumbers(`input-ext-${n}-${p}`);
    }

    const showLadas = () => {
        modalLadas(inputLada.current);
    }

    useEffect(() => {
        setEditable(false);
        if(!Number.isInteger(value)){
            let fp = formatPhoneAgenda(value.phone.toString(), parseInt(formatPhone), value.lada, value.extension);
            setPhoneVisible(fp)
            setTagId(value.id_tag||0);
            if(value.tag){
                setTagSelected(value.tag)
            }
        } else {
            setPhoneVisible(`${placeholder}`);
            setTagId('');
            setTagSelected(tag)
        }
    }, [value, placeholder, tag]);

    return (
        <>
            { visible && (
                <InputAgenda tag={tagSelected} hasTags={hasTags} tags={tags} clickTag={verifyTags} changeTag={setTag} openModal={openModal}>
                    <input type="hidden" name="phone_tag[]" value={tagId} />
                    { editable && (
                        <div className="w-full py-4 sm:py-0 relative">
                            { position < total && (
                                <div className="absolute right-1"><DeleteItem action={()=>{setVisible(false)}} /></div>
                            )}
                            <input readOnly={true} className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none min-w-[48px] dark:bg-icon-dark dark:text-white dark:placeholder:text-white" name={`${name}_country[]`} placeholder={text.country} type="text" size={4} ref={inputLada} />
                            <input className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none min-w-[165px] dark:bg-icon-dark dark:text-white dark:placeholder:text-white" name={`${name}_phone[]`} placeholder={text.phone} type="text" size={20} ref={inputPhone} onChange={()=>{verifyPhone(name, position)}} id={`input-${name}-${position}`} />
                            <input className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none min-w-[70px] dark:bg-icon-dark dark:text-white dark:placeholder:text-white" name={`${name}_ext[]`} placeholder={text.ext} type="text" size={7} ref={inputExt} onChange={() => {verifyExt(name, position)}} id={`input-ext-${name}-${position}`} />
                            <input type="hidden" name={`${name}_id[]`} value={idPhone} />
                        </div>
                    )}
                    { !editable && (
                        <span className="font-open text-sm text-gray_alter sm:py-0 py-2" onClick={changeEditable}>{phoneVisible}</span>
                    )}
                </InputAgenda>
            )}
            { !visible && (
                <input type="hidden" name={`${name}_id_del[]`} value={idPhone} />
            )}
        </>
    )
}

const Phone = ({ tag, placeholder, hasTags, prefix, system, name, text, multiple, items, modalLadas, actualLada, text_tags, openModal = () => {}, formatPhone = '' }) => {
    const [ tags, setTags ] = useState([]);
    const [ count, setCount ] = useState(1);
    const [ itemsPhone, setItemsPhone ] = useState([]);
    const [ lada, setLada ] = useState(actualLada);
    const [ tagText] = useState(text_tags)
    
    useEffect(() => {setLada(actualLada)}, [actualLada]);
    const getTags = () => {
        getListApi(`${prefix}/tags/phone/`, setTags, system);
    }

    const addItem = () => {
        if(multiple){
            let ip = itemsPhone;
            let nextItem = count+1;
            ip.push(0);
            setCount(nextItem);
            setItemsPhone(ip);
        }
    }

    useEffect(() => {
        if(items){
            setCount(items.length);
            setItemsPhone(items);
        }
    }, [items]);

    return (
        <>
            { itemsPhone.map((i, index) => {
                return <InputPhone key={index} tag={tag} placeholder={placeholder} hasTags={hasTags} name={name} text={text} getTags={getTags} tags={tags} addItem={addItem} modalLadas={modalLadas} lada={lada} position={index} value={i} total={count-1} openModal={() => {openModal(tagText)}} formatPhone={formatPhone} />
            }) }
        </>
    )
}

export default Phone;