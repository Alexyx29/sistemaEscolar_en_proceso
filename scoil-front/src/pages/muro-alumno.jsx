import bgScoil from '@/assets/background/bg_1.jpg'
import LayoutTeacher from "@/layout/layaoutScoilTeacher";
import VistaAsistenciaProfesor from "@/components/teacher/asistenciaProfesor";
import MyDataProfile from '@/components/form/myData';
import ScoilLayout from '@/layout/scoil';
import DataStudent from '@/components/student/dataStudent';
import Foros from './foros';
import ForoComponent from '@/components/student/foroComponent';
import ProfesorNews from '@/components/teacher/profesorNews';
import StudentNews from '@/components/student/studentNews';
import { useParams } from 'react-router-dom';

const ViewWallStudent = () => {

        const { anuncioId } = useParams();
      
    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <ScoilLayout  stylesInput= {'w-[878px] '}  botonSeleccionado={'wall'} widthBody="w-[1293px]  " derecha = {null} vacio={null} stylesBarRight={'xl:ml-[4%]'} stylesCenter={'xl:w-[74%] lg:w-[75%]  '} stylesUniverse={''} >
                    <>        
                    {/* falta agregar la variable que hara que se vizualice la
                    notificacion seleccionada desde el tablero {anuncioId}     */}
                    <div className='mx-auto flex justify-center' >
                        <StudentNews anuncioId={anuncioId} />
                        </div>
                    </>
                </ScoilLayout>                                                    
            </div>            
        </>
    );
}

export default  ViewWallStudent;



