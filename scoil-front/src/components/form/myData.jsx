import Input from "./input";
import UploadImage from "../modal/uploadImage";
import { showModal } from "../useForm";
// import UserImageChange from "@/assets/users/userImageChange";
const { useState } = require("react")
import NormalSize from "../items/form/normal";
import Select from "./select";
import Password from "./password";
import Date from "./date copy";
import user from '@/assets/users/user-2.svg'


const MyDataProfile = ({}) => {


    const data ={
        data:"Mis Datos",
        dataName:"Manuel Alberto",
        datalastName:"Rosales San Agustín",

        name:"Nombre",
        nameN:"Manuel Alberto",
        required:"Esta información es necesaria",

        lastName:"Apellidos",
        lastNameN:"Rosales San Agustín",
        required2:"Esta información es necesaria",

        gender:"Género",
        genderN:"Hombre",
        required3:"Esta información es necesaria",      

        user:"Usuario",
        userN:"RigoSca21",
        required4:"Esta información es necesaria",

        password:"Contraseña",
        passwordN:"021QcD#",
        required5:"Esta información es necesaria",
            
        date:"Fecha de nacimiento",
        dateN:"1995 - 07 - 15",
        required6:"Esta información es necesaria",      
            

        

        email:"Correo eléctronico",
        emailN:"rigo.albert@gmail.com",
        required7:"Esta información es necesaria",

        phone:"Teléfono",
        phoneN:"+52",
        phoneNN:"5578173562",
        phoneE:"Ext",
        required8:"Esta información es necesaria",

        street:"Calle",
        streetN:"Eje Central Lázaro Cárdenas",
        required9:"Esta información es necesaria",

        num:"Número exterior",
        numN:"2",
        numI:"Número interior",
        required10:"Esta información es necesaria",

        floor:"Piso",
        floorN:"Edificio",

        col:"Colonia",
        colN:"Centro",
        required11:"Esta información es necesaria",

        
        
        code:"Código Postal",
        codeN:"LaSof21",
        required12:"Esta información es necesaria",
        

        town:"Alcaldía/Municipio",
        townN:"Cuauhtémoc",
        required13:"Esta información es necesaria",
        

        city:"Ciudad",
        cityN:"Ciudad de México",
        required14:"Esta información es necesaria",


        act:"ACTUALIZAR",


    }

    const showMImageMod = () => {
        showModal('imageModal');
    }
    

    return(
        <>
            {/* <UploadImage title={"Cargar Imagen"} title_a={"text.upImage"} label={"text.labelDrag"} label_a={"text.labelClick"}></UploadImage> */}
            <div className="bg-input-white h-[714px] w-[1293px] flex flex-col ml-[30px] rounded-[15px] shadow-[0_0_17px_-7px_rgba(0,0,0,0.37)] ">
               

                    <div className=" " >
                        <span className="text-[#535353] font-open font-bold text-[32px] flex justify-center mt-[30px] mb-[30px] " >
                            {data.data}
                        </span>

                        <div className="flex justify-center  ">
                            <button className="flex justify-center  " onClick={showMImageMod}>
                                <img src={user.src} alt="" className="border rounded-full p-2 border-[#1385C8] border-[2px] w-[95px] h-[95px] " />   
                            </button>
                        </div>


                        <div className=" flex flex-col text-center font-open font-semibold mt-[5px]  " >
                            <span className="text-[20px] text-[#000000] " >
                                {data.dataName}
                            </span>
                            <span className="text-[20px] text-[#808080] " >
                                {data.datalastName}
                            </span>
                        </div>
                       </div>

                        <div className={'h-[341px] w-full flex flex-col justify-center items-center mt-[34px] '} >
                            <div className=" flex flex-wrap gap-x-[32px] gap-y-[8px] w-[1130px]   ">
                            
                            
                            
                            <NormalSize>
                                <Input label={data.name} id="nombre" name="nombre" type="text" placeholder={data.nameN} error={data.required} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>      
                            </NormalSize>

                            <NormalSize>
                            <Input label={data.lastName} id="nombre" name="nombre" type="text" placeholder={data.lastNameN} error={data.required2} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>      
                            </NormalSize>

                            <NormalSize>
                                <Select
                                    label={data.gender}
                                    id="miSelect"
                                    name="miSelectName"
                                    disabled={false} 
                                    error={data.required3}
                                    emptyItem="Selecciona..." 
                                    isObjectList={true} 
                                    options={''} 
                                    add={true} 
                                    text_add="Mujer"
                                    change={null}
                                    value={null} 
                                    styles="" 
                                />
                            </NormalSize>

                            <NormalSize>
                                <Date
                                    label={data.date}
                                    hiddenMargin={null} n
                                    id="fechaNacimiento"
                                    name="fechaNacimiento"
                                    type="date" 
                                    placeholder={data.dateN} 
                                    error={data.required6} 
                                    value={null} 
                                    change={null} 
                                    disabled={null} 
                                    maxDate={null} 
                                    minDate={null} 
                                    clases="rounded" 
                                />
                            </NormalSize>

                            <NormalSize>
                            <Input label={data.user} id="nombre" name="nombre" type="text" placeholder={data.userN} error={data.required4} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>      
                            </NormalSize>     

                            <NormalSize>
                                <Password
                                    label={data.password}
                                    hiddenMargin={false} 
                                    placeholder={data.passwordN}
                                    error={data.required5}
                                    autoComplete="new-password" 
                                    change={null} 
                                    focus={null} 
                                    focusout={null} 
                                />
                            </NormalSize>
{/* columna 2 */}
                           

                            <NormalSize>
                            <Input label={data.email} id="nombre" name="nombre" type="text" placeholder={data.emailN} error={data.required7} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>      
                            </NormalSize>  

                            <div className="flex w-[254px] gap-x-[10px] " >
                                <div className="w-[52px]" >
                                    <Input label={data.phone} id="nombre" name="nombre" type="text" placeholder={data.phoneN} error={data.required8} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>       
                                </div>
                                <div className="w-[129px]" >
                                    <Input label={"."} id="nombre" name="nombre" type="text" placeholder={data.phoneNN} error={null} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>      
                                </div>
                                <div className="w-[52px]" >
                                    <Input label={"."} id="nombre" name="nombre" type="text" placeholder={data.phoneE} error={null} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>      
                                </div> 
                            </div>    

                            <NormalSize>
                            <Input label={data.code} id="nombre" name="nombre" type="text" placeholder={data.codeN} error={data.required12} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>          
                            </NormalSize>

                            <NormalSize>
                            <Input label={data.city} id="nombre" name="nombre" type="text" placeholder={data.cityN} error={data.required14} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>           
                            </NormalSize> 

                            <NormalSize>
                            <Input label={data.town} id="nombre" name="nombre" type="text" placeholder={data.townN} error={data.required13} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>         
                            </NormalSize> 

                            <NormalSize>
                            <Input label={data.col} id="nombre" name="nombre" type="text" placeholder={data.colN} error={data.required11} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>          
                            </NormalSize> 

                           

                            

                           

                            <NormalSize>
                            <Input label={data.street} id="nombre" name="nombre" type="text" placeholder={data.streetN} error={data.required9}change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>          
                            </NormalSize>    

                            <div className="flex w-[254px] gap-x-[20px]" >
                                <div className="w-[117px]" >
                                    <Input label={data.num} id="nombre" name="nombre" type="text" placeholder={data.numN} error={data.required10} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>      
                                </div>
                                <div className="w-[117px]" >
                                    <Input label={data.numI} id="nombre" name="nombre" type="text" placeholder={null} error={null} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>      
                                </div>
                            </div>

                            <div className="flex w-[254px] gap-x-[32px]" >
                                <div className="w-[117px]" >
                                    <Input label={data.floor} id="nombre" name="nombre" type="text" placeholder={null} error={null} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>      
                                </div>
                                <div className="w-[117px]" >
                                    <Input label={data.floorN} id="nombre" name="nombre" type="text" placeholder={null} error={null} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>      
                                </div>
                            </div>


                            

          
                            </div>
                            <div className="flex justify-center  mt-[42px]  " >
                                <button className="bg-[#4A61CE] w-[254px] h-[36px]    font-open font-semibold text-[14px] text-[#ffffff] rounded-[5px] " >
                                    {data.act}
                                </button>
                            </div>
                       
 
                       
               

            </div>
                <UploadImage
                    label={"Arrastra la imagen aquí o haz"}
                    label_a={"Click Aquí"}
                    id="imageModal"
                    title={"Cargar Imagen"}
                    btn_save={null}
                    imageParent={"updateImage"}
                    width={450}
                /> 
            </div>
        </>
    )
}

export default MyDataProfile;