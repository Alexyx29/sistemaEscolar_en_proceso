import { useEffect, useState } from "react";
import Line from "./line";
import Link from "next/link";

const SummarySubject = ({subjects, link='/'}) =>{
    const [subjectScales, setSubjectScales] = useState([{title:'', score: null, scale: null, params:[{title:'', score:null, scale:null}]}]);
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [score, setScore] = useState('');
    const [text, setText] =  useState({        
        header: 'EVALUACIÓN DE LA MATERIA',        
    });


    useEffect(() =>{
        if(subjects){
            setSubjectScales(subjects.scales);
            setName(subjects.name);
            setCourse(subjects.course);
            setScore(subjects.score);             
        }
    },)

    const renderBodyTable = () =>{        
        return subjectScales.map((index, value) =>{                        
            const isLastRow = value === subjectScales.length - 1;
            let color;
            if (subjectScales[value].score <= subjectScales[value].scale / 2) {  //REVISAR ASIGNACIÓN DE COLOR
                color = 'text-red-mat';
            } else if (subjectScales[value].score === subjectScales[value].scale) {
                color = 'text-green-scoil';
            } else if (subjectScales[value].score < subjectScales[value].scale) {
                color = 'text-yellow-mat';
            }
            return(
                <>
                    <div key={index} className="w-full">
                        <div className="flex justify-between bg-libellum-light h-[62px]">
                            <div className="flex items-center">
                                <label className="font-open text-[22px] font-bold text-input-white ml-[15px]">{subjectScales[value].title}</label>
                            </div>                            
                            <div className="mr-[15px] flex items-center">
                                <label className={`font-open text-[22px] font-bold ${color} mr-[5px]`}>{subjectScales[value].score}</label>
                                <label className="font-open text-[22px] font-bold text-input-white mr-[0px]">/{subjectScales[value].scale}</label>
                            </div>                                            
                        </div>                        
                    </div>
                    {renderBodyParams(value, isLastRow)}                
                </>                
            )            
        })
    }

    const renderBodyParams = (a, limiter) =>{
        return subjectScales[a].params.map((index, value) =>{
            const isLastRow = (value === subjectScales[a].params.length - 1 && limiter);
            return(
                <div key={index} className={ isLastRow ? 'w-full flex justify-between border-x-[1px] border-b-[1px] h-[62px] border-txtbtn-gray rounded-b-lg' : 'w-full flex justify-between border-x-[1px] border-b-[1px] h-[62px] border-txtbtn-gray'}> 
                    <div className="flex justify-start my-[5px] items-center">
                        <label className="font-open text-[20px] font-semibold text-black-mat ml-[15px]">{subjectScales[a].params[value].title}</label>
                    </div> 
                    <div className="mr-[15px] flex justify-end items-center">
                        <label className="font-open text-[22px] font-bold text-black-mat mr-[5px]">{subjectScales[a].params[value].score}</label>
                        <label className="font-open text-[22px] font-semibold text-black-mat mr-[0px]">/{subjectScales[a].params[value].scale}</label>
                    </div>                    
                </div>
            )
        })
    }
    let color;

    if (score < 6) {
        color = 'text-red-mat';
    } else if (score === 10) {
        color = 'text-green-scoil';
    } else if (score < 10) {
        color = 'text-yellow-scale';
    }


    return(
        <>
            <div className="bg-input-white h-[84vh] mx-[1px] flex justify-center rounded-[15px] shadow-[0_0_17px_-7px_rgba(0,0,0,0.37)] w-full">
                <div className="w-[90%] mt-[50px] flex flex-col items-center">
                    <div>
                        <label className="font-open text-[28px] font-bold text-gray-date-txt uppercase">{course} - {name}</label>
                    </div>
                    <div className='w-[90%] mt-[50px]'>                        
                        <Line colors={'bg-txtbtn-gray h-[1px]'} width='100%'></Line>
                    </div>
                    <div className="news w-full h-[600px] flex flex-col items-center overflow-y-scroll">
                        <div className="w-[90%] mt-[50px]">
                            <table className="w-full ">
                                <thead className="bg-blue-header-table h-[62px]">
                                    <tr>
                                        <th colSpan="2" className="rounded-t-lg"> 
                                            <div className="flex w-full justify-between">
                                                <div className="flex justify-start my-[5px]">
                                                    <label className="font-open text-[22px] font-bold text-input-white ml-[15px]">{text.header}</label>
                                                </div>                                                                                        
                                                <div className="mr-[15px] flex justify-end">                                                    
                                                    <label className="font-open text-[28px] font-bold text-input-white mr-[0px]">{score * 10}</label>
                                                </div>
                                            </div>                                                                                                                                       
                                        </th>                                        
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {renderBodyTable()}
                                </tbody>
                            </table>
                            <div className="w-full mt-[52px] flex justify-end "  >
                                <Link href={link} >
                                    <button className="w-[210px] h-[36px] bg-[#0082C9] font-open font-semibold text-[14px] text-[#FFFFFF] flex items-center justify-center rounded-[5px]  " >
                                        {'Historial Académico'}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>                                                     
                </div>                   
            </div>
        </>
    )
}

export default SummarySubject;