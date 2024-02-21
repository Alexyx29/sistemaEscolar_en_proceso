import Materia from "@/components/items/materias";
import Section from "@/components/menu/seccion";
import ScoilLayout from "@/layout/scoil";
import bgScoil from '../assets/background/bg_1.jpg';
import mat from '../assets/icons/transportador.svg';
import lit from '../assets/icons/libro.svg';
import admin from '../assets/icons/engranaje.svg';
import conta from '../assets/icons/calculadora.svg';
import dere from '../assets/icons/balanza.svg';
import info from '../assets/icons/codigo.svg';
import mark from '../assets/icons/colores.svg';
import Pago from "@/components/items/pagos";
import BarraDerecha from "@/components/menu/barraDerecha";
import Trayectoria from "@/components/items/trayectoria";
import Notificaciones from "@/components/menu/notificaciones";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'
import moment from "moment";
import interactionPlugin from '@fullcalendar/interaction';
import { useContext, useEffect, useState } from "react";
import { getTextApi, setItemApi, showModal } from "@/components/useForm";
import LayoutTeacher from "@/layout/layaoutScoilTeacher";


const Calendario = () => {
    const [ canEdit, setCanEdit ] = useState(false);
    const [ events, setEvents ] = useState([]);
    const [ text, setText ] = useState({month: 'Mes', week: 'Semana', day: 'Día', today: 'Hoy', locale: 'es', minDate: 'No puedes agregar eventos de fechas anteriores', btn_success: 'Entendido', title: 'Calendario', titleModal: 'Agregar Evento', titleEdit: 'Editar evento', success: 'Has actualizado el evento'});
    const [startDate, setStartDate ] = useState(moment().startOf('month'))
    const [endDate, setEndDate ] = useState(moment().endOf('month'))
    const prefix = 'modules/calendar';
    const [ disabledDays, setDisabledDays ] = useState();
    const [ fromDate, setFromDate ] = useState('')
    const [ toDate, setToDate] = useState('')
    const today = moment();
    const [ color, setColor ] = useState('#00A3FF');
    const [ title, setTitle] = useState('')
    const query = null;

    useEffect(() => {getEvents()}, [startDate, endDate]);

    const dateClick = () => {}

    const clickEvent = () => {}

    const dragStop = () => {}
    
    const changeView = info => {
        setStartDate(moment(info.start))
        setEndDate(moment(info.end))
    }

    const getEvents = () => {
        setDisabledDays([])
        setEvents([]);
        setFromDate('')
        setToDate('')
        setTitle('');
        setColor('#00A3FF')
        //let search = (query) ? `${system_selected.token}/${query}` : system_selected.token
        getTextApi(`${prefix}/get/events/${startDate.subtract(1, 'month').format('YYYY-MM-DD HH:mm:ss')}/${endDate.add(1, 'month').format('YYYY-MM-DD HH:mm:ss')}`, r => {
            const evs = []
            console.log(r)
            r.events.forEach(i => {
                let newEvent = {
                    id: "event-id-" + i.id,
                    title: i.name,
                    start: new Date(i.date_range_from.replace(' ', 'T').substring(0, 16)),
                    end: new Date(i.date_range_to.replace(' ', 'T').substring(0, 16)),
                    backgroundColor: i.color,
                    extendedProps: {
                        usuarios: i.usuarios,
                        roles: i.roles,
                        campus: i.campus,
                        from: i.date_range_from.replace(' ', 'T').substring(0, 16),
                        to: i.date_range_to.replace(' ', 'T').substring(0, 16),
                        disabled: false
                    },
                }
                evs.push(newEvent);
            })

            const disableds = [];
            r.outDays.forEach(d => {
                if(d.type == 'outday'){
                    disableds.push(d.fecha);
                }

                let newEvent = {
                    id: "event-d.type-" + d.fecha,
                    title: d.name,
                    display: (d.type == 'outday') ? 'list-item' : 'list-item',
                    start: d.fecha,
                    backgroundColor: '#ccc',
                    allDay: true,
                    editable: false,
                    extendedProps:{
                        disabled: true
                    }
                }
                evs.push(newEvent);
            })

            r.holyDays.forEach(d => {
                const startD = moment(d.date_from);
                const endD = moment(d.date_to);
                let lastDay = d.name;
                for(let m = startD; m.isBefore(endD); m.add(1, 'days')){
                    // disableds.push(m.format('YYYY-MM-DD'));
                    lastDay = d.name;
                    let newEvent = {
                        id: "event-disabled-" + m.format('YYYY-MM-DD'),
                        title: d.name,
                        display: 'list-item',
                        start: m.format('YYYY-MM-DD'),
                        backgroundColor: '#ccc',
                        allDay: true,
                        editable: false,
                        extendedProps:{
                            disabled: true
                        }
                    }
                    evs.push(newEvent);
                }

                // disableds.push(endD.format('YYYY-MM-DD'));
                    
                let newEvent = {
                    id: "event-disabled-" + endD.format('YYYY-MM-DD'),
                    title: lastDay,
                    display: 'background',
                    start: endD.format('YYYY-MM-DD'),
                    backgroundColor: '#ccc',
                    allDay: true,
                    editable: false,
                    extendedProps:{
                        disabled: true
                    }
                }
                evs.push(newEvent);
            })

            setDisabledDays(disableds);
            setEvents(evs);
        }, '', err => {

        });
    }

    return(
        <>
            <div className="flex w-[100%] min-h-[100vh] pb-8" style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* Contenido dentro de Layout*/}
                <LayoutTeacher 
                    botonSeleccionado={'calendario'} 
                    widthBody="w-[1295px]" 
                    stylesSelect={'hidden '}
                    stylesInput= {'hidden '}
                >
                    <>
                        <div className="flex grow flex-col rounded-[15px]  gap-[30px] min-w-min w-[48%]  bg-white" id="calendario">
                            {/* Sección de materias*/}
                            <Section colors={''} title='' showPlus={false} bg="bg-white">
                                <div className="bg-white rounded-[15px] h-[80vh] w-full relative py-7">
                                    <FullCalendar
                                        locale={text.locale}
                                        plugins={[
                                            interactionPlugin,
                                            dayGridPlugin,
                                            timeGridPlugin
                                        ]}
                                        headerToolbar={{
                                            left: 'prev next today',
                                            center: 'title',
                                            right: 'dayGridMonth timeGridWeek timeGridDay'
                                        }}
                                        buttonText={{
                                            month: text.month,
                                            week: text.week,
                                            day: text.day,
                                            today: text.today,
                                            allDayText: 'Todo el día'
                                        }}
                                        buttonIcons={{
                                            prev: 'chevron-left',
                                            next: 'chevron-right',
                                        }}
                                        firstDay={1}
                                        height={'auto'}
                                        nowIndicator={true}
                                        initialView='dayGridMonth'
                                        editable={canEdit}
                                        selectable={false}
                                        selectMirror={false}
                                        initialEvents={events}
                                        allDaySlot={true}
                                        dayHeaderFormat={{ weekday: 'short' }}
                                        dateClick={dateClick}
                                        events={events}
                                        eventClick={clickEvent}
                                        datesSet={changeView}
                                        eventDrop={dragStop}
                                        eventResize={dragStop}
                                    />
                                </div>   
                            </Section>                   
                        </div>                                      
                    </>
                </LayoutTeacher>                                                    
            </div>            
        </>
    );
}

export default  Calendario;