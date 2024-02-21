import Generic from "@/components/items/buttons/generic";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Delete = ({ action, send = false, title = 'Eliminar', color="", showLabel = true }) => {
    return <Generic action={action} icon={<FontAwesomeIcon icon={faTrashCan} />} send={send} title={title} colors={color} showLabel={showLabel} />
}

export default Delete;