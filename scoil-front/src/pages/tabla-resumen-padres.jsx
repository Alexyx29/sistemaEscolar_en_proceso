import bgScoil from '../assets/background/bg_1.jpg';
import ParentsLayout from "@/layout/parentsLayout";
import { useEffect, useState } from "react";
import responseSubjects from '../../test_data/dataSubjects.json';
import SummarySubject from '@/components/items/summarySubjects';
import { useRouter } from 'next/router';
import responseParent from '../../test_data/dataParent.json';

const ParentsQualificationsTable = () => {
    const router = useRouter();
    const idSubject = router.query.id;

    const [idButton, setIdButton] = useState(1);
    const [subjects, setSubjects] = useState('');    
    const [parent, setParent] = useState('');

    useEffect(() => {    
        setSubjects(responseSubjects.subjects[idSubject]);
        setParent(responseParent.parent);
    },);
    
    return(
        <>
            <div className="flex w-[full] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <ParentsLayout stylesInput= {'w-[878px] '} botonSeleccionado={idButton} parent={parent} derecha={null} widthBody='2xl:w-[1293px]' cuerpo ={
                    <>                    
                        <SummarySubject subjects={subjects}></SummarySubject>
                    </>
                } 
                />                                                    
            </div>            
        </>
    );
}

export default ParentsQualificationsTable;



