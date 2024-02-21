import Generic from "@/components/items/buttons/generic";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RotateRight = ({ action, send, title = 'Girar a la derecha' }) => {
    return <Generic action={action} icon={<FontAwesomeIcon icon={faRotateRight} />} send={send} title={title}/>
}

export default RotateRight;