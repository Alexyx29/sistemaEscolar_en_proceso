import Materia from "@/components/items/materias";

import { useContext, useEffect, useState } from "react";

const GradeExams = ({type = '', tablero, data = [], promedio='', carrera='', img, btnExamn='Calificar', btnTask='Calificar', text}) => {
    const [ exams, setExams ] = useState([]);
    const [ tasks, setTasks ] = useState([]);

    useEffect(() => {
        if(type =='examen') {
            setTasks([]);
            setExams(data);
        } else if(type == 'tarea') {
            setExams([]);
            setTasks(data);
        }  
    }, [data])

    return(
        <>
            <div className="my-[0px] mt-[20px]">
                {exams.map((exam, index) => {
                    return (
                        <Materia key={index} id={exam.id} examen={true} activo={true} imagen={exam.image} nombre={exam.name} horario={exam.horario} duracion={exam.duration} btnExamn={exam.btnExamn} linkExam={exam.link} text={text}/>
                    )
                })}

                {tasks.map((task, index) => {
                    return (
                        <Materia key={index} id={task.id} tarea={true} activo={true} imagen={task.image} nombre={task.name} horario={task.horario} descripcion={task.description} btnTask={task.btnTask} text={text} />                         
                    )
                })}
            </div> 
        </>
    )
}

export default GradeExams;