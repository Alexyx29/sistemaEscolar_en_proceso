import Generic from "@/components/items/buttons/generic";
import { faFileEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditDocument = ({ action, send = false, title = 'Editar', showLabel = true, colors='' }) => {
    return <Generic action={action} icon={<FontAwesomeIcon icon={faFileEdit} />} send={send} title={title} showLabel={showLabel} colors={colors} />
}

export default EditDocument;