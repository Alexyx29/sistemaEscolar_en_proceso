import Generic from "@/components/items/buttons/generic";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Save = ({ action, send, title = 'Guardar', color="" }) => {
    return <Generic action={action} icon={<FontAwesomeIcon icon={faCheck} />} send={send} title={title} color={color} />
}

export default Save;