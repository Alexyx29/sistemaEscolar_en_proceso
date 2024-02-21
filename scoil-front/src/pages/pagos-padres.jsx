import bgScoil from '../assets/background/bg_1.jpg';
import ParentsLayout from "@/layout/parentsLayout";
import { useEffect, useState } from "react";
import responseSubjects from '../../test_data/dataSubjects.json';
import Section from '@/components/menu/seccion';
import InfoPayments from '@/components/items/infopayments';
import IconMoney from '@/components/items/iconMoney';
import BarraDerecha from '@/components/menu/barraDerecha';
import Calendar from '@/components/items/calendar';
import Items from '@/components/items/items';
import facturacion from '../assets/icons/facturacion.svg';
import monedero from '../assets/icons/monedero.svg';
import asistencia from '../assets/icons/asistencia.svg';
import PaymentsQualifications from '@/components/parents/paymentsQualifications';
import responseParent from '../../test_data/dataParent.json';
import { getActualSystem } from '@/components/useLanguage';


const ParentsPayments = () => {
    const system_selected = getActualSystem();
    const [ text, setText ] = useState({paid:"Pagado el", limitedDate:"Fecha límite de pago", defeated:"Vencido", forPay: 'Por pagar'});
    const [ promedio, setPromedio ] = useState(0);
    const [ carrera, setCarrera ] = useState('');
    const [ defead, setDefead ] = useState(false);
    const [ pagos, setPagos ] = useState([]);

    const [idButton, setIdButton] = useState(4);
    const [subjects, setSubjects] = useState('');
    const [parent, setParent] = useState('');
    
    useEffect(() => {    
        setSubjects(responseSubjects);
        setParent(responseParent.parent); 
    },[responseSubjects, responseParent]);


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
        // getCalificaciones();
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

   


    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <ParentsLayout botonSeleccionado={idButton} parent={parent} cuerpo ={
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
                } derecha= {
                    <BarraDerecha head ={                            
                        <div id="cal">
                            <Calendar className="widhtPayments"></Calendar>
                        </div>                        
                    }                                        
                    plus= {
                        <>                          
                            <div className="flex  h-[92px] ml-[20px]  ">
                                <Items imagen={facturacion.src} sizeMateria="text-[12px] mt-[1px]" mImage=" mt-[5px] " nombre= {"Facturación"}  />                    
                                <Items imagen={monedero.src} heightImage='80px' widthImage='70px' sizeMateria="text-[12px] mt-[px]" nombre= {"Monedero"}     />
                                <Items imagen={asistencia.src} heightImage='70px' widthImage='50px' mImage=" mt-[8px] " sizeMateria="text-[12px] mt-[8px]" nombre= {"Ayuda"}  />
                            </div>                                           
                        </>
                    }
                    body= {
                        <>
                            <PaymentsQualifications dataSubjects={subjects}></PaymentsQualifications>
                        </>
                    }                                        
                    />
                }
                />                                                    
            </div>            
        </>
    );
}

export default ParentsPayments;



