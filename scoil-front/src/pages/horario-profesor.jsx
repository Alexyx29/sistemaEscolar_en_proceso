import bgScoil from '@/assets/background/bg_1.jpg'
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
import LayoutTeacher from "@/layout/layaoutScoilTeacher";
import StudentListTeacher from "@/components/teacher/studentListTeacher";
import AttendaceTeacher from "@/components/teacher/attendance";
import VistaAsistenciaProfesor from "@/components/teacher/asistenciaProfesor";
import TeacherCalendar from "@/components/teacher/TeacherCalendar";

const HomeTeacher = () => {
    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <LayoutTeacher 
                    widthBody="w-[140vh]"
                    derecha={null}
                >
                    <>
                        <div className=" rounded-[10px] w-[100%] bg-shadow-lg " >
                            <div className=" rounded-[10px] h-full bg-shadow-lg" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                                <TeacherCalendar />
                            </div> 

                        </div>
     
                    </>
                </LayoutTeacher>                                                    
            </div>            
        </>
    );
}

export default  HomeTeacher;



