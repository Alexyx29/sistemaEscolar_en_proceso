import Generic from "@/components/items/buttons/generic";
import { faEdit, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Print = ({ action, send, title = 'Imprimir' }) => {
    return <Generic action={action} icon={<FontAwesomeIcon icon={faPrint} />} send={send} title={title} />
}

export default Print;