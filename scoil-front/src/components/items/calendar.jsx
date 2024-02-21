import FullCalendar from "@fullcalendar/react";
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import es from '@fullcalendar/core/locales/es';
import plus from '../../assets/icons/plus.svg';
import Line from '../items/line';
import Link from "next/link";
  
import { useState } from "react";

const Calendar = ({link = null, showPlus = false,  id='', margin = 'my-[37px]', height = 'h-[320px]', stylesPrincipal}) => {
    const [date, setDate] = useState('');

    const getDate = (info) => {
        const fechaActual = new Date();
        const mes = fechaActual.toLocaleString('es-ES', { month: 'long' });
        const anio = fechaActual.getFullYear();
        const nuevoMesAnio = `${mes} ${anio}`;
        setDate(nuevoMesAnio);
    };
    
    const handleDateClick = (arg) => {
        console.log('Hiciste Click!');
    };
    
    const customTheme = {
        // Personaliza el tema del calendario
        themeSystem: 'bootstrap',
        bootstrapFontAwesome: true, // Desactiva FontAwesome si no lo estás utilizando
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
        },
        buttonText: {
            today: 'Hoy',
            month: 'Mes',
            week: 'Semana',
            day: 'Día',
        },
        // Agrega más opciones según tus necesidades
    };
    
    const calendarStyles = {
        /* Estilo personalizado para ajustar la separación vertical de los números del calendario */
        '.fc-daygrid-day': {
            padding: '5px', // Ajusta el espacio entre los números del calendario
        },
    };

    return(
        <div className= {` ${stylesPrincipal}`} >

        <div id={id} className={margin + " " + height}>  

            <div className='flex w-[100%] justify-between'>
                <label className="text-section-title text-[20px] font-bold font-open uppercase  ">{date}</label>
                { showPlus && (
                    <Link href={link}>
                        <label className='flex items-center cursor-pointer'> <img src={plus.src} className='w-[23px] h-[20px]'/> </label>
                    </Link>
                )}
            </div>
            <div className='w-[100%] mt-[5px] mb-[15px] z-10'>                        
                <Line colors='bg-txt btn-gray h-[1px] z-10 bg-[#707070] ' width='100%'></Line>
            </div>                          
            <FullCalendar 
                plugins={[ dayGridPlugin, interactionPlugin ]}
                initialView="dayGridMonth"                
                selectable={false}
                dateClick={handleDateClick}
                themeSystem={customTheme}                
                headerToolbar={false}
                locale={es}             
                viewDidMount={getDate}  
                styles={calendarStyles}     
                //select={handleDateClick}      
                    /* locale={locale}
                      plugins={[
                      interactionPlugin,
                      timeGridPlugin
                      ]}
                      firstDay={1}
                      slotMinTime={startHour}
                      slotMaxTime={endHour}
                      slotDuration={defaultDuration}
                      hiddenDays={[0]}
                      height="auto"
                      nowIndicator={false}
                      headerToolbar={{
                      left: '',
                      center: '',
                      right: ''
                      }}
                      initialView='timeGridWeek'
                      editable={false}
                      selectable={false}
                      selectMirror={false}
                      initialEvents={events}
                      allDaySlot={false}
                      dayHeaderFormat={{ weekday: 'long' }}
                      buttonIcons={false}
                      dateClick={dateClick}
                      events={events}
                      eventClick={clickEvent} */
            />      
            </div>
        </div>
    )
}

export default Calendar;