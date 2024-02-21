import bgScoil from '../assets/background/bg_1.jpg';
import BarraDerecha from "@/components/menu/barraDerecha";
import Trayectoria from "@/components/items/trayectoria";
import Notificaciones from "@/components/menu/notificaciones";
import ParentsLayout from "@/layout/parentsLayout";
import Payment from "@/components/payment";
import { useEffect, useState } from "react";
import ParentsQualifications from "@/components/parents/parentsQualifications";
import ParentsAssistances from "@/components/parents/parentsAssistances";
import responsePayment from '../../test_data/dataPayment.json';
import responseSubjects from '../../test_data/dataSubjects.json';
import responseStudent from '../../test_data/dataStudent.json';
import responseNews from '../../test_data/dataNews.json';
import responseParent from '../../test_data/dataParent.json';

const ParentsBoard = () => {
    const [idButton, setIdButton] = useState(1);
    const [paymentData, setPaymentData] = useState('');
    const [subjects, setSubjects] = useState('');
    const [average, setAverage] = useState(0);
    const [career, setCareer] = useState('');
    const [news, setNews] = useState('');
    const [parent, setParent] = useState('');

    useEffect(() => {
        setPaymentData(responsePayment);
        setSubjects(responseSubjects.subjects);
        setAverage(responseStudent.student.average);
        setCareer(responseStudent.student.career);
        setNews(responseNews.news);
        setParent(responseParent.parent);
    },[responsePayment, responseSubjects, responseStudent,responseNews, responseParent]);


    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <ParentsLayout botonSeleccionado={idButton} parent={parent} cuerpo ={
                    <>
                        <div className="w-full flex flex-col gap-[30px]">
                            <div>
                                <Payment paymentData={paymentData}></Payment>
                            </div>
                            <div className="flex w-full gap-[30px]">
                                <div className="w-full">
                                    <ParentsQualifications subjectsList={subjects}></ParentsQualifications>                                    
                                </div>
                                <div className="w-full">                                                                
                                    <ParentsAssistances subjectsList={subjects}></ParentsAssistances>
                                </div>
                            </div>                            
                        </div>                        
                    </>
                    /* BARRA DERECHA */
                } derecha={
                    <>                    
                        <BarraDerecha head ={
                            <>
                                <Trayectoria promedio={average} carrera={career}></Trayectoria>
                            </>                            
                        }body= {
                            <>
                                <Notificaciones notificaciones={news.length} newsList={news} borde={true}></Notificaciones>
                            </>
                        }
                        />
                    </>
                }
                />                                                    
            </div>            
        </>
    );
}

export default  ParentsBoard;



