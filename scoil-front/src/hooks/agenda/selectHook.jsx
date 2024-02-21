import { getListApi } from '@/components/modal/useForm';
import { useState } from 'react'


const getDependsValue = (depends, position) => {
    let value = '';
    const select = document.getElementById(`input-${depends}-${position}`);
    if(select){
        if(select.value){
            value = select.value;
        } else {
            const parent = select.parentNode.parentNode;
            parent.classList.add('bg-red')
        }
    }
    return value;
}

const useSelectHook = ( prefix, list_name, system, depends = null, position = 0, customError = '' ) => {
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const callApi = () => {
        let value = '';
        if(depends){
            if(typeof depends == 'string'){
                value = getDependsValue(depends, position) + '/';
            } else {
                let sep = '';
                depends.forEach(d => {
                    value += sep + getDependsValue(d, position);
                    sep = '_'
                })
                value += '/';
            }
            
        }
        if(!isLoading){
            setIsLoading(true);
            getListApi(`${prefix}/get-${list_name}/${value}`, r => {
                setData(r);
                setIsLoading(false);
            }, system, err => {
                setError(error);
                setIsLoading(false);
            });
        }
    };

    return ( { data, isLoading, error, callApi } );
}

export default useSelectHook;