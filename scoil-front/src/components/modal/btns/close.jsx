import Generic from "@/components/items/buttons/generic";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CloseBtn = ({ action, send, title = 'Cerrar' }) => {
    return <Generic action={action} icon={<FontAwesomeIcon icon={faXmark} />} send={send} title={title} />
}

export default CloseBtn;