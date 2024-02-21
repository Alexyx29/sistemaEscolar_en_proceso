import bgScoil from '../assets/background/bg_1.jpg';
import ParentsLayout from "@/layout/parentsLayout";
import { useEffect, useState } from "react";
import responseSubjects from '../../test_data/dataSubjects.json';
import TableQualification from '@/components/items/tableQualifications';
import responseParent from '../../test_data/dataParent.json';

const ParentsQualificationsTable = () => {
    const [idButton, setIdButton] = useState(1);
    const [subjects, setSubjects] = useState('');
    const [average, setAverage] = useState(0);
    const [title, setTitle] = useState('');
    const [parent, setParent] = useState('');

    useEffect(() => {    
        setSubjects(responseSubjects.subjects);
        setAverage(responseSubjects.average);
        setTitle(responseSubjects.grade);
        setParent(responseParent.parent);
    },[responseSubjects, responseParent]);


    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <ParentsLayout botonSeleccionado={idButton} stylesInput= {'w-[878px] '} parent={parent} derecha={null} widthBody='2xl:w-[1293px]' cuerpo ={
                    <>
                        <TableQualification dataSubjects={subjects} score={average} title={title}></TableQualification>
                    </>
                } 
                />                                                    
            </div>            
        </>
    );
}

export default ParentsQualificationsTable;




