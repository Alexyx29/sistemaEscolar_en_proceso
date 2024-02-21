import { getListApi } from "@/components/useForm";
import { useEffect, useRef, useState } from "react";
import InputAgenda from "../inputAgenda";
import DeleteItem from "./btns/deleteItem";
import { money } from "@/components/useFormats";


const InputText = ({ tag, placeholder, hasTags, name, getTags, tags, addItem, type, position, value, total, multiple = false, openModal = () => {}, isMoney = false, formatCurrency, change = () => {} }) => {
    const input = useRef(null);
    const [ editable, setEditable ] = useState(false);
    const [ tagSelected, setTagSelected ] = useState(tag);
    const [ tagId, setTagId ] = useState('')
    const [ textVisible, setTextVisible ]  = useState(placeholder);
    const [ idText, setIdText ] = useState(0);
    const [ valueAnt, setValueAnt ] = useState('');
    const [ visible, setVisible ] = useState(true);

    const changeEditable = () => {
        setEditable(true);
        if(position === total){
            addItem();
        }
        getTags();
        setTimeout(() => {
            let tmp
            if(!Number.isInteger(value)){
                if(typeof value === 'string'){
                    tmp = value.split(' ');
                    input.current.value = tmp[0];
                    setValueAnt(tmp[0]);
                    setIdText(0)
                } else if(typeof value === 'object'){
                    let keys = Object.keys(value);
                    let v = keys.find(element => element != 'id' && element != 'id_tag' && element != 'tag');
                    tmp = (value[v]) ? value[v].split(' ') : [''];
                    input.current.value = tmp[0];
                    setValueAnt(tmp[0]);
                    setIdText(value.id)
                }
            } else {
                setIdText(0)
                input.current.value = ''
                setValueAnt('');
            }
            input.current.focus();
        }, 100);
    }

    const verifyTags = () => {
        getTags();
    }

    const setTag = (id, name) => {
        setTagSelected(name);
        setTagId(id);
    }

    useEffect(() => {
        setEditable(false);
        if(!Number.isInteger(value)){
            if(typeof value === 'string'){
                setTagId('');
                if(value){
                    if(isMoney){
                        setTextVisible(money(`${formatCurrency.lang}-${formatCurrency.iso_country}`, formatCurrency.iso_moneda, value))
                    } else {
                        setTextVisible(`${value}`)
                    }
                } else {
                    setTextVisible(`${placeholder}`)
                }
            } else if(typeof value === 'object'){
                setTagId(value.id_tag);
                let keys = Object.keys(value);
                let v = keys.find(element => element != 'id' && element != 'id_tag' && element != 'tag');
                if(isMoney){
                    setTextVisible(money(`${formatCurrency.lang}-${formatCurrency.iso_country}`, formatCurrency.iso_moneda, value[v]))
                } else {
                    setTextVisible(`${value[v]}`);
                }
                if(value.tag){
                    setTagSelected(value.tag)
                }
            }
        } else {
            setTextVisible(`${placeholder}`);
            setTagId('')
            setTagSelected(tag)
        }
    }, [value, placeholder, tag]);

    const onlyNumbers = (e) => {
        if(isNaN(e.target.value)){
            input.current.value = valueAnt
        }

        change(input.current);
    }

    return (
        <>
            { visible && (
                <InputAgenda tag={tagSelected} hasTags={hasTags} tags={tags} clickTag={verifyTags} changeTag={setTag} openModal={openModal}>
                    <input type="hidden" name={`${name}_tag[]`} value={tagId} />
                    { editable && (
                        <div className="w-full sm:py-0 py-4 relative">
                            { position < total && multiple && (
                                <div className="absolute right-1"><DeleteItem action={()=>{setVisible(false)}} /></div>
                            )}
                            <input className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none w-full dark:bg-icon-dark dark:text-white dark:placeholder:text-white" name={`${name}[]`} type={type} placeholder={placeholder} ref={input} id={`input-${name}-${position}`} onChange={onlyNumbers}/>
                            <input type="hidden" name={`${name}_id[]`} value={idText} />
                        </div>
                    )}
                    { !editable && (
                        <span className="font-open text-sm text-gray_alter cursor-pointer sm:py-0 py-2" onClick={changeEditable}>{textVisible}</span>
                    )}
                </InputAgenda>
            )}
            { !visible && (
                <input type="hidden" name={`${name}_id_del[]`} value={idText} />
            )}
        </>
    )
}

const NumberInput = ({ tag, placeholder, hasTags, prefix, system, name, multiple, items, text_tags, type, openModal = (tags) => {}, isMoney = false, formatCurrency, change = () => {} }) => {
    const [ tags, setTags ] = useState([]);
    const [ count, setCount ] = useState(1);
    const [ itemsText, setItemsText ] = useState(items);
    const [ tagText, setTagText] = useState(text_tags)

    const getTags = () => {
        if(text_tags != '' && text_tags !== undefined){
            setTagText(text_tags);
            getListApi(`${prefix}/tags/${text_tags}/`, r => {
                setTags(r)
            }, system);
        }
    }

    const addItem = () => {
        if(multiple){
            let it = itemsText;
            let nextItem = count+1;
            it.push(0);
            setCount(nextItem);
            setItemsText(it);
        }
    }

    useEffect(() => {
        if(items){
            setCount(items.length);
            setItemsText(items);
        }
    }, [items]);

    return (
        <>
            { Array.isArray(itemsText) && itemsText.map((i, index) => {
                return <InputText key={index} tag={tag} placeholder={placeholder} hasTags={hasTags} name={name} getTags={getTags} tags={tags} addItem={addItem} type={type} position={index} value={i} total={count-1} multiple={multiple} openModal={() => {openModal(tagText)}} isMoney={isMoney} formatCurrency={formatCurrency} change={change}/>
            }) }

            { !Array.isArray(itemsText) && (
                <InputText tag={tag} placeholder={placeholder} hasTags={hasTags} name={name} getTags={getTags} tags={tags} addItem={addItem} type={type} position={0} value={itemsText} total={count-1} multiple={multiple} openModal={() => {openModal(tagText)}} isMoney={isMoney}  formatCurrency={formatCurrency} change={change}/>
            )}
        </>
    )
}

export default NumberInput;