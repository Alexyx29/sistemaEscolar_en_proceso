import { useEffect, useState } from "react";
import Generic from "./buttons/generic";
import Line from "./line";

const TableQualification = ({dataSubjects, title, score}) =>{
    const [dataSubject, setDataSubject] = useState([{name: '', score: null}]);                
    const [text, setText] = useState({
        headertable: 'PROMEDIO GENERAL',
        txtButton: 'Historial Académico'
    })

    var a = 0;

    useEffect(()=>{
        if(dataSubjects){
            setDataSubject(dataSubjects);
        }        
    },[dataSubjects])
        
    const renderBodyTable = () =>{
        return dataSubject.map((subject, index) => {
            const isLastRow = index === dataSubject.length - 1;
            return(                
                <div key={index} className={ isLastRow ? 'flex justify-between border-x-[1px] border-b-[1px] border-gray-menu-text h-[62px] rounded-b-lg' : 'flex justify-between border-x-[1px] border-b-[1px] border-gray-menu-text h-[62px]'}>
                    <div className="flex justify-start items-center">
                        <label className="font-open text-[20px] font-semibold text-black-mat ml-[15px]">{subject.name}</label>
                    </div>
                    <div className="flex justify-end items-center border-l-[1px] border-gray-menu-text w-[200px]">
                        <label className="font-open text-[20px] font-semibold text-black-mat mr-[15px]">{subject.score}</label>
                    </div>
                </div>   
            )
        })
    };

    /* let color;

    if (score < 6) {
        color = 'text-red-mat';
    } else if (score === 10) {
        color = 'text-green-scoil';
    } else if (score < 10) {
        color = 'text-yellow-scale';
    } */

    return(
        <>
            <div className="bg-input-white mx-[1px] flex justify-center rounded-[15px] shadow-[0_0_17px_-7px_rgba(0,0,0,0.37)] w-full">
                <div className="w-[90%] my-[25px] flex flex-col items-center">
                    <div>
                        <label className="font-open text-[35px] font-bold text-gray-date-txt">{title}</label>
                    </div>
                    <div className='w-[90%] my-[15px]'>                        
                        <Line colors={'bg-txtbtn-gray h-[1px]'} width='100%'></Line>
                    </div>
                    <div className="w-[90%] my-[15px] rounded-[15px] shadow-md">
                        <table className="w-full border-collapse rounded-[10px]">
                            <thead className="bg-libellum-light">
                                <tr>
                                    <th colSpan="2" className="rounded-t-lg">
                                        <div className="flex justify-between my-[5px]">
                                            <label className="font-open text-[22px] font-bold text-input-white ml-[15px]">{text.headertable}</label>
                                            <label className={`font-open text-[22px] font-bold mr-[15px] text-input-white`}>{score}</label>
                                        </div>
                                    </th>                        
                                </tr>
                            </thead>
                            <tbody className="rounded-full">
                                {renderBodyTable()}
                            </tbody>
                        </table>
                    </div>                    
                    <div className="w-[90%] mt-[30px] flex justify-end">
                        <Generic colors='bg-libellum-light rounded h-[36px] w-[210px]' textButton='text-input-white' colorsTitle='font-open text-[14px] font-semibold' title= {text.txtButton}></Generic>
                    </div>             
                </div>                   
            </div>            
        </>
    )
}

export default TableQualification;