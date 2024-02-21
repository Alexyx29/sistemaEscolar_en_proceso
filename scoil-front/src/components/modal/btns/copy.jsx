import Generic from "@/components/items/buttons/generic";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Copy = ({ action, send, title = 'Copiar' }) => {
    return <Generic action={action} icon={<FontAwesomeIcon icon={faCopy} />} send={send} title={title} />
}

export default Copy;