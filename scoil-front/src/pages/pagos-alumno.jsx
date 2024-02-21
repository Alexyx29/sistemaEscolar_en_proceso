import Materia from "@/components/items/materias";
import Section from "@/components/menu/seccion";
import ScoilLayout from "@/layout/scoil";
import bgScoil from '../assets/background/bg_1.jpg';
import mat from '../assets/icons/transportador.svg';
import lit from '../assets/icons/libro.svg';
import admin from '../assets/icons/engranaje.svg';
import conta from '../assets/icons/calculadora.svg';
import dere from '../assets/icons/balanza.svg';
import info from '../assets/icons/codigo.svg';
import mark from '../assets/icons/colores.svg';
import facturacion from '../assets/icons/facturacion.svg';
import monedero from '../assets/icons/monedero.svg';
import asistencia from '../assets/icons/asistencia.svg';
import '@/styles/globals.css'

import Pago from "@/components/items/pagos";
import BarraDerecha from "@/components/menu/barraDerecha";
import Trayectoria from "@/components/items/trayectoria";
import Notificaciones from "@/components/menu/notificaciones";
import Calendar from "@/components/items/calendar";

import IconMoney from "@/components/items/iconMoney";
import InfoPayments from "@/components/items/infopayments";
import Line from "@/components/items/line";
import Items from "@/components/items/items";
import AlertDefeaded from "@/components/items/alertDefeaded";
import Subjects from "@/components/student/subjects";

import espaniol from '@/assets/background/espaniol.png'
import mate from '@/assets/background/mate.png'
import naturaleza from '@/assets/background/naturaleza.png'
import fcye from '@/assets/background/fcye.png'
import artes from '@/assets/background/artes.png'
import ingles from '@/assets/background/ingles.png'
import eduFisic from '@/assets/background/eduFisic.png'

import { useContext, useEffect, useState } from "react";
import { getTextApi, setItemApi, showModal } from "@/components/useForm";
import { getActualSystem } from "@/components/useLanguage";
import ClassCalendar from "@/components/student/classCalendar";

