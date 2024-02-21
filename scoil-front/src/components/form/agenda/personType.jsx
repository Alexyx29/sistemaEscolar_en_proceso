import { getListApi } from "@/components/useForm";
import { useEffect, useRef, useState } from "react";
import InputAgenda from "../inputAgenda";

const PersonType = ({ tag, placeholder, value, prefix, system }) => {
    const select = useRef(null);
    const [ editable, setEditable ] = useState(false);
    const [ typePerson, setTypePerson ] = useState([]);
    const [ typeP, setTypeP ] = useState('');
    const [ typeVisible, setTypeVisible ] = useState(placeholder);

    const changeEditable = () => {
        setEditable(true);
    }

    useEffect(() => {
        if(typePerson.length === 0){
            getListApi(`${prefix}/tags/type_person/`, setTypePerson, system);
        }
        setEditable(false);
        if(!Number.isInteger(value) && value[0] !== 0){
            setTimeout(() => {
                setTypeVisible(`${typePerson[value]}`)
            }, 500);
            setTypeP(value);
        } else {
            setTypeP('');
            setTypeVisible(`${placeholder}`);
        }
    }, [value, placeholder, prefix, system, typePerson]);

    return (
        <InputAgenda tag={tag} hasTags={false}>
            { editable && (
                <div className="w-full sm:py-0 py-4">
                    <select className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none dark:bg-icon-dark dark:text-white dark:placeholder:text-white" name="type_person" ref={select} id={`input-type_person`} value={typeP} onChange={e=>{setTypeP(e.target.value)}}>
                        { typePerson.map( (t, index) => {
                            return <option value={index} key={index}>{t}</option>
                        })}
                    </select>
                </div>
            )}
            { !editable && (
                <span className="font-open text-sm text-gray_alter cursor-pointer sm:py-0 py-2" onClick={changeEditable}>{typeVisible}</span>
            )}
        </InputAgenda>
    )
}

export default PersonType;