import { useState } from "react";
import NormalSize from "@/components/items/form/normal";
import Input from "@/components/form/input";
import Select from "@/components/form/select";
import Password from "@/components/form/password";
import Date from "@/components/form/date";
// import usuario from '@/assets/users/user_1.svg';
// import usuario from '../../assets/usuarios/user.png';
import usuario from '@/assets/usuarios/user.png'

import { showModal,hideModal } from "../useForm";
import UploadImage from "../modal/uploadImage";



const DataStudent = () => {   
    const [section, setSection] = useState(1);
    const [search, setSearch] = useState(false);
    const [tittle, setTittle] = useState('Mi tablero');

    const handleButtonClickInBarraMenu = (Id) => {
        setSection(Id);
        updateHeader(Id);
    }

    const updateHeader = (ID) =>{
        switch (ID) {
            case 1: setSearch(false) ;setTittle('Mi tablero') ;break;
            case 2: setSearch(true) ;setTittle('Aula Virtual') ;break;
            case 3: setSearch(true) ;setTittle('Cursos Online') ;break;            
            case 4: setSearch(true) ;setTittle('Calendario') ;break;            
            default:                
        }
    }

    const data ={
        data:"Mis Datos",
        dataName:"Lara Sofia",
        datalastName:"Laborde Revilla",

        name:"Nombre",
        nameN:"Lara Sofía",
        required:"Esta información es necesaria",

        lastName:"Apellidos",
        lastNameN:"Gutiérrez Rodríguez",
        required2:"Esta información es necesaria",

        gender:"Género",
        genderN:"Mujer",
        required3:"Esta información es necesaria",      

        user:"Usuario",
        userN:"LaSof21",
        required4:"Esta información es necesaria",

        password:"Contraseña",
        passwordN:"021QcD#",
        required5:"Esta información es necesaria",
            
        date:"Fecha de nacimiento",
        dateN:"1995 - 07 - 15",
        required6:"Esta información es necesaria",      
            

        

        email:"Correo eléctronico",
        emailN:"Lara.La_2@gmail.com",
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

    const invoice = {

        invoice:"Mi Factura",

        rfc:"RFC",
        rfcN:"GURL950715B44",
        required:"Esta información es necesaria",

        

        email:"Correo eléctronico",
        emailN:"Lara.La_2@gmail.com",
        required2:"Esta información es necesaria",

        
        invStreet:"Calle",
        invStreetN:"Eje Central Lázaro Cárdenas",
        required3:"Esta información es necesaria",



        num:"Número exterior",
        numN:"2",
        numI:"Número interior",
        required4:"Esta información es necesaria",

        

        floor:"Piso",
        floorN:"Edificio",

        invCol:"Colonia",
        invColN:"Centro",
        required5:"Esta información es necesaria",

         

        invCode:"Código Postal",
        invCodeN:"LaSof21",
        required6:"Esta información es necesaria",

        

        invTown:"Alcaldía/Municipio",
        invTownN:"Cuauhtémoc",
        required7:"Esta información es necesaria",

        
       
        invCity:"Ciudad",
        invCityN:"Ciudad de México",
        required8:"Esta información es necesaria",

        

        act:"ACTUALIZAR",

    }

    const [actualData, setActualData] = useState([
        {
        dataUser: [
          
            {
                gender:"Género",
                genderN:"Mujer",
                

                date:"Fecha de nacimiento",
                dateN:"1995 - 07 - 15",
                

                street:"Calle",
                streetN:"Eje Central Lázaro Cárdenas",
                
        
                col:"Colonia",
                colN:"Centro",
                
                
                code:"Código Postal",
                codeN:"LaSof21",
                

                town:"Alcaldía/Municipio",
                townN:"Cuauhtémoc",
                

                city:"Ciudad",
                cityN:"Ciudad de México",
                

        // info MI FACTURA
                invStreet:"Calle",
                invStreetN:"Eje Central Lázaro Cárdenas",
                

                invCol:"Colonia",
                invColN:"Centro",
                 

                invCode:"Código Postal",
                invCodeN:"LaSof21",
                

                invTown:"Alcaldía/Municipio",
                invTownN:"Cuauhtémoc",
                
               
                invCity:"Ciudad",
                invCityN:"Ciudad de México",
                
           
            },
        ], 
    }
]);



const showMImageMod = () => {
    showModal('imageModal');
}



const updateImage = (blob) => {
    setImageBlob(blob);
    setImageShow(URL.createObjectURL(blob));
    setImageItem(true);
}

    return(
        <>
           

                    <>



                  
                        <div className="bg-[#F7F8F9] h-[714px] w-[1293px] rounded-[10px] shadow-2xl" >
                                
                                <span className="text-[#535353] font-open font-bold text-[32px] flex justify-center  mt-[30px]   mb-[30px] " >
                                    {data.data}
                                </span>

                                <div className="flex justify-center mb-[6px] ">
                                    <button className="flex justify-center  " onClick={showMImageMod}>
                                        <img src={usuario.src} alt="" className="border rounded-full p-2 border-[#1385C8] border-[2px] " />   
                                    </button>
                                </div>


                                <div className=" flex flex-col text-center font-open font-semibold mb-[30px] " >
                                    <span className="text-[20px] text-[#000000] " >
                                        {data.dataName}
                                    </span>
                                    <span className="text-[20px] text-[#808080] mt-[-4px] " >
                                        {data.datalastName}
                                    </span>
                                </div>
                       

                        <div className={'h-[324px]  '} >
                            <div className=" flex flex-wrap gap-x-[32px] gap-y-[8px] w-[1130px] mx-auto   ">
                            
                            
                            
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
                                    options={""} 
                                    add={true} 
                                    text_add="Mujer"
                                    change={null}
                                    value={null} 
                                    styles="" 
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
                            <Input label={data.email} id="nombre" name="nombre" type="text" placeholder={data.emailN} error={data.required7} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>      
                            </NormalSize>  

                            <div className="flex w-[254px] gap-[10px] " >
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
                            <Input label={data.street} id="nombre" name="nombre" type="text" placeholder={data.streetN} error={data.required9}change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>          
                            </NormalSize>    

                            <div className="flex w-[254px] gap-[20px]" >
                                <div className="w-[117px]" >
                                    <Input label={data.num} id="nombre" name="nombre" type="text" placeholder={data.numN} error={data.required10} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>      
                                </div>
                                <div className="w-[117px]" >
                                    <Input label={data.numI} id="nombre" name="nombre" type="text" placeholder={null} error={null} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>      
                                </div>
                            </div>

                            <div className="flex w-[254px] gap-[32px]" >
                                <div className="w-[117px]" >
                                    <Input label={data.floor} id="nombre" name="nombre" type="text" placeholder={null} error={null} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>      
                                </div>
                                <div className="w-[117px]" >
                                    <Input label={data.floorN} id="nombre" name="nombre" type="text" placeholder={null} error={null} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>      
                                </div>
                            </div>


                            

                            <NormalSize>
                            <Input label={data.col} id="nombre" name="nombre" type="text" placeholder={data.colN} error={data.required11} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>          
                            </NormalSize> 

                            <NormalSize>
                            <Input label={data.code} id="nombre" name="nombre" type="text" placeholder={data.codeN} error={data.required12} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>          
                            </NormalSize> 

                            <NormalSize>
                            <Input label={data.town} id="nombre" name="nombre" type="text" placeholder={data.townN} error={data.required13} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>         
                            </NormalSize> 

                            <NormalSize>
                            <Input label={data.city} id="nombre" name="nombre" type="text" placeholder={data.cityN} error={data.required14} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>           
                            </NormalSize> 
                            </div>
                            <div className="flex justify-center  " >
                                <button className="bg-[#4A61CE] w-[254px] mt-[30px] h-[36px]  font-open font-semibold text-[14px] text-[#ffffff] rounded-[5px] " >
                                    {data.act}
                                </button>
                            </div>
                        </div>
                        </div>


                    <div className="w-[1293px] h-[418px] bg-[#F7F8F9] rounded-[10px] shadow-2xl " >
                        <span className="text-[#535353] text-[32px] font-open font-bold   flex justify-center mb-[30px] mt-[30px]  " >
                            {invoice.invoice}
                        </span>

                        <div className="mb-[50px] " > 
                            <div className=" flex flex-wrap gap-x-[32px] gap-y-[8px]  w-[1130px] mx-auto ">
                            
                            
                            <NormalSize>
                            <Input label={invoice.rfc} id="nombre" name="nombre" type="text" placeholder={invoice.rfcN} error={invoice.required} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>          
                            </NormalSize>

                            <NormalSize>
                            <Input label={invoice.email} id="nombre" name="nombre" type="text" placeholder={invoice.emailN} error={invoice.required} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>           
                            </NormalSize>

                            <NormalSize>
                            <Input label={invoice.invStreet} id="nombre" name="nombre" type="text" placeholder={invoice.invStreetN} error={invoice.required} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>          
                            </NormalSize>

                            <div className="flex w-[254px] gap-[32px]" >
                                <div className="w-[117px]" >
                                    <Input label={invoice.num} id="nombre" name="nombre" type="text" placeholder={invoice.numN} error={invoice.required} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>         
                                </div>
                                <div className="w-[117px]" >
                                    <Input label={invoice.numI} id="nombre" name="nombre" type="text" placeholder={null} error={null} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>         
                                </div>
                            </div>

                            <div className="flex w-[254px] gap-[32px]" >
                                <div className="w-[117px]" >
                                    <Input label={invoice.floor} id="nombre" name="nombre" type="text" placeholder={null} error={invoice.required} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>         
                                </div>
                                <div className="w-[117px]" >
                                    <Input label={invoice.floorN} id="nombre" name="nombre" type="text" placeholder={null} error={null} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>         
                                </div>
                            </div>
{/* columna 2 */}
                            

                            <NormalSize>
                            <Input label={invoice.invCol} id="nombre" name="nombre" type="text" placeholder={invoice.invColN} error={invoice.required} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>         
                            </NormalSize>  

                            <NormalSize>
                            <Input label={invoice.invCode} id="nombre" name="nombre" type="text" placeholder={invoice.invCodeN} error={invoice.required} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>          
                            </NormalSize>    

                            <NormalSize>
                            <Input label={invoice.invTown} id="nombre" name="nombre" type="text" placeholder={invoice.invTownN} error={invoice.required} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>          
                            </NormalSize> 

                            <NormalSize>
                            <Input label={invoice.invCity} id="nombre" name="nombre" type="text" placeholder={invoice.invCityN} error={invoice.required} change={null} value={null} autoComplete="off" paddingRight={null} blur={null}/>          
                            </NormalSize> 

                            </div>

                            <div className="flex justify-center pb-[30px] " >
                                <button className="bg-[#4A61CE] w-[254px] mt-[30px]  h-[36px]  font-open font-semibold text-[14px] text-[#ffffff] rounded-[5px] " >
                                    {invoice.act}
                                </button>
                            </div>
                            
                            </div>
                            </div> 
                                            
                    </>


                    <UploadImage
                    label={"Arrastra la imagen aquí o haz"}
                    label_a={"Click Aquí"}
                    id="imageModal"
                    title={"Cargar Imagen"}
                    btn_save={null}
                    imageParent={"updateImage"}
                    width={450}
                /> 
                
         
            
        </>
    )
}

export default DataStudent;