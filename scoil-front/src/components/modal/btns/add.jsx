import Generic from "@/components/items/buttons/generic";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Add = ({ action, send, title = 'Agregar' }) => {
    return <Generic action={action} icon={<FontAwesomeIcon icon={faPlus} />} send={send} title={title} />
}

export default Add;