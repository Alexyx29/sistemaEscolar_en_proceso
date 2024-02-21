import mat from '@/assets/icons/transportador.svg';
import lit from '@/assets/icons/literatura.png';
import admin from '@/assets/icons/engranaje.svg';
import conta from '@/assets/icons/calculadora.svg';
import dere from '@/assets/icons/balanza.svg';
import info from '@/assets/icons/codigo.svg';
import mark from '@/assets/icons/colores.svg';
import { useEffect, useState } from "react";
import Materia from "../items/materias";
import Trayectoria from '../items/trayectoria';
import Line from '../items/line';

const PaymentsQualifications = ({onContentClick, dataSubjects}) =>{    
    const [subjects, setSubjects] = useState([]);
    const [average, setAverage] = useState(0);
    const [grade, setGrade] = useState('');
    const [text, setText] = useState({
        titleSection: 'CALIFICACIONES'
    })
        
    useEffect(() =>{
        if(dataSubjects){
            setSubjects(dataSubjects.subjects); 
            setAverage(dataSubjects.average);
            setGrade(dataSubjects.grade);
        }        
    },[dataSubjects]);    
    const subjectImages = [lit.src, dere.src, conta.src, mat.src, info.src, admin.src, mark.src]; //ASIGNACIÖN DE IMÁGENES PROVICIONAL
        
    const renderSubjects = () =>{
        return subjects.map((subject, index) =>{
            return(                
                <Materia key={index} id= {index} viewParent={true} evaluacion={true} imagen={subjectImages[index]} nombre= {subject.name} calificacion={subject.score}></Materia> 
            )
        })
    }
    
    return(
        <div>
            <div>
                <Trayectoria sizePromedio="text-[50px]" sizePromGene="text-[12px]" sizeCarrera="text-[12px]" promedio={average} carrera={grade} mtPromGene="mt-[25px] mb-[1px]" activeStar={false} flexer={"mt-[10px] mb-[-20px] "} mlText="ml-[15px]" ></Trayectoria>
            </div>            
            <div className="bg-[#ACACA2] h-[1px] mt-[15px] mb-[18px]">
                <Line colors="bg-gray-100" width = 'w-full' />
            </div>
            <div className="my-[0px]">                                
                {renderSubjects()}
            </div>               
        </div>
    )                
}    

export default PaymentsQualifications;