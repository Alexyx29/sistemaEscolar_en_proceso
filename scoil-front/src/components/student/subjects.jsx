import Materia from "@/components/items/materias";

import { useContext, useEffect, useState } from "react";

const Subjects = ({type='', data = [], sizeMateria='', sizeCalificacion='', mRight='', wMateria, stylesSubjects='py-[20px]' }) => {
    const [ subjetsSt, setSubjetsSt ] = useState([]);
    const [ attendanceSt, setAttendanceSt ] = useState([]);
    const [ evaluacionVSmallSt, setEvaluacionVSmallSt ] = useState([]);


    useEffect(() => {
        if(type =='subjets'){
            setAttendanceSt([]);
            setSubjetsSt(data);
        } else if(type == 'attendance'){
            setSubjetsSt([]);
            setAttendanceSt(data);
        }
        else if(type == 'attendanceVSmall'){
            setSubjetsSt([]);
            setEvaluacionVSmallSt(data);
        }
    }, [data])

    return(
        <>
            <div className={` my-[0px] ${stylesSubjects}  `}>
                {subjetsSt.map((subjetSt, index) => {
                    return (
                        <Materia key={index} id={subjetSt.id} evaluacion={true} imagen={subjetSt.image} nombre={subjetSt.name} horario={subjetSt.horario} duracion={subjetSt.duration} calificacion={subjetSt.calificacion} wMateria={wMateria} sizeMateria={sizeMateria} sizeCalificacion={sizeCalificacion}  mRight={mRight} />
                    )
                })}

                {attendanceSt.map((attSt, index) => {
                    return (
                        <Materia key={index} id= {attSt.id} asistencia={true} imagen={attSt.image} nombre={attSt.name} asistencias={attSt.asistencia} />                         
                    )
                })}

                {evaluacionVSmallSt.map((subjetSt, index) => {
                    return (
                        <Materia key={index} id={subjetSt.id} evaluacionVSmall={true} imagen={subjetSt.image} nombre={subjetSt.name} horario={subjetSt.horario} duracion={subjetSt.duration} calificacion={subjetSt.calificacion} wMateria={wMateria} sizeMateria={sizeMateria} sizeCalificacion={sizeCalificacion}  mRight={mRight} />
                    
                    )
                })}
            </div> 
        </>
    )
}

export default Subjects;