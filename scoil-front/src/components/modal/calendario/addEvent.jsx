import Modal from "@/layout/modal";
import { useEffect, useRef, useState } from "react";
import Delete from "../btns/delete";
import Save from "../btns/save";
import Input from "@/components/form/input";
import HexColorInput from "@/components/form/colorInput";
import Date from "@/components/form/date";
import BtnBlack from "@/components/items/buttons/btnBlack";
import UsersEvents from "./usersEvents";
import { hideModal, setItemApi, showModal, validateErrorForm } from "@/components/useForm";
import { getActualSystem } from "@/components/useLanguage";
import ConfirmDelete from "../confirmDelete";
import Message from "../message";
import moment from "moment";

const AddEvent = ({ title = 'Agregar Evento', openModal, afterClose = () => {}, minDate, fromDate = '', toDate = '', prefix, idEvent = 0, inputTitle = '', inputColor = '#00A3FF', usuarios = [], roles = [], campus = [], successFunction = () => {}, showBtns = true}) => {
    const [ text, setText ] = useState({title: 'Título', color: 'Color', from: 'Comienza', to: 'Termina', users: 'Agregar Usuarios', rols: 'Agregar Roles', campus: 'Agregar Planteles', btn_confirm: 'Sí, eliminar', btn_deny: 'No, conservar', messageDelete: '¿Estás seguro de eliminar el evento?', btn_success: 'Entendido', message_delete: 'Has eliminado el evento', message_edit: 'Has guardado el evento', error_before: 'La duración del evento debe ser al menos de 30 minutos'});
    const idModal = 'addEvent';
    const errorObject = {event_title: '', event_color: '', event_from: '', event_to: ''};
    const errorText = {event_title: 'Este campo es requerido', event_color: 'Este campo es requerido', event_from: 'Este campo es requerido', event_to: 'Este campo es requerido'};
    const [ errors, setErrors ] = useState(errorObject)
    const [ titleEvent, setTitleEvent ] = useState('')
    const [ colorEvent, setColorEvent ] = useState('');
    const [ startDate, setStartDate ] = useState();
    const [ endDate, setEndDate ] = useState();
    const modalUsers = 'Usuarios';
    const modalPrefix = 'usersModal';
    const [ usersEvent, setUsersEvent] = useState([])
    const [ openUsers, setOpenUsers] = useState(false);
    const [ rolsEvent, setRolsEvent] = useState([])
    const [ openRols, setOpenRols] = useState(false);
    const modalRoles = 'Roles';
    const [ campusEvent, setCampusEvent] = useState([])
    const [ openCampus, setOpenCampus] = useState(false);
    const modalCampus = 'Campus';
    const [ saveBtn, setSaveBtn] = useState(false);
    const form = useRef();
    const system = getActualSystem();
    const idDeleteModal = 'deleteModalEvent'
    const [ deleteBtn, setDeleteBtn ] = useState(false);
    const [ successIcon, setSuccessIcon ] = useState(true);
    const modalEventName = 'messageEventCalendar';
    const [ messageSuccess, setMessageSuccess ] = useState(<></>)
    const [ minDateEnd, setMinDateEnd ] = useState();

    useEffect(() => {
        if(startDate){
            const t = moment(startDate).add(30, 'minutes');
            const sd = moment(startDate);
            const ed = moment(endDate);
            
            if(endDate == startDate || sd.isAfter(ed)){
                setEndDate(t.format('YYYY-MM-DD HH:mm:ss'))
            }
            setMinDateEnd(t.subtract(1, 'second').format('YYYY-MM-DD HH:mm:ss'))
        }
    }, [startDate, endDate]);
    
    useEffect(() => {
        if(openModal){
            setTitleEvent(inputTitle)
            setStartDate(fromDate)
            setEndDate(toDate)
            setColorEvent(inputColor)
            if(showBtns){
                setUsersEvent(usuarios)
                setRolsEvent(roles)
                setCampusEvent(campus)
            }
        } else {
            setTitleEvent('');
            setStartDate('')
            setEndDate('')
            setColorEvent('')
            setUsersEvent([])
            setRolsEvent([])
            setCampusEvent([])
        }
    }, [ openModal])

    const save = () => {
        if(!saveBtn){
            setSaveBtn(true);
            const e = validateErrorForm(errorText)
            var length = Object.keys(e).length;
            
            if(length == 0){
                const sd = moment(minDateEnd);
                const ed = moment(endDate);
                const isAfter = ed.isAfter(sd);
                if(isAfter){
                    const f = new FormData(form.current);
                    f.append('id_event', idEvent);
                    f.append('systemUid', system.token);
                    if(showBtns){
                        usersEvent.forEach(u => {
                            f.append('users[]', u);
                        })
                        rolsEvent.forEach(u => {
                            f.append('rol[]', u);
                        })
                        campusEvent.forEach(u => {
                            f.append('campus[]', u);
                        });
                    }                    
                    setItemApi(`${prefix}/updateEvent`, f, r => {
                        form.current.reset();
                        setTitleEvent('')
                        setColorEvent('')
                        setStartDate('')
                        setEndDate('')
                        setSaveBtn(false);
                        hideModal(idModal)
                        setSuccessIcon(true);
                        setMessageSuccess(text.message_edit)
                        showModal(modalEventName)
                        successFunction();
                    }, er => {
                        setSaveBtn(false);
                        setSuccessIcon(false);
                        setMessageSuccess(er.replaceAll('"', ''))
                        showModal(modalEventName)
                    });
                } else {
                    setSaveBtn(false);
                    setSuccessIcon(false);
                    setMessageSuccess(text.error_before)
                    showModal(modalEventName)
                    successFunction();
                }
                
            } else {
                setErrors(e);
                setSaveBtn(false);
            }
        }
    }

    const showDelete = () => {showModal(idDeleteModal)}

    const options = <>
        {idEvent != 0 && <Delete action={showDelete} send={deleteBtn} />}
        <Save action={save} send={saveBtn} />
    </>;

    const resetError = e => {
        const input = e.target;
        if(input && input.value){
            errors[input.getAttribute('id')] = '';
            setErrors(errors);
        }
    }

    const showUsers = () => {
        setOpenUsers(true);
        showModal(`${modalPrefix}${modalUsers}`);
    }

    const showRoles = () => {
        setOpenRols(true);
        showModal(`${modalPrefix}${modalRoles}`);
    }

    const showCampus = () => {
        setOpenCampus(true);
        showModal(`${modalPrefix}${modalCampus}`);
    }

    const deleteAction = () => {
        setDeleteBtn(true);
        const f = new FormData();
        f.append('id_event', idEvent);
        f.append('systemUid', system.token);
        setItemApi(`${prefix}/delete-event`, f, s => {
            setSuccessIcon(true);
            setMessageSuccess(text.message_delete)
            showModal(modalEventName)
            setDeleteBtn(false);
            hideModal(idModal)
            successFunction();
        }, er => {
            setSuccessIcon(false);
            setMessageSuccess(er);
            showModal(modalEventName)
            setDeleteBtn(false);
        });
    }

    return <>
        <Modal id={idModal} title={title} size="590px" options={options} afterClose={afterClose}>
            <form className="flex items-center justify-start flex-wrap gap-y-6 pb-2" ref={form} onSubmit={e => {e.preventDefault();e.stopPropagation();}}>
                <div className="w-1/2 pr-4">
                    <Input label={text.title} hiddenMargin={true} id="event_title" name="event_title" error={errors.event_title} change={resetError} value={titleEvent} />
                </div>
                <div className="w-1/2 pl-4 text-left">
                    <HexColorInput idItem="event_color" value={colorEvent} label={text.color} hiddenMargin={true} error_item={errors.event_color} change={resetError} />
                </div>
                <div className="w-1/2 pr-4 text-left">
                    <Date label={text.from} hiddenMargin={true} id='event_from' name="event_from" type='datetime-local' error={errors.event_from} value={startDate} change={ (e) => {setStartDate(e.target.value);}} minDate={minDate} />
                </div>
                <div className="w-1/2 pl-4 text-left">
                    <Date label={text.to} hiddenMargin={true} id='event_to' name="event_to" type='datetime-local' error={errors.event_to} value={endDate} change={ (e) => {setEndDate(e.target.value)}} minDate={minDateEnd} />
                </div>
                { showBtns && (
                    <>
                        <div className="w-1/2 pr-4">
                            <BtnBlack text={text.rols} top="2" click={showRoles}/>
                        </div>
                        <div className="w-1/2 pl-4">
                            <BtnBlack text={text.users} top="2" click={showUsers} />
                        </div>
                        <div className="w-1/2 pr-4">
                            <BtnBlack text={text.campus} top="2" click={showCampus} />
                        </div>
                    </>
                ) }
            </form>
        </Modal>
        <UsersEvents prefix={prefix} id={idEvent} action={u =>{setUsersEvent(u)}} openModal={openUsers} afterClose={()=>{setOpenUsers(false)}} idModal={modalUsers} type='users' showFilterJob={false} items={usersEvent} editable={false} />
        <UsersEvents prefix={prefix} id={idEvent} action={u =>{setRolsEvent(u)}} openModal={openRols} afterClose={()=>{setOpenRols(false)}} idModal={modalRoles} type='roles' showFilterJob={false} items={rolsEvent} editable={false} />
        <UsersEvents prefix={prefix} id={idEvent} action={u =>{setCampusEvent(u)}} openModal={openCampus} afterClose={()=>{setOpenCampus(false)}} idModal={modalCampus} type='campus' showFilterJob={false} items={campusEvent} editable={false} />
        <ConfirmDelete btn_confirm={text.btn_confirm} btn_deny={text.btn_deny} cancel={false} delete_action={deleteAction} id='Event'>{text.messageDelete}</ConfirmDelete>
        <Message btn_confirm={text.btn_success} success_icon={successIcon} id={modalEventName}>{messageSuccess}</Message>
    </>
}

export default AddEvent;