import Materia from "@/components/items/materias";
import Section from "@/components/menu/seccion";
import ScoilLayout from "@/layout/scoil";
import mat from '../assets/icons/transportador.svg';
import lit from '../assets/icons/libro.svg';
import admin from '../assets/icons/engranaje.svg';
import conta from '../assets/icons/calculadora.svg';
import dere from '../assets/icons/balanza.svg';
import info from '../assets/icons/codigo.svg';
import mark from '../assets/icons/colores.svg';
import Pago from "@/components/items/pagos";
import BarraDerecha from "@/components/menu/barraDerecha";
import Trayectoria from "@/components/items/trayectoria";
import Notificaciones from "@/components/menu/notificaciones";
import Calendar from "@/components/items/calendar";
import TestGrading from "@/components/teacher/testGrading";
import TimerExamStudent from "@/components/student/timerExam";
import LayoutTeacher from "@/layout/layaoutScoilTeacher";
import VistaAsistenciaProfesor from "@/components/teacher/asistenciaProfesor";
import SmallChat from "@/components/chat/smallChat";
import alumno from '@/assets/users/user-2.svg'
import teacher from '@/assets/users/user-2.svg'
import bgScoil from '../assets/background/bg_1.jpg';



const MakeExam = () => {
    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <ScoilLayout 
                    botonSeleccionado={'aula'} 
                    widthBody='w-[972px]'
                    derecha={
                        <>
                            {/* Contenido de sección superior*/}
                            <BarraDerecha 
                                head ={
                                    <>
                                      
                                            <TimerExamStudent /> </>}>
                                            
                                            <>
                                                <SmallChat   />
                                            </>
                                        
                                    
                                    
                                    
                                
                                
                                            </BarraDerecha>
                            </>
                    }
                >
                    <>
                        <TestGrading />
                        {/* <div className=" rounded-[10px] w-[100%] bg-shadow-lg " >
                            <div className=" rounded-[10px]  bg-shadow-lg" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                                <VistaAsistenciaProfesor />
                            </div> 
                        </div>                        */}
                    </>
                </ScoilLayout>
            </div>            
        </>
    );
}

export default  MakeExam;



