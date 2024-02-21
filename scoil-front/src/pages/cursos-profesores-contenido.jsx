import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import response from 'data.json';
import LayoutTeacher from "@/layout/layaoutScoilTeacher";
import ProfesorCourseContent from "@/components/teacher/profesorCourseContent";
import bgScoil from '../assets/background/bg_1.jpg';

const ProfesorCourseContents = () => {
    const router = useRouter();
    const id = router.query.id;
    const [subjects, setSubjects] = useState('');
    const [idButton, setIdButton] = useState(3);
    const [text, setText] = useState({
        title: "CURSOS ONLINE",
    })

    useEffect(() =>{
        setIdButton(id);
        if(response){
            setSubjects(response.student.subjects)
            //console.log(qualifications);
        }
    },[id, response])
    
    return (
        <>
            <div className="flex w-full h-[100vh]  " style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                <LayoutTeacher 
                    botonSeleccionado={'cursos'}      
                >
                    <>
                        <div className="w-full h-[85vh] flex flex-wrap" >
                            <ProfesorCourseContent />
                        </div>
                    </>
                </LayoutTeacher>
            </div>
        </>
    );
};

export default ProfesorCourseContents;
