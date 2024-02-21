import bgScoil from '../assets/background/bg_1.jpg';
import LayoutTeacher from "@/layout/layaoutScoilTeacher";
import ForoComponent from '@/components/student/foroComponent';

const Foros = (categoryInitial=1,  buttons=false,) => {

    
    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <LayoutTeacher 
                    botonSeleccionado={'foro'} 
                    wrap={"fixed"} 

                    widthBody="w-[1293px]" 
                >
                    <>
                        <div className='shadow-2xl mt-16' >
                            <ForoComponent  />
                        </div>
                    </>
                </LayoutTeacher>                                  
        </div>            
    </>
);
 }

export default Foros;

// <div className={'flex flex-col grow gap-[50px]'}>
                              

