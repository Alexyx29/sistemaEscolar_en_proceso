import { useEffect, useState, useRef } from "react";
import response from "dataAttendanceTeacher";
// import CircleIndicator from "../circleIndicator";
import CircleIndicator from "@/assets/users/circleIndicator";

const VistaAsistenciaProfesor = () => {
    //console.log(response.parents.assistances);    
    const [ data, setData ] = useState([]);
    const [ dataSemesters, setDataSemester ] = useState([]);
    const [ totalAssistances, setTotalAssistances] = useState('');
    const [ totalMissSchools, setTotalMissSchools] = useState('');    
    const [ totalDelays, setTotalDelays] = useState('');    
    const [ totalJustified, setTotaljustified] = useState('');    
    const [ totalCanceled, setTotalCanceled] = useState('');    
    const [ totalPercentage, setTotalPercentage] = useState('');    
    const [ text, setText ] = useState({
        labels:{
            name: 'NOMBRE',
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
        setData(response.teacher.assistances);
        setDataSemester(response.teacher.semesters);
        setTotalAssistances(response.teacher.totals.assistances);
        setTotalMissSchools(response.teacher.totals.missSchool);
        setTotalDelays(response.teacher.totals.delays);
        setTotaljustified(response.teacher.totals.justified);
        setTotalCanceled(response.teacher.totals.canceled);
        setTotalPercentage(response.teacher.totals.percentage);
    }, []);

    const renderBodyTable = () =>{
        return dataSemesters.map((index, value) =>{
            return(
                <>
                    {/* <tr key={index}> */}
                        {/* <th className="bg-pink-th text-th border-y py-3 font-bold px-3  whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[40px] max-w-[40px] w-[40px]"></th> */}
                            {/* <td className="bg-pink-th text-gray-400 border-y border-t border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-left min-w-[200px] max-w-[200px] w-[200px] font-open text-[14px]">{dataSemesters[value].semester}</td> */}
                            {/* <td className="bg-pink-th text-green-btn border-y  border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{dataSemesters[value].assistances}</td> */}
                            {/* <td className="bg-pink-th text-red-mat border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{dataSemesters[value].missSchool}</td>
                            <td className="bg-pink-th text-yellow-mat border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{dataSemesters[value].delays}</td>
                            <td className="bg-pink-th text-blue-menu border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{dataSemesters[value].justified}</td>
                            <td className="bg-pink-th text-gray-cancel border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{dataSemesters[value].canceled}</td>
                            <td className="bg-pink-th text-libellum-text-gray border-y border-gray-200 py-3 font-bold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[16px]">{dataSemesters[value].percentage}</td> */}
                        {/* <th className="bg-pink-th text-th border-y py-3 font-bold px-3  whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[40px] max-w-[40px] w-[40px]" colSpan={"31"}></th> */}
                    {/* </tr>                     */}
                    {renderMonthHeader()}                    
                </>                
            )
        })
    }    

    const renderMonthHeader = () =>{
        return data.map((index, value) =>{
            return(
                <>
                    <tr key={index} className="h-[72px]">
                        <th className="bg-[#E8F3FF] text-th border-y py-3 font-bold px-3  whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[40px] max-w-[40px] w-[40px] sticky left-[0] "></th>
                        <th className="bg-[#E8F3FF] text-gray-400 border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-left min-w-[200px] max-w-[200px] w-[200px] font-open text-[14px] sticky left-[40px] z-10">{data[value].monthData.month}</th>
                        <th className="bg-[#E8F3FF] text-green-btn border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{data[value].monthData.assistances}</th>
                        <th className="bg-[#E8F3FF] text-red-mat border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{data[value].monthData.missSchool}</th>
                        <th className="bg-[#E8F3FF] text-yellow-mat border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{data[value].monthData.delays}</th>
                        <th className="bg-[#E8F3FF] text-blue-menu border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{data[value].monthData.justified}</th>
                        <th className="bg-[#E8F3FF] text-gray-cancel border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{data[value].monthData.canceled}</th>
                        <th className="bg-[#E8F3FF] text-libellum-text-gray border-y border-gray-200 py-3 font-bold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[16px]">{data[value].monthData.percentage}</th>
                        {renderDaysMonth(value)}
                        <th className="bg-[#E8F3FF] text-th border-y py-3 font-bold px-3  whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[40px] max-w-[40px] w-[40px]" colSpan={10}></th>
                    </tr>                    
                    {renderDataSubjects(value)}                                    
                </>                
            )    
        })
    }

    const renderDaysMonth = (a) =>{        
        return data[a].monthData.days.map((index, value) =>{
            return(
                <td key={index} className="bg-[#E8F3FF] text-th border-y border-gray-200 py-3 font-semibold px-1 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[60px] max-w-[60px] w-[60px] font-open text-[14px]">{data[a].monthData.days[value]}</td>
            )
        })
    }
    
    const renderDataSubjects = (a) =>{                
        return data[a].especificData.map((key, value) =>{                        
            return (
                <tr key={key} className="h-[72px]">                        
                    <td className={`bg-input-white text-center  border-y whitespace-nowrap overflow-hidden text-ellipsis min-w-[40px] w-[40px] sticky  left-[0]`}></td>
                    <td className={`bg-input-white text-[#888888] border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-left min-w-[200px] max-w-[200px] w-[200px] font-open text-[14px]   sticky  left-[40px]`} >{data[a].especificData[value].name}</td>
                    <td className={`bg-input-white text-green-btn border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]`}>{data[a].especificData[value].assistances}</td>
                    <td className={`bg-input-white text-red-mat border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]`}>{data[a].especificData[value].missSchool}</td>
                    <td className={`bg-input-white text-yellow-mat border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]`}>{data[a].especificData[value].delays}</td>
                    <td className={`bg-input-white text-blue-menu border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]`}>{data[a].especificData[value].justified}</td>
                    <td className={`bg-input-white text-gray-cancel border-y border-gray-200 py-3 font-semibold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]`}>{data[a].especificData[value].canceled}</td>
                    <td className={`bg-input-white text-libellum-text-gray border-y border-gray-200 py-3 font-bold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[16px]`}>{data[a].especificData[value].percentage}</td>                        
                        {renderIndicators(value, a)}
                    <td className={`text-center py-3 px-3 bg-input-white text-gray-700 border-y whitespace-nowrap overflow-hidden text-ellipsis`} colSpan={10}></td>
                </tr>                
            )
        })
    }
    
    const renderIndicators = (b, c) => {
        return data[c].especificData[b].list.map((key, value) =>{            
            switch(data[c].especificData[b].list[value]){
                case "assistance": var color = 'bg-green-btn'; break;
                case "missSchool": var color = 'bg-red-mat'; break;
                case "delay": var color = 'bg-yellow-mat'; break;
                case "justified": var color = 'bg-blue-menu'; break;
                case "canceled": var color = false; break;
            }
            
            return(
                <td key={key} className={`bg-input-white text-libellum-text-gray border-y border-gray-200 py-3 font-bold px-3 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[16px]`} style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)' }}>
                    <div className="w-full flex justify-center">                   
                        {color && (
                            <CircleIndicator colors={color}></CircleIndicator>
                        )}
                        {!color && (
                            <div className="w-[7px] h-[0px] border-[1px]  border-txtbtn-gray"></div>
                        )}
                    </div>                    
                </td>
            )
        })
    }

    return (
        <>
        <div className="w-[1293px] h-[83vh] rounded-[10px] shadow-2xl " >
            <div className="news h-full w-full overflow-auto bg-white rounded-[10px]" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} ref={tableRef} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
                <table className="w-full min-w-full">
                    <thead>
                        <tr className="h-[72px]" >
                            <th className="bg-libellum-body text-th border-y py-3 font-bold px-3  whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[40px] max-w-[40px] w-[40px]"></th>
                            <th className="bg-libellum-body text-gray-400 border-y border-gray-200 py-3 font-semibold px-1 whitespace-nowrap overflow-hidden text-ellipsis text-left min-w-[250px] max-w-[250px] w-[250px] font-open text-[14px]">{text.labels.name}</th>
                            <th className="bg-libellum-body text-gray-400 border-y border-gray-200 py-3 font-semibold px-1 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{text.labels.assistances}</th>
                            <th className="bg-libellum-body text-gray-400 border-y border-gray-200 py-3 font-semibold px-1 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{text.labels.missSchools}</th>
                            <th className="bg-libellum-body text-gray-400 border-y border-gray-200 py-3 font-semibold px-1 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{text.labels.delays}</th>
                            <th className="bg-libellum-body text-gray-400 border-y border-gray-200 py-3 font-semibold px-1 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{text.labels.justified}</th>
                            <th className="bg-libellum-body text-gray-400 border-y border-gray-200 py-3 font-semibold px-1 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[100px] max-w-[100px] w-[100px] font-open text-[14px]">{text.labels.canceled}</th>
                            <th className="bg-libellum-body text-gray-400 border-y border-gray-200 py-3 font-semibold px-1 whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[110px] max-w-[110px] w-[110px] font-open text-[14px]">% {text.labels.percentage}</th>
                            <th className="bg-libellum-body text-th border-y py-3 font-bold px-3  whitespace-nowrap overflow-hidden text-ellipsis text-center min-w-[40px] max-w-[40px] w-[40px]" colSpan={"31"}></th>
                        </tr>
                        <tr className="h-[72px]">
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
            </div>
        </>        
    )  
}

export default VistaAsistenciaProfesor;