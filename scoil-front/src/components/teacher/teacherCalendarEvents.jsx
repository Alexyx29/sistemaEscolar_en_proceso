import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import es from "@fullcalendar/core/locales/es";
import { useState } from "react";
import Section from "@/components/menu/section";
import { formatDate } from "@fullcalendar/core";
import { getDateMeta } from "@fullcalendar/core/internal";
import arrowIcon from '@/assets/icons/purple-arrow.svg';
import React, { useRef } from 'react';
import CalendarSelect from "../calendarSelect";

const ParentsCalendarEvents = ({}) =>{
    const [type, setType] = useState(1);
    const [title, setTitle] = useState('');
    const [view, setView] = useState(true);
    const [text, setText] = useState({
        selectTitle1: 'Eventos',
        selectTitle2: 'Horario',
        href: '/calendario-padres-horario',
        todayButton: 'HOY'
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

    const renderControlsEvents = () => {
        return(
            <>
                <div className="flex w-full justify-between">
                    <div>
                        <label className="font-open text-[35px] font-bold text-gray-date-txt">{title}</label>
                    </div>
                    <div className="flex items-center">
                        <CalendarSelect viewChange={viewChange} view={view} title1={text.selectTitle1} title2={text.selectTitle2} href={text.href}></CalendarSelect>
                    </div>                                    
                    <div className="flex items-center">
                        <button className="border-purple-button rounded-[11px] border-[1px] w-[42px] h-[42px]" onClick={() => {calendarRef.current.getApi().prev()}}>
                            <img className="pl-[11px]" src={arrowIcon.src}></img>
                        </button>
                        <button className="mx-[20px] border-purple-button bg-gray-date-btn rounded-[11px] border-[1px] w-[42px] h-[42px] text-[12px]" onClick={() => {calendarRef.current.getApi().today()}}>{text.todayButton}</button>          
                        <button className="border-purple-button rounded-[11px] border-[1px] w-[42px] h-[42px]" onClick={() => {calendarRef.current.getApi().next()}}>
                            <img className="rotate-180 pr-[14px]" src={arrowIcon.src}></img>
                        </button>
                    </div>        
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
    
    return(
        <>            
            <div className="bg-input-white rounded-[10px] w-full flex justify-center">      
                <div className="my-[40px] w-[95%] flex flex-col">
                    <div className="w-full flex">     
                        {renderControlsEvents()}                    
                    </div>          
                    <div id="calSection">                    
                        <FullCalendar
                            ref={calendarRef}
                            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                            initialView="dayGridMonth"
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
                            /* slotMinTime={"07:00:00"}
                            slotMaxTime={"19:00:00"} */
                        />
                    </div>
                </div>
            </div>                         
        </>                            
    )            
}

export default ParentsCalendarEvents;