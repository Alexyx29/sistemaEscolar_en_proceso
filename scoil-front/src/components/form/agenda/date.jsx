import { getListApi } from "@/components/useForm";
import { useEffect, useRef, useState } from "react";
import InputAgenda from "../inputAgenda";
import DeleteItem from "./btns/deleteItem";


const InputDate = ({ tag, placeholder, hasTags, name, getTags, tags, addItem, value, type, position, total, openModal = () => {}, maxDate = '' }) => {
    const inputDate = useRef(null);
    const [ editable, setEditable ] = useState(false);
    const [ tagSelected, setTagSelected ] = useState(tag);
    const [ tagId, setTagId ] = useState('');
    const [ dateShow, setDateShow ] = useState(placeholder);
    const [ idDate, setIdDate ] = useState(0);
    const [ visible, setVisible ] = useState(true);

    const changeEditable = () => {
        setEditable(true);
        getTags();
        if(position === total){
            addItem();
        }
        setTimeout(() => {
            if(!Number.isInteger(value)){
                if(typeof value === 'string'){
                    inputDate.current.value = value;
                    setIdDate(0)
                } else if(typeof value === 'object'){
                    let keys = Object.keys(value);
                    let v = keys.find(element => element != 'id' && element != 'id_tag' && element != 'tag');
                    inputDate.current.value = `${value[v]}`;
                    setIdDate(value.id)
                }
            }
        }, 400);
    }
    
    const verifyTags = () => {getTags();}

    const setTag = (id, name) => {
        setTagSelected(name);
        setTagId(id);
    }

    useEffect(() => {
        setEditable(false);
        if(!Number.isInteger(value)){
            if(typeof value === 'string'){
                setTagId('');
                setDateShow(`${value}`)
            } else if(typeof value === 'object'){
                setTagId(value.id_tag);
                let keys = Object.keys(value);
                let v = keys.find(element => element != 'id' && element != 'id_tag' && element != 'tag');
                setDateShow(`${value[v]}`);
                if(value.tag){
                    setTagSelected(value.tag)
                }
            }
        } else {
            setDateShow(`${placeholder}`);
            setTagId('')
            setTagSelected(tag)
        }
        if(value){
            setDateShow(value);
        } else {
            setDateShow(placeholder);
            setTagId('');
        }
    }, [value, placeholder, tag]);
    
    return (
        <>
            { visible && (
                <InputAgenda tag={tagSelected} hasTags={hasTags} tags={tags} clickTag={verifyTags} changeTag={setTag} openModal={openModal}>
                    <input type="hidden" name={`${name}_tag[]`} value={tagId} />
                    { editable && (
                        <div className="relative w-full py-4 sm:py-0 max-w-[170px]">
                            { position < total && (
                                <div className="absolute right-[-20px]"><DeleteItem action={()=>{setVisible(false)}} /></div>
                            )}
                            <input name={`${name}_text[]`} type="text" autoComplete="off" className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none w-full dark:bg-icon-dark dark:text-white dark:placeholder:text-white" readOnly={true} value={dateShow || placeholder} />
                            <input name={`${name}[]`} type={type} autoComplete="off" className="absolute overflow-hidden z-10 w-5 h-8 top-[-4px] right-2 focus:outline-none" onChange={(e) => {setDateShow(e.target.value)}} id={`input-${name}-${position}`} ref={inputDate} {...((maxDate) ? {max: maxDate} : {})} />
                            <input type="hidden" name={`${name}_id[]`} value={idDate} />
                        </div>
                    )}
                    { !editable && (
                        <span className="font-open text-sm text-gray_alter cursor-pointer sm:py-0 py-2" onClick={changeEditable}>{dateShow}</span>
                    )}
                </InputAgenda>
            )}
            { !visible && (
                <input type="hidden" name={`${name}_id_del[]`} value={idDate} />
            )}
        </>
    )
}

const Date = ({ tag, placeholder, hasTags, prefix, system, name, text, multiple, items, type, text_tags, openModal = () => {}, maxDate = '' }) => {
    const [ tags, setTags ] = useState([]);
    const [ count, setCount ] = useState(1);
    const [ itemsDate, setItemsDate ] = useState(items);
    const [ tagText] = useState(text_tags)

    const getTags = () => {
        if(tags.length === 0 && text_tags != '' && text_tags != undefined){
            getListApi(`${prefix}/tags/${text_tags}/`, setTags, system);
        }
    }

    useEffect(() => {if(items){setItemsDate(items)}}, [ items ])

    const addItem = () => {
        if(multiple){
            let id = itemsDate;
            let nextItem = count+1;
            id.push(0);
            setCount(nextItem);
            setItemsDate(id);
        }
    }

    return (
        <>
            { Array.isArray(itemsDate) && itemsDate.map((i, index) => {
                return <InputDate key={index} tag={tag} placeholder={placeholder} hasTags={hasTags} name={name} getTags={getTags} tags={tags} addItem={addItem} text={text} type={type} value={i} position={index} total={count} openModal={() => {openModal(tagText)}} maxDate={maxDate} />
            }) }

            { !Array.isArray(itemsDate) && (
                <InputDate tag={tag} placeholder={placeholder} hasTags={hasTags} name={name} getTags={getTags} tags={tags} addItem={addItem} text={text} type={type} value={itemsDate} position={0} total={count} openModal={() => {openModal(tagText)}} maxDate={maxDate} />
            ) }
        </>
    )
}
export default Date;