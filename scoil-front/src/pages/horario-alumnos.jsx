import ScoilLayout from '@/layout/scoil';
import bgScoil from '../assets/background/bg_1.jpg';
import StudentsCalendarSchedule from '@/components/student/studentsCalendarSchedule';

const StudentSchedule = () => {
    return(
        <>
            <div className="flex w-[100%] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                <ScoilLayout vacio={false} derecha={false} widthBody='2xl:w-[1233px] xl:w-[900px] sm:w-[500px]' 
                cuerpo = { 
                    <>
                        <StudentsCalendarSchedule></StudentsCalendarSchedule>
                    </>
                }
                />                
            </div>
        </>
    )
}

export default StudentSchedule;

