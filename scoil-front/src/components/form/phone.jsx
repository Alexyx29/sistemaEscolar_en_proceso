import { useEffect, useRef } from "react";
import { validateFullNumbers, validateNumbers } from "../useForm";

const InputPhone = ({ label, hiddenMargin, id, name, placeholder = '', error = '', value = '', modalLadas = () => {}, lada = 'Lada', ext = 'Ext', lengthPhone = 10, ladaPhone = '+52', gap = '3', change = e => {}}) => {
    const inputLada = useRef(null);
    const inputPhone = useRef(null);
    const inputExt = useRef(null);
    
    useEffect(() => {
        let i = document.getElementById(id);
        if(i){
            i.value = value;
        }
    }, [ value ])

    useEffect(() => {
        if(inputLada.current){
            inputLada.current.value = ladaPhone
        }
    }, [ ladaPhone ])

    const validateData = (input, size) => {
        if(input.current.value.length > size){
            input.current.value = input.current.value.substr(0, size);
        }
    }

    const verifyPhone = (n) => {
        validateData(inputPhone, lengthPhone);
        validateNumbers(n);
    }

    const verifyPhone2 = (n) => {
        validateData(inputPhone, lengthPhone);
        validateFullNumbers(n);

    }

    const verifyExt = (n) => {
        validateData(inputExt, 6);
        validateNumbers(n);
    }

    const showLadas = () => {
        modalLadas(inputLada.current);
    }
    
    return (
        <>
            <div className={'w-full'}>
                { label !== '' && 
                    <label className="block ml-1 overflow-hidden text-sm text-left opensans text-libellum-text-gray whitespace-nowrap text-ellipsis">{label}</label>
                }
                <div className={(hiddenMargin ? '' : 'md:mb-7 mb-2') + ` relative text-left flex justify-start items-center flex-nowrap gap-x-3 w-full`}>
                    <input readOnly={true} className="bg-white border rounded border-libellum-border focus:outline-none text-gray_alter placeholder:text-sm placeholder:opensans placeholder:text-gray_alter text-sm pl-[10px] py-3 font-open h-9 dark:bg-input-dark dark:text-placeholder-dark dark:placeholder:text-placeholder-dark text-left cursor-pointer w-[20%]" name={`${name}_country`} placeholder={lada} type="text" ref={inputLada} onClick={showLadas} />
                    <input className="bg-white border rounded border-libellum-border focus:outline-none text-gray_alter placeholder:text-sm placeholder:opensans placeholder:text-gray_alter text-sm pl-[10px] py-3 font-open h-9 dark:bg-input-dark dark:text-placeholder-dark dark:placeholder:text-placeholder-dark text-left w-1/2" name={`${name}`} placeholder={placeholder} type="text" ref={inputPhone} onChange={(e)=>{verifyPhone(`input_${name}`);change(e);}} id={`input_${name}`} onBlur={()=>{verifyPhone2(`input_${name}`)}}/>
                    <input className="bg-white border rounded border-libellum-border focus:outline-none text-gray_alter placeholder:text-sm placeholder:opensans placeholder:text-gray_alter text-sm pl-[10px] py-3 font-open h-9 dark:bg-input-dark dark:text-placeholder-dark dark:placeholder:text-placeholder-dark text-left w-[20%]" name={`${name}_ext`} placeholder={ext} type="text" ref={inputExt} onChange={() => {verifyExt(`input-${name}-extension`)}} id={`input-${name}-extension`} />
                    { error &&(
                        <div className="absolute w-full text-xs text-left text-error-warning whitespace-nowrap font-open top-10">{error}</div>
                    )}
                </div>
            </div>
        </>
    )
}
export default InputPhone;