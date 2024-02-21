
import { useEffect, useState } from 'react';
import Materia from '../items/materias';
import Section from '../menu/seccion';
import mat from '@/assets/icons/transportador.svg';
import mate from '@/assets/background/mate.png'


const Exams = ({examsList,  link='/'}) => {
    const [exams, setExams] = useState([{active: false, name: '', schedule: '', duration:'',}]);
    const [text, setText] = useState({
        title:  'EXÁMENES'
    })

    useEffect(() => {
        if(examsList) {
            setExams(examsList);
        }
    }, [examsList]);

    const renderExams = () => {
        return exams.map((exam, index) => {
            return(
                <>
                    <Materia key={index}  id={index} examen={true} btnExamn={exam.btnExamn} activo={exam.active} nombre= {exam.name} horario={exam.schedule} duracion={exam.duration} imagen={mate.src}></Materia> 
                </>
            )
        })
    };

    return(
        <>
            <Section showPlus={true} link={link} colors='bg-input-white w-full h-[350px]'  title={text.title} lineColors={'bg-txtbtn-gray'} icon={''}>
                <div className="news mt-[25px]  h-[230px] overflow-auto mb-[25px] ">
                    {renderExams()}                    
                </div>
            </Section>            
        </>
    )
}

export default Exams;