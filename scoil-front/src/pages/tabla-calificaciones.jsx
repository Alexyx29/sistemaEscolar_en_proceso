import ScoilLayout from '@/layout/scoil';
import bgScoil from '../assets/background/bg_1.jpg';
import TableQualification from '@/components/items/tableQualifications';
import { useEffect, useState } from 'react';
import response from '../../test_data/dataSubjects.json';

const TableQualifications = () => {
    const [dataSubjects, setDataSubjects] = useState([]);
    const [average, setAverage] = useState(0);
    const [title, setTitle] = useState('');

    useEffect(() => {
        if(response) {
            setDataSubjects(response.subjects);
            setAverage(response.average);
            setTitle(response.grade);
        }
    }, [response])

    return(
        <>
            <div className="flex w-[100%] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                <ScoilLayout 
                    vacio={false} 
                    derecha={false} 
                    widthBody='2xl:w-[1293px]' 
                    botonSeleccionado = {'tablero'} 
                    stylesInput= {'w-[878px] '}
                >
                    <>
                        <div className='w-full'>
                            <TableQualification dataSubjects={dataSubjects} title={title} score={average}></TableQualification>
                        </div>                            
                    </>               
                </ScoilLayout>                
            </div>
        </>
    )
}

export default TableQualifications;

