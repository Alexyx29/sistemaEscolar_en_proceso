import ScoilLayout from '@/layout/scoil';
import bgScoil from '../assets/background/bg_1.jpg';
import { useEffect, useState } from 'react';
import response from '../../test_data/dataSubjects.json';
import SummarySubject from '@/components/items/summarySubjects';

const AcademicHistory = () => {
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
                    stylesSelect={'hidden'}
                    stylesInput= {'w-[1244px] '}
                >
                    <>
                        <div className='w-full h-[84vh] bg-[#fff] rounded-[10px] '>
                           <span className='text-[55px] ' >
                            {'Historial Académico'}
                           </span>
                        </div>                            
                    </>             
                </ScoilLayout>                
            </div>
        </>
    )
}

export default AcademicHistory;

