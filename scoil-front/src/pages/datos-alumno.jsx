import bgScoil from '@/assets/background/bg_1.jpg'
import LayoutTeacher from "@/layout/layaoutScoilTeacher";
import VistaAsistenciaProfesor from "@/components/teacher/asistenciaProfesor";
import MyDataProfile from '@/components/form/myData';
import ScoilLayout from '@/layout/scoil';
import DataStudent from '@/components/student/dataStudent';

const ViewDataStudent = () => {
    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <ScoilLayout  botonSeleccionado={0} widthBody="w-[1192px]" derecha = {null} >
                    <>
                        <DataStudent />
                    </>
                </ScoilLayout>                                                    
            </div>            
        </>
    );
}

export default  ViewDataStudent;



