import { getListApi } from "@/components/useForm";
import { useEffect, useRef, useState } from "react";
import InputAgenda from "../inputAgenda";

const SelectLegal = ({ tag, placeholder, hasTags, name, getTags, tags, addItem, position, total, value }) => {
    const select = useRef(null);
    const [ editable, setEditable ] = useState(false);
    const [ tagSelected, setTagSelected ] = useState(tag);
    const [ tagId, setTagId ] = useState('')
    const [ legals, setLegals ] = useState([]);
    const [ legal, setLegal ] = useState(value);
    const [ legalVisible, setLegalVisible ] = useState(placeholder);
    const [ idLegal, setIdLegal ] = useState(0);

    const changeEditable = () => {
        setEditable(true);
        if(position === total){
            addItem();
        }
        addItem();
        /* if(!Number.isInteger(value)){
            setLegalVisible(`${value}`)
            setIdLegal(value);
        } else {
            setLegalVisible(`${placeholder}`);
            setTagSelected(tag)
            setLegal('');
        } */
        // obtener legales
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
        /* if(!Number.isInteger(value)){
            setLegalVisible(`${value}`)
            setLegal(value);
        } else {
            setLegalVisible(`${placeholder}`);
            setTagSelected(tag)
            setLegal('');
        } */
    }, [ value ]);

    return (
        <InputAgenda tag={tagSelected} hasTags={hasTags} tags={tags} clickTag={verifyTags} changeTag={setTag}>
            <input type="hidden" name="bank_tag[]" value={tagId} />
            { editable && (
                <div className="w-full sm:py-0 py-4">
                    <select className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none dark:bg-icon-dark dark:text-white dark:placeholder:text-white" name={`${name}[]`} ref={select}  id={`input-${name}-${position}`} value={legal}>
                        { legals.map( l => {
                            return <option value={l.id} key={l.id}>{l.name}</option>
                        })}
                    </select>
                </div>
            )}
            { !editable && (
                <span className="font-open text-sm text-gray_alter cursor-pointer sm:py-0 py-2" onClick={changeEditable}>{legalVisible}</span>
            )}
        </InputAgenda>
    )
}
const Legal = ({ tag, placeholder, hasTags, prefix, system, name, multiple, items }) => {
    const [ tags, setTags ] = useState([]);
    const [ count, setCount ] = useState(1);
    const [ itemsLegals, setItemsLegals ] = useState(items)

    const getTags = () => {
        if(tags.length === 0){
            getListApi(`${prefix}/tags/legal/`, setTags, system);
        }
    }

    const addItem = () => {
        if(multiple){
            let il = itemsLegals;
            let nextItem = count+1;
            il.push(0);
            setCount(nextItem);
            setItemsLegals(il);
        }
    }

    return (
        <>
            { itemsLegals.map((i, index) => {
                return <SelectLegal key={index} tag={tag} placeholder={placeholder} hasTags={hasTags} name={name} getTags={getTags} tags={tags} addItem={addItem} position={index} total={count} value={i} />
            }) }
        </>
    )
}

export default Legal;