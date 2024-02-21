import bgScoil from '@/assets/background/bg_1.jpg'
import LayoutTeacher from "@/layout/layaoutScoilTeacher";
import VistaAsistenciaProfesor from "@/components/teacher/asistenciaProfesor";
import MyDataProfile from '@/components/form/myData';
import ScoilLayout from '@/layout/scoil';
import DataStudent from '@/components/student/dataStudent';
import Foros from './foros';
import ForoComponent from '@/components/student/foroComponent';

const ViewForoStudent = () => {
    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <ScoilLayout  
                    botonSeleccionado={'foro'}   
                    widthBody="w-[1293px]"
                    derecha = {null}
                >    
                    <>            
                        <div className='shadow-2xl ' >
                            <ForoComponent editButtons={false} />
                        </div>
                    </>
                    
                </ScoilLayout>                                                    
            </div>            
        </>
    );
}

export default  ViewForoStudent;



