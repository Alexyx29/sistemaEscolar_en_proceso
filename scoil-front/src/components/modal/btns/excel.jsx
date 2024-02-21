import Generic from "@/components/items/buttons/generic";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Excel = ({ action, send, title = 'Exportar a Excel' }) => {
    return <Generic action={action} icon={<FontAwesomeIcon icon={faFileExcel} />} send={send} title={title} />
}

export default Excel;