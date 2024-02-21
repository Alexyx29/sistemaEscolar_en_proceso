import { useEffect, useState } from 'react';
import Materia from '../items/materias';
import Section from '../menu/seccion';
import mat from '@/assets/icons/transportador.svg';
import mate from '@/assets/background/mate.png'


const Tasks = ({taskList}) => {
    const [tasks, setTasks] = useState([{active: false, name: '', schedule: '', description:''}]);
    const [text, setText] = useState({
        title:  'TAREAS'
    });

    useEffect(() => {
        if(taskList) {
            setTasks(taskList);
        }
    }, [taskList]);

    const renderTasks = () => {
        return tasks.map((task, index) => {
            return(
                <>
                    <Materia id= {index} tarea={true}  btnTask={task.btnTask}  activo={task.active} nombre= {task.name} horario={task.schedule} link='/entregar-tareas-alumno' imagen={mate.src} descripcion={task.description}></Materia>
                </>
            )
        })
    };

    return(
        <>
            <Section  showPlus={true} colors='bg-input-white w-full h-[350px]' title={text.title} lineColors={'bg-txtbtn-gray'} icon={''} link='/lista-tareas-alumnos'>
                <div className="mt-[25px] news h-[230px] overflow-auto mb-[25px] ">
                    {renderTasks()}                    
                </div>
            </Section>            
        </>
    )
}

export default Tasks;