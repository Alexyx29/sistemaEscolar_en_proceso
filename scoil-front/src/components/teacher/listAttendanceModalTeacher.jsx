import React from "react";
import Modal from "@/layout/modal";

import { hideModal } from "../useForm";
import Generic from "../items/buttons/generic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import ImageBase from "../items/imageBase";
import InputIcon from "../form/inputIcon";
import Status from "../form/status";






const ListAttendanceModalTeacher = ({submit}) => {


    const close = () => {
        hideModal('listAttendanceTeacher');
        }
        const actionSave = () => {
            //falta agregar variables aqui...creo
           }
           const showExplorerDialog = () => {
            //falta agregar variables aqui...creo
           }
           const show = () => {
        //falta agregar variables aqui...creo
           }
   const options = <>
    {/* <Generic action={actionSave} icon={<FontAwesomeIcon icon={faTrashCan} className="mt-[12px]"/>} send={null}  /> */}
    <Generic action={actionSave} icon={<FontAwesomeIcon icon={faCheck} className="mt-[5px]" />} send={null} />
    <showModal action={showExplorerDialog} send={show} />
      
    </>
   
   const text = {
    title:"Asistencia del 23/04/2023 - 1°A",
    product:"hola",
    unit:"hola",
    sku:"hola",
    descr:"hola",
   }

   const student = [
    {id:1, asist:true, retar:true, name:"Alberto", lastName:"Ramírez Sánchez", status:"Alumno"},
    {id:2, asist:true, retar:true, name:"Ángel Reneé", lastName:"Silva Delgado", status:"Alumno"},
    {id:3, asist:true, retar:true, name:"Alejandra", lastName:"Rojas", status:"Alumno"},
    {id:4, asist:true, retar:true, name:"Angel", lastName:"Villa", status:"Alumno"},
    {id:5, asist:true, retar:true, name:"Amauri", lastName:"Urquiza Vega", status:"Alumno"},
    {id:6, asist:true, retar:true, name:"Ángela ", lastName:"Aguilar Muñoz", status:"Alumno"},
    {id:7, asist:true, retar:true, name:"Carlos", lastName:"Sánchez", status:"Alumno"},
    {id:8, asist:true, retar:true, name:"Erick", lastName:"Nam", status:"Alumno"},
    {id:9, asist:true, retar:true, name:"Cristian", lastName:"Herrera López", status:"Alumno"},
    {id:10, asist:true, retar:true, name:"Daniela Marlene", lastName:"Ramírez Zamudio", status:"Alumno"},

    
   ]

    return (
        
            <>
                <Modal id="listAttendanceTeacher" title={text.title} size="599px" minHeight='924PX' showOptions={true} options={options} padding={''} align="mx-[40px]">
                <div className=" lg:gap-y-3 gap-y-1 gap-x-5 flex flex-col items-center justify-center mr-[60px] flex-wrap  mt-[50px]  h-[px]  ">
                    <div className="w-[452px] h-[38px] " >
                        <InputIcon icono='search' placeholder='Buscar'/>
                    </div>
                    <div className=" w-[437px] mt-[35px]" >
                        <div className="w-full text-end ">
                            <span className="mr-[50px]" >
                                {"Asistencia"}
                            </span>
                            <span >
                                {"Retardo"}
                            </span>
                        </div>
                        <div className="h-[683px] overflow-auto news  " >
                        {student.map((student) => (
                        <div key={student.id}  className="flex justify-between items-center mb-[35px]" >
                            
                            <div className="w-[full] h-[82px] font-open flex items-center "> 
                                <div className=" w-[66px] h-[66px] " >
                                    <ImageBase  size="66px"  />
                                </div>
                                <div className=" text-left flex flex-col  pl-[18px] " >
                                    <span className="font-bold font-bold text-[14px] text-[#223955] ">{student.name}</span>
                                    <span className="font-open  text-[14px] text-[#223955]  " >{student.lastName}</span>
                                    <span className="font-open text-[14px] text-[#A2ACB7]" >{student.status}</span>
                                </div>
                            </div>
                            <div className="flex justify-between space-x-[50px] font-open text-[#606060]  " > 
                                <Status id={student.asist} showPadding={false}></Status>
                                <Status id={student.retar} showPadding={false}></Status>
                            </div>
                        </div>
    ))}</div>
                        
                    </div>
                </div>
                </Modal>
    
            </>
        )
    }

    export default ListAttendanceModalTeacher;
