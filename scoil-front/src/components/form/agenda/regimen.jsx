import { getItemExternalApi } from "@/components/useForm";
import { useEffect, useRef, useState } from "react";
import InputAgenda from "../inputAgenda";

const Regimen = ({ tag, placeholder, value, type_person }) => {
    const select = useRef(null);
    const [ editable, setEditable ] = useState(false);
    const [ regimens, setRegimens ] = useState([]);
    const [ regimen, setRegimen ] = useState(value);
    const [ regimenVisible, setRegimenVisible ] = useState(placeholder);
    const [ tp, setTp ] = useState(0);

    const changeEditable = () => {
        setEditable(true);
        // obtener los regimenes
    }

    useEffect(() => {
        if(regimens.length === 0){
            setTp(type_person);
            let formData = new FormData();
            formData.append('type_person', type_person);
            getItemExternalApi(`search_regimen`, formData, setRegimens);
        }

        setEditable(false);
        if(!Number.isInteger(value) && value[0] !== 0){
            setTimeout(() => {
                let name = regimens.find(({id}) => {return id === value[0]});
                if(name){
                    setRegimenVisible(`${name.name}`)
                }
            }, 500);
            setRegimen(value);
        } else {
            setRegimen('');
            setRegimenVisible(`${placeholder}`);
        }
    }, [ value, placeholder, regimen, tp, type_person ]);

    useEffect(() => {
        if(regimens.length === 0){
            setTp(type_person);
            let formData = new FormData();
            formData.append('type_person', type_person);
            getItemExternalApi(`search_regimen`, formData, setRegimens);
        }
    }, [ type_person ]);

    return (
        <InputAgenda tag={tag} hasTags={false}>
            { editable && (
                <div className="w-full sm:py-0 py-4">
                    <select className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none dark:bg-icon-dark dark:text-white dark:placeholder:text-white" name="regimen" ref={select} id={`input-genre`} value={regimen} onChange={e=>{setRegimen(e.target.value)}}>
                        { regimens.map( r => {
                            return <option value={r.id} key={r.id}>{r.name}</option>
                        })}
                    </select>
                </div>
            )}
            { !editable && (
                <span className="font-open text-sm text-gray_alter cursor-pointer sm:py-0 py-2" onClick={changeEditable}>{regimenVisible}</span>
            )}
        </InputAgenda>
    )
}

export default Regimen;