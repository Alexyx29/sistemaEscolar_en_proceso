import Generic from "@/components/items/buttons/generic";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditBtn = ({ action, send, title = 'Editar', color="", showLabel = true }) => {
    return <Generic action={action} icon={<FontAwesomeIcon icon={faEdit} />} send={send} title={title} color={color} showLabel={showLabel} />
}

export default EditBtn;