import ScoilLayout from '@/layout/scoil';
import bgScoil from '../assets/background/bg_1.jpg';
import { useEffect, useState } from 'react';
import response from '../../test_data/dataSubjects.json';
import SummarySubject from '@/components/items/summarySubjects';

const SummaryTable = () => {
    const [dataSubjects, setDataSubjects] = useState('');    

    useEffect(() => {
        if(response) {
            setDataSubjects(response.subjects[0]);/* Establecer id de la asignatura a desplegar */           
        }
    }, [response])

    return(
        <>
            <div className="flex w-full h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                <ScoilLayout 
                    vacio={false} 
                    derecha={false} 
                    widthBody='2xl:w-[1293px]' 
                    botonSeleccionado = {'tablero'} 
                    stylesInput= {'w-[878px] '}
                >
                    <>
                        <div className='w-full'>
                            <SummarySubject subjects={dataSubjects} link='/historial-academico' ></SummarySubject>
                        </div>                            
                    </>             
                </ScoilLayout>                
            </div>
        </>
    )
}

export default SummaryTable;

