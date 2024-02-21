import { getListApi } from "@/components/useForm";
import { useEffect, useRef, useState } from "react";
import InputAgenda from "../inputAgenda";
import DeleteItem from "./btns/deleteItem";

const InputBank = ({ tag, placeholder, hasTags, name, text, getTags, tags, addItem, position, total, value, openModal = () => {} }) => {
    const inputAccount = useRef(null);
    const [ editable, setEditable ] = useState(false);
    const [ tagSelected, setTagSelected ] = useState(tag);
    const [ tagId, setTagId ] = useState('')
    const inputBranch = useRef(null);
    const inputClabe = useRef(null);
    const [ accountVisible, setAccountVisible ] = useState(placeholder);
    const [ idBank, setIdBank ] = useState(0);
    const [ visible, setVisible ] = useState(true);
    const [ localText, setLocalText ] = useState(text);

    const changeEditable = () => {
        setEditable(true);
        getTags();
        if(position === total){
            addItem();
        }
        setTimeout(() => {
            if(!Number.isInteger(value)){
                inputAccount.current.value = value.bank_account;
                inputBranch.current.value = value.bank_branch;
                inputClabe.current.value = value.bank_clabe;
                setIdBank(value.id);
            } else {
                setIdBank(0);
            }
            inputAccount.current.focus();
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

    const verifyAccount = () => {
        validateData(inputAccount, 16);
    }

    const verifyBranch = () => {
        validateData(inputBranch, 8);
    }

    const verifyClabe = () => {
        validateData(inputClabe, 18);
    }

    useEffect(() => {
        setEditable(false);
        if(!Number.isInteger(value) && typeof value === 'object'){
            setTagId(value.id_tag);
            let b = (value.bank_branch) ? ` - ${localText.branch} ${value.bank_branch}` : '';
            let text = `${localText.account}: ${value.bank_account}${b} - ${localText.clabe} ${value.bank_clabe}`;
            setAccountVisible(`${text}`);
            if(value.tag){
                setTagSelected(value.tag)
            }
        } else {
            setAccountVisible(`${placeholder}`);
            setTagId('')
            setTagSelected(tag)
        }
    }, [ value, placeholder, tag ]);

    useEffect(() => {setLocalText(text)}, [text])

    return (
        <>
            { visible && (
                <InputAgenda tag={tagSelected} hasTags={hasTags} tags={tags} clickTag={verifyTags} changeTag={setTag} openModal={openModal}>
                    <input type="hidden" name="bank_tag[]" value={tagId} />
                    { editable && (
                        <div className="w-full py-4 sm:py-0 relative">
                            { position < total && (
                                <div className="absolute right-1"><DeleteItem action={()=>{setVisible(false)}} /></div>
                            )}
                            <input className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none min-w-[136px] dark:bg-icon-dark dark:text-white dark:placeholder:text-white" name={`${name}_account[]`} placeholder={text.account} type="text" size={18} ref={inputAccount} onChange={verifyAccount} id={`input-${name}-${position}`} />
                            <input className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none min-w-[77px] dark:bg-icon-dark dark:text-white dark:placeholder:text-white" name={`${name}_brach[]`} placeholder={text.branch} type="text" size={8} ref={inputBranch} onChange={verifyBranch} />
                            <input className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none min-w-[150px] dark:bg-icon-dark dark:text-white dark:placeholder:text-white" name={`${name}_clabe[]`} placeholder={text.clabe} type="text" size={20} ref={inputClabe} onChange={verifyClabe} />
                            <input type="hidden" name={`${name}_id[]`} value={idBank} />
                        </div>
                    )}
                    { !editable && (
                        <span className="font-open text-sm text-gray_alter cursor-pointer sm:py-0 py-2" onClick={changeEditable}>{accountVisible}</span>
                    )}
                </InputAgenda>
            )}
            { !visible && (
                <input type="hidden" name={`${name}_id_del[]`} value={idBank} />
            )}
        </>
    )
}

const Bank = ({ tag, placeholder, hasTags, prefix, system, name, text, multiple, items, text_tags, openModal = (tags) => {} }) => {
    const [ tags, setTags ] = useState([]);
    const [ count, setCount ] = useState(1);
    const [ itemsBank, setItemsBank ] = useState(items);
    const [ tagText] = useState(text_tags)

    const getTags = () => {
        if(tags.length === 0){
            getListApi(`${prefix}/tags/bank/`, setTags, system);
        }
    }

    const addItem = () => {
        if(multiple){
            let ib = itemsBank;
            let nextItem = count+1;
            ib.push(0);
            setCount(nextItem);
            setItemsBank(ib);
        }
    }

    useEffect(() => {
        setCount(items.length);
        setItemsBank(items);
    }, [items]);

    return (
        <>
            { itemsBank.map((i, index) => {
                return <InputBank key={index} tag={tag} placeholder={placeholder} hasTags={hasTags} name={name} text={text} getTags={getTags} tags={tags} addItem={addItem} position={index} total={count-1} value={i} openModal={() => {openModal(tagText)}}/>
            }) }
        </>
    );
}

export default Bank;