const Payments = () => {
    const system_selected = getActualSystem();
    const [ text, setText ] = useState({paid:"Pagado el", limitedDate:"Fecha límite de pago", defeated:"Vencido", forPay: 'Por pagar'});
    const [ promedio, setPromedio ] = useState(0);
    const [ carrera, setCarrera ] = useState('');
    const [ defead, setDefead ] = useState(false);
    const [ pagos, setPagos ] = useState([]);
    const [ dataCalificacion, setCalificacion ] = useState([]);


    useEffect(() => {
        // let form = new FormData();
        
        // // form.append('_user_auth', {'id': 158});
        // form.append('fecha-inicial', '2024-01-01')
        // form.append('fecha-final', '2024-01-08')
        // form.append('systemUid', system_selected.token);
        // // form.append('_token', '1|hbfgdhfgdhjdfgjgdfjdfgjgfgfdjfdjdfgj');

        // setItemApi(`user/eventos-del-mes`, form, async (r) => {
               
        // }, err => {
                
        // }, true);

        // getTextApi(`signup/publicaciones`, (r) => {}, '');
        getInitial();
        getCalificaciones();
    }, []);

    const getInitial = () => {
        const response = {
            'promedio': 8.2,
            'carrera': 'LIC. ADMINISTRACIÓN',
            'defeaded': true,
            'pagos': [
                {
                    id: 2,
                    year: "SEGUNDO AÑO",
                    detail:'DETALLE',
                    pay:'PAGAR',
                    bntDetail:true,
                    btnPay:true,
                    periodos: [
                        {
                            id: 5,
                            periodo: "CUATRIMESTRE 5",
                            format_periodo: "MES",
                            fecha_pago: "",
                            beca: null,
                            fecha_periodo: "",
                            fecha_limite:"",
                            monto: "",
                            defeaded: true,
                            periodo_actual: true,
                            meses: [
                                {
                                    id: 3,
                                    defeaded: true,
                                    fecha_pago: "",
                                    beca: null,
                                    beca_monto: null,
                                    fecha_periodo: "Del 01/06/2022 al 30/06/2022",
                                    fecha_limite:"10/06/2021",
                                    subtotal: "$ 100,000,650.00",
                                    surcharge: "10",
                                    surcharge_monto: "$ 165.00",
                                    total_monto: "$ 1,815.00"
                                }, {
                                    id: 2,
                                    defeaded: true,
                                    fecha_pago: "",
                                    beca: null,
                                    beca_monto: null,
                                    fecha_periodo: "Del 01/05/2022 al 31/05/2022",
                                    fecha_limite:"10/05/2021",
                                    subtotal: "$ 1,650.00",
                                    surcharge: "20",
                                    surcharge_monto: "$ 330.00",
                                    total_monto: "$ 1,980.00"
                                }, {
                                    id: 1,
                                    defeaded: false,
                                    fecha_pago: "18/04/2021",
                                    beca: "Beca Alto Rendimiento Ciclo Escolar 2023-1 Carreras de Área I",
                                    beca_monto: "-$650",
                                    fecha_periodo: "Del 01/06/2022 al 30/06/2022",
                                    fecha_limite:"10/06/2021",
                                    subtotal: "$ 1,650.00",
                                    surcharge: "10",
                                    surcharge_monto: "$ 165.00",
                                    total_monto: "$ 1,165.00"
                                }, {
                                    // ejemplo Pendiente de pago
                                    id: 4,
                                    defeaded: false,
                                    forPay:"Por Pagar",
                                    fecha_pago: " ",
                                    beca: "Beca Alto Rendimiento Ciclo Escolar 2023-1 Carreras de Área I",
                                    beca_monto: "-$650",
                                    fecha_periodo: "Del 01/06/2022 al 30/06/2022",
                                    fecha_limite:"10/02/2024",
                                    subtotal: "$ 1,650.00",
                                    surcharge: "0",
                                    surcharge_monto: "0",
                                    total_monto: "$ 1,165.00"
                                }
                            ]
                        }
                    ]
                }, {
                    id: 1,
                    year: "PRIMER AÑO",
                    detail:'DETALLE',
                    pay:'PAGAR',
                    bntDetail:true,
                    btnPay:false,
                    periodos: [
                        {
                            id: 4,
                            periodo: "CUATRIMESTRE 4",
                            format_periodo: "MES",
                            fecha_pago: "15/12/2021",
                            beca: null,
                            fecha_periodo: "Del 01/06/2022 al 30/06/2022",
                            fecha_limite:"25/03/2021",
                            monto: "$ 100,000,650.00",
                            defeaded: false,
                            periodo_actual: false,
                            meses: [

                            ]
                        }, {
                            id: 3,
                            periodo: "CUATRIMESTRE 3",
                            format_periodo: "MES",
                            fecha_pago: "10/06/2021",
                            beca: null,
                            fecha_periodo: "Del 01/05/2022 al 31/05/2022",
                            fecha_limite:"10/05/2021",
                            monto: "$ 1,650.00",
                            defeaded: false,
                            periodo_actual: false,
                            meses: [

                            ]
                        }, {
                            id: 2,
                            periodo: "CUATRIMESTRE 2",
                            format_periodo: "MES",
                            fecha_pago: "18/04/2021",
                            beca: "Beca Alto Rendimiento Ciclo Escolar 2022-2",
                            fecha_periodo: "Del 01/04/2022 al 30/04/2022",
                            fecha_limite:"10/04/2021",
                            monto: "$ 1,000.00",
                            defeaded: false,
                            periodo_actual: false,
                            meses: [

                            ]
                        }, {
                            id: 1,
                            periodo: "CUATRIMESTRE 1",
                            format_periodo: "MES",
                            fecha_pago: "18/04/2021",
                            beca: "Beca Alto Rendimiento Ciclo Escolar 2022-2",
                            fecha_periodo: "Del 01/04/2022 al 30/04/2022",
                            fecha_limite:"10/04/2021",
                            monto: "$ 1,000.00",
                            defeaded: false,
                            periodo_actual: false,
                            meses: [

                            ]
                        }
                    ]

                }
            ]
        };
        
        setPagos(response.pagos);
        setDefead(response.defeaded);
        setPromedio(response.promedio);
        setCarrera(response.carrera);
    }

    const getCalificaciones = () => {
        
            const subjetSt = {
                'subjects': [
                {
                    'image': espaniol.src,
                    'name': 'Español',
                    'calificacion':'10',
                },
                {
                    'image': mate.src,
                    'name': 'Matemáticas',
                    'calificacion':'6.4',
                },
                {
                    'image': naturaleza.src,
                    'name': 'Exploración de la Naturaleza y la Sociedad',
                    'calificacion':'9.9',
                },
                {
                    'image': fcye.src,
                    'name': 'Formación Cívica y Ética',
                    'calificacion':'9.8',
                },
                {
                    'image': artes.src,
                    'name': 'Educación Artística',
                    'calificacion':'3.2',
                },
                {
                    'image': ingles.src,
                    'name': 'Inglés',
                    'calificacion':'8.2',
                },
                {
                    'image': eduFisic.src,
                    'name':'Educación física',
                    'calificacion':'10',
                },
            ],
        }
            
       setCalificacion(subjetSt.subjects);
    }

    return (
        <>
            <div className="flex w-full h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <ScoilLayout 
                    botonSeleccionado={'pagos'}
                    stylesSelect={'hidden '}
                    stylesInput= {'w-[924px] '}
                    derecha={
                        <>
                            

                                    <div className="flex flex-col gap-y-[30px] " >
                                        < ClassCalendar id="cal"   />
                                        
                                        <Section>
                                            <div className="flex h-[92px]  ">
                                                <Items imagen={facturacion.src} sizeMateria="text-[12px] mt-[1px]" mImage=" mt-[5px] " nombre= {"Facturación"}  />                    
                                                <Items imagen={monedero.src} heightImage='80px' widthImage='70px' sizeMateria="text-[12px] mt-[px]" nombre= {"Monedero"}     />
                                            </div>       
                                        </Section>
                                        
                                
                                    <Section>
                                        <Trayectoria  promedio={promedio} carrera={carrera} sizePromedio="text-[50px]" sizePromGene="text-[12px]" sizeCarrera="text-[12px]"  mtPromGene="mt-[25px] mb-[1px]" activeStar={false} flexer={"mt-[10px] mb-[-20px] "} mlText="ml-[15px]" />
                                        <div className="bg-[#ACACA2] h-[1px] mt-[-15px] mb-[10px]">
                                            <Line colors="bg-gray-100" width = 'w-full' />
                                        </div>
                                        <div className="h-[310px] " >
                                            <div className="h-[290px] overflow-auto news " >
                                                <Subjects stylesSubjects='py-[5px]' type={'attendanceVSmall'} data={dataCalificacion} promedio={promedio} carrera={carrera} sizeMateria="text-[13px]" sizeCalificacion="text-[16px]"  mRight="mr-[15px]" wMateria='w-[140px]' />
                                            </div>
                                        </div>
                                        </Section>
                                    </div>
                                                        
                        </>
                    }
                >
                    <>
                        <div className="flex grow flex-col gap-[30px] min-w-min w-[972px]">
                            {pagos.map((pago, index) => {
                                return (
                                    <Section key={index} width="w-[100%] my-[30px] ">
                                        <IconMoney year={pago.year} pay={pago.pay} details={pago.detail} btnPay={pago.btnPay} btnDetail={pago.btnDetail}   sizeIcon='w-[78px] h-[78px]' />
                                        {pago.periodos.map((periodo, index2) => {
                                            return (
                                                <>
                                                    {periodo.periodo_actual ?
                                                        periodo.meses.map((mes, index3) => {
                                                            return (
                                                                <>
                                                                    <InfoPayments  
                                                                        colorDefaeded= "text-[#DE0000]"
                                                                        colorPayGreen= "text-[#80BF1B]"
                                                                        colorRecharge={mes.defeaded ?  "text-[#DE0000]" : "text-[#80BF1B]"}
                                                                        nColor="text-[#535A4E]"
                                                                        nColor2="text-[#DE0000]"
                                                                        nColor3="text-[#DE0000]"
                                                                        nColor4="text-[#80BF1B]"
                                                                        month={periodo.format_periodo}
                                                                        cuatri={'('+periodo.periodo+')'}

                                                                        // defeaded={mes.defeaded ? text.defeated : null}
                                                                        
                                                                        // forPayment={!mes.defeaded && mes.surcharge === "0" ? text.forPay : null}
                                                                        // paymentON={(mes.defeaded && text.forPay) ? null : text.paid}

                                                                        paymentON={mes.defeaded ? text.defeated :  (mes.defeaded && mes.fecha_pago != " ") ?  text.forPay : text.paid  }
                                                                        paymentOnDate={mes.defeaded ? null : mes.fecha_pago }
                                                                        beca={mes.beca}
                                                                        fromTo={mes.fecha_periodo}
                                                                        dateLimeted={text.limitedDate}
                                                                        dateLimetedN={mes.fecha_limite}
                                                                        recharge={'Recargo '+ mes.surcharge + "%"}
                                                                        moneyN={mes.subtotal}
                                                                        moneyN2={mes.surcharge_monto}
                                                                        moneyN3={mes.beca_monto}
                                                                        moneyN4={mes.total_monto}
                                                                        activo={periodo.meses.length == (index3 + 1) ? true : null}
                                                                    /> 
                                                                </>
                                                            )
                                                        })
                                                    :
                                                        <InfoPayments  
                                                            colorDefaeded= "text-[#DE0000]"
                                                            colorPayGreen= "text-[#80BF1B]"
                                                            colorRecharge="text-[#80BF1B]"
                                                            nColor="text-[#535A4E]"
                                                            nColor2="text-[#DE0000]"
                                                            nColor3="text-[#DE0000]"
                                                            nColor4="text-[#80BF1B]"
                                                            month={periodo.periodo}
                                                            cuatri={null}
                                                            defeaded={null}
                                                            paymentON={text.paid}
                                                            paymentOnDate={periodo.fecha_pago}
                                                            beca={periodo.beca}
                                                            fromTo={periodo.fecha_periodo}
                                                            dateLimeted={text.limitedDate}
                                                            dateLimetedN={periodo.fecha_limite}
                                                            recharge={null}
                                                            moneyN={periodo.monto}
                                                            moneyN2={null}
                                                            moneyN3={null}
                                                            moneyN4={null}
                                                            // activo={true}
                                                            activoBlue={pago.periodos.length == (index2 + 1) ? true : null}
                                                        />      
                                                    }
                                                </>
                                            )
                                        })}
                                    </Section>
                                )
                            })}
                            {/* {defead &&
                                <Section width="w-[866px]">
                                    <AlertDefeaded /> 
                                </Section>
                            } */}
                        </div>              
                    </>
                </ScoilLayout>
            </div>
        </>
    );
}

export default  Payments;