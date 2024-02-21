import { getListApi } from "@/components/useForm";
import { useEffect, useRef, useState } from "react";
import InputAgenda from "../inputAgenda";
import AddItem from "./btns/addItem";
import DeleteItem from "./btns/deleteItem";
import useSelectHook from "@/hooks/agenda/selectHook";
import Loading from "@/components/loading";

const SelectList = ({ value, placeholder, name, position, tag, addItem, total, prefix, list_name, system, multiple, add_new, addNew = () => {}, depends = null }) => {
    const select = useRef(null);
    const [ editable, setEditable ] = useState(false);
    const [ itemVisible, setItemVisible ] = useState(placeholder);
    const [ ops, setOps ] = useState([])
    const [ visible, setVisible ] = useState(true);
    const [ idText, setIdText ] = useState(0);
    const [ idValue, setIdValue ] = useState(0);
    const { data, isLoading, error, callApi } = useSelectHook(prefix, list_name, system, depends, position);

    useEffect(() => {
        console.log(value);
        if(data.length && Number.isInteger(value) && value > 0){
            let n = data.find((o) => o.id == value);
            if(n){
                setItemVisible(`${n.name}`)
            }
            select.current.value = value;
            setIdValue(value)
        } else {
            select.current.value = (data.length > 0) ? data[0].id : '';
            const v = (value != 0 && value != '') ? value : placeholder;
            setItemVisible(`${v}`);
        }
    }, [ data, data.length, value ]);

    const callApiOptions = () => {
        callApi();
    }

    const changeEditable = () => {
        setEditable(true);
        if(position === total){
            addItem();
        }
        callApiOptions();
        setTimeout(() => {
            if(!Number.isInteger(value)){
                if(typeof value === 'string'){
                    select.current.value = value;
                } else if(typeof value === 'object'){
                    let keys = Object.keys(value);
                    let v = keys.find(element => element != 'id' && element != 'id_tag' && element != 'tag');
                    select.current.value = value[v] || '';
                }
            }
        }, 400);
    }

    useEffect(() => {
        setEditable(false);
        
    }, [ value, placeholder ]);

    return (
        <>
            { visible && (
                <InputAgenda tag={tag} hasTags={false}>
                    <div className={(editable ? 'flex' : 'hidden') + " w-full sm:py-0 py-4 justify-between"}>
                        <Loading loading={isLoading} size={20} align="left" p="">
                            <>
                                <select className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none" name={`${name}[]`} ref={select} id={`input-${name}-${position}`}>
                                    { data.map( r => {
                                        return <option value={r.id} key={r.id} defaultValue={idValue == r.id}>{r.name}</option>
                                    })}
                                </select>
                                <div>
                                    { position < total && multiple && (
                                        <DeleteItem action={()=>{setVisible(false)}} />
                                    )}
                                </div>
                            </>
                        </Loading>
                    </div>
                    { !editable && (
                        <div className="flex justify-between">
                            <span className="font-open text-sm text-gray_alter cursor-pointer sm:py-0 py-2" onClick={changeEditable}>{itemVisible}</span>
                            { add_new && position == total && (
                                <AddItem action={addNew} />
                            )}
                        </div>
                    )}
                </InputAgenda>
            )}
            { !visible && (
                <input type="hidden" name={`${name}_id_del[]`} value={idText} />
            )}
        </>
    )

}
const Select = ({ tag, placeholder, prefix, system, list_name, name, multiple, items, add_new = false, addNew = () => {}, depends = null }) => {
    const [ count, setCount ] = useState(1);
    const [ itemsText, setItemsText ] = useState(items);

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
                return <SelectList key={index} tag={tag} placeholder={placeholder} name={name} addItem={addItem} position={index} value={i} total={count-1} prefix={prefix} list_name={list_name} system={system} multiple={multiple} add_new={add_new} addNew={()=>{addNew(list_name)}} depends={depends} />
            }) }

            { !Array.isArray(itemsText) && (
                <SelectList tag={tag} placeholder={placeholder} name={name} addItem={addItem} position={0} value={itemsText} total={0} prefix={prefix} list_name={list_name} system={system} multiple={multiple} add_new={add_new} addNew={()=>{addNew(list_name)}} depends={depends} />
            )}
        </>
    )
}

export default Select;