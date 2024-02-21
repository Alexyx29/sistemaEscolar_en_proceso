import { getListApi } from "@/components/useForm";
import { useEffect, useRef, useState } from "react";
import InputAgenda from "../inputAgenda";
import DeleteItem from "./btns/deleteItem";


const InputFile = ({ tag, placeholder, hasTags, name, getTags, tags, addItem, accept = "image/*,.pdf", position, value, total, change = ()=>{}, openModal = () => {}, multiple = false }) => {
    const input = useRef(null);
    const [ editable, setEditable ] = useState(false);
    const [ tagSelected, setTagSelected ] = useState(tag);
    const [ tagId, setTagId ] = useState('')
    const [ textVisible, setTextVisible ]  = useState(placeholder);
    const [ idText, setIdText ] = useState(0);
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
                    input.current.value = value;
                    setIdText(0)
                } else if(typeof value === 'object'){
                    let keys = Object.keys(value);
                    let v = keys.find(element => element != 'id' && element != 'id_tag' && element != 'tag');
                    input.current.value = value[v] || '';
                    setIdText(value.id)
                }
            } else {
                setIdText(0)
            }
            input.current.focus();
        }, 400);
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
        if(!Number.isInteger(value) && value != null){
            if(typeof value === 'string'){
                setTagId('');
                if(value){
                    setTextVisible(`${value}`)
                } else {
                    setTextVisible(`${placeholder}`)
                }
            } else if(typeof value === 'object'){
                setTagId(value.id_tag);
                let keys = Object.keys(value);
                let v = keys.find(element => element != 'id' && element != 'id_tag' && element != 'tag');
                setTextVisible(`${value[v]}`);
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

    const validateInput = (value) => {
        if(value.value){
            setTextVisible(value.files[0].name)
        } else {
            setTextVisible(placeholder);
        }
    }

    return (
        <>
            { visible && (
                <InputAgenda tag={tagSelected} hasTags={hasTags} tags={tags} clickTag={verifyTags} changeTag={setTag} openModal={openModal} id={`div-${name}-${position}`}>
                    <input type="hidden" name={`${name}_tag[]`} value={tagId} />
                    { editable && (
                        <div className="w-full sm:py-0 py-4 relative">
                            { position < total && multiple && (
                                <div className="absolute right-1"><DeleteItem action={()=>{setVisible(false)}} /></div>
                            )}
                            <input name={`${name}_text[]`} type="text" autoComplete="off" className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none w-full dark:bg-icon-dark dark:text-white dark:placeholder:text-white" readOnly={true} value={textVisible} />
                            <input className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none w-full opacity-0 absolute top-0 left-0" name={`${name}[]`} type='file' accept={accept} placeholder={placeholder} ref={input} id={`file-${name}-${position}`} onChange={(e)=>{validateInput(e.target)}} multiple ={multiple}/>
                            <input type="hidden" name={`${name}_file_id[]`} value={idText} />
                        </div>
                    )}
                    { !editable && (
                        <span className="font-open text-sm text-gray_alter cursor-pointer sm:py-0 py-2 info-visible" onClick={changeEditable}>{textVisible}</span>
                    )}
                </InputAgenda>
            )}
            { !visible && (
                <input type="hidden" name={`${name}_id_del[]`} value={idText} />
            )}
        </>
    )
}

const File = ({ tag, placeholder, hasTags, prefix, system, name, multiple, items = [], text_tags = '', change = () => {}, openModal = (tags) => {} }) => {
    const [ tags, setTags ] = useState([]);
    const [ count, setCount ] = useState(1);
    const [ itemsText, setItemsText ] = useState(items);
    const [ tagText, setTagText] = useState(text_tags)

    const getTags = () => {
        if(text_tags != '' && text_tags !== undefined){
            setTagText(text_tags);
            getListApi(`${prefix}/tags/${text_tags}/`, setTags, system);
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
                return <InputFile key={index} tag={tag} placeholder={placeholder} hasTags={hasTags} name={name} getTags={getTags} tags={tags} addItem={addItem} position={index} value={i} total={count-1} openModal={() => {openModal(tagText)}} multiple={multiple}/>
            }) }

            { !Array.isArray(itemsText) && (
                <InputFile tag={tag} placeholder={placeholder} hasTags={hasTags} name={name} getTags={getTags} tags={tags} addItem={addItem} position={0} value={itemsText} total={count-1} change={change} openModal={() => {openModal(tagText)}} multiple={multiple}/>
            )}
        </>
    )
}

export default File;