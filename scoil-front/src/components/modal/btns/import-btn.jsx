import Generic from "@/components/items/buttons/generic";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImportBtn = ({ action, send, title = 'Importar archivo' }) => {
    return <Generic action={action} icon={<FontAwesomeIcon icon={faUpload} />} send={send} title={title} />
}

export default ImportBtn;