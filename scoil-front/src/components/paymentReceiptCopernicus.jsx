import React from "react";
import Modal from "@/layout/modal";
import { faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Triangulo from "./items/triangle";
import copernicus from "../assets/logo/copernicus.svg"
import paypal from "../assets/icons/paypal.svg"
import mercadoPago from "../assets/icons/mercadoPago.svg"
import circleArrow from "../assets/icons/circleArrow.svg"
import { hideModal } from "@/components/useForm";
import '../styles/triangleCopernicus.css'; 





const PaymentReceiptCopernicus = ({submit}) => {

    const textModal = {
        school:"COPERNICUS SCHOOL",
        addres:"Kelvin 27 , C.P. 11590, 10134, Miguel Hidalgo, Ciudad de México, Ciudad de México",
        phone:"5578921377",

        name:"Lara Sofía Laborde Revilla",
        date:"14/11/2023",
        matricula:"Matrícula:",
        matriculaN:"50CK28",
        semester:"Primer Semestre",

        detailpayment:"Detalle de pago",
        pendingPayment:"Pago pendiente",
        
        
        
        concept:"Concepto",
        amount:"Monto",
        discount:"Descuentos",

        registration:"Reinscripción",
        extraordinary:"Extraordinarios",
        month:"Noviembre",
        scholarship:"Beca Alto Rendimiento Ciclo Escolar 2023-1 Carreras de Área I",
        total:"Total a pagar",

        registrationN:"$100,000, 000.00",
        extraordinaryN:"$100.00",
        monthN:"$12,500.00",
        scholarshipN:"$100,000, 000.00",
        totalN:"$100,000,000.00",

        schoolN:"COPERNICUS SCHOOL",
        email:"ddelarosa@kachimushi.com",
        phone2:"5578921377",
    }

    const close = () => {
        hideModal('copernicus');
        }

    const TrianguloCopernicus = () => {
        return (
            <div className='ml-[px] mt-[px] w-full' >
                <div className="triangulo-containerCopernicus  mt-[px]">
                    <div className="trianguloCopernicus "></div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <Modal id="copernicus" 
                overflowHidden={true} padding={null} zIndex={50}
                showTitle={false} minHeight={'980px'} showOptions={false}
                submit={submit} title={null} size="978px" options={false} >
            
            
                <div>

                
                    <div className="ml-[px] mt-[px] w-full " >
                        <TrianguloCopernicus/>
                    </div>

                        <button className="absolute z-10 w-[31px] h-[31px] z-10 ml-[25px] mt-[25px] flex items-start" onClick={close}>
                            <img src={circleArrow.src} alt="" action={close} className="z-10 w-[31px] h-[31px] " />
                        </button>

                        <span className="flez flex-col " >
                            <div className="flex">
                                <div className="w-[168px] h-[136px] z-10 ml-[37px] mt-[45px] ">
                                    <img src={copernicus.src} alt="" />
                                </div>
                                <div className="flex flex-col text-left w-[380px] z-10 font-open font-sans ml-[px] mt-[70px]  ">
                                    <span className="text-[32px] text-[#000000]">
                                        {textModal.school}
                                    </span>

                                    <span className="mt-[-10px] text-[14px] text-[#606060]">
                                        {textModal.addres}
                                    </span>
                                    
                                    <span className="z- text-[14px] text-[#606060] ">
                                    {textModal.phone}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="flex flex-col z-10 font-open font-sans  text-[#000000]  text-right items-end mr-[60px] mt-[55px] w-[full] justify-right">
                                <span className=" w-[380px] text-[22px] font-semibold">
                                {textModal.name}
                                </span>

                                <span className=" w-[380px] text-[16px] ">
                                {textModal.date}
                                </span>

                                <span className="flex  justify-right text-right items-end" >
                                    <span className="  text-[16px] ">
                                    {textModal.matricula}
                                    </span>

                                    <span className="ml-1 text-[16px] font-semibold ">
                                    {textModal.matriculaN}
                                    </span>
                                </span>

                                <span className=" w-[380px] ">
                                {textModal.semester}
                                </span>
                            </div>

                            <div className="z-10 ml-[60px] flex flex-col text-left font-open font-sans text-[#000000] " >
                                <span className=" text-[28px] font-semibold ">
                                {textModal.detailpayment}
                                </span>
                           

                                <span className=" text-[16px] ">
                                {textModal.pendingPayment}
                                </span>
                            </div>
                            
                            <div className=" mt-[60px] ml-[67px] w-full flex font-open font-semibold text-[16px] text-[#95958E]" >
                                <span className="w-[90px]  ">
                                {textModal.concept}
                                </span>

                                <span className="w-[58opx] ml-[338px]  ">
                                {textModal.amount}
                                </span>

                                <span className=" ml-[234px] w-[104px] text-right flex justify-end items-end ">
                                {textModal.discount}
                                </span>
                            </div>

                            <div className="mr-[60px] ml-[60px] ">
                                <div className="border border-[1px] border-[#000000] " ></div>
                            </div>

                            <div className="flex mt-[10px] mb-[22px]" >
                                <div className=" ml-[75px] flex flex-col w-[283px] text-left font-open text-[16px] text-[#000000] " >
                                    <span className="  ">
                                    {textModal.registration}
                                    </span>

                                    <span className="  ">
                                    {textModal.extraordinary}
                                    </span>

                                    <span className="  ">
                                    {textModal.month}
                                    </span>

                                    <span className="  ">
                                    {textModal.scholarship}
                                    </span>
                                </div>

                                <div className="flex flex-col ml-[35px] w-[153px] text-right font-open text-[16px] text-[#000000]" >
                                   
                                    <span className="  ">
                                    {textModal.registrationN}
                                    </span>

                                    <span className="  ">
                                    {textModal.extraordinaryN}
                                    </span>

                                    <span className="  ">
                                    {textModal.monthN}
                                    </span>
                                </div>

                                <div className="flex flex-col w-[157px] mt-[95px] ml-[180px]  text-right font-open text-[16px] text-[#000000]" >
                                    <span className="  ">
                                    {textModal.scholarshipN}
                                    </span>
                                </div>
                            </div> 

                            <div className="mr-[60px] ml-[60px] ">
                                <div className="border border-[3px] border-[#000000] " ></div>
                            </div>

                            <div className="mt-[5px] mb-[50px] ml-[75px] mr-[75px] flex font-open font-semibold text-[28px] border-[#000000] justify-between">
                                <span className="  ">
                                {textModal.total}
                                </span>
                                <span className="  ">
                                {textModal.totalN}
                                </span>
                            </div>

                            <div className="mr-[60px] ml-[60px] ">
                                <div className="border border-[1px] border-[#95958E] " ></div>
                            </div>

                            <div className=" ml-[60px] mt-[13px] font-open text-[12px] text-[#606060] text-left ">
                                <span className="w-[126px]  ">
                                {textModal.schoolN}
                                </span>

                                <span className="w-[158px] ml-[470px] mr-[15px]">
                                {textModal.email}
                                </span>
                                 <span className="border-l-2 text-[12px] border-[#95958E]"> </span>
                                <span className="w-[74px] ml-[15px] ">
                                {textModal.phone2}
                                </span>
                            </div>

                            <div className=" flex ml-[295px] mt-[40px]" >
                                <button className="w-[153px] h-[61px] bg-[#ECEFF0] flex justify-center items-center rounded-2xl rounded-[5px] border border-[#D0D0D0]">
                                <img src={paypal.src} alt="" />
                                </button>

                                <button className="w-[153px] ml-[80px] h-[61px] bg-[#ECEFF0] flex justify-center items-center rounded-2xl rounded-[5px] border border-[#D0D0D0]">
                                <img src={mercadoPago.src} alt="" />
                                </button>
                            </div>
                        </span>
                </div>
            </Modal>
        </div>
    );
    };

    export default PaymentReceiptCopernicus;
