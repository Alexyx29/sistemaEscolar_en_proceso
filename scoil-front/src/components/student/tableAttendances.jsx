import Border from "@/components/items/border";
import { setItemApi } from "@/components/useForm";
import { formateDateFunc } from "@/components/useFormats";
import { getActualSystem } from "@/components/useLanguage";
import { getItem } from "@/components/useStorage";
import { unicodeToChar } from "@/components/useUtf8";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { useEffect } from "react";
import { useState, useRef } from "react";
import response from "data.json";
import IndicatorCircle from "../items/indicatorCircle";

const TableAttendance = ({dataAttendance}) => {
    //console.log(response.parents.assistances);    
    const [ semesters, setSemesters ] = useState([{}]);
    const [ totalAssistances, setTotalAssistances] = useState('');
    const [ totalMissSchools, setTotalMissSchools] = useState('');    
    const [ totalDelays, setTotalDelays] = useState('');    
    const [ totalJustified, setTotaljustified] = useState('');    
    const [ totalCanceled, setTotalCanceled] = useState('');    
    const [ totalPercentage, setTotalPercentage] = useState('');     
    const [ text, setText ] = useState({
        labels:{
            subject: 'MATERIA',
            assistances: 'ASISTENCIAS',
            missSchools: 'FALTAS',
            delays: 'RETARDOS',
            justified: 'JUSTIFICADAS',
            canceled: 'CANCELADAS',
            percentage: 'ASISTENCIA',
            total: 'TOTAL'
        }
    });

    const tableRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(null);
    const [startY, setStartY] = useState(null);

    const handleMouseDown = (e) => {
        setIsMouseDown(true);
        setStartX(e.clientX);
        setStartY(e.clientY);
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
        setStartX(null);
        setStartY(null);
    };

    const handleMouseMove = (e) => {
        if (!isMouseDown) return;
        const scrollX = startX - e.clientX;
        const scrollY = startY - e.clientY;
        tableRef.current.scrollLeft += scrollX;
        tableRef.current.scrollTop += scrollY;
        setStartX(e.clientX);
        setStartY(e.clientY);
    };

    useEffect(() => {
        if(dataAttendance){
            setTotalAssistances(dataAttendance.totals.assistances);
            setTotalMissSchools(dataAttendance.totals.missSchools);
            setTotalDelays(dataAttendance.totals.delays);
            setTotaljustified(dataAttendance.totals.justified);
            setTotalCanceled(dataAttendance.totals.canceled);
            setTotalPercentage(dataAttendance.totals.percentage);
            setSemesters(dataAttendance.attendances);            
        }                
    }, [dataAttendance]);

    const renderBodyTable = () => {
        return semesters.map((semester, index) => {            
            return(
                <>
                    <tr key={index}>
                        <th className="bg-pink-th text-th border-y py-3 font-bold px-3  whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[40px] max-w-[40px] w-[40px]"></th>
                            <td className="bg-pink-th text-gray-400 border-y border-t border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-left min-w-[200px] max-w-[200px] w-[200px] font-open text-[14px]">{semester.grade}</td>
                            <td className="bg-pink-th text-green-btn border-y  border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{semester.attendances}</td>
                            <td className="bg-pink-th text-red-mat border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{semester.missSchool}</td>
                            <td className="bg-pink-th text-yellow-mat border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{semester.delays}</td>
                            <td className="bg-pink-th text-blue-menu border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{semester.justified}</td>
                            <td className="bg-pink-th text-gray-cancel border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{semester.canceled}</td>
                            <td className="bg-pink-th text-libellum-text-gray border-y border-gray-200 py-3 font-bold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[16px]">{semester.percentage}</td>
                        <th className="bg-pink-th text-th border-y py-3 font-bold px-3  whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[40px] max-w-[40px] w-[40px]" colSpan={"31"}></th>
                    </tr> 
                    {renderMonths(semester.monthData)}
                </>
            )
        })
    };

    const renderMonths = (monthsList = [{}]) => {
        return monthsList.map((month, index) => {            
            return(
                <>
                    <tr key={index}>
                        <th className="bg-blue-th text-th border-y py-3 font-bold px-3  whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[40px] max-w-[40px] w-[40px]"></th>
                        <th className="bg-blue-th text-gray-400 border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-left min-w-[200px] max-w-[200px] w-[200px] font-open text-[14px]">{month.month}</th>
                        <th className="bg-blue-th text-green-btn border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{month.assistances}</th>
                        <th className="bg-blue-th text-red-mat border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{month.missSchool}</th>
                        <th className="bg-blue-th text-yellow-mat border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{month.delays}</th>
                        <th className="bg-blue-th text-blue-menu border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{month.justified}</th>
                        <th className="bg-blue-th text-gray-cancel border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{month.canceled}</th>
                        <th className="bg-blue-th text-libellum-text-gray border-y border-gray-200 py-3 font-bold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[16px]">{month.percentage}</th>
                        {renderDaysMonth(month.days)}
                        <th className="bg-blue-th text-th border-y py-3 font-bold px-3  whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[40px] max-w-[40px] w-[40px]" colSpan={10}></th>
                    </tr>
                    {renderSubjects(month.subjects)}                
                </>
            )
        })
    };

    const renderDaysMonth = (daysList = []) => {
        return daysList.map((day, index) => {
            return(
                <>
                    <td key={index} className="bg-blue-th text-th border-y border-gray-200 py-3 font-semibold px-1 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[60px] max-w-[60px] w-[60px] font-open text-[14px]">{day}</td>
                </>
            )
        })
    };

    const renderSubjects = (subjectsList = [{}]) => {
        return subjectsList.map((subject, index) => {
            console.log(subject.list);
            return(
                <>
                    <tr key={index}> 
                        <td className={`text-center py-3 px-3 bg-input-white text-gray-700 border-y whitespace-nowrap overflow-hidden text-ellipsis`}></td>
                        <td className={`bg-input-white text-th border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-left min-w-[200px] max-w-[200px] w-[200px] font-open text-[14px] `}>{subject.subject}</td>
                        <td className={`bg-input-white text-green-btn border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]`}>{subject.assistances}</td>
                        <td className={`bg-input-white text-red-mat border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]`}>{subject.missSchool}</td>
                        <td className={`bg-input-white text-yellow-mat border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]`}>{subject.delays}</td>
                        <td className={`bg-input-white text-blue-menu border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]`}>{subject.justified}</td>
                        <td className={`bg-input-white text-gray-cancel border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]`}>{subject.canceled}</td>
                        <td className={`bg-input-white text-libellum-text-gray border-y border-gray-200 py-3 font-bold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[16px]`}>{subject.percentage}</td>                        
                            {renderIndicators(subject.list)}
                        <td className={`text-center py-3 px-3 bg-input-white text-gray-700 border-y whitespace-nowrap overflow-hidden text-ellipsis`} colSpan={10}></td>
                    </tr>                
                </>
            )
        })
    }

    const renderIndicators = (assistancesList = []) => {
        return assistancesList.map((assistance, index) => {
            switch(assistance){
                case "assistance": var color = 'bg-green-btn'; break;
                case "missSchool": var color = 'bg-red-mat'; break;
                case "delay": var color = 'bg-yellow-mat'; break;
                case "justified": var color = 'bg-blue-menu'; break;
                case "canceled": var color = false; break;
            }
            return(
                <td key={index} className={`bg-input-white text-libellum-text-gray border-y border-gray-200 py-3 font-bold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[16px]`}>
                    <div className="w-full flex justify-center">                   
                        {color && (
                            <IndicatorCircle colors={color}></IndicatorCircle>
                        )}
                        {!color && (
                            <div className="w-[7px] h-[0px] border-[1px]  border-txtbtn-gray"></div>
                        )}
                    </div>                    
                </td>
            )
        })
    };

    return (
        <>
            <div className="news h-full w-full overflow-auto" ref={tableRef} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
                <table className="w-full min-w-full">
                    <thead>
                        <tr>
                            <th className="bg-libellum-body text-th border-y py-3 font-bold px-3  whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[40px] max-w-[40px] w-[40px]"></th>
                            <th className="bg-libellum-body text-gray-400 border-y border-gray-200 py-3 font-semibold px-1 whitespace-nowrap overflow-hidden text-ellipsis text-left min-w-[250px] max-w-[250px] w-[250px] font-open text-[14px]">{text.labels.subject}</th>
                            <th className="bg-libellum-body text-gray-400 border-y border-gray-200 py-3 font-semibold px-1 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{text.labels.assistances}</th>
                            <th className="bg-libellum-body text-gray-400 border-y border-gray-200 py-3 font-semibold px-1 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{text.labels.missSchools}</th>
                            <th className="bg-libellum-body text-gray-400 border-y border-gray-200 py-3 font-semibold px-1 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{text.labels.delays}</th>
                            <th className="bg-libellum-body text-gray-400 border-y border-gray-200 py-3 font-semibold px-1 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{text.labels.justified}</th>
                            <th className="bg-libellum-body text-gray-400 border-y border-gray-200 py-3 font-semibold px-1 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{text.labels.canceled}</th>
                            <th className="bg-libellum-body text-gray-400 border-y border-gray-200 py-3 font-semibold px-1 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[110px] max-w-[110px] w-[110px] font-open text-[14px]">% {text.labels.percentage}</th>
                            <th className="bg-libellum-body text-th border-y py-3 font-bold px-3  whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[40px] max-w-[40px] w-[40px]" colSpan={"31"}></th>
                        </tr>
                        <tr>
                            <th className="bg-libellum-body text-th border-y py-3 font-bold px-3  whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[40px] max-w-[40px] w-[40px]"></th>
                            <th className="bg-libellum-body text-gray-400 border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-left min-w-[200px] max-w-[200px] w-[200px] font-open text-[14px]">{text.labels.total}</th>
                            <th className="bg-libellum-body text-green-btn border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{totalAssistances}</th>
                            <th className="bg-libellum-body text-red-mat border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{totalMissSchools}</th>
                            <th className="bg-libellum-body text-yellow-mat border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{totalDelays}</th>
                            <th className="bg-libellum-body text-blue-menu border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{totalJustified}</th>
                            <th className="bg-libellum-body text-gray-cancel border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{totalCanceled}</th>
                            <th className="bg-libellum-body text-libellum-text-gray border-y border-gray-200 py-3 font-bold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[110px] max-w-[110px] w-[110px] font-open text-[16px]">{totalPercentage}</th>
                            <th className="bg-libellum-body text-th border-y py-3 font-bold px-3  whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[40px] max-w-[40px] w-[40px]" colSpan={"31"}></th>
                        </tr>                                                
                    </thead>
                    <tbody>
                        {renderBodyTable()}                    
                    </tbody>
                </table>
            </div>
        </>        
    )  
}

export default TableAttendance;