import Modal from "@/layout/modal";
import { useState } from "react";
import Save from "../btns/save";
import Calendar from "../btns/calendar";
/* import image from '@/assets/backgrounds/image-publicacion.png' */
import image from '@/assets/background/image-publicacion.png';
import NormalSize from "@/components/items/form/normal";
import Input from "@/components/form/input";
import { formats, modulesModal } from "@/components/items/editor/config";
import Editor from "@/components/items/editor/text";
import BtnBlack from "@/components/items/buttons/btnBlack";
import { useEffect } from "react";
import AbmItems from "../gral/abmItems";
import { useRef } from "react";
import { getTextApi, hideModal, setItemApi, showModal, validateForm } from "@/components/useForm";
import UploadImage from "../uploadImage";
import moment from "moment";

const PublicacionModal = ( {afterClose = () => {}, prefix, system, openModal, id = 0, updateList = () => {}, alertModal = () => {}, fEvent = () => {} } ) => {
    const [ text, setText ] = useState({ title_new:'', title_edit: '', titleInput: '', description: '', campus: '', roles: '', groups: '', users: '', titleEvent: '' });
    const erroObject = {input_title: ''};
    const [ errors, setErrors ] = useState(erroObject);
    const [ textEditor, setTextEditor ] = useState('')
    const [ modalPlanteles, setModalPlanteles ] = useState(false);
    const [ planteles, setPlanteles ] = useState([])
    const [ modalRoles, setModalRoles ] = useState(false);
    const [ roles, setRoles ] = useState([]);
    const [ modalUsers, setModalUsers ] = useState(false);
    const [ users, setUsers ] = useState([]);
    const [ modalGroups, setModalGroups ] = useState(false);
    const [ groups, setGroups ] = useState([]);
    const form = useRef();
    const [ sendSave, setSendSave ] = useState(false)
    const [ errorMessage, setErrorMessages ] = useState([]);
    const [ titleValue, setTitleValue ] = useState('')
    const [ imageShow, setImageShow ] = useState(null);
    const [ imageBlob, setImageBlob ] = useState(null);
    const urlImage = process.env.IMAGE_URL;
    const [ idEvent, setIdEvent ] = useState(0);
    const [ inputTitle, setInputTitle ] = useState('');
    const [ inputColor, setInputColor ] = useState('');

    const savePublication = () => {
        setErrors(erroObject);
        if(validateForm(errorMessage, setErrors)){
            if(!sendSave){
                setSendSave(true);
                const formData = new FormData(form.current);
                formData.append('id', id);
                formData.append('systemUid', system);
                formData.append('image', imageBlob);
    
                setItemApi(`${prefix}/update-publication`, formData, r => {
                    setSendSave(false);
                    updateList(r)
                    form.current.reset();
                    setErrors(erroObject)
                    setTextEditor('')
                    afterClose();
                    hideModal('publicacionModal')
                    alertModal('Has guardado el post', true);
                }, err => {
                    setSendSave(false);
                    console.err(err);
                    alertModal('No se pudo guardar', false);
                });
            }
        }
    }

    const openEvent = () => {
        /* setModalEvento(true)
        showModal('addEvent') */
        fEvent(idEvent)
    }
    const options = <>
        <Calendar title={'Evento de calendario'} action={openEvent} />
        <Save action={savePublication} send={sendSave}/>
    </>

    useEffect(() => {
        setErrors(erroObject);
        setSendSave(false);
        if(openModal){
            getTextApi(`${prefix}/modal-publication/${id}/`, r => {
                setText(r.text);
                setErrorMessages(r.errors);
                if(r.publication){
                    setTitleValue(r.publication.titulo);
                    setTextEditor(r.publication.description);
                    if(r.publication.image){
                        setImageShow(urlImage + r.publication.image)
                    } else {
                        setImageShow(null)
                    }

                    if(r.publication.event){
                        idEvent(r.publicacion.event.id);
                        setInputTitle(r.publicacion.event.title);
                        setInputColor(r.publicacion.event.color);
                    } else {
                        setImageShow(null)
                    }
                } else {
                    setTitleValue('')
                    setImageShow(null)
                    setTextEditor('')
                    setIdEvent(0);
                    setInputTitle('')
                    setInputColor('')
                    getTextApi(`${prefix}/generate/`, r => {}, system, err => {})
                }
            }, system, err => {});
        } else {
            setTitleValue('')
            setImageShow(null)
            setTextEditor('')
            setIdEvent(0);
            setInputTitle('')
            setInputColor('')
        }
    }, [ openModal ])

    const showPlanteles = () => {
        setModalPlanteles(true);
        showModal('modalItemsPlanteles')
    }

    const showRoles = () => {
        setModalRoles(true);
        showModal('modalItemsRoles')
    }

    const showUsers = () => {
        setModalUsers(true);
        showModal('modalItemsUsers')
    }

    const showGroups = () => {
        setModalGroups(true);
        showModal('modalItemsGrupos')
    }

    const resetErrors = () => {setErrors(erroObject)}

    const showModalImg = () => {
        showModal('imageModal');
    }

    const updateImage = blob => {
        setImageBlob(blob);
        setImageShow(URL.createObjectURL(blob));
    }
    /*
    */
    return <>
    <Modal id="publicacionModal" title={((id == 0) ? text.title_new : text.title_edit)} size="990px" options={options} afterClose ={afterClose} padding="pl-[44px] pr-[52px]">
        <div className="max-h-[670px] overflow-auto pr-[44px] py-4">
            <div style={{backgroundImage: `url(${image.src})`}} className="w-full h-[291.55px] mt-[14px] cursor-pointer mb-5 overflow-hidden flex items-center justify-center flex-wrap bg-cover bg-center" onClick={showModalImg}>
                { imageShow && imageShow != null && (
                    <img src={imageShow} className="bg-btn-image" />
                )}
            </div>
            <form onSubmit={(e) => {e.preventDefault}} ref={form}>
                <div className="flex flex-wrap items-center justify-start w-full mb-2 gap-x-7">
                    <NormalSize>
                        <Input label={text.titleInput} hiddenMargin={false} id="input_title" name="input_title" error={errors.input_title} change={resetErrors} value={titleValue} />
                    </NormalSize>
                </div>
                <div className="relative mb-5">
                    <div className="block ml-1 overflow-hidden text-sm text-left opensans text-gray_alter whitespace-nowrap text-ellipsis dark:text-white">{text.description}</div>
                    <Editor theme="snow" modules={modulesModal} formats={formats} className="text-left bg-white" onChange={setTextEditor} value={textEditor} />
                    { errors.description &&(
                        <div className="text-xs text-left text-error-warning whitespace-nowrap font-open">{errors.description}</div>
                    )}
                    <input type="hidden" name="description" value={textEditor} id="description" />
                </div>
                <div className="flex flex-wrap items-center justify-start w-full mb-2 gap-x-7 gap-y-2">
                    <NormalSize>
                        <BtnBlack text={text.campus} click={showPlanteles} />
                    </NormalSize>
                    <NormalSize>
                        <BtnBlack text={text.roles} click={showRoles} />
                    </NormalSize>
                    <NormalSize>
                        <BtnBlack text={text.groups} click={showGroups} />
                    </NormalSize>
                    <NormalSize>
                        <BtnBlack text={text.users} click={showUsers}/>
                    </NormalSize>
                </div>
            </form>
        </div>
    </Modal>
    <AbmItems openModal={modalPlanteles} prefix={prefix} system={system} typeItems={`planteles/${id}`} setItemsParent={setPlanteles} idModal="Planteles" afterClose={()=>{setModalPlanteles(false);}} showSearch={true} addItem={false} showEdit={false} isRemove={true} size="490px" showAll={true} />
    <AbmItems openModal={modalRoles} prefix={prefix} system={system} typeItems={`roles/${id}`} setItemsParent={setRoles} idModal="Roles" afterClose={()=>{setModalRoles(false);}} showSearch={true} addItem={false} showEdit={false} isRemove={true} size="490px" showAll={true} />
    <AbmItems openModal={modalGroups} prefix={prefix} system={system} typeItems={`grupos/${id}`} setItemsParent={setGroups} idModal="Grupos" afterClose={()=>{setModalGroups(false);}} showSearch={true} addItem={false} showEdit={false} isRemove={true} size="490px" showAll={true} />
    <AbmItems openModal={modalUsers} prefix={prefix} system={system} typeItems={`users/${id}`} setItemsParent={setUsers} idModal="Users" afterClose={()=>{setModalUsers(false);}} showSearch={true} addItem={false} showEdit={false} isRemove={true} size="490px" showAll={true} />
    <UploadImage label={text.label_image_text} label_a={text.label_anchor_image} title={text.image_title} id="imageModal" btn_save="" imageParent={updateImage} width={1400} height={490} circulo="cuadrado" />
    {/* <AddEvent openModal={modalEvento} afterClose={ () => {setModalEvento(false)}} minDate={hoy.format('YYYY-MM-AA HH:ii:ss')} fromDate={fromDay} toDate={toDay} prefix={prefix} idEvent={idEvent} successFunction={() => {}} showBtns={false} usuarios={users} roles={roles} campus={planteles} /> */}
    </>
}

export default PublicacionModal;