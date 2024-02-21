import ScoilLayout from "@/layout/scoil";
import bgScoil from '@/assets/background/bg_1.jpg'
import SubmitTask from "@/components/student/submitTask";
import { useState } from "react";

const SendHomeWorkStudent = () => {

    
    const [actualData, setActualData] = useState([
        {
        task: [
            // card 1
            {
                theme:"Investigación sobre Modelos Matemáticos en la Gestión Empresarial",
                state:"PENDIENTE",
            
                publica:"Publicado:",
                publicD:"15/11/2023",
                publicH:"10:00",
            
                installment:"Fecha de entrega:",
                installmentD:"20/11/2023",
                installmentH:"11:30",
            
                points:"Valor:",
                pointsN:"20 puntos",
        
                description:"Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate arcu, conubia litora risus morbi egestas himenaeos varius nostra, hendrerit et dictumst rhoncus proin dapibus est posuere. A commodo viverra aptent magnis dapibus primis eget eros, nisi aliquet vulputate duis pretium lectus potenti tellus curabitur, habitant nec mi nam nostra vestibulum sociis. Auctor purus lacinia blandit condimentum praesent facilisi commodo.",
                comment:"Añade un comentario"
            },
        ], 
    }
]);


    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <ScoilLayout  botonSeleccionado={'aula'} widthBody="w-[1293px]"
                stylesSelect={'hidden '} stylesInput= {'w-[1240px] '}>

                    <>
                        <div className={'w-full flex'} >
                                    <div className='w-full flex flex-col '>
                                        <div className="flex flex-col w-[100%]">
                                            <div className="flex flex-wrap  mt-[-25px]">
                                            {actualData.map((data, index) => (
                                                <div key={index}>
                                                    {data.task.map((taskItem, taskIndex) => (
                                                        <div className="" key={taskIndex} >
                                                            <SubmitTask
                                                                key={taskIndex}
                                                                theme={taskItem.theme}
                                                                state={taskItem.state}
                                                                publica={taskItem.publica}
                                                                publicD={taskItem.publicD}
                                                                publicH={taskItem.publicH}
                                                                installment={taskItem.installment}
                                                                installmentD={taskItem.installmentD}
                                                                installmentH={taskItem.installmentH}
                                                                points={taskItem.points}
                                                                pointsN={taskItem.pointsN}
                                                                description={taskItem.description}
                                                                comment={taskItem.comment}
                                                            />
                                                        </div>
                                                    ))}                                                                          
                                                </div> 
                                            ))}                                                                                                           
                                        </div>
                                    </div>                            
                                       
                                    </div>                            
                                </div>   
     
                    </>
                    {/* Barra Derecha*/}

                </ScoilLayout>                                                    
            </div>            
        </>
    );
}

export default  SendHomeWorkStudent;



