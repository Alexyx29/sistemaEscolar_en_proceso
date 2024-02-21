import user from '@/assets/usuarios/user.png'
import ImageBase from '../items/imageBase';
import Line from '../items/line';



const SelecListStudent = ({stylesDivOver='h-[476px]', stylesDivPrin='w-[full] h-[593px]' }) => {


    const students = [
        { id: 1, name: 'Alberto', lastName: 'Villa reyes', usuario: 'user' },
        { id: 2, name: 'Jane', lastName: 'Doe', usuario: 'user' },
        
        { id: 3, name: 'Alejandra', lastName: 'Valdés Bernardino', usuario: 'user' },
        { id: 4, name: 'Anette', lastName: 'Hernández Nodal', usuario: 'user' },
       
        { id: 5, name: 'Areli', lastName: 'Mateos Sepulvera', usuario: 'user' },
        { id: 6, name: 'Carlos', lastName: 'Duarte González', usuario: 'user' },

        { id: 7, name: 'Cinthya', lastName: 'Sandoval Ruíz', usuario: 'user' },
        { id: 8, name: 'Daniela', lastName: 'Obregón Silva', usuario: 'user' },

        { id: 9, name: 'Dante', lastName: 'Ferreira Morales', usuario: 'user' },
        { id: 10, name: 'Diana', lastName: 'Valdés Bernardino', usuario: 'user' },

        { id: 11, name: 'Diego Javier', lastName: 'Rivera Mendoza', usuario: 'user' },

      ];

    return(
        <>
        <div className={`${stylesDivPrin} w-[full] h-[593px] bg-[#F7F8F9] rounded-[10px] shadow-lg  `} >
            <div class={' flex flex-col  mt-[px] mx-[40px]'}>
                
                <span className='font-bold font-open text-[16px] text-[#62676D] mt-[30px] ' >
                    {"LISTADO DE ALUMNOS"}
                </span>
                
                {/* <div className='border-[1px] border-[#707070] mt-[14px]' ></div> */}
                <Line colors='bg-txtbtn-gray mt-[14px] h-[1px]' width='w-full'></Line>
                <div className={`${stylesDivOver} news overflow-auto   `} >
                    {students.map((student) => (
                        <div key={student.id} className={'mapeo  flex w-[240px] mt-[20px] '}>
                            <ImageBase image={null} name={student.name} lastname={student.lastName} size='60px' />
                            <div className={'flex flex-col items-center justify-center'}>
                                <div className={'flex flex-col justify-center ml-[10px]'}>
                                <span className={' font-open text-[13px] font-bold text-[#535353] leading-none'}>
                                    {student.name} 
                                </span>
                                <span className={' font-open text-[13px] font-semibold text-[#535353] leading-none'}>
                                    {student.lastName}
                                </span>
                                </div>
                            </div>
                        </div>
                    ))} 
                </div>             
            </div>
              
        </div>        
        </>
    )
    
}

export default SelecListStudent;