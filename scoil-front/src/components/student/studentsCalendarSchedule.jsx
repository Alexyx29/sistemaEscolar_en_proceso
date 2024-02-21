import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import es from "@fullcalendar/core/locales/es";
import { useState } from "react";
import React, { useRef } from 'react';
//import CalendarSelect from "../calendarSelect";

const StudentsCalendarSchedule = ({}) =>{
    const [type, setType] = useState(1);
    const [title, setTitle] = useState('');
    const [view, setView] = useState(true);
    const [text, setText] = useState({
        selectTitle1: 'Horario',
        selectTitle2: 'Eventos',
        href: '/calendario-padres-eventos',        
    })
    const calendarRef = useRef(null);  

    const headerFormat = (arg) => {        
    const header = arg.view.type;
    switch (header) {
        case "dayGridMonth":        
            setType(1);
            let dayNames = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"];
        return dayNames[arg.date.getUTCDay()];
        case "timeGridWeek":
            setType(2);        
            const weekFormat = () => {
                const dayOfWeek = arg.date.toLocaleDateString("es", {
                    weekday: "long",
                });
                const dayOfMonth = arg.date.getDate();
                return `${dayOfWeek}`;
            };
        return weekFormat;
        case "timeGridDay":        
            setType(3);
            const dayFormat = () => {
                const dayOfWeek = arg.date.toLocaleDateString("es", {
                weekday: "long",
                });
                return dayOfWeek;
            };
        return dayFormat;
        default:
        dayNames = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"];
        return dayNames[arg.date.getUTCDay()];
    }
    };

    const titleFormat = (dateInfo) =>{
    let year = dateInfo.date.year;
    let month = dateInfo.date.month;
    let startDay = dateInfo.start.day;
    let endDay = dateInfo.end.day;
    let numberDay = dateInfo.end.marker.getDate();    
    month += 1;        

    switch(type){
        case 1:         
            month = new Date(year, dateInfo.date.month, 1).toLocaleString("es", { month: "long" });
            month = month.charAt(0).toUpperCase() + month.slice(1);
            setTitle(month + ' de ' + year);        
        break;
        case 2: 
            month = new Date(year, dateInfo.date.month, 1).toLocaleString("es", { month: "short" });
            month = month.charAt(0).toUpperCase() + month.slice(1);
            setTitle("PRIMER CUATRIMESTRE");
        break;
        case 3: 
            month = new Date(year, dateInfo.date.month, 1).toLocaleString("es", { month: "long" });
            setTitle(numberDay + ' de ' +  month + ' de ' + year);
        break;
    }
}

    const viewChange = (id) =>{
        //alert(id);
        setView(id);        
    }

    
    const renderControlsHours = () => {
        return(
            <>
                <div className="flex w-full justify-center">
                    <div>
                        <label className="font-open text-[35px] font-bold text-gray-date-txt">{title}</label>
                    </div>
                    {/* <div className="flex items-center">
                        <CalendarSelect viewChange={viewChange} view={view} title1={text.selectTitle1} title2={text.selectTitle2} href={text.href}></CalendarSelect>
                    </div>                                                      */}
                </div>        
            </>
        )
    }

    const customTheme = {
        themeSystem: "bootstrap",
        bootstrapFontAwesome: true,
        buttonText: {
        today: "Hoy",
        month: "Mes",
        week: "Semana",
        day: "Día",
        },
    };

    const schoolHours = ([
        {            
            title: 'Estrategias para el estudio y la comunicación',
            start: '2023-01-02T07:00:00',
            end: '2023-01-02T09:00:00',
        },
        {            
            title: 'Introducción al Derecho',
            start: '2023-01-02T09:00:00',
            end: '2023-01-02T11:00:00',
        },
        {            
            title: 'Contabilidad I',
            start: '2023-01-02T11:00:00',
            end: '2023-01-02T13:00:00',
        },
        {            
            title: 'Informática I',
            start: '2023-01-03T09:00:00',
            end: '2023-01-03T11:00:00',
        },
        {            
            title: 'Matemáticas',
            start: '2023-01-03T11:00:00',
            end: '2023-01-03T13:00:00',
        },
        {            
            title: 'Introducción a la Administración',
            start: '2023-01-03T13:00:00',
            end: '2023-01-03T15:00:00',
        },
        {            
            title: 'Matemáticas',
            start: '2023-01-04T07:00:00',
            end: '2023-01-04T09:00:00',
        },
        {            
            title: 'Informática I',
            start: '2023-01-04T09:00:00',
            end: '2023-01-04T11:00:00',
        },
        {            
            title: 'Introducción al Derecho',
            start: '2023-01-04T11:00:00',
            end: '2023-01-04T13:00:00',
        },
        {            
            title: 'Contabilidad I',
            start: '2023-01-05T09:00:00',
            end: '2023-01-05T11:00:00',
        },
        {            
            title: 'Introducción a la Administración',
            start: '2023-01-05T11:00:00',
            end: '2023-01-05T13:00:00',            
        },
        {            
            title: 'Estrategias para el estudio y la comunicación',
            start: '2023-01-06T07:00:00',
            end: '2023-01-06T09:00:00',
        },
        {            
            title: 'Introducción a la Administración',
            start: '2023-01-06T09:00:00',
            end: '2023-01-06T11:00:00',
        },
    ]);

    const initialDate = '2023-01-01';
    const duration = {weeks: 1};
    
    return(
        <>            
            <div className="bg-input-white rounded-[10px] w-full  flex justify-center">      
                <div className="my-[40px] w-[95%] flex flex-col">
                    <div className="w-full  flex">                    
                        {renderControlsHours()}
                    </div>          
                    <div id="calSectionStudent">                    
                        <FullCalendar
                            ref={calendarRef}
                            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                            initialView="timeGridWeek"
                            selectable={false}              
                            //themeSystem={customTheme}
                            headerToolbar={{
                                left: "",
                                center: "",
                                right: "",
                            }}
                            firstDay={0}
                            dayHeaderContent={headerFormat}
                            locale={es}              
                            allDaySlot={false}
                            slotLabelFormat={{
                                hour: "numeric",
                                minute: "2-digit",
                                omitZeroMinute: false,
                                meridiem: false,
                            }}                          
                            titleFormat={titleFormat}
                            slotMinTime={"07:00:00"}
                            slotMaxTime={"24:00:00"}
                            events={schoolHours}
                            initialDate={initialDate}
                            duration={duration}                         
                        />
                    </div>
                </div>
            </div>                  
        </>                            
    )            
}

export default StudentsCalendarSchedule;