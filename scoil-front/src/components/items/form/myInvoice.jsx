import PasswordInput from "@/components/form/passwordInput";
//import UploadImage from "../modal/uploadImageModal";
//import { showModal } from "../useForm";
import user from '@/assets/usuarios/father.jpg';
import Input from "@/components/form/input";
import InputIcon from "@/components/form/inputIcon";
import Generic from "../buttons/generic";
import UserImageChange from "../userImageChange";
import InputSelect from "@/components/form/inputSelect";
const { useState, useEffect } = require("react")

const MyInvoice = ({invoiceData}) => {    
    const [name, setName] = useState('Agustín');
    const [lastName, setLastName] = useState('Valdes Altamirano');
    const [text, setText] = useState({
        title: 'Mi factura',        
        inputsLabels: {
            rfc: 'RFC',                                                            
            email: 'Correo Electrónico',                        
            street: 'Calle',
            outsideNumber: 'Número Exterior',
            insideNumber: 'Número Interior',
            apartment: 'Piso',
            building: 'Edificio',
            colony: 'Colonia',
            postalCode: 'Código Postal',
            townHall: 'Alcaldía',
            municipality: 'Municipio',
            city: 'Ciudad'
        },
        error: 'Esta información es necesaria',
        button: 'ACTUALIZAR'
    });

    useEffect(() => {
        /* setName(userData.name);
        setLastName(userData.lastname); */
    },[invoiceData]);

    /* const uploadImage = () => {
        showModal("uploadImageUser");
    } */

    return(
        <>
            {/* <UploadImage title={text.uploadTitle} title_a={text.upImage} label={text.labelDrag} label_a={text.labelClick}></UploadImage> */}
            <div className="bg-form-bg h-[418px] mx-[1px] flex justify-center rounded-[15px] shadow-[0_0_17px_-7px_rgba(0,0,0,0.37)] w-full">
                <div className="w-full flex items-center flex-col px-[40px] pb-[40px] pt-[20px]">
                    <div className="w-full flex justify-center mb-[25px]">
                        <span className="font-open text-[32px] font-bold text-black-mat">{text.title}</span>
                    </div>                                        
                    <div className="w-full flex gap-[40px]">
                        <div className="flex-1">
                            <div className="flex flex-col gap-[40px]">
                                <div className="">
                                    <Input label={text.inputsLabels.rfc} error={text.error} placeholder='GURL950715B44' marginLabel=''></Input>   
                                </div>
                                <div>
                                    <Input label={text.inputsLabels.townHall + '/' + text.inputsLabels.municipality} error={text.error} placeholder='Cuauhtémoc' marginLabel=''></Input>   
                                </div>
                                <div className="flex gap-[20px]">
                                    <div>
                                        <Input label={text.inputsLabels.apartment} marginLabel=''></Input>   
                                    </div>
                                    <div>
                                        <Input label={text.inputsLabels.building} marginLabel=''></Input>   
                                    </div>
                                </div>                                                             
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col gap-[40px]">
                                <div>
                                    <Input label={text.inputsLabels.email} error={text.error} placeholder='Lara.La_2@gmail.com' marginLabel=''></Input>
                                </div>
                                <div>
                                    <Input label={text.inputsLabels.colony} error={text.error} placeholder='Centro' marginLabel=''></Input> 
                                </div>                                
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col gap-[40px]">
                                <div>
                                    <Input label={text.inputsLabels.postalCode} error={text.error} placeholder='56246' marginLabel=''></Input>   
                                </div>
                                <div>
                                    <Input label={text.inputsLabels.street} error={text.error} placeholder='Eje Central Lázaro Cárdenas' marginLabel=''></Input>
                                </div>                                     
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col gap-[40px]">
                                <div>
                                    <Input label={text.inputsLabels.city} placeholder='Ciudad de México' error={text.error} marginLabel=''></Input>   
                                </div>
                                <div className="flex gap-[20px]">
                                    <div>
                                        <Input label={text.inputsLabels.outsideNumber} error={text.error} placeholder='2' marginLabel=''></Input>   
                                    </div>
                                    <div>
                                        <Input label={text.inputsLabels.insideNumber} marginLabel=''></Input>   
                                    </div>
                                </div>  
                            </div>
                        </div>                        
                    </div>
                    <div className="w-full flex justify-center mt-[10px]">
                        <Generic colors='  bg-[#0082C9]   rounded h-[35px] w-[254px] text-input-white font-open' title= {text.button}></Generic>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyInvoice;