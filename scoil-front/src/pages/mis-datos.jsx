import bgScoil from '@/assets/background/bg_1.jpg'
import LayoutTeacher from "@/layout/layaoutScoilTeacher";
import VistaAsistenciaProfesor from "@/components/teacher/asistenciaProfesor";
import MyDataProfile from '@/components/form/myData';

const HomeTeacher = () => {
    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <LayoutTeacher widthBody="w-[140vh]" botonSeleccionado={0} derecha={null} >
                    <>
                        <MyDataProfile/>
                    </>
                </LayoutTeacher>                                                    
            </div>            
        </>
    );
}

export default  HomeTeacher;



