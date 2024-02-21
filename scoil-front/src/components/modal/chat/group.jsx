import Modal from "@/layout/modal";
import Save from "../btns/save";
import { useState } from "react";
import NormalSize from "@/components/items/form/normal";
import Input from "@/components/form/input";
import FormLayout from "@/components/config/formLayout";
import { hideModal, setItemApi } from "@/components/useForm";

const GroupModal = ( { afterClose = () => {}, idChat, prefix, system, errFunc = () => {}, successFunc = () => {} }) => {
    const [ text, setText ] = useState({title: 'Nombre del Chat', label: 'Nombre', group: ''});
    const [ isSaving, setIsSaving ] = useState(false);

    const saveGroup = e => {
        e.preventDefault();
        if(!isSaving){
            setIsSaving(true);
            const form = new FormData(document.getElementById('newGroupChat'));
            form.append('systemUid', system);

            setItemApi(`${prefix}/update-to-group`, form, r => {
                successFunc(r)
                hideModal('groupModal');
                setIsSaving(false)
            }, er => {errFunc(er);setIsSaving(false)});
        }
    }

    const options = <>
        <Save action={saveGroup} send={isSaving} />
    </>

    return (
        <>
            <Modal id={`groupModal`} title={text.title} size="395px" options={options} afterClose={afterClose} padding="pl-[44px] pr-[54px] pt-4 pb-10">
                <FormLayout id="newGroupChat" submit={saveGroup} >
                    <NormalSize>
                        <Input label={text.label} hiddenMargin={true} id="group_name" name="group_name" placeholder='' error='' change={() => {}} />
                    </NormalSize>
                    <input type="hidden" value={idChat} name="chat" />
                </FormLayout>
            </Modal>
        </>
    )
}

export default GroupModal;