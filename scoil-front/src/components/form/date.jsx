import { faCalendarDays, faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { useEffect, useRef, useState } from "react";

const Date = ({ label, hiddenMargin, id, name, type, placeholder = "", error = "", value = '', change = () => {}, disabled = false, maxDate = null, minDate = null, clases = 'rounded', readonly = false }) => {
    const [ dateShow, setDateShow ] = useState(null);
    const [ errorLocal, setErrorLocal ] = useState(error);
    const inputDate = useRef(null);

    useEffect(() => {
        if(value){
            setDateShow(value.replace('T', ' '));
        } else {
            setDateShow('');
        }
        inputDate.current.value = value;
    }, [ value ])

    useEffect(() => {
        setErrorLocal(error);
    }, [error])

    const changeDate = (e) => {
        // setDateShow(e.target.value.replace('T', ' '));
        setDateShow(inputDate.current.value.replace('T', ' '))
        change(e);
    }

    const validateDate = (value, regexp, e) => {
        var matches = value.match(regexp);
        if(!matches){
            setDateShow('')
            inputDate.current.value = ''
            e.target.value = '';
        } else {
            if(minDate){
                const md = moment(minDate);
                const sd = moment(e.target.value.replace('T', ' '))
                if(md.isAfter(sd)){
                    setDateShow(minDate);
                    inputDate.current.value = minDate
                } else {
                    changeDate(e)
                }
            } else {
                changeDate(e)
            }
        }
    }
    const validateDateManual = e => {
        const v = e.target.value;
        /* var matches = v.match(/^(\d{4})\.(\d{2})\.(\d{2}) (\d{2}):(\d{2}):(\d{2})$/); */
        switch(type){
            case 'date':
                validateDate(v, /^(\d{4})\-(\d{2})\-(\d{2})$/, e);
            break;
            case 'datetime': case 'datetime-local':
                validateDate(v, /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/, e);
            break;
            case 'time':
                validateDate(v, /^(\d{2}):(\d{2}):(\d{2})$/, e);
            break;
        }
    }

    return (
        <>
            <div className={'w-full'}>
                { label !== '' && 
                    <label className="block ml-1 overflow-hidden text-sm opensans whitespace-nowrap text-ellipsis text-libellum-text-gray">{label}</label>
                }
                <div className={(hiddenMargin ? '' : 'md:mb-7 mb-2') + ' relative'}>
                    <input name={`${name}_text`} type="text" autoComplete="off" className={`w-full border ${clases} border-libellum-border focus:outline-none text-gray_alter placeholder:text-sm placeholder:opensans placeholder:text-gray_alter text-sm px-[10px] py-3 font-open h-9`} value={dateShow || placeholder} onChange={e => {setDateShow(e.target.value)}} onBlur={validateDateManual} readOnly={readonly} />
                    <div className="text-gray_alter absolute right-2 z-10 top-[7px]">
                        { (type == 'date' || type == 'datetime' || type == 'datetime-local') && (
                            <FontAwesomeIcon icon={faCalendarDays} />
                        )}
                        { type == 'time' && (
                            <FontAwesomeIcon icon={faClock} />
                        )}
                    </div>
                    <input id={id} name={name} type={type} autoComplete="off" className="absolute overflow-hidden z-20 w-5 h-8 top-[2px] right-2 focus:outline-none opacity-0" onChange={e => {changeDate(e);}} ref={inputDate} disabled={disabled} {...((maxDate) ? {max: maxDate} : {})} {...((minDate) ? {min: minDate} : {})}  readOnly={readonly}/>
                    { errorLocal != '' && (
                        <div className="absolute text-xs text-error-warning whitespace-nowrap font-open top-9 left-1">{errorLocal}</div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Date;