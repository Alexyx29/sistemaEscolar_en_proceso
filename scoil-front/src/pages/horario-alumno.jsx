import ScoilLayout from '@/layout/scoil';
import bgScoil from '../assets/background/bg_1.jpg';
import StudentsCalendarSchedule from '@/components/student/studentsCalendarSchedule';

const StudentSchedule = () => {
    return(
        <>
            <div className="flex w-[100%] h-[100vh]" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                <ScoilLayout 
                    vacio={false} 
                    derecha={false} 
                    wrap={null}
                    stylesSelect={'hidden '} stylesInput= {'w-[1240px] '}
                    widthBody='2xl:w-[1293px] xl:w-[900px] sm:w-[500px]  ' 
                >
                    <>
                        <div className='bg-[] h-[84vh] w-[1293px] overflow-auto news mb-[30px] '  >
                            <StudentsCalendarSchedule></StudentsCalendarSchedule>
                        </div>
                    </>
                </ScoilLayout>                
            </div>
        </>
    )
}

export default StudentSchedule;

