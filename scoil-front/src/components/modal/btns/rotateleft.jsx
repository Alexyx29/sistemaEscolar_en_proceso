import Generic from "@/components/items/buttons/generic";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RotateLeft = ({ action, send, title = 'Girar a la izquierda' }) => {
    return <Generic action={action} icon={<FontAwesomeIcon icon={faRotateLeft} />} send={send} title={title} />
}

export default RotateLeft;