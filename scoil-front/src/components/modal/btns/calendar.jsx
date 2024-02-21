import Generic from "@/components/items/buttons/generic";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Calendar = ({ action, send, title = 'Calendario' }) => {
    return <Generic action={action} icon={<FontAwesomeIcon icon={faCalendar} />} send={send} title={title} />
}

export default Calendar;