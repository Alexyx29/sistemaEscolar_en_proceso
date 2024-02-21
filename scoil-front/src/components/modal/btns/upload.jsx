import Generic from "@/components/items/buttons/generic";
import { faCloudUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Upload = ({ action, send, title = 'Cargar archivo' }) => {
    return <Generic action={action} icon={<FontAwesomeIcon icon={faCloudUpload} />} send={send} title={title} />
}

export default Upload;